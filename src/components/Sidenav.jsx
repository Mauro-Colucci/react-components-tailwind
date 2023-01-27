import { useState } from "react";
import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsReverseLayoutTextSidebarReverse,
  BsFillImageFill,
  BsPerson,
} from "react-icons/bs";
import {
  AiFillEnvironment,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import Image from "../assets/lastCovid.jpg";

const Sidenav = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menu = [
    { title: "Dashboard" },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", spacing: true, icon: <BsFillImageFill /> },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Profile", spacing: true, icon: <BsPerson /> },
    { title: "Settings", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];
  return (
    <nav
      className={`h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 relative object-cover bg-center z-50 shadow-[5px_0px_18px_rgba(0,0,0,0.3)] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[#11101d4d] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:z-[-1] after:opacity-70 after:bg-gradient-to-b after:from-[#282828] after:to-[#11111166] after:bg-[length:150%_150%]`}
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <BsArrowLeftShort
        className={`bg-white text-slate-700 text-3xl rounded-full absolute -right-3 top-9 border border-slate-700 cursor-pointer duration-500 ${
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
        } relative`}
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
              } relative`}
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
                    className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-500 rounded-md relative"
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
