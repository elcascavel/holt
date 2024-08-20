interface BadgeProps {
    text: string;
    color?: string;
}

export function Badge({ text, color }: BadgeProps) {
    return (
        <div className="relative select-none items-center whitespace-nowrap rounded-lg bg-pink-900 py-1.5 px-3 font-sans text-xs font-bold uppercase">
            <span className="text-pink-300">{text}</span>
        </div>
    );
};

export default Badge;