import Link from "next/link";

const columnOne = [
  { label: "Dissociation", href: "/dissociative-identity-disorder-therapist-newbury-park" },
  { label: "Trauma", href: "/trauma-counseling-newbury-park" },
  { label: "Family conflict", href: null },
  {
    label: "Special needs parenting",
    href: "/counseling-special-needs-parents-newbury-park",
  },
  { label: "Depression", href: "/anxiety-depression" },
  { label: "Marriage", href: "/couples-therapy" },
];

const columnTwo = [
  { label: "Anxiety", href: "/anxiety-depression" },
  { label: "Relationships", href: null },
  { label: "Children", href: "/children-and-teens" },
  { label: "Teens", href: "/children-and-teens" },
  { label: "Intimacy & connection", href: "/couples-therapy" },
  { label: "…and more.", href: null },
];

function ExpertiseList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.label} className="border-b border-line-soft">
          {item.href ? (
            <Link
              href={item.href}
              className="eyebrow group flex items-center justify-between py-4 text-sm transition-colors hover:text-sage focus:text-sage"
              >
                {item.label}
                <span className="text-base opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 group-focus:translate-x-1 group-focus:opacity-100" aria-hidden="true">→</span>
              </Link>

          ) : (
            <span className="eyebrow block py-4 text-sm">{item.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="bg-white">
      <div className="mx-auto grid max-w-[1800px] gap-14 px-6 py-20 lg:grid-cols-[30%_1fr] lg:gap-20 lg:px-10 lg:py-28">
        <div>
          <h2 className="text-[2rem] leading-[1.2] sm:text-[2.4rem] lg:text-[2.4rem]">
            Our areas of{" "}
            <strong>
              <em>expertise</em>
            </strong>
          </h2>
        </div>

        <div className="grid gap-x-16 lg:grid-cols-2">
          <ExpertiseList items={columnOne} />
          <ExpertiseList items={columnTwo} />
        </div>
      </div>
    </section>
  );
}
