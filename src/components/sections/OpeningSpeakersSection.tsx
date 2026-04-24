import { openingSpeakersContent } from "@/data/event";

export default function OpeningSpeakersSection() {
  return (
    <section id="opening-speakers" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-[#E3E6F0] bg-white p-6 shadow-[0_22px_64px_rgba(23,23,39,0.06)] md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#5F6275]">
            {openingSpeakersContent.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#171727] md:text-4xl">
            {openingSpeakersContent.title}
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {openingSpeakersContent.speakers.map((speaker) => (
            <article
              key={speaker.name}
              className="rounded-[1.5rem] border border-[#E3E6F0] bg-[#F7F8FC] p-4 md:p-5"
            >
              <div className="overflow-hidden rounded-xl border border-[#E3E6F0] bg-white">
                <img
                  src={speaker.imageSrc}
                  alt={speaker.name}
                  className="aspect-square w-full object-cover"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold tracking-tight text-[#171727]">
                  {speaker.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5F6275]">
                  {speaker.subtitle}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#171727]">
                  <span className="font-medium">Topic: </span>
                  {speaker.topic}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
