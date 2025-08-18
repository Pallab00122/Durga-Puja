
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils } from 'lucide-react';
import Image from 'next/image';
import kathiImage from '@/images/Kathi_Rolls.jpg';
import biryaniImage from '@/images/Biryani.jpg';
import fuchkaImage from '@/images/Fuchka.jpg';
import moghlaiImage from '@/images/Moghlai_Paratha.jpg';
import sweetsImage from '@/images/Bengali_Sweets.jpg';
import luchiImage from '@/images/Luchi.jpg';

const foodItems = [
  {
    name: 'Kathi Rolls',
    description: 'A Kolkata specialty, these are skewers of kebab meat or paneer wrapped in a paratha. A must-have street food experience.',
    image: kathiImage,
    imageHint: 'kathi roll food'
  },
  {
    name: 'Biryani',
    description: 'The Kolkata-style biryani, with its subtle flavors and the signature potato and egg, is an emotion in itself.',
    image: biryaniImage,
    imageHint: 'biryani food'
  },
  {
    name: 'Phuchka',
    description: 'Known as "Pani Puri" elsewhere, Kolkata\'s phuchka has a unique spicy and tangy flavor that is addictive.',
    image: fuchkaImage,
    imageHint: 'puchka golgappa'
  },
  {
    name: 'Moghlai Paratha',
    description: 'A rich, deep-fried paratha stuffed with minced meat and egg. It\'s a hearty and delicious meal.',
    image: moghlaiImage,
    imageHint: 'paratha food'
  },
  {
    name: 'Bengali Sweets',
    description: 'From Roshogolla to Sandesh, the array of Bengali sweets (mishti) is a paradise for anyone with a sweet tooth.',
    image: sweetsImage,
    imageHint: 'bengali sweets'
  },
  {
    name: 'Luchi & Alur Dom',
    description: 'A classic Bengali breakfast of fluffy fried bread (luchi) with a spicy and savory potato curry.',
    image: luchiImage,
    imageHint: 'luchi potato'
  },
];


export default function FoodPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
        Food Lover's Guide
      </h1>
      <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
        Durga Puja is a feast for the senses, and the food is no exception. Explore the culinary delights that make the festival even more special.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodItems.map((food) => (
          <Card key={food.name} className="overflow-hidden flex flex-col">
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={food.image}
                  alt={`Image of ${food.name}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint={food.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline text-2xl mb-2 flex items-center gap-2">
                <Utensils className="h-6 w-6 text-accent" />
                {food.name}
              </CardTitle>
              <p className="text-foreground/80 flex-grow">{food.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-8 text-primary">Recommended Food Hubs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Card className="p-6">
            <CardTitle className="font-headline text-xl">Dacres Lane</CardTitle>
            <CardContent className="p-2 text-foreground/80">A legendary street food destination with a variety of iconic Bengali and Mughlai dishes.</CardContent>
          </Card>
          <Card className="p-6">
            <CardTitle className="font-headline text-xl">Park Street</CardTitle>
            <CardContent className="p-2 text-foreground/80">Famous for its restaurants and pubs, Park Street offers a more upscale dining experience during the Pujas.</CardContent>
          </Card>
          <Card className="p-6">
            <CardTitle className="font-headline text-xl">Ballygunge Place</CardTitle>
            <CardContent className="p-2 text-foreground/80">The go-to area for authentic Bengali cuisine, from traditional thalis to modern interpretations.</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
