import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ai_svg from '../../assets/ai.svg';
import vl_svg from '../../assets/vl.svg';
import oc_svg from '../../assets/onCourse.svg';
import tp_svg from '../../assets/TraingProgram.svg';
import wo_svg from '../../assets/workOppor.svg';
import lock_svg from '../../assets/lock.svg'; // Add a lock icon here

export default function StudentDashboard() {
  // Simulate whether a feature is locked
  const [isAICareerGuidanceLocked, setIsAICareerGuidanceLocked] = useState(true);
  const [isVirtualLabsLocked, setIsVirtualLabsLocked] = useState(false);
  const [isOnlineCoursesLocked, setIsOnlineCoursesLocked] = useState(false);
  const [isTrainingProgramsLocked, setIsTrainingProgramsLocked] = useState(false);
  const [isWorkOpportunitiesLocked, setIsWorkOpportunitiesLocked] = useState(true);

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <aside className="relative overflow-hidden text-center rounded-lg py-10">
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-orange-500 leading-relaxed">
              Building bridges between students, educators, skill hubs, and industries to create
              a seamless pipeline of skilled talent!
            </h2>
            <hr className="border-gray-400 w-1/3 mx-auto" />
          </div>
        </div>
      </aside>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:mt-20 p-5">
        {/* AI Career Guidance */}
        <div
          className={`rounded-lg p-5 flex flex-col text-center min-h-[240px] ${
            isAICareerGuidanceLocked ? 'bg-gray-300' : 'bg-red-100'
          }`}
        >
          <img
            src={isAICareerGuidanceLocked ? lock_svg : ai_svg} // Show lock icon if locked
            alt={isAICareerGuidanceLocked ? 'Locked Icon' : 'AI Career Guidance Icon'}
            className="mx-auto w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-bold text-black">AI Career Guidance</h3>
          <p className="text-black">{isAICareerGuidanceLocked ? 'Locked for you' : 'Find your path'}</p>
          <div className="flex-grow"></div>
          {isAICareerGuidanceLocked ? (
            <button
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg cursor-not-allowed"
              disabled
            >
              Locked
            </button>
          ) : (
            <Link to="/ai-career-guidance" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Get Started
            </Link>
          )}
        </div>

        {/* Virtual Labs */}
        <div
          className={`rounded-lg p-5 flex flex-col text-center min-h-[240px] ${
            isVirtualLabsLocked ? 'bg-gray-300' : 'bg-red-100'
          }`}
        >
          <img
            src={isVirtualLabsLocked ? lock_svg : vl_svg}
            alt={isVirtualLabsLocked ? 'Locked Icon' : 'Virtual Labs Icon'}
            className="mx-auto w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-bold text-black">Virtual Labs</h3>
          <p className="text-black">{isVirtualLabsLocked ? 'Locked for you' : 'Learn by doing'}</p>
          <div className="flex-grow"></div>
          {isVirtualLabsLocked ? (
            <button
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg cursor-not-allowed"
              disabled
            >
              Locked
            </button>
          ) : (
            <Link to="/virtual_lab" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Get Started
            </Link>
          )}
        </div>

        {/* Online Courses */}
        <div
          className={`rounded-lg p-5 flex flex-col text-center min-h-[240px] ${
            isOnlineCoursesLocked ? 'bg-gray-300' : 'bg-red-100'
          }`}
        >
          <img
            src={isOnlineCoursesLocked ? lock_svg : oc_svg}
            alt={isOnlineCoursesLocked ? 'Locked Icon' : 'Online Courses Icon'}
            className="mx-auto w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-bold text-black">Online Courses</h3>
          <p className="text-black">{isOnlineCoursesLocked ? 'Locked for you' : 'Find your path'}</p>
          <div className="flex-grow"></div>
          {isOnlineCoursesLocked ? (
            <button
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg cursor-not-allowed"
              disabled
            >
              Locked
            </button>
          ) : (
            <Link to="/online_course" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Get Started
            </Link>
          )}
        </div>

        {/* Training Programs */}
        <div
          className={`rounded-lg p-5 flex flex-col text-center min-h-[240px] ${
            isTrainingProgramsLocked ? 'bg-gray-300' : 'bg-red-100'
          }`}
        >
          <img
            src={isTrainingProgramsLocked ? lock_svg : tp_svg}
            alt={isTrainingProgramsLocked ? 'Locked Icon' : 'Training Programs Icon'}
            className="mx-auto w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-bold text-black">Training Programs</h3>
          <p className="text-black">{isTrainingProgramsLocked ? 'Locked for you' : 'Get hands-on experience'}</p>
          <div className="flex-grow"></div>
          {isTrainingProgramsLocked ? (
            <button
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg cursor-not-allowed"
              disabled
            >
              Locked
            </button>
          ) : (
            <Link to="/training-programs" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Get Started
            </Link>
          )}
        </div>

        {/* Work Opportunities */}
        <div
          className={`rounded-lg p-5 flex flex-col text-center min-h-[240px] ${
            isWorkOpportunitiesLocked ? 'bg-gray-300' : 'bg-red-100'
          }`}
        >
          <img
            src={isWorkOpportunitiesLocked ? lock_svg : wo_svg}
            alt={isWorkOpportunitiesLocked ? 'Locked Icon' : 'Work Opportunities Icon'}
            className="mx-auto w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-bold text-black">Work Opportunities</h3>
          <p className="text-black">{isWorkOpportunitiesLocked ? 'Locked for you' : 'Get internships and job opportunities'}</p>
          <div className="flex-grow"></div>
          {isWorkOpportunitiesLocked ? (
            <button
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg cursor-not-allowed"
              disabled
            >
              Locked
            </button>
          ) : (
            <Link to="/work-opportunities" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Get Started
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
