export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-5 justify-center mx-auto my-6 w-full p-5">
      {children}
    </div>
  );
}
