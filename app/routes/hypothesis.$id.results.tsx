import { useMemo, useState } from "react";
import he from "he";
import Graph from "~/components/graph";

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

  return <Graph elements={elements} />;
};
