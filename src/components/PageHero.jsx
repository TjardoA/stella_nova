import React from "react";
import { Sparkles } from "lucide-react";

export function PageHero({ eyebrow, title, description }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg p-6 mb-6">
      <p className="eyebrow flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-brand-accent" /> {eyebrow}
      </p>
      <h1 className="h2 mt-1 mb-2">{title}</h1>
      {description && <p className="text-slate-700 max-w-3xl">{description}</p>}
    </div>
  );
}
