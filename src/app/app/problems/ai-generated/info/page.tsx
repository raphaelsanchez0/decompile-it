import Link from "next/link";

export default function AiGeneratedProblemsInfoPage() {
  return (
    <div className="py-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        AI-generated Problems
      </h1>
      <p className="text-base mb-4">
        AI-generated problems work by having AI generate C code based on a
        prompt and then we compile it into assembly. Your job is to write the
        write C code that makes the same assembly output, you like you would in
        the{" "}
        <Link href="/app/problems/fundamental/info">
          <strong className="font-bold text-black hover:underline">
            fundamental problems
          </strong>
        </Link>
        .
      </p>
      <p className="text-base mb-4">
        Since AI API calls aren't free, this is something that we need to charge
        for.
      </p>
      <p className="text-base mb-4"></p>
      <p className="text-base mb-4"></p>
    </div>
  );
}
