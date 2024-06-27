import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggler";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <header className="fixed w-full z-20 top-0 bg-gradient-to-t from gray-200/0 via gray-900/25 to gray-900 flex items-center justify-between px-4">
      <Link href="/">
        <Image
          src="https://famnetworks.com/wp-content/themes/theme/images/disney.png"
          alt="Disney"
          width={120}
          height={100}
          className="cursor-pointer dark:invert"
        />
      </Link>
      <div className="flex items-center justify-center gap-4">
        {/* GenreDropdown */}
        <SearchInput />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
