import { MapPin, Clock, Phone, Mail, Navigation, Car, Footprints } from "lucide-react";

export function VisitPage() {
  return (
    <div>
      {/* Section 1: Header */}
      <section className="bg-warm-white px-4 py-16 text-center sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-brand text-4xl font-bold text-chai-brown sm:text-5xl">
            Find Us
          </h1>
          <p className="mt-4 font-body text-lg text-charcoal/60">
            Your corner of Indiranagar is waiting.
          </p>
        </div>
      </section>

      {/* Section 2: Map + Info */}
      <section className="bg-warm-white px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Left: Map */}
            <div className="lg:flex-[2]">
              <div className="rounded-2xl overflow-hidden shadow-md h-80 md:h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62206.3701025134!2d77.5621039486328!3d12.978366900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae173cc09d5a4d%3A0x8b76f39ffb0e4bec!2sChai%20Bar!5e0!3m2!1sen!2sin!4v1774126550302!5m2!1sen!2sin"
                  title="Chai Bar location map"
                  loading="lazy"
                  className="w-full h-full border-0"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: Contact Info Cards */}
            <div className="flex flex-col gap-4 lg:flex-[1]">
              {/* Address card */}
              <div className="rounded-xl bg-warm-white p-6 shadow-sm border border-cream">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-terracotta" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-charcoal">
                      CMH Road, Indiranagar
                    </p>
                    <p className="mt-1 font-body text-sm text-charcoal/70">
                      Bangalore 560038
                    </p>
                    <p className="mt-2 font-body text-sm text-charcoal/50">
                      Right next to Indiranagar CMH Road Metro Station
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Chai+Bar/@12.9783669,77.6383216,17z/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex cursor-pointer items-center gap-1.5 font-body text-sm font-medium text-terracotta transition-colors hover:text-chai-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                    >
                      Get Directions
                      <Navigation className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours card */}
              <div className="rounded-xl bg-warm-white p-6 shadow-sm border border-cream">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <Clock className="h-5 w-5 text-terracotta" />
                  </div>
                  <div className="w-full">
                    <p className="font-body font-semibold text-charcoal">
                      Hours
                    </p>
                    <table className="mt-3 w-full font-body text-sm">
                      <tbody className="divide-y divide-cream">
                        <tr>
                          <td className="py-1.5 text-charcoal/70">Mon–Fri</td>
                          <td className="py-1.5 text-right text-charcoal">
                            8:00 AM – 10:00 PM
                          </td>
                        </tr>
                        <tr>
                          <td className="py-1.5 text-charcoal/70">Saturday</td>
                          <td className="py-1.5 text-right text-charcoal">
                            9:00 AM – 11:00 PM
                          </td>
                        </tr>
                        <tr>
                          <td className="py-1.5 text-charcoal/70">Sunday</td>
                          <td className="py-1.5 text-right text-charcoal">
                            9:00 AM – 10:00 PM
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="mt-3 font-body text-xs text-charcoal/40">
                      Placeholder hours — will be confirmed by client
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact card */}
              <div className="rounded-xl bg-warm-white p-6 shadow-sm border border-cream">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-terracotta" />
                    <span className="font-body text-sm text-charcoal/70">
                      +91 98XXX XXXXX
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-terracotta" />
                    <a
                      href="mailto:hello@chaibar.in"
                      className="cursor-pointer font-body text-sm text-charcoal/70 transition-colors duration-150 hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                    >
                      hello@chaibar.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How to Reach Us */}
      <section className="bg-cream/30 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-brand text-3xl font-bold text-chai-brown text-center sm:text-4xl">
            How to Reach Us
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {/* By Metro */}
            <div className="rounded-xl bg-warm-white p-6 shadow-sm text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10">
                <Navigation className="h-6 w-6 text-terracotta" />
              </div>
              <h3 className="font-brand text-lg font-semibold text-charcoal">
                By Metro
              </h3>
              <p className="mt-2 font-body text-sm text-charcoal/60">
                Indiranagar CMH Road Metro Station (Purple Line). We&rsquo;re right next to the exit.
              </p>
            </div>

            {/* By Auto/Cab */}
            <div className="rounded-xl bg-warm-white p-6 shadow-sm text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10">
                <Car className="h-6 w-6 text-terracotta" />
              </div>
              <h3 className="font-brand text-lg font-semibold text-charcoal">
                By Auto/Cab
              </h3>
              <p className="mt-2 font-body text-sm text-charcoal/60">
                Tell them &ldquo;12th Main, Indiranagar&rdquo;. We&rsquo;re next to the park.
              </p>
            </div>

            {/* By Walk */}
            <div className="rounded-xl bg-warm-white p-6 shadow-sm text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10">
                <Footprints className="h-6 w-6 text-terracotta" />
              </div>
              <h3 className="font-brand text-lg font-semibold text-charcoal">
                By Walk
              </h3>
              <p className="mt-2 font-body text-sm text-charcoal/60">
                If you&rsquo;re already in Indiranagar, we&rsquo;re a pleasant walk through the
                tree-lined streets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Group Booking CTA */}
      <section className="bg-chai-brown px-4 py-20 text-warm-white sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-brand text-3xl font-bold sm:text-4xl">
            Coming with a Group?
          </h2>
          <p className="mt-4 font-body text-lg text-warm-white/80">
            Planning a gathering of 8 or more? Drop us a line and we&rsquo;ll make
            sure your table is ready.
          </p>
          <div className="mt-8">
            <a
              href="mailto:hello@chaibar.in"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-terracotta px-8 py-3 font-body text-sm font-semibold text-warm-white shadow-lg transition-all duration-200 ease-out hover:bg-terracotta/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-white focus-visible:ring-offset-2 focus-visible:ring-offset-chai-brown"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
