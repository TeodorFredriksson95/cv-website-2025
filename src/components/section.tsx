interface SectionProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Section({ children, className = "", narrow = false }: SectionProps) {
  const paddingClass = className.includes("py-") ? "" : "md:py-16 py-8";
  const paddingTop = className.includes("pt-0") ? "pb-8 md:pb-16" : "md:py-16 py-8"

  return (
    <section className={` ${className} ${paddingTop}`}>
      <div className={`mx-auto px-4 sm:px-10 ${narrow ? "max-w-3xl" : "container"}`}>
        {children}
      </div>
    </section>
  );
}

