import { FaCircleChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br />
          is better
          <br />
          with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <Button className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-5 rounded-full">
            Order now
            <FaCircleChevronRight />
          </Button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <FaCircleChevronRight />
          </button>
        </div>
      </div>

      <div className="relative hidden md:block">
        <Image
          src={"/Burger.jpg"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"food"}
        />
      </div>
    </section>
  );
}
