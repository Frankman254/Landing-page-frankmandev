"use client";

type BrandMarkProps = {
	className?: string;
	animated?: boolean;
	title?: string;
};

const BrandMark = ({
	className = '',
	animated = false,
	title = 'Frankman Dev brand mark',
}: BrandMarkProps) => {
	return (
		<div className={`inline-flex ${className}`}>
			<svg
				viewBox="0 0 128 128"
				className={animated ? 'brand-mark is-animated' : 'brand-mark'}
				role="img"
				aria-label={title}
			>
				<rect
					className="bg-shape"
					x="10"
					y="10"
					width="108"
					height="108"
					rx="28"
				/>
				<rect
					className="yellow-bar"
					x="28"
					y="26"
					width="16"
					height="76"
					rx="8"
				/>
				<rect
					className="red-bar"
					x="28"
					y="26"
					width="48"
					height="14"
					rx="7"
				/>
				<rect
					className="white-bar"
					x="28"
					y="56"
					width="40"
					height="12"
					rx="6"
				/>
				<path
					className="d-stroke"
					d="M80 26 H91 C101 26 108 33 108 43 V85 C108 95 101 102 91 102 H80"
				/>
				<path
					className="d-fill"
					d="M80 38 H89 C94 38 98 42 98 47 V81 C98 86 94 90 89 90 H80 Z"
				/>
				<circle className="dot-yellow" cx="92" cy="23" r="4" />
				<circle className="dot-red" cx="103" cy="108" r="5" />
			</svg>

			<style jsx>{`
				.brand-mark {
					width: 100%;
					height: auto;
				}

				.bg-shape {
					fill: #0c0c0f;
				}

				.yellow-bar,
				.dot-yellow {
					fill: #f5c400;
				}

				.red-bar,
				.dot-red {
					fill: #d72638;
				}

				.white-bar,
				.d-fill {
					fill: #f7f3eb;
				}

				.d-stroke {
					fill: none;
					stroke: #f7f3eb;
					stroke-width: 12;
					stroke-linecap: round;
					stroke-linejoin: round;
				}

				.is-animated .bg-shape {
					transform-origin: center;
					animation: bgReveal 0.7s ease-out forwards;
				}

				.is-animated .yellow-bar,
				.is-animated .red-bar,
				.is-animated .white-bar,
				.is-animated .d-fill,
				.is-animated .dot-yellow,
				.is-animated .dot-red {
					opacity: 0;
				}

				.is-animated .yellow-bar {
					transform-origin: center bottom;
					animation: growUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s
						forwards;
				}

				.is-animated .red-bar {
					transform-origin: left center;
					animation: drawAcross 0.7s cubic-bezier(0.16, 1, 0.3, 1)
						0.8s forwards;
				}

				.is-animated .white-bar {
					transform-origin: left center;
					animation: drawAcross 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1s
						forwards;
				}

				.is-animated .d-stroke {
					stroke-dasharray: 210;
					stroke-dashoffset: 210;
					animation: strokeDraw 1s ease-out 1.15s forwards;
				}

				.is-animated .d-fill {
					animation: fadeLift 0.7s ease-out 1.45s forwards;
				}

				.is-animated .dot-yellow {
					animation: sparkleUp 1.8s ease-out 1.55s infinite;
				}

				.is-animated .dot-red {
					animation: pulseDot 2.6s ease-in-out 1.85s infinite;
				}

				@keyframes bgReveal {
					from {
						opacity: 0;
						transform: scale(0.92);
					}
					to {
						opacity: 1;
						transform: scale(1);
					}
				}

				@keyframes growUp {
					from {
						opacity: 0;
						transform: scaleY(0.2);
					}
					to {
						opacity: 1;
						transform: scaleY(1);
					}
				}

				@keyframes drawAcross {
					from {
						opacity: 0;
						transform: scaleX(0.2);
					}
					to {
						opacity: 1;
						transform: scaleX(1);
					}
				}

				@keyframes strokeDraw {
					to {
						stroke-dashoffset: 0;
					}
				}

				@keyframes fadeLift {
					from {
						opacity: 0;
						transform: translateY(6px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes sparkleUp {
					0%,
					100% {
						opacity: 0;
						transform: translateY(6px) scale(0.7);
					}
					30% {
						opacity: 1;
						transform: translateY(-3px) scale(1);
					}
					60% {
						opacity: 0.25;
						transform: translateY(-9px) scale(0.9);
					}
				}

				@keyframes pulseDot {
					0%,
					100% {
						opacity: 0.35;
						transform: scale(0.9);
					}
					50% {
						opacity: 1;
						transform: scale(1.12);
					}
				}

				@media (prefers-reduced-motion: reduce) {
					.is-animated .bg-shape,
					.is-animated .yellow-bar,
					.is-animated .red-bar,
					.is-animated .white-bar,
					.is-animated .d-stroke,
					.is-animated .d-fill,
					.is-animated .dot-yellow,
					.is-animated .dot-red {
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

export default BrandMark;
