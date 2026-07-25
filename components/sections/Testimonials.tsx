import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Marquee from "@/components/ui/Marquee";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="glass w-[340px] shrink-0 rounded-2xl p-6 sm:w-[380px]">
      <Quote className="text-signal-400" size={22} />
      <p className="mt-4 text-sm leading-relaxed text-mist">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-signal-500 to-ion text-xs font-semibold text-white">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-medium text-frost">{testimonial.name}</p>
          <p className="text-xs text-mist">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);

  return (
    <section className="relative overflow-hidden py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="07"
          label="Testimonials"
          title="Trusted by clients and"
          highlight="collaborators."
          align="center"
          className="mx-auto items-center text-center"
        />
      </div>

      <div className="relative mt-14 flex flex-col gap-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-void-950 to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-void-950 to-transparent sm:w-40" />

        <Marquee>
          {[...firstRow, ...firstRow].map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
          ))}
        </Marquee>
        <Marquee reverse>
          {[...secondRow, ...secondRow].map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
