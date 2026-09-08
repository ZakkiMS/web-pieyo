"use client";

import { useState } from "react";

const AGENDA = [
  {
    id: "jumat",
    label: "Jum'at 11 Sept",
    items: [
      {
        time: "12.00–13.00",
        title: "Registrasi Peserta",
        description: "Registrasi di depan Ballroom.",
        badge: "Registrasi",
      },
      {
        time: "12.00–17.00",
        title: "Ekshibisi & Pameran",
        description: "Pameran produk dan inovasi industri farmasi.",
        badge: "Ekshibisi",
      },
      {
        time: "12.00–17.00",
        title: "Konferensi Daerah (Konferda)",
        description: "Konferensi Daerah IAI DIY · Ruang Panitia (Konferda Ballroom / Puntadewa).",
        badge: "Konferda",
      },
      {
        time: "13.00–15.00",
        title: "Presentasi Oral Sesi 1",
        description:
          "5’ presentasi, 2’ tanya jawab · 15 panelis per ruang di Arjuna 1, Arjuna 2, dan Kresna.",
        badge: "Kompetisi",
      },
      {
        time: "15.00–17.00",
        title: "Presentasi Oral Sesi 2",
        description:
          "Kelanjutan presentasi oral · 15 panelis per ruang di Arjuna 1, Arjuna 2, dan Kresna.",
        badge: "Kompetisi",
      },
    ],
  },
  {
    id: "sabtu",
    label: "Sabtu 12 Sept",
    items: [
      {
        time: "07.00–08.00",
        title: "Registrasi peserta",
        description: "Pendaftaran peserta hari kedua.",
        badge: "Registrasi",
      },
      {
        time: "07.00–16.30",
        title: "Ekshibisi & Pameran",
        description: "Pameran produk dan inovasi industri farmasi.",
        badge: "Ekshibisi",
      },
      {
        time: "08.00–08.05",
        title: "MC opening & welcome",
        description: "Pembukaan oleh MC.",
        details: ["MC/LO Lik sukir dan mba eka"],
        badge: "Ceremonial",
      },
      {
        time: "08.05–08.10",
        title: "Doa",
        description: "Doa pembuka.",
        details: ["MC"],
        badge: "Ceremonial",
      },
      {
        time: "08.10–08.17",
        title: "Lagu Indonesia Raya dan Hymne IAI",
        description: "Lagu kebangsaan dan hymne organisasi.",
        badge: "Ceremonial",
      },
      {
        time: "08.17–08.37",
        title: "Pertunjukan Tari Pembuka",
        description: "Tari pembuka acara.",
        details: ["Tim Tari"],
        badge: "Ceremonial",
      },
      {
        time: "08.37–08.57",
        title: "Sambutan Ketua Panitia, Ketua PD, dan Ketua PP",
        description: "Ketua Panitia, Ketua PD, dan Ketua PP muncul dari tarian dan menyampaikan sambutan.",
        details: ["MC"],
        badge: "Ceremonial",
      },
      {
        time: "08.57–09.00",
        title: "Penyambutan Gubernur DIY",
        description: "Penyambutan pejabat.",
        details: ["Protokol"],
        badge: "Ceremonial",
      },
      {
        time: "09.00–09.20",
        title: "Sambutan Gubernur DIY",
        description: "Sambutan resmi Gubernur DIY.",
        details: ["Gubernur DIY"],
        badge: "Ceremonial",
      },
      {
        time: "09.20–09.30",
        title: "Foto bersama pejabat / tamu VIP",
        description: "Sesi dokumentasi bersama pejabat dan tamu VIP.",
        details: ["Dokumentasi"],
        badge: "Ceremonial",
      },
      {
        time: "09.30–10.20",
        title: "Keynote Speech — Menteri Kesehatan RI",
        description:
          "Pharmacists in the Intelligent Era: From Scientific Excellence to Smart Healthcare Practice",
        badge: "Keynote",
      },
      {
        time: "10.20–10.30",
        title: "Apresiasi keynote & transisi",
        description: "Apresiasi pembicara dan transisi ke sesi berikutnya.",
        details: ["MC"],
        badge: "Ceremonial",
      },
      {
        time: "10.30–12.00",
        title: "Plenary Sesi 1",
        description:
          "Synergy of Pharmaceutical Science, Technology and Practices: Preparing Pharmacists for the Intelligent Future.",
        details: [
          "Technical Officer (Health Policy and Strategy), Health Systems, World Health Organization – Indonesia.",
          { text: "Ms. Deki", emphasis: true },
          "Tempat: Ballroom",
        ],
        badge: "Pleno",
      },
      {
        time: "12.00–13.00",
        title: "Ishoma",
        description: "Istirahat shalat dan makan siang.",
        badge: "Break",
      },
      {
        time: "13.00–15.00",
        title: "Simposium — Materi 1",
        description:
          "5 ruang paralel: Ballroom 1, Ballroom 2, Arjuna 1, Kresna, Arjuna 2.",
        badge: "Simposium",
      },
      {
        time: "15.00–16.30",
        title: "Simposium — Materi 2",
        description:
          "5 ruang paralel: Ballroom 1, Ballroom 2, Arjuna 1, Kresna, Arjuna 2.",
        badge: "Simposium",
      },
      {
        time: "16.30–17.00",
        title: "Award & Closing Ceremony",
        description: "Penghargaan dan penutupan hari kedua.",
        details: ["Tempat: Ballroom"],
        badge: "Penutupan",
      },
    ],
  },
  {
    id: "minggu",
    label: "Minggu 13 Sept",
    items: [
      {
        type: "location",
        badge: "Lokasi",
        title: "Stadion Sultan Agung (SSA) Bantul",
        description:
          "Jl. Sultan Agung, Ponggok II, Trimulyo, Kec. Jetis, Kabupaten Bantul, DIY",
        mapsUrl: "https://maps.app.goo.gl/K2UpQNTVLPHB7sTw6",
      },
      {
        time: "06.00–07.00",
        title: "Registrasi Peserta",
        description: "Registrasi peserta kegiatan hari ketiga.",
        badge: "Registrasi",
      },
      {
        time: "07.00–07.30",
        title: "Senam Bersama",
        description: "Aktivitas pagi bersama peserta.",
        badge: "Wellness",
      },
      {
        time: "07.30–08.00",
        title: "Sambutan",
        description: "Sambutan Ketua PD IAI DIY dan Sambutan Ketua Panitia PIE YO.",
        badge: "Ceremonial",
      },
      {
        time: "08.00–08.30",
        title: "Kegiatan Pengabdian kepada Masyarakat",
        description: "Kegiatan pengabdian masyarakat.",
        details: [{ text: "apt. Romo Sukir dan apt. Mustaruddin", emphasis: true }],
        badge: "Pengabdian",
      },
      {
        time: "08.30–09.00",
        title: "Hiburan dan Pembagian Doorprize",
        description: "Hiburan penutup dan pembagian doorprize.",
        badge: "Penutupan",
      },
    ],
  },
];

