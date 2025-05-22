interface SectionProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Section({ children, className = "", narrow = false }: SectionProps) {
  const paddingClass = className.includes("py-") ? "" : "py-16";

  return (
    <section className={`${paddingClass} ${className}`}>
      <div className={`mx-auto px-4 sm:px-10 ${narrow ? "max-w-3xl" : "container"}`}>
        {children}
      </div>
    </section>
  );
}

