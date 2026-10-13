import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-cream">
      <div className="mx-auto grid max-w-[1800px] items-stretch gap-12 lg:grid-cols-[1fr_38%] lg:gap-20">
        {/* Left content */}
        <div className="px-6 py-20 lg:px-10 lg:py-28">
          <p className="eyebrow text-xs text-ink sm:text-sm">How We Work</p>

          <h2 className="mt-5 text-[2rem] leading-[1.2] sm:text-[2.4rem] lg:text-[2.9rem]">
            We&rsquo;re here to make a difference.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="eyebrow text-xs leading-[1.8] text-ink sm:text-sm">
                The clients we work with are balancing so many things at once,
                it&rsquo;s often hard for them to put themselves first.
              </p>
              <p className="mt-6 leading-[1.8]">
                Here, your needs are always top priority. Our team takes the time
                to deeply listen to our clients in order to truly understand
                their story and their struggles. We recognize that no two people
                are the same and that personalized therapy means an intentional,
                tailored approach. (You won&rsquo;t find anything
                &ldquo;one-size-fits-all&rdquo; here.) If you&rsquo;re ready to do
                the work, we&rsquo;re ready to help.
              </p>
            </div>

            <div>
              <p className="leading-[1.8]">
                Sometimes we may gently challenge you to look at things
                differently and other times we may explore your emotions, all
                while encouraging you to practice what you&rsquo;ve learned in
                your daily life. We take what we do seriously because we know how
                important it is for you to heal from what&rsquo;s hurting you,
                discover a fulfilling life, and build meaningful relationships.
                Our goal is to walk alongside you in this journey, offering
                support and guidance as you uncover your strengths and embrace
                what the future can hold for you.
              </p>
            </div>
          </div>

          <Link href="/therapists-newbury-park" className="btn-primary mt-10">
            Learn more about us
          </Link>
        </div>

        {/* Right image */}
        <div className="relative aspect-4/5 w-full overflow-hidden lg:aspect-auto">
          <Image
            src="/images/howwework.jpg"
            alt="A mother and daughter playing together on the beach"
            fill
            sizes="(max-width: 1024px) 100vw, 38vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
