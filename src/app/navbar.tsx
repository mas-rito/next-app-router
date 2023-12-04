import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex w-full bg-slate-600 text-white py-4 px-10 justify-between fixed top-0 left-0 z-20">
      <h1>Navbar</h1>
      <div className="flex gap-4 items-center">
        <ul className="flex gap-4">
          <Link href={"/"}>
            <li className={`cursor-pointer ${pathname === "/" && "font-bold"}`}>
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li className={`cursor-pointer ${pathname === "/" && "font-bold"}`}>
              About
            </li>
          </Link>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <button
          className="bg-white text-black font-semibold px-4 py-2 rounded-md"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
