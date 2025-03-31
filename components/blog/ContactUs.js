"use client";

import Image from "next/image";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  return (
    <div className=" flex items-center justify-center min-h-screen p-6">
      <div className="max-w-xl text-center ">
        <div className="flex justify-center mb-6">
          <Image src="/blog/footer.svg" alt="Newsletter" width={96} height={96} className="w-72 h-72 object-contain" />
        </div>
        <h2 className="lg:text-6xl text-4xl font-semibold mb-3 lg:px-0 px-5">Stay up to date</h2>
        <p className="text-md mb-6 text-white lg:px-0 px-5">
          Sign up for regular insights and downloadables all around marketing, startups & tools. Not too spammy, we promise!
        </p>
        <form className="flex items-center bg-[#9fdcff] rounded-full shadow-md p-2 gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 text-gray-700 focus:outline-none rounded-full"
          />
          <button
            type="submit"
            className="bg-white text-[#1E2252] w-[7rem] py-2 font-semibold rounded-full transition hover:bg-[#ff7f7f]"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
