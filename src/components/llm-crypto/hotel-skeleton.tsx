import React from "react";
import { Card } from "@ai-rsc/components/ui/card";

export const HotelCarouselSkeleton: React.FC = () => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className="min-w-[300px] rounded-2xl shadow-lg">
          <div className="animate-pulse">
            <div className="h-48 w-full bg-zinc-700 rounded-t-2xl mb-2"></div>
            <div className="px-4 py-2 border-b">
              <div className="h-6 bg-zinc-700 rounded-md mb-1"></div>
              <div className="h-4 bg-zinc-700 rounded-md w-3/4"></div>
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <div className="h-6 bg-zinc-700 rounded-md w-1/3"></div>
                <div className="h-6 bg-zinc-700 rounded-md w-12"></div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
