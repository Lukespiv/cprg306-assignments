import Link from "next/link";

export default function Page() {
  return (
    <div className="items-center justify-items-center">
    <main >
      <h1 className="text-xl font-bold text-center mb-4">CPRG 360: Web Development 2 - Assignments</h1>
      <div className="flex flex-col gap-2 items-center">
        <Link href="/week-2" className="text-green-500 underline text-lg">week-2</Link>
        <Link href="/week-3" className="text-green-500 underline text-lg">week-3</Link>
        <Link href="/week-4" className="text-green-500 underline text-lg">week-4</Link>
        <Link href="/week-5" className="text-green-500 underline text-lg">week-5</Link>
        <Link href="/week-6" className="text-green-500 underline text-lg">week-6</Link>
        <Link href="/week-7" className="text-green-500 underline text-lg">week-7</Link>
      </div>
    </main>
    </div>

  );
}
