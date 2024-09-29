import React, { useState } from 'react';

const coursesList = [
  { id: 1, title: 'Introduction to JavaScript', category: 'Programming' },
  { id: 2, title: 'Advanced React', category: 'Web Development' },
  { id: 3, title: 'Python for Data Science', category: 'Data Science' },
  { id: 4, title: 'Machine Learning Basics', category: 'AI/ML' },
  { id: 5, title: 'UI/UX Design Principles', category: 'Design' },
  { id: 6, title: 'Digital Marketing Essentials', category: 'Marketing' },
];

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(coursesList);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = coursesList.filter((course) =>
      course.title.toLowerCase().includes(query)
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Online Courses</h1>

      {/* Search Bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search courses..."
        className="p-2 border border-gray-300 rounded mb-4 w-full"
      />

      {/* Courses List */}
      <div>
        {filteredCourses.length > 0 ? (
          <ul className="space-y-4">
            {filteredCourses.map((course) => (
              <li key={course.id} className="p-4 border border-gray-200 rounded-lg">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="text-gray-600">Category: {course.category}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
