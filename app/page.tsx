import PhotoCard from '../components/PhotoCard'; // Import the new PhotoCard

const photos = [
  {
    id: 1,
    url: '/photos/hongkong1.JPG',
    title: 'Macau - France',
    description: 'Almost feel like I am in France while capturing this photo.',
  },
   {
    id: 2,
    url: '/photos/hongkong5.JPG',
    title: 'Disneyland 2',
    description: 'Long exposure shot of the castle on Disneyland',
  },
    {
    id: 3,
    url: '/photos/car1.jpg',
    title: 'Vios Meet-Up - Tagum',
    description: 'First ever freelance work as a photographer.',
  },
    {
    id: 4,
    url: '/photos/hongkong4.jpg',
    title: 'Disneyland 2',
    description: 'Carousel long exposure shot in Disneyland.',
  },
    {
    id: 5,
    url: '/photos/boracay1.jpg',
    title: 'Boracay Escaped',
    description: 'Sunset shot of a small both on the sea in Boracay.',
  },
  {
    id: 6,
    url: '/photos/mountain1.jpg',
    title: 'Bukidnon - Mountain',
    description: 'Capturing the beautiful landscape of Bukdinon mountains.',
  },
  {
    id: 7,
    url: '/photos/coastal1.jpg',
    title: 'Coastal Road - Sea View',
    description: 'Looking at the different side of the coastal road.',
  },
  
  {
   id: 8,
   url: '/photos/street-night3.jpg',
   title: 'Magsaysay Park',
   description: 'Honoring our great national hero - Jose Rizal at Magsaysay Park.',
 },
  {
    id: 9,
    url: '/photos/ateneo1.JPG',
    title: 'Ateneo Finster',
    description: 'First ever DSLR photo of Ateneo I captured.',
  },
   {
    id: 10,
    url: '/photos/sea2.jpg',
    title: 'Samal Escaped',
    description: 'This moment captured my interest in this tyle of photography.',
  },
  {
   id: 11,
   url: '/photos/street-night2.jpg',
   title: '7-11 Night',
   description: 'After midnight at the streets of Claveria, Davao.',
 },
 {
   id: 12,
   url: '/photos/street-night1.jpg',
   title: 'San-Pedro Sangunian',
   description: 'After midnight at the streets of San Pedro, Davao.',
 },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-medium tracking-tight text-gray-900">
          Favorites
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Map over the data and render a component for each item */}
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}
