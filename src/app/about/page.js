"use client"
import Navbar from "../../../components/header";
import BlenderViewer from "../../../components/blenderViever"
export default function About(){
  return(<>
   <Navbar />
   <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center p-8 gap-8">
      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-gray-300">What is Synaptium?</h1>
        <p className="text-lg leading-relaxed text-gray-400">
          Synaptium is a cutting-edge synthetic compound discovered at the Mid-Atlantic Ridge,
          enabling ultra-efficient energy conduction and active magnetic field generation. Its unique
          structure allows submersibles to operate under extreme oceanic pressures while maintaining
          zero-emission performance. This technology powers our ASUVs, offering scalable,
          sustainable access to previously unreachable deep-sea resources.
        </p>
      </div>
      <div>

        
      </div>
      {/* Blender Viewer Section */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
        <BlenderViewer url="synaptium.glb" />
      </div>
    </div>

  </>
   
  )
}