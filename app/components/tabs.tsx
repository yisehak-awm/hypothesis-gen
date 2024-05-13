import { NavLink } from "@remix-run/react";

interface TabItem {
  label: string;
  href: string;
}

const Tabs = ({ tabs }: { tabs: TabItem[] }) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
      <ul className="flex flex-wrap -mb-px px-12">
        {tabs.map((t) => (
          <li className="me-2" key={t.href}>
            <NavLink
              to={t.href}
              className={({ isActive }) =>
                `inline-block p-2 border-b-2 ${
                  isActive
                    ? "font-bold text-black  border-black active"
                    : "border-transparent"
                }`
              }
            >
              {t.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
