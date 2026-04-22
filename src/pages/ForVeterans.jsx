import { useState } from "react";
import VeteranIntakeModal from "../components/VeteranIntakeModal";

export default function ForVeterans() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#f7f4ef] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* page intro / action trigger */}
        <div className="text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a6b4a]">
            Veteran Intake
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#1f2f6b] md:text-6xl">
            Start Your Next Step with Vetess
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-[#5f5f5f] md:text-base">
            share a few details to help us understand your goals and what kind of support you need.
          </p>

          {/* open modal button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-[#9b7a46] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Start Intake Form
          </button>
        </div>
      </div>

      {/* intake modal */}
      <VeteranIntakeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}