const BADGE_COLORS = {
  Registrasi: "bg-navy/10 text-navy",
  Kompetisi: "bg-gold/20 text-gold-dark",
  Break: "bg-muted/15 text-muted",
  Ceremonial: "bg-red/10 text-red",
  Keynote: "bg-red/15 text-red",
  Sponsor: "bg-gold/15 text-gold-dark",
  Pleno: "bg-navy/15 text-navy",
  Simposium: "bg-gold/25 text-gold-dark",
  Penutupan: "bg-navy/20 text-navy",
  Wellness: "bg-red-soft/30 text-red",
  Pengabdian: "bg-gold/20 text-gold-dark",
  Ekshibisi: "bg-gold/15 text-gold-dark",
  Konferda: "bg-navy/15 text-navy",
  Lokasi: "bg-red/10 text-red",
};

function MapsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      />
      <circle fill="#FAFAFA" cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export default function AgendaTabs() {
  const [active, setActive] = useState(0);
  const day = AGENDA[active];

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {AGENDA.map((d, i) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-all min-h-[44px] ${
              active === i
                ? "bg-navy text-cream-bg shadow-md"
                : "glass-card text-navy hover:bg-white/40"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {day.items.map((item, idx) =>
          item.type === "location" ? (
            <article
              key={`${day.id}-${idx}`}
              className="relative glass-card glass-card-lg p-4 sm:p-5 transition-transform hover:translate-y-[-2px]"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 pr-12">
                <span className={`tag-caps rounded-full px-2.5 py-1 ${BADGE_COLORS.Lokasi}`}>
                  {item.badge}
                </span>
              </div>
              <h3 className="mt-2 font-heading text-lg font-bold text-navy sm:text-xl pr-12">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted leading-relaxed pr-12">{item.description}</p>
              <a
                href={item.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-navy shadow-sm ring-1 ring-navy/10 transition hover:bg-white hover:shadow-md"
                aria-label="Buka di Google Maps"
                title="Buka di Google Maps"
              >
                <MapsIcon className="h-6 w-6" />
              </a>
            </article>
          ) : (
            <article
              key={`${day.id}-${idx}`}
              className="glass-card glass-card-lg p-4 sm:p-5 transition-transform hover:translate-y-[-2px]"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <span className="font-mono text-sm font-semibold text-gold-dark">{item.time}</span>
                <span
                  className={`tag-caps rounded-full px-2.5 py-1 ${
                    BADGE_COLORS[item.badge] || "bg-muted/15 text-muted"
                  }`}
                >
                  {item.badge}
                </span>
              </div>
              <h3 className="mt-2 font-heading text-lg font-bold text-navy sm:text-xl">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">
                {item.description}
                {item.descriptionEmphasis && (
                  <span className="block font-heading font-bold text-navy">
                    {item.descriptionEmphasis}
                  </span>
                )}
              </p>
              {item.details?.map((line, i) => {
                const text = typeof line === "string" ? line : line.text;
                const emphasis = typeof line === "object" && line.emphasis;
                return (
                  <p
                    key={i}
                    className={`mt-1 leading-relaxed ${
                      emphasis
                        ? "text-sm font-heading font-bold text-navy"
                        : "text-sm text-muted"
                    }`}
                  >
                    {text}
                  </p>
                );
              })}
            </article>
          )
        )}
      </div>
    </div>
  );
}
