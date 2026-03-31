import { formContent } from "@/data/event";

export default function FormSection() {
  return (
    <section id="form" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            {formContent.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {formContent.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            {formContent.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Compete
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              {formContent.competitorCard.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
              {formContent.competitorCard.description}
            </p>

            <a
              href={formContent.competitorCard.buttonHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              {formContent.competitorCard.buttonLabel}
            </a>

            <p className="mt-4 text-sm text-slate-500">
              {formContent.competitorCard.note}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Interest Form
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              {formContent.eoiCard.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
              {formContent.eoiCard.description}
            </p>

            <form
              action={formContent.formspreeAction}
              method="POST"
              className="mt-6 space-y-4"
            >
              <input
                type="hidden"
                name="_subject"
                value="ICA Event Landing Page Interest Form"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="organisation"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  University / Organisation
                </label>
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  placeholder="University or company name"
                />
              </div>

              <div>
                <label
                  htmlFor="interestType"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Interest Type
                </label>
                <select
                  id="interestType"
                  name="interestType"
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {formContent.interestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Optional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  placeholder="Tell us a little more if relevant"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Submit Interest
              </button>

              <p className="text-xs leading-5 text-amber-700">
                TODO: replace the Formspree action URL in{" "}
                <code>src/data/event.ts</code> with your real Formspree endpoint
                before deployment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
