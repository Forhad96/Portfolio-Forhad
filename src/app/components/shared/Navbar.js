import Link from "next/link";

export const navLinks = (
  <>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/about">About</Link>
    </li>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-oswald">ForahdHossain</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;