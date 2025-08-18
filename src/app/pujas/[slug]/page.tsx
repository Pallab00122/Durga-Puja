import { notFound } from 'next/navigation';
import Image from 'next/image';
import { pujas } from '@/lib/pujas';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

type PujaDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return pujas.map((puja) => ({
    slug: puja.slug,
  }));
}

export default function PujaDetailPage({ params }: PujaDetailPageProps) {
  const puja = pujas.find((p) => p.slug === params.slug);

  if (!puja) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="w-full">
           <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
             <Image
              src={puja.imageUrl}
              alt={`Image of ${puja.name}`}
              fill
              className="object-cover"
              data-ai-hint={puja.imageHint}
            />
           </div>
        </div>
        <div className="flex flex-col space-y-6">
          <Badge variant="secondary" className="w-fit">{puja.location}</Badge>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{puja.name}</h1>
          <p className="text-lg text-foreground/80">
            {puja.description}
          </p>

          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <MapPin className="h-6 w-6 text-accent" />
                How to Get There
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Directions to this pandal are best found using local transport or ride-sharing apps. The location is well-known as <strong className="text-foreground">{puja.name}</strong> in <strong className="text-foreground">{puja.location}</strong>. Look for signs and follow the crowds during the festival!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
