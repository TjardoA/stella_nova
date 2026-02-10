export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="space-y-0.5">
          <p className="font-semibold leading-tight">IKC Stella Nova</p>
          <p className="text-slate-200 leading-tight">Onderwijs & opvang onder één dak.</p>
        </div>
        <div className="space-y-0.5 text-slate-200">
          <p>Willem Alexanderplantsoen 2, 2713 VM Zoetermeer</p>
          <p className="flex flex-wrap gap-3">
            <span>Tel: 079 316 91 84</span>
            <span>Email: directie@ikcstellanova.unicoz.nl</span>
          </p>
        </div>
        <div className="flex gap-2">
          <span className="pill">Unicoz</span>
          <span className="pill">Partou</span>
        </div>
      </div>
    </footer>
  );
}
