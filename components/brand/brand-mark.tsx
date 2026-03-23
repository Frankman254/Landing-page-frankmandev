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

			</div>
	);
};

export default BrandMark;
