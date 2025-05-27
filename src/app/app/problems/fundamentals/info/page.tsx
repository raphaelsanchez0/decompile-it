import Link from "next/link";
import React from "react";

export default function FundamentalProblemsInfoPage() {
  return (
    <div className="py-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        What are the Fundamental Problems?
      </h1>
      <p className="text-base mb-4">
        The Fundamental Problems are a curated set of beginner-friendly
        challenges designed to help you build a strong foundation in reverse
        engineering and low-level programming. These problems focus on core
        concepts like arithmetic, return values, if statements, loops, and
        pointers. By working through them, you'll learn how common C code
        patterns translate into assembly.
      </p>
      <p className="text-base mb-4">
        You'll write C code directly in a built-in IDE, and we will compile it
        and automatically check whether the generated assembly matches the
        provided target assembly. This helps you learn not just how to write C,
        but how the compiler actually turns it into machine-level instructions.
        For practice sake, besides pointer examples, these will only work with
        integers.
      </p>
      <p className="text-base mb-4">
        On a personal note, this is how I learned assembly, at least enough to
        pass my Computer Organization final. I hope these problems help you
        build a solid understanding of the fundamentals, just like they did for
        me.
      </p>
      <p className="text-base mb-4">
        If you are looking for more challenges, consider trying out the{" "}
        <Link href="/app/problems/ai-generated/info">
          <strong className="font-bold text-black hover:underline">
            AI generated examples features
          </strong>
        </Link>
        . It will generate a random C code snippet and ask you to write the
        assembly code for it. This is a great way to practice your skills and
        see how well you understand the concepts. This is especially useful if
        you have exhausted the fundamental problems and want to feel more
        confident in your assembly skills.
      </p>
    </div>
  );
}
