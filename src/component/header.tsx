import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/images/logo.jpeg.png";

export default function Header() {
    return (
      <header>
        <nav className="header">
         
         
          <ul className="header-button">
          <Image src={Logo} alt="Logo" height={20} width={75} className="cursor-pointer"/>
        
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="about-us">About us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }