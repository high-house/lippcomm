"use client";
import Navbar from "@/components/home/Navbar";
import { LampDemo } from "@/components/ui/lamp";
import React from "react";

export default function Imprint() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#292828] p-6 flex-col">
        <Navbar/>
      <div className="bg-[#9fdcff] rounded-2xl mt-[6rem] flex flex-col justify-center items-center shadow-lg p-10 w-4/5 text-[#292828]">
        <h1 className="text-6xl font-bold text-center mb-6  flex w-full pl-20 pb-40">Imprint</h1>

        {/* Section: Authorized Representative */}
        <section className="mb-20 gap-16  w-1/2">
          <h2 className="text-3xl font-semibold mb-2">Authorized representative</h2>
          <p className="text-xl">Lippuner Communications</p>
          <p className="text-xl">UID CHE-469.152.515</p>
          <p className="text-xl">Moosbrünneli 15A</p>
          <p className="text-xl">5643 Sins</p>
          <p className="text-xl">Switzerland</p>
          <p className="text-xl">Contact: Anja Lippuner</p>
          <div className="text-xl">kontakt@lippcomm.ch</div>
        </section>

        {/* Section: Scope and Lawful Use */}
        <section className="mb-20 gap-16  text-start flex flex-col justify-center w-1/2">
          <h2 className="font-semibold mb-2 text-3xl">Scope and lawful use</h2>
          <p className="text-xl leading-relaxed">
            When using the axely GmbH website, these terms of use must be observed. The use of
            the website is only permitted for lawful purposes and any use that violates Swiss
            legislation, in particular the rights of third parties, is prohibited. axely GmbH
            grants users a right to unobstructed continued use of the website and can change
            the content at any time without prior notice and also completely refrain from
            operating the website.
          </p>
        </section>

        {/* Section: Liability for Content and Links */}
        <section className="mt-20 gap-16  text-start flex flex-col justify-center w-1/2">
          <h2 className="font-semibold mb-2 text-3xl">Liability for content and links</h2>
          <p className="text-xl leading-relaxed">
            axely GmbH operates the website and selects the content with the greatest possible
            care. Nevertheless, users cannot be completely relied on and axely GmbH assumes no
            guarantee, warranty, or liability for the completeness or correctness of the
            published content. Access to third-party websites via the website is the user's own
            responsibility. axely GmbH is not responsible for the content on foreign websites
            and also declines liability for its actions and subsections.
          </p>
        </section>

        {/* Section: Copyright and IP Rights */}
        <section className="mt-20  text-start flex flex-col justify-center w-1/2 gap-16">
          <h2 className="font-semibold mb-2 text-3xl">Copyright and intellectual property rights</h2>
          <p className="text-xl leading-relaxed">
            The user of the axely GmbH website acknowledges that the website as a whole and
            their components are protected by copyright and other industrial property rights
            and that these rights belong to axely GmbH and/or licensors. Any use of the
            protected elements, in particular their reproduction, is only permitted with the
            express written consent of the rights holder.
          </p>
        </section>
      </div>
      <LampDemo/>
    </div>
  );
}
