import React from 'react'
import Smallcard from '../components/Smallcard'



const Popular = () => {
  const cards = [
    {
      image: 'aot.jpg',
      title: 'Attack on Titan',
      description: 'In the aftermath of Eren Yeager’s epic saga, a new generation of soldiers must confront the ideological and literal ruins left behind. Expect breathtaking animation, philosophical themes, and a mind-blowing conclusion to one of the greatest anime of all time.'
    },
    {
      image: 'jujutsukaisen.jpg',
      title: 'Jujutsu Kaisen',
      description: 'With Gojo’s past revealed and the Dark Continent looming, this season delivers next-level fight choreography and dramatic character growth. It’s a visual spectacle from MAPPA that’s keeping fans hooked.'
    },
    {
      image: 'demonslayer.jpg',
      title: 'Demon Slayer',
      description: 'Continuing its record-breaking legacy, the Hashira arc raises the emotional and animation bar once again. It recently won Best Animation at the 2025 CR Anime Awards.'
    },
    {
      image: 'one-piece.avif',
      title: 'One Piece',
      description: 'After a brief hiatus, the series returns with high-stakes action, Vegapunk revelations, and some of the richest animation seen in its 25-year run.'
    },
    {
      image: 'solo-leveling.avif',
      title: 'Solo Leveling',
      description: 'Sung Jin‑Woo’s power escalation continues with breathtaking fight scenes and monster-boss battles, solidifying Solo Leveling as a worldwide sensation.'
    },
    {
      image: 'sxf.jpg',
      title: 'Spy X Family',
      description: 'The Forger family returns with fresh antics, disguise missions, and emotional moments—keeping both critics and audiences in stitches.'
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

export default Popular
