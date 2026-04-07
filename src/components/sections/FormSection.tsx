import BrandLogo from "@/components/ui/BrandLogo";
import { brandAssets, formContent } from "@/data/event";

export default function FormSection() {
  return (
    <section id="form" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#ffffff,_#f8fafc)] p-6 shadow-sm md:p-8 lg:p-10">
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

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-7">
            <BrandLogo
              name={brandAssets.icaLogo.name}
              shortName={brandAssets.icaLogo.shortName}
              src={brandAssets.icaLogo.src}
              compact
              inverse
            />

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
              {formContent.competeCard.eyebrow}
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              {formContent.competeCard.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-200 md:text-base">
              {formContent.competeCard.description}
            </p>

            <div className="mt-6 space-y-3">
              {formContent.competeCard.bullets.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <p className="text-sm leading-6 text-slate-100">{item}</p>
                </div>
              ))}
            </div>

            <a
              href={formContent.competeCard.buttonHref}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              {formContent.competeCard.buttonLabel}
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              {formContent.interestCard.eyebrow}
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              {formContent.interestCard.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              {formContent.interestCard.description}
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
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50/40 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
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
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50/40 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
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
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50/40 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
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
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50/40 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
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
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50/40 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  placeholder="Tell us a little more if relevant"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium !text-white transition hover:opacity-90 hover:!text-white"
              >
                Submit Interest
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
