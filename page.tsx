

import React, { useState, useEffect } from 'react';



export function ImageLoader() {
  const [imageUrl, setImageUrl] = useState('');

  const loadImage = async () => {
    try {
      const response = await fetch('/images/your-image.jpg');
      if (!response.ok) {
        throw new Error('Failed to load image');
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (error) {
      console.error('Error loading image:', error);
    }
  };

  useEffect(() => {
    // Load image when component mounts
    loadImage();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            
            target=""
            rel="noopener noreferrer"
          >
            
            
          </a>
        </div>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
        
          className=""
          target=""
          rel="noopener noreferrer"
        >
          
         
        </a>

        <a
          
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target=""
          rel="noopener noreferrer"
        >
          
          
        </a>

        <a
          
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target=""
          rel="noopener noreferrer"
        >
          
         
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target=""
          rel="noopener noreferrer"
        >
          
          
        </a>
       
        
        
        <div>
      <button onClick={loadImage}>Load Image</button>
      {imageUrl && <img src={imageUrl} alt="Loaded Image" />}
    </div>
    </div>
    </main>
    
  );

  

}

