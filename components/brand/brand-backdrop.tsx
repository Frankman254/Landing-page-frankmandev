import BrandMark from "./brand-mark";

const BrandBackdrop = () => {
  return (
    <div className="relative h-[320px] w-full overflow-hidden bg-[#09090b] sm:h-[420px] md:h-[520px] lg:h-[620px] xl:h-[720px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,196,0,0.22),_transparent_32%),radial-gradient(circle_at_85%_25%,_rgba(215,38,56,0.28),_transparent_30%),linear-gradient(180deg,_rgba(12,12,15,0.8),_rgba(12,12,15,1))]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute -left-14 top-10 h-36 w-36 rounded-full bg-brand-yellow/35 blur-3xl sm:h-48 sm:w-48" />
      <div className="absolute right-0 top-16 h-44 w-44 rounded-full bg-brand-red/40 blur-3xl sm:h-56 sm:w-56" />
      <div className="absolute bottom-0 left-1/2 h-32 w-[70%] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-10 top-16 hidden scale-[1.9] opacity-[0.16] md:block lg:top-20 lg:scale-[2.35]">
        <BrandMark className="w-44 lg:w-56" />
      </div>

      <div className="absolute left-4 right-4 top-6 hidden items-start justify-between text-white/65 sm:flex sm:left-8 sm:right-8 sm:top-8 md:left-12 md:right-12">
        <div className="max-w-[60%] text-[10px] font-semibold uppercase tracking-[0.45em] sm:max-w-none sm:text-xs">
          Frankman Dev
        </div>
        <div className="hidden text-[10px] font-semibold uppercase tracking-[0.42em] lg:block lg:text-xs">
          Editorial Personal Brand
        </div>
      </div>

      <div className="absolute bottom-10 left-4 right-4 sm:bottom-12 sm:left-8 sm:right-8 md:left-12 md:right-12">
        <div className="max-w-xl md:max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.46em] text-brand-yellow sm:text-sm">
            Sistemas, Web y Produccion
          </p>
          <h2 className="mt-4 max-w-[12ch] text-2xl font-black uppercase leading-[1.05] tracking-[0.1em] text-white sm:max-w-2xl sm:text-4xl md:text-5xl">
            Una marca personal con criterio tecnico y presencia profesional.
          </h2>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-1.5 w-16 rounded-full bg-brand-yellow" />
            <span className="h-1.5 w-8 rounded-full bg-brand-red" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[#09090b]/80 to-background sm:h-28 md:h-32" />
    </div>
  );
};

export default BrandBackdrop;
