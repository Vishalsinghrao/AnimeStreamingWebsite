import React from 'react'
import Smallcard from '../components/Smallcard'



const Tvseries = () => {
  const cards = [
    {
      image: 'your-name.png',
      title: 'Your Name',
      description: 'When a city boy and a country girl mysteriously begin swapping bodies, their lives become deeply intertwined. As they try to meet, a twist of fate puts their connection — and the entire town — at risk in this stunning, time-bending romance.'
    },
    {
      image: 'silent-voice.jpg',
      title: 'A Silent Voice',
      description: 'After bullying a deaf girl in elementary school, Shoya Ishida becomes an outcast himself. Years later, he seeks forgiveness and a second chance. A deeply emotional journey about empathy, mental health, and finding the courage to change.'
    },
    {
      image: 'jujutsu-kaisen0.jpg',
      title: 'Jujutsu Kaisen 0',
      description: 'Haunted by a cursed spirit from his past, Yuta Okkotsu enrolls in Jujutsu High to learn how to fight curses. This prequel to Jujutsu Kaisen delivers intense battles, dark sorcery, and a tragic love story at its core.'
    },
    {
      image: 'graveofthefireflies.jpg',
      title: 'Grave of The Fireflies',
      description: 'Set during World War II, two siblings struggle to survive after losing their home and parents in a firebombing. A powerful, emotional tale that captures the cost of war and the innocence of youth like no other.'
    },
    {
      image: 'demon-slayer-movie.png',
      title: 'Demon Slayer Movie- Mugen Train',
      description: 'Tanjiro and his team board the Mugen Train to battle a powerful demon preying on passengers dreams. With breathtaking animation and emotional stakes, it’s a thrilling chapter in the Demon Slayer saga'
    },
    {
      image: 'iwteyp.jpg',
      title: 'I want to eat your pancreas',
      description: 'A quiet boy discovers the diary of a terminally ill classmate — and suddenly becomes part of her vibrant, bittersweet journey. A touching film about connection, loss, and making every moment count.'
    }
  ];

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cards.map((card, index) => (
          <Smallcard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Tvseries
