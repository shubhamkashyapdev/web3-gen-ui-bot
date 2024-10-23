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
    <Card className="w-full mx-auto max-w-md rounded-2xl">
      <CardHeader className="px-6 py-4 border-b">
        <CardTitle>Placeholder Users</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 p-6">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <div className="text-sm font-medium text-gray-900">
                  {user.name}
                </div>
                <div className="text-sm text-gray-500">{user.username}</div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PlaceHolderUsers;
