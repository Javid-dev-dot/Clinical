import Image from "next/image";
import Link from "next/link";

const navigate = [
  { label: "Home", href: "/" },
  { label: "About", href: "/therapists-newbury-park" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const team = [
  "Jennifer Anderson",
  "Heather Williams-Baumgart",
  "Autumn Bodily",
  "Candace Bletscher",
  "Samantha Johnson",
  "Rosa Gomez",
  "Chad Flores",
  "Simran Sidhu",
  "Jessica Jauregui",
];

export default function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-[1800px] px-6 pt-20 pb-16 lg:px-10 lg:pt-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.9fr] lg:gap-24">
            {/* Brand */}
            <div>
              <Link href="/" aria-label="Conejo Valley Family Counseling home">
                <Image
                  src="/images/logo.png"
                  alt="Conejo Valley Family Counseling"
                  width={300}
                  height={88}
                  className="h-[72px] w-auto"
                />
              </Link>
              <p className="mt-7 max-w-sm leading-[1.8]">
                We want to make getting started simple. You&rsquo;re welcome to
                come into our office in Newbury Park or schedule virtual
                appointments from anywhere in CA&mdash;whatever works best for
                you.
              </p>
            </div>

            {/* Link columns */}
            <div className="grid gap-12 sm:grid-cols-3 lg:gap-16">
              <nav aria-label="Navigate">
                <h3 className="eyebrow text-sm">Navigate</h3>
                <ul className="mt-6 space-y-3">
                  {navigate.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-sage"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="Our Team">
                <h3 className="eyebrow text-sm">Our Team</h3>
                <ul className="mt-6 space-y-3">
                  {team.map((name) => (
                    <li key={name}>
                      <Link
                        href="/therapists-newbury-park"
                        className="transition-colors hover:text-sage"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <h3 className="eyebrow text-sm">Contact</h3>
                <address className="mt-6 space-y-3 not-italic">
                  <p>925 Broadbeck Dr</p>
                  <p>Suites 200 and 225</p>
                  <p>Newbury Park, CA 91320</p>
                  <p>
                    <a
                      href="mailto:info@conejovalleycounseling.com"
                      className="transition-colors hover:text-sage"
                    >
                      info@conejovalleycounseling.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:8052423120"
                      className="transition-colors hover:text-sage"
                    >
                      805.242.3120
                    </a>
                  </p>
                  <p>
                    Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark,
                    &amp; Simi Valley
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom bar */}
      <div className="bg-sage text-white">
        <div className="mx-auto max-w-[1800px] px-6 py-5 lg:px-10">
          <p className="text-center text-sm font-light">
            <Link href="/terms" className="transition-opacity hover:opacity-70">
              Terms
            </Link>
            <span className="px-2">|</span>
            <Link
              href="/privacy-policy"
              className="transition-opacity hover:opacity-70"
            >
              Privacy Policy
            </Link>
            <span className="px-2">|</span>
            <Link href="/disclaimer" className="transition-opacity hover:opacity-70">
              Disclaimer
            </Link>
            <span className="px-2">|</span>
            <span>Website by </span>
            <a
              href="https://walkerstrategyco.com"
              className="transition-opacity hover:opacity-70"
              target="_blank"
              rel="noreferrer noopener"
            >
              Walker Strategy Co.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
