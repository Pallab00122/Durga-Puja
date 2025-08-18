
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CalendarDays, Sparkles, HeartHandshake, Waves, Sun, Moon, Star, Clock } from 'lucide-react';

const schedule = [
    {
        day: "Mahalaya",
        icon: Sun,
        title: "The Awakening",
        description: "This day marks the beginning of the 'Devi Paksha' and the end of 'Pitri Paksha'. It is believed that Maa Durga begins her journey to her paternal home on Earth on this day. The air fills with devotion as households tune into the pre-dawn radio broadcast of 'Mahisasuramardini,' a timeless collection of shlokas and devotional songs that narrate the goddess's creation and victory.",
        timings: "The 'Mahisasuramardini' broadcast is traditionally aired at 4 AM."
    },
    {
        day: "Maha Sasthi",
        icon: Moon,
        title: "Unveiling the Divine Face",
        description: "The festival officially begins. The main ritual is the 'Bodhon,' which involves unveiling the face of the Durga idol. This is followed by the 'Adhibas,' a ritual where the goddess is formally welcomed and her divine presence is invoked into the idol. Pandals come alive with the sound of the 'dhaak' (a traditional drum).",
        timings: "Bodhon rituals are typically performed in the evening."
    },
    {
        day: "Maha Saptami",
        icon: Star,
        title: "The First Day of Worship",
        description: "The day begins with the 'Kola Bou Snan,' or the bathing of the banana plant. A small banana plant is bathed in the holy waters of the Ganga, draped in a red-bordered white saree, and placed beside Lord Ganesha, symbolizing the divine presence of the goddess's energy. This is followed by the 'Pran Pratisthan,' where the divine spirit is formally infused into the idol.",
        timings: "The 'Kola Bou Snan' usually takes place in the early morning, shortly after sunrise."
    },
    {
        day: "Maha Ashtami",
        icon: Sparkles,
        title: "The Peak of Devotion",
        description: "One of the most significant days. Devotees offer 'Pushpanjali' (floral offerings) in the morning. The highlight is the 'Sandhi Puja,' a powerful 48-minute ritual performed at the exact moment the Ashtami tithi ends and the Nabami tithi begins. It commemorates the climax of Durga's battle with Mahishasur. This is often followed by the 'Dhunuchi Naach,' an ecstatic devotional dance with earthen pots filled with burning coconut husks and incense.",
        timings: "Pushpanjali is offered in the morning, typically between 9 AM and 11 AM. Sandhi Puja occurs at a precise time in the late evening, which varies annually based on the lunar calendar."
    },
    {
        day: "Maha Nabami",
        icon: HeartHandshake,
        title: "A Day of Feasting and Joy",
        description: "As the main pujas conclude with a 'Maha Arati,' Nabami is largely a day of celebration. It's marked by grand feasts ('bhog') where communities come together to share food. The atmosphere is joyous with cultural performances, music, and dance as everyone soaks in the final full day of festivities.",
        timings: "Bhog is usually served in the afternoon, while cultural programs and the Maha Arati take place in the evening."
    },
    {
        day: "Vijaya Dashami",
        icon: Waves,
        title: "Farewell and New Beginnings",
        description: "The festival concludes with bittersweet emotions. Married women participate in 'Sindoor Khela,' smearing vermilion on each other and the idol, wishing for a long and happy married life. In the evening, the idols are taken in grand processions for 'Visarjan' (immersion) in the river. This act symbolizes the goddess's return to her heavenly abode, with the promise of her return next year: 'Aasche Bochor Abar Hobe!'",
        timings: "'Sindoor Khela' happens from morning until early afternoon. The 'Visarjan' processions usually begin in the late afternoon and continue into the night."
    },
]


export default function RitualsPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
        Puja Schedule & Rituals
      </h1>
      <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
        Experience the sacred traditions and vibrant rituals that form the heart and soul of the Durga Puja festival, from Mahalaya to Dashami.
      </p>

      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {schedule.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="font-headline text-2xl text-left">
                    <div className="flex items-center gap-3">
                        <item.icon className="h-6 w-6 text-accent"/>
                        <span>{item.day}: <span className="text-foreground/80 font-body text-xl">{item.title}</span></span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/80 pt-2 pl-12 space-y-4">
                   <p>{item.description}</p>
                   <div className="flex items-center gap-2 text-base bg-card/50 p-3 rounded-md">
                        <Clock className="h-5 w-5 text-accent"/>
                        <div>
                            <span className="font-bold text-foreground">Typical Timings:</span>
                            <p className="text-muted-foreground">{item.timings}</p>
                        </div>
                   </div>
                </AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
