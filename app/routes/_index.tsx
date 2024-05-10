import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Hypothesis Generation" },
    { name: "description", content: "Rejuve.bio hypothesis generation" },
  ];
};

export default function Index() {
  return (
    <>
      <header className="mb-4 p-4 px-12">
        <h1 className="text-2xl font-bold">Hypothesis Generation</h1>
        <p className=" text-slate-500">You have 3 generated hypotheses</p>
      </header>
      <div className="px-12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <p></p>
    </>
  );
}
