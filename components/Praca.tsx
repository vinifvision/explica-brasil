"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import StrokeText from "./StrokeText";
import OptionWheel from "./OptionWheel";

type Parte = "pla" | "con" | "cam" | "sen" | "tor" | "stf" | "jus";

const INFO: Record<Parte, { titulo: string; texto: string }> = {
  pla: {
    titulo: "Palácio do Planalto",
    texto:
      "É onde o Presidente da República trabalha. O Executivo governa: coloca as leis em prática, cuida do orçamento e comanda os ministérios.",
  },
  con: {
    titulo: "Congresso Nacional",
    texto:
      "Cria as leis e fiscaliza o governo. Toque no prato, na cúpula ou nas torres.",
  },
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
  stf: {
    titulo: "Supremo Tribunal Federal",
    texto:
      "É o guardião da Constituição. Seus 11 ministros decidem se leis e ações do governo respeitam as regras do país.",
  },
  jus: {
    titulo: "A Justiça (estátua)",
    texto:
      "A escultura em frente ao STF mostra uma mulher de olhos vendados segurando uma espada: a justiça deve valer igual para todos.",
  },
};

const PODERES: { nome: string; rotulo: string; parte: Parte }[] = [
  { nome: "Executivo", rotulo: "Poder Executivo", parte: "pla" },
  { nome: "Legislativo", rotulo: "Poder Legislativo", parte: "con" },
  { nome: "Judiciário", rotulo: "Poder Judiciário", parte: "stf" },
];

function Arvore({ x, ipe }: { x: number; ipe?: boolean }) {
  const c1 = ipe ? "#FAC775" : "#27500A";
  const c2 = ipe ? "#EF9F27" : "#3B6D11";
  return (
    <g filter="url(#tremido)">
      <path
        d={`M${x} 340 Q${x + 4} 290 ${x - 4} 262 M${x - 4} 280 Q${x - 14} 270 ${x - 18} 262 M${x} 296 Q${x + 12} 284 ${x + 18} 276`}
        stroke="#712B13"
        strokeWidth={5}
        fill="none"
        strokeLinecap="round"
      />
      <circle cx={x - 14} cy={256} r={16} fill={c1} />
      <circle cx={x + 8} cy={250} r={19} fill={c2} />
      <circle cx={x + 22} cy={268} r={13} fill={c1} />
    </g>
  );
}

