import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function ModesPage() {
  return (
    <div className="flex justify-around w-full h-full m-4">
      <Card className="h-full w-2/5">
        <CardHeader>
          <CardTitle className="text-2xl">Reverse Engineer</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Try to write C code that generates the exact same assembly output.
          You'll be shown compiled assembly, and your goal is to match it using
          your own C code. Great for sharpening reverse engineering and
          low-level thinking skills.
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Link href="/app/problems">Go to Problems</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="h-full w-2/5">
        <CardHeader>
          <CardTitle className="text-2xl">Learn</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Explore how common C patterns translate to assembly. Use side-by-side
          views, hover tooltips, and interactive examples to build a deep
          understanding of how high-level code becomes machine-level
          instructions.
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Link href="/app/learn">Start Learning</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
