export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[.5fr_1fr] relative gap-2 max-w-[1440px] mx-auto">
      {children}
    </div>
  );
}
