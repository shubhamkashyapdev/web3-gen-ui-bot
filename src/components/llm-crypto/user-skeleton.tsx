import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@ai-rsc/components/ui/card";

export const UserSkeleton = () => {
  return (
    <Card className="w-full mx-auto max-w-md rounded-2xl">
      <CardHeader className="px-6 py-4 border-b">
        <CardTitle>Placeholder Users</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <div className="text-transparent w-48 animate-pulse bg-zinc-700 rounded-md h-6 mb-2">
            {/* Placeholder for user name */}
          </div>
          <div className="text-transparent w-32 animate-pulse bg-zinc-700 rounded-md h-5 mb-2">
            {/* Placeholder for username */}
          </div>
          <div className="text-transparent w-64 animate-pulse bg-zinc-700 rounded-md h-5 mb-2">
            {/* Placeholder for email */}
          </div>
          <div className="text-transparent w-48 animate-pulse bg-zinc-700 rounded-md h-5 mb-2">
            {/* Placeholder for phone */}
          </div>
          <div className="text-transparent w-64 animate-pulse bg-zinc-700 rounded-md h-5 mb-2">
            {/* Placeholder for address */}
          </div>
          <div className="text-transparent w-48 animate-pulse bg-zinc-700 rounded-md h-5 mb-2">
            {/* Placeholder for company name */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
