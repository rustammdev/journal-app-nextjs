import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ChartNoAxesGantt, FolderOpen, PenBox } from "lucide-react";

function Header() {
  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Reflext logo"
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
          ></Image>
        </Link>

        <div
          className="flex justify-center items-center gap-4
        "
        >
          {/* Agar ro'yxatdan o'tgan bo'lsa */}
          <SignedIn>
            <Link href={"/dashboard#collection"}>
              <Button variant={"outline"} className="flex items-center gap-2">
                <FolderOpen size={18} />
                <span className="hidden md:inline">Collection</span>
              </Button>
            </Link>
          </SignedIn>

          <Link href={"/journal/write"}>
            <Button variant={"journal"} className="flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline">Write new</span>
            </Button>
          </Link>

          {/* Agar ro'yxatdan o'tmagan bo'lsa */}
          <SignedOut>
            <SignInButton forceRedirectUrl={"/dashboard"}>
              <Button variant={"outline"}>Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            {/* avatar rasmini yirikroq qilish */}
            <UserButton
              appearance={{ elements: { avatarBox: "h-10 w-10" } }}
            ></UserButton>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;
