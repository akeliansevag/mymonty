export default function Marquee({ items = [] }) {
  const loopItems = [...items, ...items];

  return (
    <>
      <div
        className="marquee-wrapper relative w-full overflow-hidden mt-14 py-10
        [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
        [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="marquee-track flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
          {loopItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4
              min-w-[260px] h-[86px]
              px-6 rounded-xl bg-white
              border border-black/5
              shadow-[0px_3px_3px_0px_#0000001A]"
            >
              <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center text-xl">
                {item.icon}
              </div>

              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}