import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Link2 } from "lucide-react";
import Tabs from "~/components/tabs";

export const meta: MetaFunction = () => {
  return [
    { title: "c.56A>T - obesity" },
    { name: "description", content: "Rejuve.bio hypothesis generation" },
  ];
};

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  if (url.pathname === `/hypothesis/${params.id}`)
    throw redirect(`/hypothesis/${params.id}/parameters`);
  return { id: params.id };
};

export default function Index() {
  const { id } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col h-screen">
      <header className="pt-4 px-12">
        <h1 className="text-xl font-bold">
          {"c.56A>T"} <Link2 className="inline" /> obesity
        </h1>
      </header>
      <Tabs
        tabs={[
          { label: "Parameters", href: `/hypothesis/${id}/parameters` },
          { label: "Results", href: `/hypothesis/${id}/results` },
        ]}
      />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
