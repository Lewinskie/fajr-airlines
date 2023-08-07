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
          NavTitles.map((NavTitle, i) => {
            return (
              <Link
                key={i}
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
            );
          })}
      </ul>
    </div>
  );
}

export default NavLinkList;
