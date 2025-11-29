'use client';

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="group sticky inset-x-0 top-0 z-50 w-full bg-white shadow-sm px-6 py-3 flex items-center">
      <Link href="/" className="flex items-center gap-3">
        <Image
            className="h-14 w-auto self-end"
            src="/images/Logo-Bloom.png"
            alt="Logo"
            width={400}
            height={100}
            priority
        />
      </Link>
    </nav>
  );
}