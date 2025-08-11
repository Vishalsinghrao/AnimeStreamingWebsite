import React from 'react'
import Smallcard from '../components/Smallcard'
import Footer from '../components/Footer'



const Topairing = () => {
  const cards = [
    {
      image: 'windbreaker.jpg',
      title: 'Wind Breaker',
      description: 'Haruka Sakura and the Bofuurin crew return for bigger rival fights in their gritty underground ring. Expect fast-paced street combat and character growth backed by top-tier animation.',
    },
    {
      image: 'fire-force.avif',
      title: 'Fire Force',
      description: 'In a world plagued by spontaneous human combustion, special fire soldiers called the Fire Force battle “Infernals” — humans turned into living flames. Shinra Kusakabe, a fiery young recruit, joins to uncover the truth behind his family’s mysterious death and the secrets of the fire.',
    },
    {
      image: 'vigilante.jpg',
      title: 'Vigilante',
      description: 'This gritty My Hero Academia spin-off introduces Koichi Haimawari, a low-tier Quirk user who becomes an unsanctioned hero on Tokyo’s streets—exploring moral gray zones and underground heroism.',
    },
    {
      image: 'tbate.avif',
      title: 'The beginning after the end',
      description: 'King Grey, once a mighty ruler in a modern world, is reincarnated as Arthur Leywin in a fantasy realm full of magic and monsters. With memories of his past life, Arthur seeks not power but purpose — as he grows stronger, darker truths of the world begin to surface.',
    },
    {
      image: 'lazarus.png',
      title: 'Lazarus',
      description: 'In a dystopian future, a miracle drug triggers chaos. With stunning action sequences from Studio MAPPA, this original anime delivers high-stakes sci-fi and jaw-dropping visuals.',
    },
    {
      image: 'shin.jpg',
      title: 'Shin Samurai Den Yaya',
      description: 'Legendary swordsman Yaya returns in this vivid reboot filled with wild swordplay, quirky humor, and nostalgia—perfect for fans of classic Samurai-style anime.',
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

export default Topairing
