export interface Puja {
  slug: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export const pujas: Puja[] = [
  {
    slug: 'kumartuli-park',
    name: 'Kumartuli Park',
    location: 'North Kolkata',
    description: 'Known for its traditional idol-making heritage, Kumartuli Park offers an artistic and authentic Durga Puja experience, showcasing the craftsmanship of the artisans.',
    imageUrl: '/images/kumartuli.jpg',
    imageHint: 'traditional idol',
  },
  {
    slug: 'mohammad-ali-park',
    name: 'Mohammad Ali Park',
    location: 'Central Kolkata',
    description: 'Famous for its magnificent architecture and grand pandals, Mohammad Ali Park often replicates famous monuments from around the world, attracting huge crowds every year.',
    imageUrl: '/images/mhommadali.jpg',
    imageHint: 'grand pandal',
  },
  {
    slug: 'ballygunge-cultural-association',
    name: 'Ballygunge Cultural Association',
    location: 'South Kolkata',
    description: 'One of the most popular pujas in South Kolkata, it is known for its thematic presentations and vibrant cultural programs that run throughout the festival.',
    imageUrl: '/images/ballygunge.jpg',
    imageHint: 'cultural festival',
  },
  {
    slug: 'college-square',
    name: 'College Square',
    location: 'Central Kolkata',
    description: 'Set by a picturesque lake, the College Square puja is renowned for its stunning lighting and reflections on the water, creating a magical ambiance in the evenings.',
    imageUrl: '/images/collegesquare.jpg',
    imageHint: 'lake reflection',
  },
  {
    slug: 'santosh-mitra-square',
    name: 'Santosh Mitra Square',
    location: 'Central Kolkata',
    description: 'This puja is famous for its extravagant and often controversial themes that draw massive attention. It\'s a must-visit for those looking for something unique and spectacular.',
    imageUrl: '/images/santosemitro.jpg',
    imageHint: 'spectacular theme',
  },
  {
    slug: 'ekdalia-evergreen-club',
    name: 'Ekdalia Evergreen Club',
    location: 'South Kolkata',
    description: 'With a legacy of creating beautiful, traditional idols and artistic pandals, Ekdalia Evergreen has been a consistent crowd-puller for decades.',
    imageUrl: '/images/ekdalia.jpg',
    imageHint: 'artistic pandal',
  },
];
