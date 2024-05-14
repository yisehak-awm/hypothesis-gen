import { Loader } from "lucide-react";

const Stepper = ({
  steps,
  current,
  vertical = false,
}: {
  steps: string[];
  current: number;
  vertical?: boolean;
}) => {
  return (
    <ol className={vertical ? "vertical-stepper" : "stepper"}>
      {steps.map((a, i) => (
        <li className={i <= current ? "active" : ""}>
          <div>
            {a}
            {vertical && i == current && (
              <Loader className="ml-2 inline animate-spin" />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
