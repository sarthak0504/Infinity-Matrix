import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TrainingProgramme = () => {
  const cardData = [
    {
      title: 'Chemistry',
      text: 'Chemistry labs within your city',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/udcourse'
    },
    {
      title: 'Mechanical',
      text: 'Explore Mechanical labs within your city',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/udcourse'
    },
    {
      title: 'Computer Science',
      text: 'Explore Computer Science labs in your city',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/udcourse'
      // link: '#cs'
    },
    {
      title: 'Physics',
      text: 'Physics labs within your city',
      image: 'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/udcourse'
    },
    {
      title: 'Electrical',
      text: 'Electrical labs within your city',
      image: 'https://images.pexels.com/photos/1406536/pexels-photo-1406536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/udcourse'
    },
    {
      title: 'Biology',
      text: 'Biology labs within your city',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/udcourse'
    },
    {
      title: 'Mathematics',
      text: 'Mathematics labs within your city',
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/udcourse'
    },
    {
      title: 'Civil Engineering',
      text: 'Civil Engineering labs within your city',
      image: 'https://images.pexels.com/photos/256382/pexels-photo-256382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/udcourse'
    },
    {
      title: 'Architecture',
      text: 'Architecture labs within your city',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/udcourse'
    }
  ];

  return (
<>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
    {cardData.slice(0, 9).map((card, index) => (
      <div key={index} className="mb-4">
        <div className="border rounded-lg shadow-md">
          <img className="border-2xl rounded-t-xl w-full h-48 object-cover" src={card.image} alt={card.title} />
          <div className="p-4">
            <h3 className="mt-2 text-lg font-semibold">{card.title}</h3>
            <p className="text-sm">{card.text}</p>
            <a 
              className="inline-block mt-4 bg-orange-500 text-white rounded-2xl py-2 px-4 font-black" 
              // href={card.link}
              href={`/udcourse`}
            >
              Explore more
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</>

  );
}

export default TrainingProgramme;
