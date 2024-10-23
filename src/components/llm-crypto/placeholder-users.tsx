import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@ai-rsc/components/ui/card";
import { IPlaceholderUser } from "@ai-rsc/types/global.types";
import React from "react";

type Props = {
  users: IPlaceholderUser[];
};
const PlaceHolderUsers = async ({ users }: Props) => {
  return (
    <Card className="w-full mx-auto max-w-md rounded-2xl shadow-lg">
      <CardHeader className="px-6 py-4 border-b">
        <CardTitle>Placeholder Users</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 p-6">
        {users.slice(0, 3).map((user) => (
          <div
            key={user.id}
            className="flex flex-col p-4 border rounded-lg bg-white shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <div className="text-lg font-medium text-gray-900">
                  {user.name}
                </div>
                <div className="text-sm text-gray-500">@{user.username}</div>
                <div className="text-sm text-gray-600">{user.email}</div>
                <div className="text-sm text-gray-600">{user.phone}</div>
                <div className="text-sm text-gray-600">{user.company.name}</div>
                <div className="text-xs text-gray-400">
                  {user.company.catchPhrase}
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <p>
                {user.address.street}, {user.address.suite}
              </p>
              <p>
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
            <div className="mt-2">
              <a
                href={`http://${user.website}`}
                className="text-blue-500 hover:underline"
              >
                {user.website}
              </a>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PlaceHolderUsers;
