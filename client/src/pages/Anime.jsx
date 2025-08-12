import React from 'react'
import CardSlider from '../components/CardSlider'
import Smallcard from '../components/Smallcard'
import { useEffect,useState } from 'react'
import axios from 'axios'
import API_BASE_URL from '../config/config'



const Anime = () => {
  const [animeList, setAnimeList] = useState([]);

  const SliderData = [
    { title: "Classroom of the elite", image: "classroom.jpg" },
    { title: "Full Metal Alchemist", image: "fma.jpeg" },
    { title: "Wind Breaker", image: "wind-breaker.webp" },
    { title: "The God Of Highschool", image: "The-God-of-Highschool.avif" },
    { title: "Blue Lock", image: "blue-lock.jpeg" },
  ]

    useEffect(() => {
    axios.get(`${API_BASE_URL}/api/anime`)
      .then(res => {
        const fetchedAnime = res.data.data.slice(0, 10); 
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
