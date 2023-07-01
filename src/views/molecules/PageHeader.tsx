function PageHeader({ children, className, title, description }:PageHeaderProps) {
    return (
        <header className={`${className} mb-8`}>
            <div className={`flex flex-col`}>
                <h1 className="text-heading font-bold font-primary">{title}</h1>
                {description && <p className="font-secondary">{description}</p>}
            </div>

            {children && children}
        </header>
    )
}

export default PageHeader;

interface PageHeaderProps {
    children?: React.ReactNode;
    className?: string;
    title: string;
    description?: string;
}
