import React from "react";
// import NavLink from "../atom/navLink";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavTitles } from "../../data";

function NavLinkList({ sticky }) {
  const router = useRouter();
  return (
    <div className="px-5">
      <ul className="hidden gap-6 md:flex md:flex-row ">
        {NavTitles &&
          NavTitles.map((NavTitle) => {
            return (
              <div key={NavTitle.id} className="menu-item">
<<<<<<< HEAD
                <Link
                  href={NavTitle.href}
                  className={`${
                    router.asPath == NavTitle.href
                      ? `${sticky ? "text-primary " : "text-primary-500"}`
                      : sticky
                      ? "text-gray-500"
                      : "text-white-500"
                  } text-base font-sans hover:text-secondary-500`}
                >
                  {NavTitle.name}
                </Link>
                {NavTitle?.sub_menu && NavTitle.sub_menu.length > 0 && (
                  <ul className="dropdown-menu pt-3">
                    {console.log({ subMenu: NavTitle.sub_menu })}
                    {NavTitle?.sub_menu &&
                      NavTitle.sub_menu.length > 0 &&
                      NavTitle.sub_menu.map((item) => (
                        <li key={item.id} className="dropdown-menu-item">
                          <Link href="/fromceo">{item.sub_name}</Link>
                        </li>
                      ))}
                  </ul>
                )}
=======
              <Link
                href={NavTitle.href}
                className={`${
                  router.asPath == NavTitle.href
                    ? `${
                        sticky
                          ? "border-b-4 border-secondary-500 text-primary"
                          : "text-primary-500 border-b-4 border-secondary-500"
                      }`
                    : sticky
                    ? "text-gray-500"
                    : "text-white-500"
                } text-base font-sans hover:border-b-4 hover:border-secondary-500 hover:text-primary-500 `}
              >
                {NavTitle.name}
              </Link>
              <ul className="dropdown-menu">
                {console.log({subMenu: NavTitle.sub_menu})}
                {NavTitle?.sub_menu && NavTitle.sub_menu.length > 0 && NavTitle.sub_menu.map(item => (
                  <li key={item.id}>
                    <Link href="/" >
                      {item.sub_name}
                    </Link>
                </li>
                ))}
                
              </ul>
>>>>>>> 5d0b71a163bdf87111ed0823a9672b37bbd9ffb2
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default NavLinkList;
