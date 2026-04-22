import logoMark from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src={logoMark} alt="" width={48} height={48} className="h-11 w-11 object-contain" />
      <div className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-foreground">
          Phoenix
        </span>
        <span className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
          Mediclinic
        </span>
      </div>
    </div>
  );
}
