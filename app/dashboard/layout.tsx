import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col'>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>

      <footer className="flex font-mono justify-center items-center h-16 bg-stone-100 text-stone-500 text-sm">
        <div className="flex justify-between items-center w-full px-4">
          <p> <a rel="me" href="https://masto.ai/@dan">🐘 @dan</a> </p>
          <div className="font-normal">
            <a href="/rss.xml">📮 RSS</a>
          </div>

        </div>
      </footer>
    </div>
  );
}