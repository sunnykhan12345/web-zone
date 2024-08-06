// 'use client'
// import { useParams } from "next/navigation";
// import { CiHome } from "react-icons/ci";
// import { GrGallery } from "react-icons/gr";
// import { GoPeople } from "react-icons/go";
// import { FcBusinessman } from "react-icons/fc";
// import Link from "next/link";

// // mockdata 
// const  sidebarlinks = [
//     {
//         id:1,
//         icon:<CiHome />,
//          route:"/",
//         lebel:"Home",
       
//     },
//     {
//         id:2,
//         icon:<GrGallery />,
//          route:"/create-post",
//         lebel:"Create Post",
       
//     },
//     {
//         id:3,
//         icon:<GoPeople />,
//          route:"/people",
//         lebel:"People",
       
//     },
//     {
//         id:4,
//         icon:<FcBusinessman />,
//          route:"/edit-profile",
//         lebel:"Edit Profile",
       
//     }
// ]

// const Menu = () => {
//     const pathname = useParams();
//   return (
//     <div className="flex flex-col gap-2 text-white">
//       {
//            sidebarlinks.map((link) =>{
//                const isActive = pathname === link.route

//                return(
//                 <Link
//                 key={link.lebel}
//                  href={link.route}
//                  className={`flex gap-4 justify-start rounded-lg py-2 px-4
//                     ${isActive ? "bg-purple-500" : ""}`}
//                  >
//                    {link.icon} <p>{link.lebel}</p>
//                 </Link>
//                )
//            })
//       }
//     </div>
//   )
// }

// export default Menu

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

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 text-white">
      {sidebarlinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            key={link.id}
            href={link.route}
            className={`flex gap-4 justify-start rounded-lg py-2 px-4 ${isActive ? "bg-purple-500" : ""}`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
