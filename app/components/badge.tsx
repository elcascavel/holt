import { SiLaravel } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

interface BadgeProps {
    text: string;
}

const badgeStyles: { [key: string]: { color: string; icon: JSX.Element } } = {
    "Laravel": { color: "bg-red-500 text-white", icon: <SiLaravel className="w-4 h-4" /> },
    "Vue": { color: "bg-green-500 text-white", icon: <FaVuejs className="w-4 h-4"/> },
    "Next.js": { color: "bg-black text-white", icon: <RiNextjsFill className="w-4 h-4"/> }
};

export function Badge({ text }: BadgeProps) {
    const style = badgeStyles[text] || { color: "bg-neutral-500 text-white", icon: null }; // Fallback style

    return (
        <div className={`relative select-none flex items-center gap-2 whitespace-nowrap rounded-lg py-1.5 px-3 font-sans text-xs font-bold uppercase ${style.color}`}>
            {style.icon && style.icon}
            <span>{text}</span>
        </div>
    );
}

export default Badge;