export default function Praca() {
  const [noite, setNoite] = useState(false);
  const [poder, setPoder] = useState(1);
  const [parte, setParte] = useState<Parte>("con");
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const atualizar = () => setDesktop(mq.matches);
    atualizar();
    mq.addEventListener("change", atualizar);
    return () => mq.removeEventListener("change", atualizar);
  }, []);

  const cor = {
    ceu: noite ? "#042C53" : "#185FA5",
    sol: noite ? "#F1EFE8" : "#EF9F27",
    morroLonge: noite ? "#085041" : "#1D9E75",
    morro: noite ? "#04342C" : "#0F6E56",
    arbusto: noite ? "#02201A" : "#085041",
    grama: noite ? "#173404" : "#639922",
    lago: noite ? "#0C447C" : "#378ADD",
    vidro: noite ? "#FAC775" : "#85B7EB",
  };

  function irPara(i: number) {
    const novo = Math.max(0, Math.min(2, i));
    setPoder(novo);
    setParte(PODERES[novo].parte);
  }

  // "Câmera": no computador mostra uma área maior e deixa o prédio à direita
  const viewBox = desktop ? "-210 -40 600 440" : "-30 0 420 360";

  return (
    <section className="relative w-full overflow-hidden bg-[#173404] text-white md:h-screen">
      <style>{`
        .praca * { transition: fill 1.2s ease, opacity 1.2s ease, r 1.2s ease; }
        .camera { transition: transform 0.9s cubic-bezier(.65,0,.35,1); }
        .nuvem { animation: deriva 50s linear infinite; }
        .nuvem2 { animation: deriva 70s linear infinite; animation-delay: -30s; }
        .nuvem3 { animation: deriva 60s linear infinite; animation-delay: -45s; }
        .passaros { animation: voo 3s ease-in-out infinite; }
        .parte { cursor: pointer; }
        .parte:hover { opacity: 0.9; }
        .aparecer { animation: aparecer 0.5s ease both; }
        @keyframes deriva { from { transform: translateX(-300px); } to { transform: translateX(520px); } }
        @keyframes voo { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes aparecer { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
      `}</style>

      {/* ========== A ARTE (palco) ========== */}
      <svg
        viewBox={viewBox}
        preserveAspectRatio={desktop ? "xMidYMid slice" : "xMidYMid meet"}
        className="praca block w-full md:absolute md:inset-0 md:h-full"
        role="img"
        aria-label="Praça dos Três Poderes em estilo pôster"
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
        </defs>

        {/* CAMADA FIXA: céu, estrelas, sol, nuvens */}
        <rect x="-300" y="-100" width="1000" height="600" fill={cor.ceu} />
        <g opacity={noite ? 1 : 0} fill="#F1EFE8">
          {[
            [-170, 10],
            [-120, 60],
            [-60, 20],
            [-150, 130],
            [-20, 90],
            [30, 30],
            [80, 60],
            [120, 10],
            [260, 20],
            [300, 40],
            [330, 90],
            [370, 15],
            [50, 110],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={1.1} />
          ))}
        </g>
        <circle
          cx="180"
          cy="135"
          r={noite ? 46 : 92}
          fill={cor.sol}
          filter="url(#tremido)"
        />
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
          className="nuvem3"
          fill="#F1EFE8"
          filter="url(#tremido)"
          opacity={0.8}
        >
          <circle cx="10" cy="20" r="8" />
          <circle cx="24" cy="15" r="11" />
          <circle cx="38" cy="21" r="7" />
          <rect x="2" y="21" width="42" height="7" rx="3.5" />
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
          <path d="M-90 50 q4 -4 8 0 q4 -4 8 0" />
        </g>

        {/* MORRO DISTANTE: anda em 1/4 da velocidade */}
        <g
          className="camera"
          style={{ transform: `translateX(${-poder * 90}px)` }}
        >
          <path
            d="M-300 200 Q-200 170 -100 192 Q0 166 100 188 Q200 160 300 186 Q400 168 500 190 Q600 164 700 186 Q800 170 900 192 V500 H-300Z"
            fill={cor.morroLonge}
            filter="url(#tremido)"
          />
        </g>

        {/* MORRO PRÓXIMO: anda na metade da velocidade, com arbustos */}
        <g
          className="camera"
          style={{ transform: `translateX(${-poder * 180}px)` }}
        >
          <path
            d="M-300 210 Q-240 186 -180 204 Q-110 180 -50 200 Q10 184 60 206 Q120 186 180 204 Q250 180 310 200 Q370 184 430 206 Q490 182 550 202 Q620 186 680 200 Q740 182 800 204 Q860 188 920 206 V500 H-300Z"
            fill={cor.morro}
            filter="url(#tremido)"
          />
          <g fill={cor.arbusto} filter="url(#tremido)">
            {[-260, -150, -30, 90, 240, 390, 510, 640, 770, 880].map((x, i) => (
              <circle key={x} cx={x} cy={207 + (i % 3)} r={6 + (i % 3)} />
            ))}
          </g>
        </g>

        {/* CAMADA DA FRENTE: o mundo com os 3 prédios */}
        <g
          className="camera"
          style={{ transform: `translateX(${-poder * 360}px)` }}
        >
          <rect x="-400" y="218" width="1900" height="300" fill={cor.grama} />

          {/* 1. PALÁCIO DO PLANALTO */}
          <g
            className="parte"
            filter="url(#tremido)"
            onClick={() => setParte("pla")}
          >
            <rect x="40" y="212" width="280" height="4" fill="#D3D1C7" />
            <polygon points="20,214 70,176 78,176 30,214" fill="#F1EFE8" />
            <rect
              x="84"
              y="172"
              width="200"
              height="34"
              fill={cor.vidro}
              opacity={0.9}
            />
            {[104, 124, 144, 164, 184, 204, 224, 244, 264].map((x) => (
              <line
                key={x}
                x1={x}
                y1="172"
                x2={x}
                y2="206"
                stroke="#F1EFE8"
                strokeWidth={1}
                opacity={0.6}
              />
            ))}
            <rect x="70" y="204" width="230" height="5" fill="#F1EFE8" />
            <rect x="60" y="164" width="250" height="8" fill="#F1EFE8" />
            <rect x="60" y="171" width="250" height="2" fill="#D3D1C7" />
            {[80, 110, 140, 170, 200, 230, 260, 290].map((x) => (
              <path
                key={x}
                d={`M${x - 7} 172 Q${x - 1} 194 ${x} 214 Q${x + 1} 194 ${x + 7} 172 Z`}
                fill="#F1EFE8"
              />
            ))}
          </g>

          {/* 2. CONGRESSO NACIONAL */}
          <g transform="translate(360 0)">
            <rect
              x="40"
              y="236"
              width="280"
              height="16"
              rx="2"
              fill={cor.lago}
              opacity={0.85}
            />
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
          </g>

          {/* 3. SUPREMO TRIBUNAL FEDERAL */}
          <g transform="translate(720 0)">
            <g
              className="parte"
              filter="url(#tremido)"
              onClick={() => setParte("stf")}
            >
              <rect x="50" y="212" width="260" height="4" fill="#D3D1C7" />
              <rect
                x="86"
                y="166"
                width="188"
                height="40"
                fill={cor.vidro}
                opacity={0.9}
              />
              <rect x="62" y="158" width="236" height="8" fill="#F1EFE8" />
              {[74, 110, 146, 182, 218, 254].map((x) => (
                <path
                  key={x}
                  d={`M${x} 166 Q${x + 18} 262 ${x + 36} 166`}
                  stroke="#F1EFE8"
                  strokeWidth={5}
                  fill="none"
                />
              ))}
            </g>
            <g
              className="parte"
              filter="url(#tremido)"
              onClick={() => setParte("jus")}
            >
              <rect x="172" y="200" width="16" height="14" fill="#B4B2A9" />
              <path
                d="M174 200 L175 186 Q180 180 185 186 L186 200 Z"
                fill="#444441"
              />
              <circle cx="180" cy="178" r="4" fill="#444441" />
              <rect x="176" y="176.5" width="8" height="2" fill="#F1EFE8" />
              <line
                x1="170"
                y1="192"
                x2="190"
                y2="192"
                stroke="#2C2C2A"
                strokeWidth={1.5}
              />
            </g>
          </g>

          {/* Cerrado espalhado pelo mundo */}
          <Arvore x={-160} ipe />
          <Arvore x={-80} />
          <Arvore x={24} />
          <Arvore x={330} ipe />
          <Arvore x={690} />
          <Arvore x={1056} ipe />
          <Arvore x={1140} />
        </g>

        {/* Textura granulada por cima de tudo */}
        <rect
          x="-300"
          y="-100"
          width="1000"
          height="600"
          filter="url(#granulado)"
          opacity={0.38}
          style={{ pointerEvents: "none", mixBlendMode: "multiply" }}
        />
      </svg>

      {/* ========== INTERFACE POR CIMA DA ARTE ========== */}

      <h1 className="z-20 absolute left-5 top-5 w-56 md:left-12 md:top-8 md:w-96">
        <StrokeText
          text="Explica! Brasil"
          strokeColor="#009C3B"
          strokeStyle="solid"
          strokeWidth={1.4}
          dashLength={10}
          drawDuration={1.6}
          fillDelay={0.2}
          stagger={0.05}
          ease="power2.out"
          trigger="mount"
          fillMode="wipe"
          wipeFrom="left"
          fontSize={128}
          fontWeight={800}
          letterSpacing={-4}
          marching={false}
          shadow={false}
          fontFamily="var(--font-bricolage)"
          reverse={false}
          hoverRedraw
        />
      </h1>

      <button
        onClick={() => setNoite(!noite)}
        aria-label={noite ? "Ver de dia" : "Ver à noite"}
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/30 md:right-12 md:top-8"
      >
        {noite ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Painel: roda + card de explicação */}
      <div className="relative flex flex-col gap-4 px-5 pb-10 pt-4 md:pointer-events-none md:absolute md:inset-y-0 md:left-0 md:w-[44%] md:justify-center md:gap-6 md:bg-linear-to-r md:from-black/70 md:via-black/40 md:to-transparent md:px-12 md:py-0">
        <div className="h-40 md:pointer-events-auto md:h-52">
          <OptionWheel
            className="font-display"
            items={PODERES.map((p) => p.nome)}
            defaultSelected={1}
            onChange={(i) => irPara(i)}
            textColor="rgba(255,255,255,0.45)"
            activeColor="#FFFFFF"
            fontSize={desktop ? 2.5 : 2}
            spacing={1.25}
            tilt={14}
            blur={1.5}
            fade={0.35}
            inset={0}
          />
        </div>

        <div
          key={parte}
          className="aparecer max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:pointer-events-auto md:max-h-[55vh] md:overflow-y-auto md:bg-black/40 md:p-8"
        >
          <span className="mb-4 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/80">
            {PODERES[poder].rotulo}
          </span>
          <h2 className="font-display mb-3 text-2xl font-semibold md:text-4xl italic">
            {INFO[parte].titulo}
          </h2>
          <p className="leading-relaxed text-white/85 md:text-lg">
            {INFO[parte].texto}
          </p>
        </div>
      </div>
    </section>
  );
}
