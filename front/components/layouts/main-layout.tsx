type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="mt-10 flex justify-center items-center">
      <div className="container px-4 py-8 text-center w-[600px]">
        {children}
      </div>
    </div>
  );
}