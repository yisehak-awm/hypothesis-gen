import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Link2 } from "lucide-react";
import Tabs from "~/components/tabs";

export const meta: MetaFunction = () => {
  return [
    { title: "c.56A>T - obesity" },
    { name: "description", content: "Rejuve.bio hypothesis generation" },
  ];
};

export default function Index() {
  return (
    <>
      <header className="pt-4 px-12">
        <h1 className="text-xl font-bold">
          {"c.56A>T"} <Link2 className="inline" /> obesity
        </h1>
      </header>
      <Tabs
        tabs={[
          { label: "Parameters", href: "/hypothesis/1/parameters" },
          { label: "Results", href: "/hypothesis/1/results" },
        ]}
      />
      <Outlet />
    </>
  );
}
