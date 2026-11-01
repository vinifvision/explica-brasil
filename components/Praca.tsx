"use client";

import { useState } from "react";

type Parte = "cam" | "sen" | "tor";

const INFO: Record<Parte, { titulo: string; texto: string }> = {
  cam: {
    titulo: "Câmara dos Deputados",
    texto:
      'O "prato" virado para cima. Aqui ficam os 513 deputados, que representam o povo. Quanto mais gente o estado tem, mais deputados ele elege.',
  },
  sen: {
    titulo: "Senado Federal",
    texto:
      "A cúpula virada para baixo. Aqui ficam os 81 senadores, 3 por estado, não importa o tamanho. Eles representam os estados.",
  },
  tor: {
    titulo: "Torres do Congresso",
    texto:
      "São os escritórios administrativos. Os dois prédios lado a lado formam um H, que muita gente lê como Humanidade.",
  },
};

export default function Praca() {
  const [noite, setNoite] = useState(false);
  const [parte, setParte] = useState<Parte | null>(null);

  const cor = {
    ceu: noite ? "#042C53" : "#185FA5",
    sol: noite ? "#F1EFE8" : "#EF9F27",
    morro: noite ? "#04342C" : "#0F6E56",
    grama: noite ? "#173404" : "#639922",
    lago: noite ? "#0C447C" : "#378ADD",
  };

  return (
    <div className="w-full">
      <style>{`
        .praca * { transition: fill 1.2s ease, opacity 1.2s ease, r 1.2s ease; }
        .nuvem { animation: deriva 38s linear infinite; }
        .nuvem2 { animation: deriva 55s linear infinite; animation-delay: -25s; }
        .passaros { animation: voo 3s ease-in-out infinite; }
        .parte { cursor: pointer; }
        .parte:hover { opacity: 0.9; }
        @keyframes deriva { from { transform: translateX(-80px); } to { transform: translateX(420px); } }
        @keyframes voo { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
      `}</style>

      <svg
        viewBox="0 0 360 330"
        className="praca w-full rounded-xl"
        role="img"
        aria-label="Congresso Nacional em estilo pôster"
      >
        <defs>
          <filter id="granulado">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves={2}
              stitchTiles="stitch"
            />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
          </filter>
          <filter id="tremido">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves={2}
              seed={3}
            />
            <feDisplacementMap in="SourceGraphic" scale={4} />
          </filter>
          <clipPath id="moldura">
            <rect width="360" height="330" rx="12" />
          </clipPath>
        </defs>

        <g clipPath="url(#moldura)">
          {/* Céu, estrelas e sol */}
          <rect width="360" height="330" fill={cor.ceu} />
          <g opacity={noite ? 1 : 0} fill="#F1EFE8">
            <circle cx="30" cy="30" r="1.2" />
            <circle cx="80" cy="60" r="1" />
            <circle cx="300" cy="40" r="1.3" />
            <circle cx="330" cy="90" r="1" />
            <circle cx="50" cy="110" r="1" />
            <circle cx="260" cy="20" r="1" />
            <circle cx="120" cy="25" r="1.1" />
          </g>
          <circle
            cx="180"
            cy="135"
            r={noite ? 46 : 92}
            fill={cor.sol}
            filter="url(#tremido)"
          />

          {/* Nuvens e pássaros */}
          <g className="nuvem" fill="#F1EFE8" filter="url(#tremido)">
            <circle cx="20" cy="70" r="13" />
            <circle cx="38" cy="64" r="17" />
            <circle cx="58" cy="72" r="12" />
            <rect x="8" y="72" width="62" height="12" rx="6" />
          </g>
          <g className="nuvem2" fill="#F1EFE8" filter="url(#tremido)">
            <circle cx="10" cy="112" r="10" />
            <circle cx="26" cy="106" r="14" />
            <circle cx="42" cy="113" r="9" />
            <rect x="2" y="113" width="48" height="9" rx="4.5" />
          </g>
          <g
            className="passaros"
            fill="none"
            stroke="#042C53"
            strokeWidth={1.6}
            strokeLinecap="round"
          >
            <path d="M280 70 q5 -5 10 0 q5 -5 10 0" />
            <path d="M302 84 q4 -4 8 0 q4 -4 8 0" />
          </g>

          {/* Morros, grama e espelho d'água */}
          <path
            d="M0 214 Q60 186 120 204 Q190 180 250 200 Q310 184 360 206 V330 H0Z"
            fill={cor.morro}
            filter="url(#tremido)"
          />
          <rect y="218" width="360" height="112" fill={cor.grama} />
          <rect
            x="40"
            y="236"
            width="280"
            height="16"
            rx="2"
            fill={cor.lago}
            opacity={0.85}
          />

          {/* Congresso */}
          <g filter="url(#tremido)">
            <rect x="56" y="212" width="248" height="10" fill="#F1EFE8" />
            <rect x="56" y="219" width="248" height="3" fill="#B4B2A9" />

            <g className="parte" onClick={() => setParte("tor")}>
              <rect x="168" y="84" width="11" height="128" fill="#F1EFE8" />
              <rect x="175" y="84" width="4" height="128" fill="#D3D1C7" />
              <rect x="183" y="84" width="11" height="128" fill="#F1EFE8" />
              <rect x="190" y="84" width="4" height="128" fill="#D3D1C7" />
              <rect x="168" y="118" width="26" height="5" fill="#D3D1C7" />
              <g opacity={noite ? 1 : 0} fill="#FAC775">
                <rect x="170" y="94" width="4" height="3" />
                <rect x="170" y="140" width="4" height="3" />
                <rect x="170" y="170" width="4" height="3" />
                <rect x="185" y="104" width="4" height="3" />
                <rect x="185" y="150" width="4" height="3" />
                <rect x="185" y="190" width="4" height="3" />
              </g>
            </g>

            <g className="parte" onClick={() => setParte("cam")}>
              <path d="M84 190 Q120 236 156 190 Z" fill="#F1EFE8" />
              <ellipse cx="120" cy="190" rx="36" ry="4" fill="#D3D1C7" />
            </g>

            <g className="parte" onClick={() => setParte("sen")}>
              <path d="M210 212 Q236 168 262 212 Z" fill="#F1EFE8" />
              <path
                d="M236 182 Q254 194 262 212 L246 212 Q244 196 236 182Z"
                fill="#D3D1C7"
              />
            </g>
          </g>

          {/* Cerrado */}
          <g filter="url(#tremido)">
            <path
              d="M22 330 Q26 290 18 262 M18 280 Q8 270 4 262 M22 296 Q34 284 40 276"
              stroke="#712B13"
              strokeWidth={5}
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="8" cy="256" r="16" fill="#27500A" />
            <circle cx="30" cy="250" r="19" fill="#3B6D11" />
            <circle cx="44" cy="268" r="13" fill="#27500A" />
            <path
              d="M334 330 Q330 296 340 270 M336 290 Q350 280 356 270"
              stroke="#712B13"
              strokeWidth={5}
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="336" cy="258" r="20" fill="#FAC775" />
            <circle cx="354" cy="266" r="14" fill="#EF9F27" />
            <circle cx="320" cy="270" r="11" fill="#FAC775" />
          </g>

          {/* Textura granulada por cima de tudo */}
          <rect
            width="360"
            height="330"
            filter="url(#granulado)"
            opacity={0.38}
            style={{ pointerEvents: "none", mixBlendMode: "multiply" }}
          />
        </g>
      </svg>

      <button
        onClick={() => setNoite(!noite)}
        className="mt-3 w-full rounded-lg border border-[#B4B2A9] bg-white py-2 text-sm font-medium hover:bg-[#F1EFE8]"
      >
        {noite ? "☀️ Ver de dia" : "🌙 Ver à noite"}
      </button>

      <div className="mt-3 min-h-[72px] rounded-xl bg-white p-4 text-sm text-[#5F5E5A]">
        {parte ? (
          <>
            <p className="mb-1 text-base font-semibold text-[#2C2C2A]">
              {INFO[parte].titulo}
            </p>
            <p>{INFO[parte].texto}</p>
          </>
        ) : (
          <p>Toque na cúpula, no prato ou nas torres.</p>
        )}
      </div>
    </div>
  );
}
