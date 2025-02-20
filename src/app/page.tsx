'use client'
import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { StickyScrollRevealDemo } from "@/components/ui/Sticky";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Parallax } from "react-scroll-parallax";
import { FocusCards } from "@/components/ui/focus-cards";
import { Footer } from "@/components/ui/Footer";


export default function Home() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkucV8kG5_I5re9K4JR6o1KjKkSm-skKDTw&s",
    "https://images.unsplash.com/photo-1568430462989-44163eb1752f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhbGV8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkucV8kG5_I5re9K4JR6o1KjKkSm-skKDTw&s",
    "https://images.unsplash.com/photo-1568430462989-44163eb1752f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhbGV8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg",
    "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkucV8kG5_I5re9K4JR6o1KjKkSm-skKDTw&s",
    "https://images.unsplash.com/photo-1568430462989-44163eb1752f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhbGV8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkucV8kG5_I5re9K4JR6o1KjKkSm-skKDTw&s",
    "https://images.unsplash.com/photo-1568430462989-44163eb1752f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhbGV8ZW58MHx8MHx8fDA%3D",
  ];
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];




  return (
    <>
      <Navbar />

      <div className="relative dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 pb-80">
        <ParallaxProvider>
          <Parallax speed={20}>
            <div className="flex">
              <div className="my-20 mx-60">
                <p className="w-1/3 text-xl text-white font-mono">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem fugiat, libero sequi. Hello!!!
                </p>
              </div>
            </div>
          </Parallax>
        </ParallaxProvider>

        <div className="mb-12">
          <ParallaxProvider>
            <ParallaxBanner
              layers={[
                {
                  image: 'https://media.istockphoto.com/id/520138253/photo/container-ship-in-the-harbor-in-asia.jpg?s=612x612&w=0&k=20&c=Ihg1RS88f6SYIjFNa6wePep5ycWI-TZ26LHjktyFBHE=',
                  speed: 18
                }
              ]}
              className="aspect-[2/1] rounded-2xl"
            />
          </ParallaxProvider>
        </div>

        <div className="mx-60 flex flex-row space-x-96 my-20">
          <h1 className="text-blue-600 font-mono">/01 content</h1>
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl text-white">The extraordinary journey of a regular customer</h1>

            <p className="text-white font-mono text-sm rounded-lg font-semibold my-8">
              Strategy
              Design
              Web
              Imagine a place as big as 400,000 square feet, full of amazing wonders such as an indoor real-life tornado simulator or a full-size and authentic WWII German submarine. We’re talking about a place where kids and their entire family are not only allowed to touch...
            </p>
          </div>
        </div>

        {/* StickyScrollRevealDemo is placed at the bottom, laying over */}

        <div className="absolute bottom-0 m-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] z-10">
          <StickyScrollRevealDemo />
        </div>

      </div>
      <ParallaxProvider>
        <Parallax speed={20}>
          <div className="mx-60 flex flex-row space-x-96 my-96 mb-8">
            <h1 className="text-blue-600 font-mono mb-20 font-semibold">/02 content</h1>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">The extraordinary journey of a regular customer</h1>

              <p className="text-black font-mono text-sm rounded-lg mb-8 font-semibold my-8">
                Strategy
                Design
                Web
                Imagine a place as big as 400,000 square feet, full of amazing wonders such as an indoor real-life tornado simulator or a full-size and authentic WWII German submarine. We’re talking about a place where kids and their entire family are not only allowed to touch...
              </p>
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>

      <div className="m-1">
        <ParallaxScroll images={images} />
      </div>
      <ParallaxProvider>
        <Parallax speed={20}>
          <div className="mx-60 flex flex-row space-x-96 my-20 mb-10">
            <h1 className="text-blue-500 font-mono mb-5 font-semibold">/03 content</h1>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">The extraordinary journey of a regular customer</h1>
              <p className="text-black font-mono text-sm rounded-lg mb-3 font-semibold my-10">
                Strategy
                Design
                Web
                Imagine a place as big as 400,000 square feet, full of amazing wonders such as an indoor real-life tornado simulator or a full-size and authentic WWII German submarine. We’re talking about a place where kids and their entire family are not only allowed to touch...
              </p>
            </div>
          </div >
        </Parallax>
      </ParallaxProvider>

      <div>
        <FocusCards cards={cards} />
      </div>

      <div className="mt-24">
        <Footer />
      </div>



    </>
  );
}
