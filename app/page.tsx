import PhotoCard from '../components/PhotoCard'; // Import the new PhotoCard

const photos = [
  {
    id: 1,
    url: '/photos/hongkong1.jpg',
    title: 'Macau - France',
    description: 'Caught the first light hitting the peaks. The cold was worth it.',
  },
   {
    id: 2,
    url: '/photos/hongkong5.jpg',
    title: 'Disneyland 2',
    description: 'Long exposure shot of the tide coming in at dusk.',
  },
    {
    id: 3,
    url: '/photos/car1.jpg',
    title: 'Vios Meet-Up - Tagum',
    description: 'Looking straight up into the changing leaves.',
  },
    {
    id: 4,
    url: '/photos/hongkong4.jpg',
    title: 'Disneyland 2',
    description: 'Looking straight up into the changing leaves.',
  },
    {
    id: 5,
    url: '/photos/boracay1.jpg',
    title: 'Boracay Escaped',
    description: 'Looking straight up into the changing leaves.',
  },
  {
    id: 6,
    url: '/photos/mountain1.jpg',
    title: 'Bukidnon - Mountain',
    description: 'Looking straight up into the changing leaves.',
  },
  {
    id: 7,
    url: '/photos/coastal1.jpg',
    title: 'Coastal Road - Sea View',
    description: 'Looking straight up into the changing leaves.',
  },
  
  {
   id: 8,
   url: '/photos/street-night3.jpg',
   title: 'Magsaysay Park',
   description: 'Long exposure shot of the tide coming in at dusk.',
 },
  {
    id: 9,
    url: '/photos/ateneo1.jpg',
    title: 'Ateneo Finster',
    description: 'Looking straight up into the changing leaves.',
  },
   {
    id: 10,
    url: '/photos/sea2.jpg',
    title: 'Disneyland 2',
    description: 'Looking straight up into the changing leaves.',
  },
  {
   id: 11,
   url: '/photos/street-night2.jpg',
   title: '7-11 Night',
   description: 'Long exposure shot of the tide coming in at dusk.',
 },
 {
   id: 12,
   url: '/photos/street-night1.jpg',
   title: 'San-Pedro Sangunian',
   description: 'Long exposure shot of the tide coming in at dusk.',
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