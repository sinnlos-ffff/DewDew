import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import PreviewPlayers from '../components/PreviewPlayers'

function DailyPick() {
  const navigate = useNavigate()
  const [artist, setArtist] = useState<any>()
  const [tracks, setTracks] = useState<any>()
  const [reload, setReload] = useState<number>(0)
  const slug = useParams().slug

  const handleReload = () => {
    window.location.reload()
  }

  useEffect(() => {
    async function getArtist() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/daily_pick/${slug}`
        )
        setArtist(response.data.artist)
        const tracks = response.data.top_tracks.tracks
        tracks.unshift(response.data.new_track)
        setTracks(tracks)
        console.log(tracks)
      } catch (error: any) {
        navigate('/error', { state: { status: error.response.status } })
      }
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
        <h2 id="artist-name">{artist.name}</h2>
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
        {tracks && <PreviewPlayers tracks={tracks} />}
        <button className="glassbutton" onClick={handleReload}>
          Want someone else?
        </button>
      </div>
    </>
  )
}

export default DailyPick
