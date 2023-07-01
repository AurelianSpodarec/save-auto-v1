function Card({ title, children, className }:CardProps) {
    return (
        <div className={`
            rounded-md overflow-hidden border border-stroke border-gray-100 bg-white p-4 lg:p-6 mb-6
            ${className} 
        `}>
            {children ? children : title}
        </div>
    )
}

export default Card;

interface CardProps {
    title?: string;
    children?: React.ReactNode;
    className?: string;
}
