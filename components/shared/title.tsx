interface TitleProps {
    title: string
    subtitle: string
}

const Title = (props: TitleProps) => {
    const { title, subtitle } = props

    return (
        <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card-bg/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground backdrop-blur-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-red" />
                {title}
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-foreground md:text-4xl">{subtitle}</h2>
            <div className="mt-5 flex items-center gap-2">
                <span className="h-1.5 w-16 rounded-full bg-brand-yellow" />
                <span className="h-1.5 w-8 rounded-full bg-brand-red" />
            </div>
        </div>
    )
}
export default Title;