
interface ContainerPros {
    children: React.ReactNode
    className?: string
}
const Container = (props: ContainerPros)=>{
    const { children, className = "" } = props
    return (
        <div className={`px-4 sm:px-8 md:px-12 py-8 md:py-20 lg:px-40 lg:py-36 max-w-3xl mx-auto ${className}`}>
        {children}
        </div>
    )
}
export default Container;