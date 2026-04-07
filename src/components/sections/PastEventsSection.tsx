import { pastEventsContent } from "@/data/event";
import { cn } from "@/lib/utils";

type GalleryItem = {
  title: string;
  subtitle: string;
  src?: string;
  placeholder: string;
  size: "hero" | "tall" | "wide" | "standard";
};

function gallerySpan(size: GalleryItem["size"]) {
  switch (size) {
    case "hero":
      return "lg:col-span-7 lg:row-span-2 min-h-[360px]";
    case "tall":
      return "lg:col-span-5 min-h-[360px]";
    case "wide":
      return "lg:col-span-5 min-h-[220px]";
    case "standard":
    default:
      return "lg:col-span-4 min-h-[220px]";
  }
}

function GalleryCard({
  title,
  subtitle,
  src = "",
  placeholder,
  size,
}: GalleryItem) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm",
        gallerySpan(size),
      )}
    >
      {src ? (
        <div className="relative h-full w-full">
          <img
            src={src}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent p-5">
            <p className="text-lg font-semibold tracking-tight text-white">
              {title}
            </p>
            <p className="mt-1 text-sm text-slate-200">{subtitle}</p>
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col justify-between bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-5">
          <div className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500 shadow-sm">
            Placeholder image
          </div>

          <div className="mt-5 flex flex-1 items-center">
            <div className="w-full rounded-[1.25rem] border border-dashed border-slate-300 bg-white/80 p-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Asset
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                {placeholder}
              </p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-lg font-semibold tracking-tight text-slate-950">
              {title}
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PastEventsSection() {
  return (
    <section id="community" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#ffffff,_#f8fafc)] p-6 shadow-sm md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_1fr] lg:items-start">
          <div className="max-w-md">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              {pastEventsContent.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {pastEventsContent.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              {pastEventsContent.description}
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm leading-6 text-slate-600">
                {pastEventsContent.note}
              </p>
            </div>
          </div>

          <div className="grid auto-rows-fr gap-5 lg:grid-cols-12">
            {pastEventsContent.items.map((item) => (
              <GalleryCard key={item.placeholder} {...(item as GalleryItem)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
