import { cn } from "@/lib/utils";

interface InnerPageHeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
}

export default function InnerPageHero({
  title,
  description,
  backgroundImage,
  className,
}: InnerPageHeroProps) {
  return (
    <div
      className={cn(
        "relative h-[40vh] min-h-[300px] flex items-center justify-center",
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zinc-950" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
