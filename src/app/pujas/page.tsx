import Image from 'next/image';
import Link from 'next/link';
import { pujas } from '@/lib/pujas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PujasPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4">
        Discover the Pandals
      </h1>
      <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
        Journey through the heart of Kolkata and witness the artistic grandeur of its most celebrated Durga Puja pandals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pujas.map((puja) => (
          <Link href={`/pujas/${puja.slug}`} key={puja.slug} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={puja.imageUrl}
                    alt={`Image of ${puja.name}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={puja.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl mb-2">{puja.name}</CardTitle>
                <Badge variant="secondary">{puja.location}</Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
