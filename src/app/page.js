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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            minima odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste
            quos suscipit tempora? Aperiam esse fugiat inventore laboriosam
            officiis quam rem!
          </p>
          <p>
            At consectetur delectus ducimus est facere iure molestias obcaecati
            quaerat vitae voluptate? Aspernatur dolor explicabo iste minus
            molestiae pariatur provident quibusdam saepe?
          </p>
          <p>
            Laborum molestias neque nulla obcaecati odio quia quod reprehenderit
            sit vitae voluptates? Eos, tenetur.
          </p>
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

