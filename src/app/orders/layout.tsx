export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <header className="bg-white text-center py-4 border-gray-200">
          <h1 className="text-3xl font-bold text-[#FB923C]">بـــولـــوز</h1>
        </header>
        <nav></nav>
        {children}
      </section>
    )
  }