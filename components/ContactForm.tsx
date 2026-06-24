"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";
import Button from "@/components/Button";

const initialState: ContactState = { status: "idle", message: "" };

const inputClasses =
  "w-full rounded-lg border border-border bg-canvas px-4 py-3 font-body text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactEmail,
    initialState
  );

  if (state.status === "success") {
    return (
      <p className="font-body text-lg text-accent text-center py-8">
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-ui text-sm font-medium text-text mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-ui text-sm font-medium text-text mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-ui text-sm font-medium text-text mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What's your question?"
          className={`${inputClasses} resize-none`}
        />
      </div>

      {state.status === "error" && (
        <p className="font-body text-sm text-red-600" role="alert">
          {state.message}
        </p>
      )}

      <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto">
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
