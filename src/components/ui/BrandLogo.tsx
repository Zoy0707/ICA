import { cn } from "@/lib/utils";

type BrandLogoProps = {
  name: string;
  shortName: string;
  src?: string;
  compact?: boolean;
  inverse?: boolean;
  hideTextOnMobile?: boolean;
  className?: string;
};

export default function BrandLogo({
  name,
  shortName,
  src = "",
  compact = false,
  inverse = false,
  hideTextOnMobile = false,
  className,
}: BrandLogoProps) {
  const frameClasses = inverse
    ? "border-white/10 bg-white/10 text-white"
    : "border-slate-200 bg-white text-slate-950";

  const nameClasses = inverse ? "text-white" : "text-slate-950";
  const subClasses = inverse ? "text-slate-300" : "text-slate-500";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border shadow-sm",
          frameClasses,
        )}
      >
        {src ? (
          <img
            src={src}
            alt={name}
            className="h-full w-full object-contain p-2"
          />
        ) : (
          <span className="text-sm font-semibold tracking-[0.18em]">
            {shortName}
          </span>
        )}
      </div>

      <div className={cn("min-w-0", hideTextOnMobile && "hidden sm:block")}>
        <p
          className={cn(
            "truncate text-sm font-semibold uppercase tracking-[0.08em]",
            nameClasses,
          )}
        >
          {name}
        </p>

        {!compact && (
          <p className={cn("mt-0.5 text-xs", subClasses)}>
            Innovation and community platform
          </p>
        )}
      </div>
    </div>
  );
}
