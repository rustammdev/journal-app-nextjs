import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative container mx-auto px-4 pt-16 pb-16">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 gradient-title ">
          Your spec to reflect. <br />
          Your Story to tell.
        </h1>
        <p className="text-lg md:text-xl text-orange-800 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          consequatur nostrum similique saepe, Pariatur, facilis ut.
        </p>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent pointer-events-none z-10" />
          <div className="bg-white rounded-2xl p-4 max-w-full mx-auto">
            <div className="border-b border-orange-100 pb-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span>Today's entry</span>
              </div>
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-orange-200"></div>
                <div className="h-3 w-3 rounded-full bg-orange-300"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              </div>
            </div>
            <div className="space-y-2">
              <h3>daily prompts</h3>
              <Skeleton className="h-4 bg-orange-200 w-3/2 rounded-none" />
              <Skeleton className="h-4 bg-orange-100 w-full rounded-none" />
              <Skeleton className="h-4 bg-orange-200 w-3/4 rounded-none" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Link href={"/dashboard"}>
            <Button
              variant={"journal"}
              size={"lg"}
              className="px-8 rounded-full flex items-center gap-2 font-bold"
            >
              Start Writting{" "}
              <ChevronRightIcon
                className="h-4 w-4
              "
              />
            </Button>
          </Link>
          <Link href={"#features"}>
            <Button
              variant={"outline"}
              size={"lg"}
              className="px-8 rounded-full border-orange-600 text-orange-600 hover:bg-orange-100"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
