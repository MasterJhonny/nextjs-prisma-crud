import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-slate-900 fixed top-0 left-0 right-0 shadow-sm shadow-slate-500 z-10">
      <nav className=" container mx-auto flex justify-between px-4">
        <Link href="/">
          <h3 className="font-bold py-3">Next CRUD</h3>
        </Link>
        <ul className="flex w-60 justify-around">
          <Link href="new" className="hover:bg-slate-700 py-3 px-8">
            <li>New Task</li>
          </Link>
          <Link href="about" className="hover:bg-slate-700 py-3 px-8">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
