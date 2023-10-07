
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <aside className='w-64 m-4 bg-cyan-100 rounded-xl'>
        <nav>
          <ul className='flex flex-col gap-4 p-4'>
            <li>
              <a href='#'>Account</a>
            </li>
            <li>
              <a href='#'>Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className='p-4'>{children}</main>
    </>
  )
}