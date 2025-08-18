
import Link from 'next/link';
import { Flower2, Utensils } from 'lucide-react';
import MusicPlayer from '@/components/MusicPlayer';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Flower2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              Kolkata Durga Pujas
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2">
          <nav className="flex items-center">
             <Button variant="ghost" asChild>
                <Link href="/pujas">Pandals</Link>
             </Button>
             <Button variant="ghost" asChild>
                <Link href="/history">History</Link>
             </Button>
             <Button variant="ghost" asChild>
                <Link href="/rituals">Rituals</Link>
             </Button>
             <Button variant="ghost" asChild>
                <Link href="/food">Food</Link>
             </Button>
          </nav>
          <div className="flex items-center">
            <MusicPlayer />
          </div>
        </div>
      </div>
    </header>
  );
}
