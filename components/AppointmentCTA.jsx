import Image from "next/image";
import Link from "next/link";

export default function AppointmentCTA() {
  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-cream-light"
    >
      <div className="mx-auto grid max-w-[1800px] items-center lg:grid-cols-[25%_1fr_25%]">
        {/* Left image */}
        <div className="relative hidden aspect-3/4 w-full overflow-hidden lg:block">
          <Image
            src="/images/appointment-1.jpg"
            alt=""
            fill
            sizes="25vw"
            className="interactive-image object-cover object-center"
          />
        </div>

        {/* Center content */}
        <div className="reveal-on-scroll px-6 py-24 text-center lg:px-10 lg:py-32">
          <p className="eyebrow text-xs text-ink sm:text-sm">
            Schedule an Appointment
          </p>

          <h2 className="mx-auto mt-6 max-w-2xl text-[2rem] leading-[1.2] sm:text-[2.4rem] lg:text-[2.9rem]">
            Find a therapist who is the right fit for{" "}
            <strong>
              <em>you</em>
            </strong>
            .
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-[1.8] text-ink">
            Coming to therapy is a courageous decision, and connecting with the
            right kind of therapist makes all the difference. We understand that
            your journey is personal, and we&rsquo;re here to support you with
            care and understanding every step of the way. Each member of our team
            brings dedicated expertise and a commitment to support you in your
            struggles. We want you to feel prioritized, understood, and
            empowered.
          </p>

          <p className="mt-6 leading-[1.8] text-ink">
            Click the button below to schedule an appointment.
          </p>

          <Link href="/contact" className="btn-pill mt-8">
            Book Now
          </Link>
        </div>

        {/* Right image */}
        <div className="relative hidden aspect-3/4 w-full overflow-hidden lg:block">
          <Image
            src="/images/appointment-2.jpg"
            alt=""
            fill
            sizes="25vw"
            className="interactive-image object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
