import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MemberCard from "./MemberCard";
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MembersProps {
   members: {
        id: number,
        name?: string,
        position: string,
        image: string,
        twitter?: string,
        linkedIn?: string,
        url?: string
      }[],
      tab?: string
      
}

export function TeamCarousel({members, tab}: MembersProps) {
  return (
    <Carousel className="w-full ">
      <CarouselContent className="">
        {members.map((member) => (
          <CarouselItem key={member.id} className="basis-[100%] xsm:basis-[70%] sm:basis-[45%] md:basis-[30%] lg:basis-[25%] mb-4">
           <MemberCard tab={tab} member={member}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-2 mt-10 justify-end">
        <CarouselPrevious className="static h-10 w-10 bg-transparent border-gray-300 hover:bg-Celo-AD-yellow" ><ChevronLeft size={28} className="text-black" /></CarouselPrevious>
        <CarouselNext className="static h-10 w-10 bg-transparent border-gray-300 hover:bg-Celo-AD-yellow" ><ChevronRight size={28} className="text-black" /></CarouselNext>
      </div>
    </Carousel>
  );
}
