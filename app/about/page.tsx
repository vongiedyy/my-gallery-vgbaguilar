import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto px-4 py-12">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
          Von Giedy Aguilar
        </h1>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
  
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full flex flex-col justify-center transition-shadow hover:shadow-md">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            About Me
          </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
           <p>
              I am currently a second-year student at Ateneo de Davao University, taking up Computer Science. 
            </p>
            <p>
              Beyond my academic life, I am a passionate photographer who loves capturing the quiet moments and dramatic landscapes that most people walk right past. 
            </p>
            <p>
              This gallery serves as my personal digital archive. It is a space where I can organize my favorite shots, experiment with web design, and share my perspective with the world.
            </p>
          </div>
        </div>
        <div className="flex justify-center relative z-10 md:scale-110">

          <div className="relative p-1.5 rounded-full shadow-lg bg-[conic-gradient(#ea4335,#4285f4,#34a853,#fbbc05,#ea4335)] group">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white bg-gray-100 group-hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/photos/profile.jpg"
                alt="Von Giedy Aguilar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full flex flex-col justify-center transition-shadow hover:shadow-md">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            Beyond the Lens
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
            <p>
              When I'm not out taking photos or editing them, my interests are kind of all over the map. 
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2 text-left">
              <li>Videography</li>
              <li>Graphic design</li>
              <li>Watching random documentaries</li>
              <li>Programming and working on website concepts, like upcoming phone awards</li>
              <li>Playing video games, especially relaxing and building out worlds in Minecraft</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
