import { Download, FileText } from "lucide-react";

export default () => {
  return (
    <div className="mt-4 pt-4 px-12">
      <dl>
        <dt className="font-bold">SNV or indel</dt>
        <dd className="mb-4">{"c.56A>T"}</dd>

        <dt className="font-bold">Phenotype / Trait</dt>
        <dd className="mb-4">Obesity</dd>

        <dt className="font-bold">Tissue / Cell type</dt>
        <dd className="mb-4">Cardiomyocytes</dd>

        <dt className="font-bold mb-2">Co-expression network / data </dt>
        <dd className="mb-4">
          <div className="p-4 rounded border w-fit">
            <FileText className="inline me-2" /> Co-expression data
            <a href="#" className="ml-16">
              <Download className="inline" />
            </a>
          </div>
        </dd>
      </dl>
    </div>
  );
};
