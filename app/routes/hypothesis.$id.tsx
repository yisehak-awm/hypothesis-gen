import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { ArrowBigLeft, ArrowLeft, Link2 } from "lucide-react";
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
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen">
      <header className="pt-4 px-12">
        <h1 className="text-xl font-bold">
          <a className="me-2 hover:cursor-pointer" onClick={() => navigate(-1)}>
            <ArrowLeft className="inline me-2" />
          </a>
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
