import BrandMark from './brand-mark';

type BrandLogoProps = {
	className?: string;
	textTone?: 'light' | 'dark' | 'adaptive';
	showTagline?: boolean;
	markAnimated?: boolean;
};

const BrandLogo = ({
	className = '',
	textTone = 'dark',
	showTagline = true,
	markAnimated = false,
}: BrandLogoProps) => {
	const textColor =
		textTone === 'light'
			? 'text-white'
			: textTone === 'adaptive'
				? 'text-foreground dark:text-white'
				: 'text-foreground';
	const mutedColor =
		textTone === 'light'
			? 'text-white/70'
			: textTone === 'adaptive'
				? 'text-muted-foreground dark:text-white/70'
				: 'text-muted-foreground';

	return (
		<div className={`inline-flex items-center gap-4 ${className}`}>
			<BrandMark
				className="w-14 shrink-0 sm:w-16"
				animated={markAnimated}
			/>
			<div className="flex flex-col leading-none">
				<span
					className={`text-xs font-semibold uppercase tracking-[0.45em] ${mutedColor}`}
				>
					Personal Brand
				</span>
				<span
					className={`mt-2 text-2xl font-black uppercase tracking-[0.28em] ${textColor}`}
				>
					Frankman
				</span>
				<span className="mt-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.38em] text-brand-red">
					<span className="inline-block h-2 w-2 rounded-full bg-brand-yellow" />
					Dev
				</span>
				{showTagline ? (
					<span
						className={`mt-3 text-[11px] uppercase tracking-[0.36em] ${mutedColor}`}
					>
						Full-Stack Software Developer
					</span>
				) : null}
			</div>
		</div>
	);
};

export default BrandLogo;
