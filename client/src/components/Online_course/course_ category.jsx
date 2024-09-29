import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// List of categories and their respective courses (could be in a separate file)
const categoryList = [
  {
    id: 1,
    category: 'Programming',
    description: 'Learn various programming languages and frameworks.',
    courses: [
      { id: 101, title: 'Introduction to JavaScript' },
      { id: 102, title: 'Advanced React' },
    ],
  },
  {
    id: 2,
    category: 'Data Science',
    description: 'Master data analysis and machine learning techniques.',
    courses: [
      { id: 201, title: 'Python for Data Science' },
      { id: 202, title: 'Machine Learning Basics' },
    ],
  },
  {
    id: 3,
    category: 'Design',
    description: 'Explore UI/UX design principles and processes.',
    courses: [
      { id: 301, title: 'UI/UX Design Principles' },
      { id: 302, title: 'Design Thinking Process' },
    ],
  },
  {
    id: 4,
    category: 'Marketing',
    description: 'Understand digital marketing and SEO strategies.',
    courses: [
      { id: 401, title: 'Digital Marketing Essentials' },
      { id: 402, title: 'SEO and Content Strategy' },
    ],
  },
];

const CategoryPage = () => {
  const { categoryId } = useParams(); // Get categoryId from route params
  const category = categoryList.find((cat) => cat.id === parseInt(categoryId)); // Find the category by ID

  const [searchTerm, setSearchTerm] = useState('');

  // Handle search functionality
  const filteredCourses = category?.courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{category?.category} Courses</h1>

      <p className="mb-8 text-lg">{category?.description}</p>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full sm:w-1/2"
        />
      </div>

      {/* Display courses for the selected category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses?.map((course) => (
          <div
            key={course.id}
            className="p-6  bg-red-100 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-4">
              A brief description about the course and what students will learn.
            </p>
            <div className="mt-auto">
              <a
                href={`/course/${course.id}`}
                className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
                style={{ marginTop: '20px' }} // Margin from description
              >
                View Course
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
