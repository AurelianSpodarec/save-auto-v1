function AuthHeader({ title, description }:AuthHeaderProps) {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
            <div className="text-left">
                <h2 className="font-bold text-xl lg:text-2xl text-[#020100] mb-2" dangerouslySetInnerHTML={{ __html: title }} />       
                {description && <p className="text-[#667085] text-sm">{description}</p>}
            </div>
        </div>
    )
}

export default AuthHeader;

interface AuthHeaderProps {
    title: string;
    description?: string;
}
