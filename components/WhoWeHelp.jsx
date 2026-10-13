import Image from "next/image";
import Link from "next/link";

const audiences = [
  {
    title: "Adults",
    image: "/images/adults.jpg",
    description:
      "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
    href: "/anxiety-depression",
  },
  {
    title: "Couples",
    image: "/images/couples.jpg",
    description:
      "Relationships require effort, and we\u2019re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
    href: "/couples-therapy",
  },
  {
    title: "Children & Teens",
    image: "/images/children.jpg",
    description:
      "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
    href: "/children-and-teens",
  },
];

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="bg-white">
      <div className="mx-auto max-w-[1800px] px-6 pt-20 lg:px-10 lg:pt-28">
        <h2 className="text-[2rem] leading-[1.2] sm:text-[2.4rem] lg:text-[2.9rem]">
          Who we{" "}
          <strong>
            <em>help</em>
          </strong>
        </h2>

        <div className="mt-12 grid gap-12 pb-20 md:grid-cols-3 lg:mt-16 lg:gap-14 lg:pb-28">
          {audiences.map((item) => (
            <article key={item.title} className="interactive-card group flex flex-col bg-white">
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="interactive-image object-cover object-center"
                />
              </div>
              <div className="px-1 pb-2">
                <h3 className="mt-7 text-[1.5rem] lg:text-[1.7rem]">{item.title}</h3>
                <p className="mt-4 leading-[1.8]">{item.description}</p>
                <Link href={item.href} className="btn-primary mt-5 self-start">
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
