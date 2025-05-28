import React from "react";

export default function page() {
  return (
    <div className="w-full h-full py-6 lg:px-8 flex flex-col gap-4">
      <div className="flex-none">
        <h1 className="text-3xl font-bold tracking-tight mb-1">Problem 1</h1>
        <h2 className="text-muted-foreground text-sm mb-1">
          This is a mystery set
        </h2>
      </div>
      <div className="bg-red-500 w-full flex-grow">test</div>
    </div>
  );
}
