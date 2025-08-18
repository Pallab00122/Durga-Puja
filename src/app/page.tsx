
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Header from '@/components/common/Header';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Assuming Durga Puja starts on October 1st, 2025
    const countdownDate = new Date('2025-10-01T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center my-8">
      <h2 className="font-headline text-3xl text-primary mb-4">The Festivities Begin In</h2>
      <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto p-4 bg-card/50 rounded-lg">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <span className="text-4xl font-bold text-accent">{value}</span>
            <span className="text-sm uppercase text-muted-foreground">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 bg-background p-4 text-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-primary/20 mb-8 spotlight-effect">
          <Image
            src="/images/front.jpg"
            alt="Maa Durga's Face"
            width={400}
            height={400}
            priority
            className="object-cover w-full h-full"
            data-ai-hint="durga face goddess"
          />
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-2">
          কলকাতা দুর্গাপূজা
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-4 max-w-3xl">
          Durga Puja in Kolkata is not just a festival; it's a grand celebration of art, culture, and devotion. It marks the victory of Goddess Durga over the demon Mahishasur, symbolizing the triumph of good over evil. For five days, the city comes alive with magnificent pandals, stunning idols, and a joyous spirit that captivates everyone.
        </p>
        <CountdownTimer />
        <Button asChild size="lg" className="font-bold text-lg mt-4">
          <Link href="/pujas">
            Explore Pandals
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </main>
    </div>
  );
}
