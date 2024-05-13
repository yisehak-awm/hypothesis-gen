import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { CircleDot, Link2, Plus, Waypoints } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../@/components/ui/dialog";
import { Input } from "../@/components/ui/input";
import { Label } from "../@/components/ui/label";
import { Button } from "~/@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "../@/components/ui/radio-group";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../@/components/ui/carousel";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Hypothesis Generation" },
    { name: "description", content: "Rejuve.bio hypothesis generation" },
  ];
};

const hypotheses: HypothesisSummaryData[] = [
  {
    id: 1,
    indel: "c.56A>T",
    trait: "Obesity",
    cell: "Cardiomyocytes",
    network: "Custom",
    created_on: "3 days ago",
  },
  {
    id: 2,
    indel: "g.1023G>C",
    trait: "Eye color",
    cell: "Melanocytes",
    network: "Skin co-expression",
    created_on: "12 hours ago",
  },
  {
    id: 3,
    indel: "g.2345_2346insAT",
    trait: "Blood type",
    cell: "Hepatocytes",
    network: "Custom",
    created_on: "Last week",
  },
];

const HypothesisSummaryCard = ({ data }: { data: HypothesisSummaryData }) => (
  <Link to={`/hypothesis/${data.id}`} className="block border rounded p-4">
    <h2 className="font-bold mb-4 whitespace-nowrap">
      {data.indel} <Link2 className="inline mx-2" /> {data.trait}
    </h2>
    <span className="rounded text-sm bg-blue-200 p-1 px-2 me-2 mb-2 whitespace-nowrap">
      <CircleDot className="inline" size={16} /> {data.cell}
    </span>
    <span className="rounded text-sm bg-purple-200 p-1 px-2 me-2 mb-2 whitespace-nowrap">
      <Waypoints className="inline" size={16} /> {data.network}
    </span>
    <p className="text-slate-500 mt-4">Created {data.created_on}</p>
  </Link>
);

export default function Index() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <header className="mb-2 p-4 px-12">
        <h1 className="text-2xl font-bold">Hypothesis Generation</h1>
        <p className=" text-slate-500">You have 3 generated hypotheses</p>
      </header>
      <ul className="flex px-12">
        {hypotheses.map((h, i) => (
          <li key={i} className="me-4">
            <HypothesisSummaryCard data={h} />
          </li>
        ))}
        <li key="add">
          <Dialog>
            <DialogTrigger className="h-full">
              <button className="flex justify-center items-center border border-dashed rounded p-4 w-48 h-full text-slate-500">
                <Plus />
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogDescription>
                  Step {current}/{count}
                </DialogDescription>
                <DialogTitle>
                  {
                    {
                      "1": "First",
                      "2": "Second",
                      "3": "Third",
                    }[current]
                  }{" "}
                  form step title
                </DialogTitle>
                <Carousel
                  setApi={setApi}
                  opts={{ watchDrag: false, duration: 20 }}
                >
                  <CarouselContent>
                    <CarouselItem className="ml-1 mt-4">
                      <Label className="block w-full max-w-sm pb-4">
                        SNV or indel
                        <Input
                          className="mt-2"
                          placeholder="Ex. g.2345_2346insAT or g.1023G>C or c.56A>T"
                        />
                      </Label>
                      <Label className="block w-full max-w-sm pb-4">
                        Phenotype / Trait
                        <Input className="mt-2" placeholder="Ex. Obesity" />
                      </Label>
                      <Label className="block w-full max-w-sm pb-4">
                        Tissue / Cell type
                        <Input className="mt-2" placeholder="Ex. Hepatocytes" />
                      </Label>
                    </CarouselItem>
                    <CarouselItem className="ml-1 mt-4">
                      <Label className="block w-full max-w-sm pb-6">
                        Co-expression network / data
                        <RadioGroup className="mt-2" defaultValue="r1">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="r1" />
                            <Label className="font-normal">
                              Upload new file
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="r2" />
                            <Label className="font-normal">
                              Use existing co-expression network for [tissue
                              name]
                            </Label>
                          </div>
                        </RadioGroup>
                      </Label>
                      <Label className="block w-full max-w-sm">
                        Upload file
                        <Input className="mt-2" type="file" />
                        <span className="text-slate-500 text-sm">
                          * Should be PxP matrix where p is the number of genes
                        </span>
                      </Label>
                    </CarouselItem>
                    <CarouselItem className="ml-1 mt-4">
                      <h1>Progress</h1>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </DialogHeader>
              <DialogFooter className="justify-end">
                <Button
                  type="button"
                  variant="secondary"
                  className={api?.canScrollPrev() ? "visible" : "hidden"}
                  onClick={() => api?.scrollPrev()}
                >
                  Back
                </Button>
                <Button
                  type="button"
                  className={api?.canScrollNext() ? "visible" : "hidden"}
                  onClick={() => api?.scrollNext()}
                >
                  Next
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </li>
      </ul>
    </>
  );
}
