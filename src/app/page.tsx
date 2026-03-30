import type { ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Camera,
  Clock,
  DollarSign,
  Gavel,
  Home,
  Key,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ScrollText,
  Shield,
  UserRound,
  Users,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MapEmbed } from "@/components/map-embed";
import { SiteHeader } from "@/components/site-header";

const navItems = [
  { label: "About", target: "about" },
  { label: "Services", target: "services" },
  { label: "Lawyers", target: "lawyers" },
  { label: "Contact", target: "contact" },
];

const trustItems = [
  {
    icon: Shield,
    title: "Trusted Advocacy",
    description: "Protecting your rights with clear and dependable counsel.",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Experienced professionals focused on practical legal results.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Personalized guidance tailored to your specific legal matter.",
  },
];

const aboutItems = [
  {
    icon: Building2,
    title: "Expert Legal Services",
    description: "Comprehensive legal solutions grounded in diligence.",
  },
  {
    icon: Scale,
    title: "Uphold Justice",
    description: "Committed to fairness, integrity, and strong representation.",
  },
  {
    icon: BookOpen,
    title: "Result Driven",
    description: "Personalized counsel shaped to protect your interests.",
  },
];

const services = [
  { icon: Scale, title: "Civil Rights Litigation" },
  { icon: Users, title: "Consumer Advocacy Litigation" },
  { icon: Shield, title: "Criminal Defense Litigation" },
  { icon: DollarSign, title: "Debt Settlement" },
  { icon: ScrollText, title: "Insurance Litigation" },
  { icon: Award, title: "Intellectual Property Litigation" },
  { icon: Key, title: "Landlord and Tenant Litigation" },
  { icon: Briefcase, title: "Legal Consulting" },
  { icon: Landmark, title: "Probate Litigation" },
  { icon: Home, title: "Property Litigation" },
  { icon: ScrollText, title: "Will Writing" },
  { icon: Gavel, title: "Trusts and Estates Litigation" },
];

