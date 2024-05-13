import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { CircleDot, Link2, Plus, Waypoints } from "lucide-react";

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
          <button className="flex justify-center items-center border border-dashed rounded p-4 w-48 h-full text-slate-500">
            <Plus />
          </button>
        </li>
      </ul>
    </>
  );
}
