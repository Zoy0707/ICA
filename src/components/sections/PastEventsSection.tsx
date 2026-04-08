import { pastEventsContent } from "@/data/event";

type GalleryItem = {
  title: string;
  subtitle: string;
  src: string;
  placeholder: string;
  size: "hero" | "tall" | "wide" | "standard";
};

function GalleryCard({
  title,
  src,
}: GalleryItem) {
  return (
    <div className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

export default function PastEventsSection() {
  const galleryItems = pastEventsContent.items
    .filter((item) => typeof item.src === "string" && item.src.trim().length > 0)
    .map((item) => ({ ...item, src: item.src.trim() })) as GalleryItem[];

  return (
    <section id="community" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#ffffff,_#f8fafc)] p-6 shadow-sm md:p-8 lg:p-10">
        <div>
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              {pastEventsContent.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {pastEventsContent.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
              {pastEventsContent.description}
            </p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Networking · Collaboration · Community
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <GalleryCard key={item.placeholder} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
