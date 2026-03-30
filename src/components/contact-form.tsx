"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function validate(currentValues: FormValues) {
    const nextErrors: FormErrors = {};

    if (!currentValues.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!currentValues.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(currentValues.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!currentValues.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    }

    if (!currentValues.message.trim()) {
      nextErrors.message = "Please tell us how we can help.";
    } else if (currentValues.message.trim().length < 20) {
      nextErrors.message = "Please provide a little more detail.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  }

  return (
    <form className="space-y-5" noValidate onSubmit={handleSubmit}>
      <Field
        id="name"
        label="Name"
        value={values.name}
        error={errors.name}
        onChange={(value) => {
          setValues((current) => ({ ...current, name: value }));
          setErrors((current) => ({ ...current, name: undefined }));
        }}
      />
      <Field
        id="email"
        label="Email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={(value) => {
          setValues((current) => ({ ...current, email: value }));
          setErrors((current) => ({ ...current, email: undefined }));
        }}
      />
      <Field
        id="phone"
        label="Phone"
        type="tel"
        value={values.phone}
        error={errors.phone}
        onChange={(value) => {
          setValues((current) => ({ ...current, phone: value }));
          setErrors((current) => ({ ...current, phone: undefined }));
        }}
      />
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-[color:var(--color-ink)]">
          Message
        </span>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(event) => {
            setValues((current) => ({
              ...current,
              message: event.target.value,
            }));
            setErrors((current) => ({ ...current, message: undefined }));
          }}
          className="w-full rounded-[1.2rem] border border-[color:var(--color-border)] bg-[color:var(--color-panel)] px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[color:var(--color-gold-deep)] focus:ring-4 focus:ring-[color:rgba(201,162,39,0.16)]"
          placeholder="Briefly describe your legal matter"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <span id="message-error" className="mt-2 block text-sm text-rose-600">
            {errors.message}
          </span>
        ) : null}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-navy-deep)]"
        >
          Submit
        </button>
        <p className="text-xs leading-6 text-slate-500">
          This form is currently in preview mode and ready for backend
          connection.
        </p>
      </div>

      {status === "success" ? (
        <div
          className="rounded-[1.3rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
          role="status"
        >
          Thank you. Your consultation request has been prepared successfully.
        </div>
      ) : null}
    </form>
  );
}

type FieldProps = {
  error?: string;
  id: keyof Omit<FormValues, "message">;
  label: string;
  onChange: (value: string) => void;
  type?: string;
  value: string;
};

function Field({
  error,
  id,
  label,
  onChange,
  type = "text",
  value,
}: FieldProps) {
  const errorId = `${id}-error`;

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[color:var(--color-ink)]">
        {label}
      </span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-[1.2rem] border border-[color:var(--color-border)] bg-[color:var(--color-panel)] px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[color:var(--color-gold-deep)] focus:ring-4 focus:ring-[color:rgba(201,162,39,0.16)]"
        placeholder={`Enter your ${label.toLowerCase()}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error ? (
        <span id={errorId} className="mt-2 block text-sm text-rose-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}
