"use client";

import { useState } from "react";
import { Play, X, ExternalLink } from "lucide-react";

export interface VideoEntry {
  youtubeId: string;
  title: string;
  channel: string;
  description: string;
  durationLabel: string; // e.g. "12 min"
}

interface Props {
  video: VideoEntry;
}

export default function ResearchVideoEmbed({ video }: Props) {
  const [open, setOpen] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
  const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <>
      {/* Placeholder card */}
      <div
        className="relative rounded-xl overflow-hidden cursor-pointer group"
        style={{
          backgroundColor: "#0F0F0F",
          boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        }}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        aria-label={`Play research video: ${video.title}`}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // Fallback to hqdefault if maxresdefault fails
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
            }}
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-200"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: "rgba(212, 175, 55, 0.92)" }}
            >
              <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
            </div>
          </div>
          {/* Duration pill */}
          <div
            className="absolute bottom-3 right-3 text-[11px] font-semibold px-2 py-0.5 rounded"
            style={{ backgroundColor: "rgba(0,0,0,0.75)", color: "#fff" }}
          >
            {video.durationLabel}
          </div>
        </div>

        {/* Card footer */}
        <div className="p-4">
          <p
            className="text-[11px] uppercase tracking-widest mb-1.5 font-medium"
            style={{ color: "#d4af37" }}
          >
            Research Overview
          </p>
          <h3 className="text-sm font-semibold text-white leading-snug mb-1 line-clamp-2">
            {video.title}
          </h3>
          <p className="text-[11px]" style={{ color: "#666666" }}>
            {video.channel}
          </p>
          <p className="text-xs mt-2 leading-relaxed line-clamp-2" style={{ color: "#999" }}>
            {video.description}
          </p>
          <div className="mt-3 flex items-center gap-1.5">
            <Play className="w-3 h-3" style={{ color: "#d4af37" }} />
            <span className="text-xs font-medium" style={{ color: "#d4af37" }}>
              Watch on this page
            </span>
          </div>
        </div>
      </div>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close video"
            >
              <X className="w-4 h-4" />
              Close
            </button>

            {/* YouTube iframe */}
            <div
              className="relative w-full rounded-xl overflow-hidden"
              style={{ aspectRatio: "16/9", backgroundColor: "#000" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Video info strip below iframe */}
            <div className="mt-3 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white leading-snug">{video.title}</p>
                <p className="text-xs mt-0.5" style={{ color: "#666666" }}>{video.channel}</p>
              </div>
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-1.5 text-xs font-medium hover:opacity-80 transition-opacity"
                style={{ color: "#d4af37" }}
              >
                <ExternalLink className="w-3 h-3" />
                YouTube
              </a>
            </div>

            <p
              className="mt-2 text-xs leading-relaxed"
              style={{ color: "#666" }}
            >
              For educational and informational purposes only. This video is produced by an independent third party and does not constitute an endorsement by Nexphoria. All Nexphoria compounds are sold for research use only.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
