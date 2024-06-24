import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Link from "next/link";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            This Project is a digital menu for restaurants. It is a web
            application that allows customers to view the menu and order food
            from their table. The application is designed to be used in
            restaurants, cafes, and bars. It is a simple and easy-to-use
            application that provides a convenient way for customers to order
            food.
          </p>
          <p>Developed By Sandesh & Sagar</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-4 flex items-center justify-center gap-4 ">
          <Link href="https://www.instagram.com/sandesh.stha_/" target="_">
            <FaInstagram size={30} color="#E1306C" />
          </Link>
          <Link href="https://github.com/sthaSandesh/Digital-Menu" target="_">
            <FaGithub size={30} color="gray" />
          </Link>
          <Link
            href="https://discord.com/channels/711447117872234586/713323976897855498"
            target="_"
          >
            <FaDiscord size={30} color="#5865F2" />
          </Link>
        </div>
      </section>
    </>
  );
}

