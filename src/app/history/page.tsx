
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { BookOpen } from 'lucide-react';
// import Header from '@/components/common/Header';

// export default function HistoryPage() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <Header />
//       <div className="container mx-auto max-w-5xl py-12 px-4 flex-1">
//       <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
//         History & Significance
//       </h1>
//       <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
//         Delve into the rich history and profound cultural significance of Durga Puja, a festival that transcends religion and becomes a celebration of life itself.
//       </p>

//       <div className="space-y-8">
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2 font-headline">
//               <BookOpen className="h-6 w-6 text-accent" />
//               Origins of Durga Puja in Kolkata
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="text-foreground/80 space-y-4">
//             <p>
//               The tradition of Durga Puja in Kolkata can be traced back to the late 16th century. The first grand puja is often credited to the Sabarna Roy Choudhury family of Barisha in 1610. However, it was during the British colonial era that community pujas, known as 'Sarbojanin Pujas', began to flourish. These pujas became a symbol of cultural resistance and a way for communities to come together, fostering a sense of unity and identity.
//             </p>
//             <p>
//               What started as a private family affair for the zamindars (landlords) evolved into a massive public spectacle, driven by competition and creativity among different neighborhoods.
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2 font-headline">
//               <BookOpen className="h-6 w-6 text-accent" />
//               The Mythological Story of Maa Durga
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="text-foreground/80 space-y-4">
//             <p>
//               The festival celebrates the victory of the ten-armed goddess Durga over the deceptive and powerful buffalo demon, Mahishasur. According to mythology, Mahishasur had earned a boon of invincibility from Lord Brahma, making him unbeatable by any man or god. As he wreaked havoc across the heavens and earth, the gods combined their divine energies to create Durga.
//             </p>
//             <p>
//               Armed with celestial weapons from various deities, Goddess Durga fought Mahishasur for nine days and nights, finally vanquishing him on the tenth day, known as Vijaya Dashami. This epic battle symbolizes the ultimate triumph of good over evil.
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2 font-headline">
//                <BookOpen className="h-6 w-6 text-accent" />
//               Evolution of Celebrations
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="text-foreground/80 space-y-4">
//             <p>
//               From traditional 'Bonedi Bari' (ancestral home) pujas with classic idols to modern-day thematic pandals that are marvels of art and architecture, the celebration has evolved significantly. Today, Durga Puja in Kolkata is a UNESCO Intangible Cultural Heritage, recognized for its unique blend of religious fervor, artistic expression, and community participation.
//             </p>
//             <p>
//               The themes of the pandals often reflect contemporary social issues, global events, or intricate artistic concepts, making each pandal a unique experience. The festival has become a massive canvas for artists, sculptors, and designers to showcase their talent to the world.
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';
import { Timeline, TimelineItem } from '@/components/common/Timeline';
import { BookOpen, Users, Feather, Globe } from 'lucide-react';
import './history.css';
import kolkataImage from '@/images/kolkata_puja.jpg';
import britishImage from '@/images/british_puja.jpg';
import mahishasurImage from '@/images/mohisasur.jpg';
import oldPujaImage from '@/images/old_puja.jpg';


