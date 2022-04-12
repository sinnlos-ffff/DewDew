import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import PreviewPlayers from '../components/PreviewPlayers'
import randomColour from '../utils/randomColour'

function DailyPick() {
  const [artist, setArtist] = useState<any>()
  const [topTracks, setTopTracks] = useState<any>()
  const [reload, setReload] = useState<number>(0)

  const handleReload = () => {
    window.history.go()
  }

  useEffect(() => {
    async function getArtist() {
      const response = await axios.get(
        'http://127.0.0.1:8000/api/daily_pick/new_release'
      )
      setArtist(response.data.artist)
      setTopTracks(response.data.top_tracks.tracks)
    }
    getArtist()
  }, [reload])

  if (!artist) {
    return <div />
  }

  return (
    <>
      <Header />
      <div className="glassboard">
        <p id="artist-name">{artist.name}</p>
        <article></article>
        <img id="artist-image" src={artist.images[0].url} />
        <div id="tag-wrapper">
          {artist.genres.map((genre: string, idx: number) => {
            return (
              <div id="genre-tag-wrap" key={`${idx}-genre-tag-wrap`}>
                <p id="genre-tag">{genre}</p>
              </div>
            )
          })}
        </div>
        {topTracks && <PreviewPlayers topTracks={topTracks} />}
        <button className="glassbutton" onClick={handleReload}>
          Want someone else?
        </button>
      </div>
    </>
  )
}

export default DailyPick
