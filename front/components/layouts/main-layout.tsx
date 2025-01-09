type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 text-center">
        {children}
      </div>
    </div>
  );
}