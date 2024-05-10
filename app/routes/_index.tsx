import type { MetaFunction } from "@remix-run/node";
import logo from "/logo.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Hypothesis Generation" },
    { name: "description", content: "Rejuve.bio hypothesis generation" },
  ];
};

export default function Index() {
  return (
    <div className="grid wrapper w-full h-screen">
      <div className="sidebar bg-slate-200 p-4">
        <img src={logo} className="h-16" alt="Rejuve.bio logo" />
      </div>
      <div className="content overflow-y-auto p-4 px-12">
        <h1 className="text-2xl font-bold">Hypothesis generation</h1>
      </div>
    </div>
  );
}
