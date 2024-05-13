import { useMemo, useState } from "react";
import he from "he";
import Graph from "~/components/graph";
import { Button } from "../@/components/ui/button";
import { ArrowLeftRight, Maximize } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../@/components/ui/sheet";
import { Input } from "../@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../@/components/ui/pagination";

const DATA = {
  objects: [
    {
      _gvid: 0,
      name: "n59c3461bb0314261aac777951822d116",
      label: "natnum(s(s(0)))",
    },
    {
      _gvid: 1,
      name: "nc616392e619bd31992d0c280e25d04b6",
      label: "natnum(_24094)=&gt;natnum(s(_24094))",
    },
    {
      _gvid: 2,
      name: "nc2ef889ce27470a1c0aeeb45737a5cfd",
      label: "natnum(s(0))",
    },
    {
      _gvid: 3,
      name: "nf6dc22a3d2768555904d0b5e08cc944c",
      label: "natnum(_24168)=&gt;natnum(s(_24168))",
    },
    {
      _gvid: 4,
      name: "nca501ad373fcc1a216a4dd5532df7758",
      label: "natnum(0)",
    },
    {
      _gvid: 5,
      name: "nb93f0789b7150fdd0fb61e8742f2ec90",
      label: "true=&gt;natnum(0)",
    },
    {
      _gvid: 6,
      name: "nb326b5062b2f0e69046810717534cb09",
      label: "true",
    },
    {
      _gvid: 7,
      name: "n0c139d89dafd6af21f77d0c4bef86a89",
      label: "true",
    },
  ],
  edges: [
    {
      _gvid: 0,
      tail: 0,
      head: 1,
    },
    {
      _gvid: 1,
      tail: 1,
      head: 2,
    },
    {
      _gvid: 2,
      tail: 2,
      head: 3,
    },
    {
      _gvid: 3,
      tail: 3,
      head: 4,
    },
    {
      _gvid: 4,
      tail: 4,
      head: 5,
    },
    {
      _gvid: 5,
      tail: 5,
      head: 6,
    },
    {
      _gvid: 6,
      tail: 6,
      head: 7,
    },
  ],
};

const GO_TERMS = [
  {
    id: "GO:0006915",
    name: "apoptotic process",
    p: 0.73,
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "GO:0008150",
    name: "biological_process",
    p: 0.56,
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "GO:0003674",
    name: "molecular_function",
    p: 0.49,
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "GO:0006915",
    name: "apoptotic process",
    p: 0.73,
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "GO:0008150",
    name: "biological_process",
    p: 0.56,
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "GO:0003674",
    name: "molecular_function",
    p: 0.49,
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "GO:0006915",
    name: "apoptotic process",
    p: 0.73,
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "GO:0008150",
    name: "biological_process",
    p: 0.56,
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "GO:0003674",
    name: "molecular_function",
    p: 0.49,
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default () => {
  const [data, setData] = useState<any>(DATA);

  const elements = useMemo(() => {
    if (!data) return {};
    return {
      nodes: data.objects.map((o: any) => ({
        data: {
          id: "n" + o._gvid.toString(),
          name: o.name,
          label: he.decode(o.label),
        },
      })),
      edges: data.edges.map((e: any) => ({
        data: {
          id: e._gvid.toString(),
          source: "n" + e.tail.toString(),
          target: "n" + e.head.toString(),
        },
      })),
    };
  }, [data]);

  const DrawerContent = (
    <>
      <div className="p-6 px-12 pt-0">
        <Input placeholder="Search" />
      </div>
      <Table className="border-y mb-8">
        <TableHeader>
          <TableRow>
            <TableHead className="whitespace-nowrap">GO ID</TableHead>
            <TableHead className="whitespace-nowrap">Name</TableHead>
            <TableHead className="whitespace-nowrap">p-value</TableHead>
            <TableHead className="whitespace-nowrap">Reason</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {GO_TERMS.map((a, i) => (
            <TableRow
              className={
                i == 1
                  ? "bg-black text-white hover:bg-black "
                  : "hover:cursor-pointer"
              }
            >
              <TableCell className="whitespace-nowrap">{a.id}</TableCell>
              <TableCell className="whitespace-nowrap">{a.name}</TableCell>
              <TableCell className="whitespace-nowrap">{a.p}</TableCell>
              <TableCell>{a.reason}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );

  return (
    <>
      <div className="border rounded p-4 px-6 absolute m-8 mx-12 bg-white z-10 max-w-md  overflow-y-auto">
        <h3 className="font-bold">biological_process (GO:0008150)</h3>
        <p className="text-slate-500 mb-2">p-value: 0.56</p>
        <Sheet>
          <SheetTrigger>
            <Button variant="outline" className="me-2">
              <ArrowLeftRight size={16} className="me-2" /> Select another GO
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-0 w-5/12 border-0 overflow-y-auto py-4 pb-12"
          >
            <SheetHeader className="p-4">
              <SheetTitle></SheetTitle>
            </SheetHeader>
            {DrawerContent}
          </SheetContent>
        </Sheet>
        <Button>
          <Maximize size={16} className="me-2" /> Show explanation
        </Button>
      </div>
      <Graph elements={elements} />
    </>
  );
};
