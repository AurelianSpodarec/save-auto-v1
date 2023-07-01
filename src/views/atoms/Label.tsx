function Label({ id, label, children, htmlFor, optional, className }:LabelProps) {
    return (
        <label id={id} htmlFor={htmlFor} className={`${className} block mb-2 text-sm font-medium leading-6 text-gray-900`}>
            {label ? <span>{label}</span> : children}
            {optional && <span className="ml-1 font-normal text-[#C4C4C4]">(optional)</span>}
        </label>
    )
}

export default Label;

interface LabelProps {
    id?: string;
    label?: string;
    children?: React.ReactNode;
    htmlFor?: string;
    optional?: boolean;
    className?: string;
}
