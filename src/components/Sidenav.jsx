import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineFileText } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

const Sidenav = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menu = [
    { title: "Dashboard" },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", spacing: true },
    {
      title: "Projects",
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics" },
    { title: "Inbox" },
    { title: "Profile", spacing: true },
    { title: "Settings" },
    { title: "Logout" },
  ];
  return (
    <nav
      className={`bg-slate-700 h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-slate-700 text-3xl rounded-full absolute -right-3 top-9 border border-slate-700 cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <AiFillEnvironment
          className={`bg-amber-300 text-4xl rounded cursor-pointer mr-2 duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-2xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          Tailwind
        </h1>
      </div>
      <div
        className={`flex items-center rounded-md bg-slate-500 mt-6 py-2 ${
          open ? "px-4" : "px-2.5"
        } `}
      >
        <BsSearch className={`text-white cursor-pointer ${open && "mr-2"}`} />
        <input
          type="search"
          placeholder="Search"
          className={`text-base bg-transparent w-full text-white focus:outline-none ${
            !open && "hidden"
          }`}
        />
      </div>
      <ul className="pt-2">
        {Menu.map((item) => (
          <>
            <li
              key={item.title}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-500 rounded-md ${
                item.spacing ? "mt-9" : "mt-2"
              }`}
            >
              <span className="text-2xl">
                {item.icon || <RiDashboardFill />}
              </span>
              <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "opacity-0"
                }`}
              >
                {item.title}
              </span>
              {item.submenu && open && (
                <BsChevronDown
                  className={`${submenuOpen && "rotate-180"}`}
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                />
              )}
            </li>
            {item.submenu && submenuOpen && open && (
              <ul>
                {item.submenuItems.map((submenuItem) => (
                  <li
                    key={submenuItem.title}
                    className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-500 rounded-md"
                  >
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};
export default Sidenav;
