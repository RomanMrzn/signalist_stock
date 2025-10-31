import Image from "next/image";
import Link from "next/link";
import NavItems from "./navItems";
import Userdropdown from "./userdropdown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={140}
            height={32}
          ></Image>
        </Link>
        <nav className="hidden sm:block"><NavItems/></nav>
        <Userdropdown/>
      </div>
    </header>
  );
};

export default Header;
