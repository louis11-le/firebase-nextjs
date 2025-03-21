import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a href="/signin" className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</a>
          <a href="/signup" className="ml-2 bg-green-500 text-white px-4 py-2 rounded">Sign Up</a>
        </div>
      </main>
    </div>
  );
}
