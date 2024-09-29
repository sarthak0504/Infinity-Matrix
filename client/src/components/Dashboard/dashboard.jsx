import React from 'react';
import { Link } from 'react-router-dom';
import ai_svg from '../../assets/ai.svg';
import vl_svg from '../../assets/vl.svg';
import oc_svg from '../../assets/onCourse.svg';
import tp_svg from '../../assets/TraingProgram.svg';
import wo_svg from '../../assets/workOppor.svg';


export default function StudentDashboard() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-center  rounded-lg py-10">
    <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl space-y-6 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 leading-relaxed">
                Building bridges between students, educators, skill hubs, and industries to create
                a seamless pipeline of skilled talent!
            </h2>
            <hr className="border-gray-400 w-1/3 mx-auto" />
        </div>
    </div>
</aside>


<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:mt-20 p-5">
  {/* AI Career Guidance */}
  <div className="bg-blue-100 rounded-lg p-5 flex flex-col text-center min-h-[240px]">
    <img
      src={ai_svg} // Replace with the correct path to your icon
      alt="AI Career Guidance Icon"
      className="mx-auto w-16 h-16 mb-4"
    />
    <h3 className="text-lg font-bold text-black">AI Career Guidance</h3>
    <p className="text-black">Find your path</p>
    <div className="flex-grow"></div> {/* Filler to push the button to the bottom */}
    <Link to="/ai-career-guidance" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
      Get Started
    </Link>
  </div>

  {/* Virtual Labs */}
  <div className="bg-blue-100 rounded-lg p-5 flex flex-col text-center min-h-[240px]">
    <img
      src={vl_svg} // Replace with the correct path to your icon
      alt="Virtual Labs Icon"
      className="mx-auto w-16 h-16 mb-4"
    />
    <h3 className="text-lg font-bold text-black">Virtual Labs</h3>
    <p className="text-black">Learn by doing</p>
    <div className="flex-grow"></div> {/* Filler to push the button to the bottom */}
    <Link to="/virtual-labs" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
      Get Started
    </Link>
  </div>

  {/* Online Courses */}
  <div className="bg-blue-100 rounded-lg p-5 flex flex-col text-center min-h-[240px]">
    <img
      src={oc_svg} // Replace with the correct path to your icon
      alt="Online Courses Icon"
      className="mx-auto w-16 h-16 mb-4"
    />
    <h3 className="text-lg font-bold text-black">Online Courses</h3>
    <p className="text-black">Find your path</p>
    <div className="flex-grow"></div> {/* Filler to push the button to the bottom */}
    <Link to="/online-courses" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
      Get Started
    </Link>
  </div>

  {/* Training Programs */}
  <div className="bg-blue-100 rounded-lg p-5 flex flex-col text-center min-h-[240px]">
    <img
      src={tp_svg} // Replace with the correct path to your icon
      alt="Training Programs Icon"
      className="mx-auto w-16 h-16 mb-4"
    />
    <h3 className="text-lg font-bold text-black">Training Programs</h3>
    <p className="text-black">Get hands-on experience</p>
    <div className="flex-grow"></div> {/* Filler to push the button to the bottom */}
    <Link to="/training-programs" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
      Get Started
    </Link>
  </div>

  {/* Work Opportunities */}
  <div className="bg-blue-100 rounded-lg p-5 flex flex-col text-center min-h-[240px]">
    <img
      src={wo_svg} // Replace with the correct path to your icon
      alt="Work Opportunities Icon"
      className="mx-auto w-16 h-16 mb-4"
    />
    <h3 className="text-lg font-bold text-black">Work Opportunities</h3>
    <p className="text-black">Get internships and job opportunities</p>
    <div className="flex-grow"></div> {/* Filler to push the button to the bottom */}
    <Link to="/work-opportunities" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
      Get Started
    </Link>
  </div>
</div>


            {/* Optional image section */}
           

           
            
        </div>
    );
}
