import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-red-600 font-semibold text-2xl" href="">
        SanKoT
      </Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href="">Home</Link>
        <Link href="">Menu</Link>
        <Link href="">Contact</Link>
        <Link href="">
          <Button className="rounded-full px-6 py-2">Login</Button>
        </Link>
      </nav>
    </header>
  );
};
