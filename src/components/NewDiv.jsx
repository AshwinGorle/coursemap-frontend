import React from 'react'
import Carousel from './Carousel'
import Card from './Card'

const NewDiv = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
      <Carousel>
        <Card
          title="Card 1"
          description="Description for Card 1"
          imageUrl="https://via.placeholder.com/400x200"
        />
        <Card
          title="Card 2"
          description="Description for Card 2"
          imageUrl="https://via.placeholder.com/400x200"
        />
        <Card
          title="Card 3"
          description="Description for Card 3"
          imageUrl="https://via.placeholder.com/400x200"
        />
        {/* Add more cards here */}
      </Carousel>
    </div>
    </div>
  )
}

export default NewDiv
