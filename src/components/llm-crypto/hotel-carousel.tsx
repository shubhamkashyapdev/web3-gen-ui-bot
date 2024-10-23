import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@ai-rsc/components/ui/card";

type Hotel = {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: string;
  imageUrl: string;
};

const hotels: Hotel[] = [
  {
    id: 1,
    name: "Hotel Sunshine",
    location: "Miami, FL",
    rating: 4.5,
    price: "$200/night",
    imageUrl: "https://placehold.co/300x200",
  },
  {
    id: 2,
    name: "Mountain Retreat",
    location: "Aspen, CO",
    rating: 4.8,
    price: "$350/night",
    imageUrl: "https://placehold.co/300x200",
  },
  {
    id: 3,
    name: "City Center Hotel",
    location: "New York, NY",
    rating: 4.2,
    price: "$250/night",
    imageUrl: "https://placehold.co/300x200",
  },
];

export const HotelCarousel: React.FC = () => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {hotels.map((hotel) => (
        <Card key={hotel.id} className="min-w-[300px] rounded-2xl shadow-lg">
          <img
            src={hotel.imageUrl}
            alt={hotel.name}
            className="rounded-t-2xl h-48 w-full object-cover"
          />
          <CardHeader className="px-4 py-2 border-b">
            <CardTitle>{hotel.name}</CardTitle>
            <div className="text-sm text-gray-500">{hotel.location}</div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex justify-between">
              <div className="text-lg font-semibold">{hotel.price}</div>
              <div className="text-yellow-500">
                {"★".repeat(Math.round(hotel.rating))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
