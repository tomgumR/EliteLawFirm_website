"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setFormError("Please fill in all fields before submitting.");
      setIsSubmitted(false);
      return;
    }

    setFormError("");
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormState);
    }, 1400);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <FormField
        id="name"
        label="Your Name *"
        value={formData.name}
        onChange={(value) => {
          setFormData((current) => ({ ...current, name: value }));
          setFormError("");
        }}
        placeholder="Enter your full name"
      />
      <FormField
        id="email"
        type="email"
        label="Email Address *"
        value={formData.email}
        onChange={(value) => {
          setFormData((current) => ({ ...current, email: value }));
          setFormError("");
        }}
        placeholder="your.email@example.com"
      />
      <FormField
        id="phone"
        type="tel"
        label="Phone Number *"
        value={formData.phone}
        onChange={(value) => {
          setFormData((current) => ({ ...current, phone: value }));
          setFormError("");
        }}
        placeholder="Enter your phone number"
      />

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-[color:var(--navy-primary)]">
          Message *
        </span>
        <textarea
          id="message"
          value={formData.message}
          onChange={(event) => {
            setFormData((current) => ({
              ...current,
              message: event.target.value,
            }));
            setFormError("");
          }}
          rows={5}
          placeholder="Tell us about your legal issue..."
          className="w-full resize-y rounded-lg border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[color:var(--navy-gold)] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
        />
      </label>

      {formError ? (
        <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {formError}
        </div>
      ) : null}

      {isSubmitted ? (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Thank you. We&apos;ll get back to you soon.
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="cta-button inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--navy-gold)] px-8 py-4 text-lg font-bold text-[color:var(--navy-primary)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <span className="loading-spinner" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}

function FormField({
  id,
  label,
  onChange,
  placeholder,
  type = "text",
  value,
}: {
  id: string;
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  value: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[color:var(--navy-primary)]">
        {label}
      </span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[color:var(--navy-gold)] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
      />
    </label>
  );
}
