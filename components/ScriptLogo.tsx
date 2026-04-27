export function ScriptLogo() {
  return (
    <span
      className="relative flex h-8 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 shadow-sm ring-1 ring-white/15"
      aria-hidden="true"
    >
      <span className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-md bg-[#3776AB] text-[9px] font-bold text-white shadow-sm">
        Py
      </span>
      <span className="absolute bottom-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#276DC3] text-[10px] font-bold text-white shadow-sm ring-1 ring-white/25">
        R
      </span>
    </span>
  )
}
