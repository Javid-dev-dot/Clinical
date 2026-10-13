import Link from "next/link";

const specialties = [
  {
    title: "Trauma",
    body: "We don\u2019t always know when and how we\u2019ve experienced trauma. In therapy, we\u2019ll work together to help you process your past, understand what\u2019s causing you to stay \u201cstuck,\u201d and regain a sense of safety, control, and hope. You don\u2019t have to carry your burdens alone.",
    href: "/trauma-counseling-newbury-park",
  },
  {
    title: "EMDR",
    body: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    href: "/emdr-therapy-newbury-park",
  },
  {
    title: "Dissociation",
    body: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we\u2019ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
    href: "/dissociative-identity-disorder-therapist-newbury-park",
  },
  {
    title: "Special Needs Parenting",
    body: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
    href: "/counseling-special-needs-parents-newbury-park",
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-white">
      <div className="mx-auto max-w-[1800px] px-6 py-20 lg:px-10 lg:py-28">
        <h2 className="text-[2rem] leading-[1.2] sm:text-[2.4rem] lg:text-[2.9rem]">
          Our{" "}
          <strong>
            <em>specialties</em>
          </strong>{" "}
          include&hellip;
        </h2>

        <div className="mt-14 grid gap-x-16 gap-y-16 md:grid-cols-2 lg:mt-20 lg:gap-x-24 lg:gap-y-20">
          {specialties.map((item) => (
            <article key={item.title} className="reveal-on-scroll border-l border-line-soft pl-5 transition-colors hover:border-sage">
              <h3 className="text-[1.5rem] lg:text-[1.7rem]">{item.title}</h3>
              <p className="mt-4 leading-[1.8]">{item.body}</p>
              <Link href={item.href} className="btn-primary mt-5">
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
