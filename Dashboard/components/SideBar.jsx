import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import {FaFootballBall, FaClipboardList, FaRegChartBar} from 'react-icons/fa';
import {BsFlagFill} from 'react-icons/bs';
import { BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();
    function logout() {
      localStorage.removeItem("token")
      router.push("/login")
    }
  return (
    <div ref={ref} className=" fixed w-56 h-full bg-white shadow-sm w-1/4">
      <div className="flex justify-center mt-6 mb-14">
        <Link href={"/dashboard"}>
            <div>
              <Image alt="Card" src="/team-logo.png" width={70} height={50} />
              {/* <p className="text-gray-700 text-3xl mb-16 font-bold">FC BAZEL</p> */}
            </div>
        </Link>
      </div>
      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/dashboard"
                ? "bg-brand bg-darkBrand"
                : "text-dark hover:bg-brand hover:text-dark"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>

        <Link href="/teams">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/teams"
                ? "bg-brand bg-darkBrand"
                : "text-dark hover:bg-brand hover:text-dark"
            }`}
          >
            <div className="mr-2">
              <BsFlagFill className="h-5 w-5" />
            </div>
            <div>
              <p>List of Teams</p>
            </div>
          </div>
        </Link>

        <Link href="/players">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/players"
                ? "bg-brand bg-darkBrand"
                : "text-dark hover:bg-brand hover:text-dark"
            }`}
          >
            <div className="mr-2">
              <FaFootballBall className="h-5 w-5" />
            </div>
            <div>
              <p>List of Players</p>
            </div>
          </div>
        </Link>



        <Link href="/staff">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/staff"
                ? "bg-brand bg-darkBrand"
                : "text-dark hover:bg-brand hover:text-dark"
            }`}
          >
            <div className="mr-2">
              <FaClipboardList className="h-5 w-5" />
            </div>
            <div>
              <p>List of Staff</p>
            </div>
          </div>
        </Link>


        <Link href="/stats">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/stats"
                ? "bg-brand bg-darkBrand"
                : "text-dark hover:bg-brand hover:text-dark"
            }`}
          >
            <div className="mr-2">
              <FaRegChartBar className="h-5 w-5" />
            </div>
            <div>
              <p>Stats</p>
            </div>
          </div>
        </Link>

        <Link href="/login">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/login"
                ? "bg-brand bg-darkBrand"
                : "text-dark hover:bg-brand hover:text-dark"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p><button onClick={logout}>Log out</button></p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
