import Image from "next/image";
import logo from "@/components/offchlogo.png";
import Link from "next/link";

export default function Header() {
    return (
        <div className="p-4 flex justify-between items-center bg-slate-300">
            <div className="flex items-center">
                <Link href="/">
                        <Image src={logo} width={100} height={100} alt="logo of page" />
                </Link>
            </div>
            <div>
                <ul className="flex gap-5">
                    <li>
                        <Link href="/glary">
                        galary
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                        about use
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                        test
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                        test

                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                        test

                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
