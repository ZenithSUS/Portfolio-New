export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex md:flex-row gap-5 justify-center my-2 mx-2 md:mx-3 md:my-6 w-full md:p-5 h-full">
      {children}
    </div>
  );
}
