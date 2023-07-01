function SiteModalHeader({ title, description, className, children }:any) {
    return (
        <header className={`mb-6 ${className}`}>

            <div className="flex-none">
                <h2 className="text-2xl font-bold">{title}</h2>
                {description && <p>{description}</p>}
            </div>

            {children &&
                <div className="w-full">
                    {children}
                </div>
            }
        </header>
    )
}

export default SiteModalHeader;