const lawyers = [
  {
    name: "TC Zothansanga",
    registration: "Enrollment No: --",
    phone: "8414917465",
    bio: "Experienced legal professional specializing in comprehensive legal advocacy and client-focused solutions.",
  },
  {
    name: "K. Lalnunpuii",
    registration: "Enrollment No: --",
    phone: "9774069878",
    bio: "Dedicated advocate with expertise in civil litigation and consumer rights protection.",
  },
  {
    name: "Anchal Thapa",
    registration: "Enrollment No: --",
    phone: "9089163091",
    bio: "Skilled legal consultant committed to delivering personalized and result-driven counsel.",
  },
  {
    name: "R. Malsawmhlui",
    registration: "Enrollment No: --",
    phone: "8414011731",
    bio: "Professional advocate with a strong focus on property and probate litigation matters.",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/elitelegalconsultancy2024",
    icon: Camera,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918414917465",
    icon: MessageCircle,
  },
  {
    label: "Email",
    href: "mailto:elitelegalconsultancy2024@gmail.com",
    icon: Mail,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader navItems={navItems} />

      <section
        id="hero"
        className="relative overflow-hidden bg-[linear-gradient(135deg,_#1e3a5f_0%,_#0f1f3a_100%)] px-6 pb-20 pt-36 text-white lg:px-8"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="hero-text text-center">
            <h1 className="mx-auto max-w-5xl text-5xl font-extrabold tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              ELITE LEGAL CONSULTANCY
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-white sm:text-2xl">
              We are here to provide high-quality legal consultancy, support,
              and results for your legal issues.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              Elite Legal Consultancy offers dependable legal representation,
              thoughtful strategy, and practical guidance for individuals,
              families, and businesses navigating complex legal matters.
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              Our firm is committed to clear communication, disciplined
              advocacy, and solutions that protect your rights while keeping
              your long-term interests in view.
            </p>
            <div className="hero-cta mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="cta-button inline-flex items-center gap-2 rounded-lg bg-[color:var(--navy-gold)] px-8 py-4 text-lg font-bold text-[color:var(--navy-primary)]"
              >
                Get a Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[rgba(212,175,55,0.2)] bg-white/5 p-8 text-center backdrop-blur-md"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[rgba(212,175,55,0.15)]">
                  <item.icon className="h-8 w-8 text-[color:var(--navy-gold)]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="deferred-section bg-[color:var(--surface-soft)] px-6 py-24 lg:px-8"
      >
        <div className="scroll-reveal visible mx-auto max-w-[1200px]">
          <div className="mb-16 text-center">
            <h2 className="section-heading inline-block">About Us</h2>
          </div>

          <div className="rounded-2xl border border-[rgba(212,175,55,0.1)] bg-white p-8 shadow-[0_4px_20px_rgba(30,58,95,0.08)] md:p-12">
            <p className="text-lg leading-9 text-slate-600 md:text-xl">
              Welcome to{" "}
              <strong className="text-[color:var(--navy-primary)]">
                ELITE LEGAL CONSULTANCY
              </strong>
              , a team of dedicated professionals providing expert legal
              services. We specialize in comprehensive legal advocacy and
              consulting, ensuring personalized and result-driven counsel for
              our clients. Our commitment is to uphold justice, protect your
              rights, and deliver the results you deserve.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {aboutItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[rgba(30,58,95,0.1)] bg-[color:var(--surface-soft)] p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(212,175,55,0.15)]">
                    <item.icon className="h-6 w-6 text-[color:var(--navy-gold)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[color:var(--navy-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--slate-gray)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="deferred-section bg-white px-6 py-24 lg:px-8">
        <div className="scroll-reveal visible mx-auto max-w-[1400px]">
          <div className="mb-16 text-center">
            <h2 className="section-heading inline-block">Our Services</h2>
            <p className="mx-auto mt-8 max-w-3xl text-xl text-[color:var(--slate-gray)]">
              We offer comprehensive legal services tailored to your needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="service-card flex gap-5 rounded-xl border-2 border-slate-200 bg-white p-8 shadow-[0_2px_8px_rgba(30,58,95,0.06)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.1)]">
                  <service.icon className="h-7 w-7 text-[color:var(--navy-gold)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-7 text-[color:var(--navy-primary)]">
                    {service.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="lawyers"
        className="deferred-section bg-[color:var(--surface-soft)] px-6 py-24 lg:px-8"
      >
        <div className="scroll-reveal visible mx-auto max-w-[1400px]">
          <div className="mb-16 text-center">
            <h2 className="section-heading inline-block">Meet Our Team</h2>
            <p className="mx-auto mt-8 max-w-3xl text-xl text-[color:var(--slate-gray)]">
              Our dedicated team of legal professionals committed to your
              success.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {lawyers.map((lawyer) => (
              <article
                key={lawyer.name}
                className="lawyer-card overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.15)] bg-white shadow-[0_4px_16px_rgba(30,58,95,0.1)]"
              >
                <div className="flex h-80 items-center justify-center bg-[linear-gradient(180deg,#f7f7f7,#ececec)]">
                  <div className="blank-profile flex h-56 w-56 items-center justify-center rounded-full bg-[#f6f6f6]">
                    <div className="blank-profile-inner flex h-40 w-40 items-center justify-center rounded-full bg-[#d7d7d7]">
                      <UserRound className="h-24 w-24 text-white/90" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-[color:var(--navy-primary)]">
                    {lawyer.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[color:var(--navy-light)]">
                    {lawyer.registration}
                  </p>
                  <p className="text-base leading-8 text-[color:var(--slate-gray)]">
                    {lawyer.bio}
                  </p>
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <a
                      href={`tel:${lawyer.phone}`}
                      className="flex items-center gap-3 text-base font-medium text-[color:var(--navy-primary)] transition hover:text-[color:var(--navy-gold)]"
                    >
                      <Phone className="h-5 w-5" />
                      {lawyer.phone}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="deferred-section bg-white px-6 py-24 lg:px-8">
        <div className="scroll-reveal visible mx-auto max-w-[1400px]">
          <div className="mb-16 text-center">
            <h2 className="section-heading inline-block">Contact Us</h2>
            <p className="mt-8 text-xl text-[color:var(--slate-gray)]">
              Get in touch with us for a consultation.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-[color:var(--navy-primary)]">
                Get in Touch
              </h3>

              <div className="mt-8 flex flex-col gap-6">
                <ContactCard
                  icon={MapPin}
                  title="Office Address"
                  content={
                    <>
                      3rd Floor, Treasury Square, Aizawl, Mizoram
                      <br />
                      Opposite Congress Bhawan
                    </>
                  }
                />
                <ContactCard
                  icon={Phone}
                  title="Phone"
                  content={
                    <a
                      href="tel:8414917465"
                      className="transition hover:text-[color:var(--navy-gold)]"
                    >
                      8414917465
                    </a>
                  }
                />
                <ContactCard
                  icon={Mail}
                  title="Email"
                  content={
                    <a
                      href="mailto:elitelegalconsultancy2024@gmail.com"
                      className="break-all transition hover:text-[color:var(--navy-gold)]"
                    >
                      elitelegalconsultancy2024@gmail.com
                    </a>
                  }
                />
                <ContactCard
                  icon={Clock}
                  title="Working Hours"
                  content={
                    <>
                      Monday - Friday
                      <br />
                      9:00 AM - 5:00 PM
                    </>
                  }
                />
              </div>
            </div>

            <div className="rounded-2xl border-2 border-[rgba(212,175,55,0.2)] bg-[color:var(--surface-soft)] p-8 shadow-[0_4px_20px_rgba(30,58,95,0.08)] md:p-12">
              <h3 className="text-3xl font-bold text-[color:var(--navy-primary)]">
                Send us a Message
              </h3>
              <ContactForm />
            </div>
          </div>

          <MapEmbed />
        </div>
      </section>

      <footer className="deferred-section bg-[color:var(--navy-dark)] px-6 pb-8 pt-16 text-white lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/Elite_official_logo.jpeg"
                    alt="Elite Legal Consultancy logo"
                    width={92}
                    height={92}
                    className="h-[4.8rem] w-[4.8rem] max-w-none object-cover object-center scale-[1.18]"
                  />
                </span>
                <h3 className="text-2xl font-bold">ELITE LEGAL CONSULTANCY</h3>
              </div>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                We are here to provide high-quality legal consultancy, support,
                and results for your legal issues.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="mailto:elitelegalconsultancy2024@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-[color:var(--navy-gold)]"
                >
                  <Mail className="h-4 w-4" />
                  elitelegalconsultancy2024@gmail.com
                </a>
                <a
                  href="tel:8414917465"
                  className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-[color:var(--navy-gold)]"
                >
                  <Phone className="h-4 w-4" />
                  8414917465
                </a>
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>3rd Floor, Treasury Square, Aizawl, Mizoram</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel={item.label === "Email" ? undefined : "noreferrer"}
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:border-[color:var(--navy-gold)] hover:bg-[color:var(--navy-gold)] hover:text-[color:var(--navy-primary)]"
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[color:var(--navy-gold)]">
                Quick Links
              </h4>
              <div className="mt-6 flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.target}
                    href={`#${item.target}`}
                    className="text-left text-base text-slate-300 transition hover:text-[color:var(--navy-gold)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[color:var(--navy-gold)]">
                Legal
              </h4>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="#"
                  className="text-base text-slate-300 transition hover:text-[color:var(--navy-gold)]"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-base text-slate-300 transition hover:text-[color:var(--navy-gold)]"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
            © 2024 ELITE LEGAL CONSULTANCY. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

function ContactCard({
  icon: Icon,
  title,
  content,
}: {
  icon: typeof MapPin;
  title: string;
  content: ReactNode;
}) {
  return (
    <div className="flex gap-5 rounded-xl border border-slate-200 bg-[color:var(--surface-soft)] p-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(212,175,55,0.15)]">
        <Icon className="h-6 w-6 text-[color:var(--navy-gold)]" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-[color:var(--navy-primary)]">
          {title}
        </h4>
        <div className="mt-2 text-base leading-7 text-[color:var(--slate-gray)]">
          {content}
        </div>
      </div>
    </div>
  );
}
