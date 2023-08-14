import { Copyright } from '@/components/Copyright';
import { EmpityMemories } from '@/components/EmpityMemories';
import { Hero } from '@/components/Hero';
import { Signin } from '@/components/Signin';

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/*left*/}
      <div className="flex flex-col items-start justify-between px-28 py-28 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">

        {/*blur*/}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/*stripes*/}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

        {/*sign in */}
        <Signin />

        {/*hero*/}
        <Hero />

        {/*copyright*/}
        <Copyright />

      </div>

      {/* right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmpityMemories />
      </div>
    </main>
  );
}
