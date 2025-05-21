interface SectionProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Section({ children, className = "", narrow = false }: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className={`mx-auto px-4 sm:px-10 ${narrow ? "max-w-3xl" : "container"}`}>
        {children}
      </div>
    </section>
  );
}
