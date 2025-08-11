import React from 'react'
import CardSlider from '../components/CardSlider'
import Smallcard from '../components/Smallcard'
import { useEffect,useState } from 'react'
import axios from 'axios'



const Anime = () => {
  const [animeList, setAnimeList] = useState([]);

  const SliderData = [
    { title: "Classroom of the elite", image: "classroom.jpg" },
    { title: "Full Metal Alchemist", image: "fma.jpeg" },
    { title: "Wind Breaker", image: "wind-breaker.webp" },
    { title: "The God Of Highschool", image: "The-God-of-Highschool.avif" },
    { title: "Blue Lock", image: "blue-lock.jpeg" },
  ]

  // const cards = [
  //   {
  //     image: 'one-piece.avif',
  //     title: 'One Piece',
  //     description: 'Follow Monkey D. Luffy and his Straw Hat crew as they sail across dangerous seas, battle powerful enemies, and search for the legendary treasure “One Piece.” It’s a story of dreams, loyalty, and becoming the Pirate King.',
  //   },
  //   {
  //     image: 'fire-force.avif',
  //     title: 'Fire Force',
  //     description: 'In a world plagued by spontaneous human combustion, special fire soldiers called the Fire Force battle “Infernals” — humans turned into living flames. Shinra Kusakabe, a fiery young recruit, joins to uncover the truth behind his family’s mysterious death and the secrets of the fire.',
  //   },
  //   {
  //     image: 'solo-leveling.avif',
  //     title: 'Solo Leveling',
  //     description: 'Sung Jin-Woo was the weakest hunter in a monster-filled world — until a mysterious system gave him the power to level up endlessly. Now, he rises through the ranks, facing dungeons, monsters, and dark secrets that threaten humanity.',
  //   },
  //   {
  //     image: 'tbate.avif',
  //     title: 'The beginning after the end',
  //     description: 'King Grey, once a mighty ruler in a modern world, is reincarnated as Arthur Leywin in a fantasy realm full of magic and monsters. With memories of his past life, Arthur seeks not power but purpose — as he grows stronger, darker truths of the world begin to surface.',
  //   }
  // ];

    useEffect(() => {
    axios.get('http://localhost:4000/api/anime')
      .then(res => {
        const fetchedAnime = res.data.data.slice(0, 10); // Get top 10 anime
        const formatted = fetchedAnime.map(item => ({
          image: item.images.jpg.image_url,
          title: item.title,
          description: item.synopsis,
        }));
        setAnimeList(formatted);
      })
      .catch(err => {
        console.error("Error fetching anime:", err);
      });
  }, []);
  return (
    <div>
      <CardSlider data={SliderData} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {animeList.map((anime, index) => (
          <Smallcard
            key={index}
            image={anime.image}
            title={anime.title}
            description={anime.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Anime
