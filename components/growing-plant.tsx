"use client";

type GrowingPlantProps = {
  className?: string;
};

const GrowingPlant = ({ className = "" }: GrowingPlantProps) => {
  return (
    <div className={`w-full max-w-[320px] ${className}`}>
      <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-black/35 px-6 py-8 shadow-2xl backdrop-blur-md">
        <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-x-8 bottom-4 h-20 rounded-full bg-primary/15 blur-3xl" />

        <svg
          viewBox="0 0 240 320"
          className="relative z-10 mx-auto w-full text-primary"
          role="img"
          aria-label="Planta creciendo animada"
        >
          <defs>
            <linearGradient id="stemGradient" x1="120" y1="70" x2="120" y2="270">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
            <linearGradient id="leafGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#bbf7d0" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
            <radialGradient id="bloomGradient" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="#dcfce7" />
              <stop offset="100%" stopColor="#4ade80" />
            </radialGradient>
          </defs>

          <g className="plant-body">
            <path
              d="M120 256 C120 238 120 225 120 205 C120 170 128 145 122 110 C120 95 120 82 120 70"
              fill="none"
              stroke="url(#stemGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              className="draw-path"
            />

            <path
              d="M121 205 C98 194 85 178 80 155"
              fill="none"
              stroke="url(#stemGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              className="draw-path branch"
            />

            <path
              d="M119 176 C142 164 156 147 160 126"
              fill="none"
              stroke="url(#stemGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              className="draw-path branch branch-delay"
            />

            <path
              d="M121 136 C101 124 90 110 88 92"
              fill="none"
              stroke="url(#stemGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              className="draw-path branch top-branch"
            />

            <path
              d="M117 212 C90 216 72 202 67 184 C92 181 110 191 117 212Z"
              fill="url(#leafGradient)"
              className="leaf leaf-delay-1"
            />
            <path
              d="M123 184 C152 186 169 172 173 152 C148 151 130 164 123 184Z"
              fill="url(#leafGradient)"
              className="leaf leaf-delay-2"
            />
            <path
              d="M118 146 C94 148 78 137 73 122 C96 120 111 131 118 146Z"
              fill="url(#leafGradient)"
              className="leaf leaf-delay-3"
            />
            <path
              d="M123 110 C145 113 157 103 161 87 C141 86 128 95 123 110Z"
              fill="url(#leafGradient)"
              className="leaf leaf-delay-4"
            />

            <g className="bloom bloom-delay">
              <circle cx="120" cy="64" r="18" fill="url(#bloomGradient)" />
              <circle cx="120" cy="64" r="6" fill="#14532d" />
              <circle cx="102" cy="64" r="9" fill="#86efac" />
              <circle cx="138" cy="64" r="9" fill="#86efac" />
              <circle cx="120" cy="46" r="9" fill="#86efac" />
              <circle cx="120" cy="82" r="9" fill="#86efac" />
            </g>

            <circle cx="120" cy="65" r="26" fill="#4ade80" className="glow-ring" />
          </g>

          <g className="sparkles">
            <circle cx="78" cy="82" r="2.5" fill="#dcfce7" className="spark spark-1" />
            <circle cx="166" cy="96" r="2" fill="#bbf7d0" className="spark spark-2" />
            <circle cx="147" cy="52" r="2.5" fill="#dcfce7" className="spark spark-3" />
          </g>

          <g>
            <ellipse cx="120" cy="272" rx="54" ry="12" fill="#2f1b12" opacity="0.95" />
            <ellipse cx="120" cy="268" rx="72" ry="20" fill="#4a2f20" opacity="0.95" />
            <ellipse cx="120" cy="264" rx="84" ry="22" fill="#5b3824" opacity="0.9" />
            <ellipse cx="120" cy="257" rx="12" ry="8" fill="#7c4a2d" className="seed" />
          </g>
        </svg>
      </div>

      <style jsx>{`
        .plant-body {
          transform-origin: 120px 256px;
          animation: sway 4.5s ease-in-out 2.8s infinite;
        }

        .draw-path {
          stroke-dasharray: 280;
          stroke-dashoffset: 280;
          animation: draw 1.3s ease-out forwards;
        }

        .branch {
          animation-delay: 0.95s;
        }

        .branch-delay {
          animation-delay: 1.2s;
        }

        .top-branch {
          animation-delay: 1.45s;
        }

        .leaf {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          transform: scale(0.2);
          animation: leaf-pop 0.8s cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
        }

        .leaf-delay-1 {
          animation-delay: 1.15s;
        }

        .leaf-delay-2 {
          animation-delay: 1.4s;
        }

        .leaf-delay-3 {
          animation-delay: 1.65s;
        }

        .leaf-delay-4 {
          animation-delay: 1.9s;
        }

        .bloom {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          transform: scale(0.15);
          animation: bloom 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .bloom-delay {
          animation-delay: 2.05s;
        }

        .glow-ring {
          opacity: 0;
          animation: glow 3.2s ease-in-out 2.2s infinite;
        }

        .seed {
          transform-origin: center;
          animation: seed-settle 1.2s ease-out 0.2s forwards;
        }

        .spark {
          opacity: 0;
          animation: sparkle 3s ease-in-out infinite;
        }

        .spark-1 {
          animation-delay: 2.2s;
        }

        .spark-2 {
          animation-delay: 2.55s;
        }

        .spark-3 {
          animation-delay: 2.85s;
        }

        @keyframes draw {
          from {
            stroke-dashoffset: 280;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes leaf-pop {
          0% {
            opacity: 0;
            transform: scale(0.2) rotate(-10deg);
          }
          75% {
            opacity: 1;
            transform: scale(1.08) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bloom {
          0% {
            opacity: 0;
            transform: scale(0.15);
          }
          70% {
            opacity: 1;
            transform: scale(1.08);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.08;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.22;
            transform: scale(1.08);
          }
        }

        @keyframes sway {
          0%,
          100% {
            transform: rotate(-1.5deg);
          }
          50% {
            transform: rotate(1.5deg);
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
            transform: translateY(8px) scale(0.5);
          }
          35% {
            opacity: 0.9;
          }
          60% {
            opacity: 0.45;
            transform: translateY(-10px) scale(1);
          }
        }

        @keyframes seed-settle {
          0% {
            opacity: 1;
            transform: translateY(-4px) scale(1);
          }
          100% {
            opacity: 0.35;
            transform: translateY(0) scale(0.78);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .plant-body,
          .draw-path,
          .leaf,
          .bloom,
          .glow-ring,
          .seed,
          .spark {
            animation: none;
            opacity: 1;
            transform: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GrowingPlant;