export default function HistoryPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
        History and Significance of the Puja
      </h1>
      <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
        Journey through time and discover how a family ritual transformed into a global festival of art and devotion.
      </p>

      <Timeline>
        <TimelineItem
          icon={BookOpen}
          title="কলকাতায় দুর্গাপূজার উৎস"
          era="16th Century"
        >
          <div className="md:col-span-2">
            <p className="text-foreground/80 text-lg">
              কলকাতায় দুর্গাপূজার ঐতিহ্য ১৬শ শতকের শেষভাগ পর্যন্ত খুঁজে পাওয়া যায়। প্রথম বৃহৎ পূজার কৃতিত্ব সাধারণত বরিশার সাবর্ণ রায় চৌধুরী পরিবারের (১৬১০ খ্রিস্টাব্দে) বলে ধরা হয়। যা একসময় জমিদারদের (ভূস্বামীদের) ব্যক্তিগত পারিবারিক আয়োজন ছিল, তা ধীরে ধীরে এক বিশাল জনসমাগমের উৎসবে পরিণত হয়।
            </p>
          </div>
          <div className="md:col-span-1">
            <Image src={kolkataImage} width={600} height={400} alt="Bonedi Bari Puja" className="rounded-lg shadow-md" data-ai-hint="traditional indian family" />
          </div>
        </TimelineItem>

        <TimelineItem
          icon={Users}
          title="সর্বজনীন পূজার সূচনা"
          era="Colonial Era"
        >
          <div className="md:col-span-2">
            <p className="text-foreground/80 text-lg">
              ব্রিটিশ ঔপনিবেশিক যুগে ‘সর্বজনীন পূজা’-র সূচনা ঘটে। এই সর্বজনীন পূজাগুলি সাংস্কৃতিক প্রতিবাদের প্রতীক হয়ে ওঠে এবং সমাজকে একত্রিত করার এক বিশেষ মাধ্যম ছিল, যা ঐক্য ও পরিচয়ের বোধকে আরও দৃঢ় করেছিল। ভিন্ন ভিন্ন পাড়ার মধ্যে প্রতিযোগিতা ও সৃজনশীলতার মাধ্যমে এই পূজা ক্রমেই জনপ্রিয়তা লাভ করে।
            </p>
          </div>
          <div className="md:col-span-1">
            <Image src={britishImage} width={600} height={400} alt="Community Puja Poster" className="rounded-lg shadow-md" data-ai-hint="vintage indian poster" />
          </div>
        </TimelineItem>

        <TimelineItem
          icon={Feather}
          title="মহিষাসুরমর্দিনী"
          era="Mythological Core"
        >
          <div className="md:col-span-2 space-y-4">
            <p className="text-foreground/80 text-lg">
              দশভুজা দেবী দুর্গার হাতে ছলনাময় ও শক্তিশালী অসুর মহিষাসুরের পরাজয়কেই দুর্গাপূজায় উদযাপন করা হয়। পুরাণ অনুযায়ী, মহিষাসুর ব্রহ্মার কাছ থেকে এমন এক বর লাভ করেছিল যাতে কোনো মানুষ বা দেবতা তাকে পরাজিত করতে না পারে। এই বর নিয়ে সে স্বর্গ ও পৃথিবীতে তান্ডব চালাতে শুরু করলে দেবতারা তাদের ঐশ্বরিক শক্তিকে একত্রিত করে দেবী দুর্গার সৃষ্টি করেন।
            </p>
            <p className="text-foreground/80 text-lg">
              ঐশ্বরিক জ্যোতি থেকে এক অতুলনীয় রূপসী ও শক্তিময়ী দেবীর আবির্ভাব ঘটে। মহাদেব তাকে ত্রিশূল দেন, বিষ্ণু দেন চক্র, বায়ু দেন ধনুক-বাণ, আর ইন্দ্র দেন বজ্র। দেবীর দশটি হাতে প্রতিটি অস্ত্রই দেবতাদের সম্মিলিত শক্তির প্রতীক। সিংহবাহিনী দেবী দুর্গা টানা নয় রাত ও নয় দিন মহিষাসুরের সঙ্গে যুদ্ধ করেন এবং দশম দিনে (বিজয়া দশমী) তাকে বধ করেন।
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-xl">
              এই মহাকাব্যিক যুদ্ধ শুভর উপর অশুভের চূড়ান্ত বিজয়ের প্রতীক।
            </blockquote>
          </div>
          <div className="md:col-span-1">
            <Image src={mahishasurImage} width={600} height={400} alt="Goddess Durga defeating Mahishasur" className="rounded-lg shadow-md" data-ai-hint="goddess durga painting" />
          </div>
        </TimelineItem>

        <TimelineItem
          icon={Globe}
          title="উদযাপনের বিবর্তন"
          era="Modern & Global Era"
        >
          <div className="md:col-span-2 space-y-4">
            <p className="text-foreground/80 text-lg">
              ঐতিহ্যবাহী বনেদি বাড়ির পূজা যেখানে ছিল চিরন্তন রূপের প্রতিমা, আজ তা রূপান্তরিত হয়েছে আধুনিক থিমের প্যান্ডেলে, যা শিল্পকলা ও স্থাপত্যের বিস্ময়। সময়ের সঙ্গে সঙ্গে দুর্গাপূজা এক বিশাল পরিবর্তনের সাক্ষী হয়েছে। আজ কলকাতার দুর্গাপূজা ইউনেস্কোর Intangible Cultural Heritage স্বীকৃতি পেয়েছে, যা ধর্মীয় ভক্তি, শিল্পসাধনা এবং সামষ্টিক অংশগ্রহণের এক অনন্য মেলবন্ধন।
            </p>
            <p className="text-foreground/80 text-lg">
              প্যান্ডেলের থিমগুলোতে আজ প্রায়ই প্রতিফলিত হয় সমসাময়িক সামাজিক সমস্যা, বৈশ্বিক ঘটনা বা সূক্ষ্ম শিল্পভাবনা, ফলে প্রতিটি প্যান্ডেল হয়ে ওঠে এক অনন্য অভিজ্ঞতা। এই উৎসব এখন শিল্পী, ভাস্কর ও নকশাবিদদের জন্য হয়ে উঠেছে এক বিশাল ক্যানভাস, যেখানে তারা নিজেদের প্রতিভা সমগ্র বিশ্বের সামনে তুলে ধরেন।
            </p>
          </div>
          <div className="md:col-span-1">
            <Image src={oldPujaImage} width={600} height={400} alt="Modern Thematic Pandal" className="rounded-lg shadow-md" data-ai-hint="modern art installation" />
          </div>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
