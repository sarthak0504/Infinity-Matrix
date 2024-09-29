import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// List of categories and their respective courses with descriptions
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

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categoryList);
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Function to handle search input
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term) {
      setFilteredCategories(
        categoryList.filter((category) =>
          category.category.toLowerCase().includes(term)
        )
      );
    } else {
      setFilteredCategories(categoryList);
    }
  };

  // Function to handle category click (navigate to category page)
  const handleCategoryClick = (category) => {
    navigate(`/online_course/${category.id}`); // Navigate to category page
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
        Online Courses
      </h1>

      {/* Search Bar */}
      <div className="mb-6 w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 md:p-3 border border-gray-300 rounded-lg w-full"
        />
      </div>

      {/* Categories List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className="p-4 md:p-6 bg-red-200 hover:bg-gray-300 rounded-lg text-center cursor-pointer text-base md:text-lg font-semibold transition-all transform hover:scale-105"
            style={{ minHeight: '150px' }} // Adjusted height to accommodate description
          >
            <h2 className="text-lg font-bold mb-2">{category.category}</h2>
            <p className="text-gray-700 text-sm">{category.description}</p> {/* Description added */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
