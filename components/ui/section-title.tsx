import type { ElementType, ReactNode } from "react";

interface SectionTitleProps {
  icon: ElementType;
  children: ReactNode;
  className?: string;
}

const SectionTitle = ({
  icon: Icon,
  children,
  className,
}: SectionTitleProps) => {
  return (
    <h2
      className={`mb-8 flex items-center gap-3 text-3xl font-bold ${className}`}
    >
      <Icon className="h-6 w-6 text-drac-marcelin-400" />
      <div>{children}</div>
    </h2>
  );
};

export default SectionTitle;
