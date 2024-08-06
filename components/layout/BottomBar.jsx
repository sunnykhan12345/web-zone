
'use client'
import { usePathname } from "next/navigation";
import { CiHome } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { FcBusinessman } from "react-icons/fc";
import Link from "next/link";

// Mock data
const sidebarlinks = [
  {
    id: 1,
    icon: <CiHome />,
    route: "/",
    label: "Home",
  },
  {
    id: 2,
    icon: <GrGallery />,
    route: "/create-post",
    label: "Create Post",
  },
  {
    id: 3,
    icon: <GoPeople />,
    route: "/people",
    label: "People",
  },
  {
    id: 4,
    icon: <FcBusinessman />,
    route: "/edit-profile",
    label: "Edit Profile",
  },
];

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex bottom-0 z-10 w-full text-white bg-dark-1 px-6 py-3 items-center justify-between md:hidden">
      {sidebarlinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            key={link.id}
            href={link.route}
            className={`flex gap-2 items-center rounded-lg py-2 px-4 ${isActive ? "bg-purple-500" : ""}`}
          >
            {link.icon} <p className="text-sm font-medium max-sm:hidden">{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
