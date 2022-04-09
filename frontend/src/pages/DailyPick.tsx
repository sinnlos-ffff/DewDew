import axios from 'axios'
import { useEffect, useState } from 'react'

function DailyPick() {
  const [artist, setArtist] = useState<any>()
  useEffect(() => {
    async function getArtist() {
      const response = await axios.get(
        'http://127.0.0.1:8000/api/daily_pick/new_release'
      )
      console.log(response.data.artist)
      setArtist(response.data.artist)
    }
    getArtist()
  }, [])

  if (!artist) {
    return <div>sorry</div>
  }

  return (
    <>
      <div>Name {artist.name}</div>
      <img src={artist.images[0].url} />
      <p>Genre {artist.genres}</p>
    </>
  )
}

export default DailyPick
