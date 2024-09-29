import React from 'react'

const Card = ({Title,Text,Img}) => {
  return (
    <div>
      <Card style={{ width: '24rem' }}>
    <Card.Img className='border-2xl rounded-xl' variant="top" src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    <Card.Body>
      <Card.Title>{Title}</Card.Title>
      <Card.Text>
        {Text}
      </Card.Text>
      <Button className='bg-orange-500 m-2 rounded-2xl py-2 px-2 font-black' variant="primary" >Explore more</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default Card
