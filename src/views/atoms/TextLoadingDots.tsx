import useTextLoadingDots from "hooks/useTextLoadingDots";

const TextLoadingDots = ({ text, isActive }:TextLoadingDotsProps) => {
    const {dots } = useTextLoadingDots();

    return (
        <p>
            {text}
            {isActive && <span >{dots}</span>}
        </p>
    );
};

export default TextLoadingDots;

interface TextLoadingDotsProps {
    text: string;
    isActive?: boolean;
}
