import { useEffect, useRef, useState } from 'react'
import PreviewPlayer from './PreviewPlayer'

interface AudioProps {
  topTracks: any
}

function PreviewPlayers({ topTracks }: AudioProps) {
  const [isPlaying, setIsPlaying] = useState<number>(-1)
  const audioObject = useRef<HTMLAudioElement>(new Audio())

  audioObject.current.onended = function () {
    setIsPlaying(-1)
  }

  const pauseAudio = () => {
    audioObject.current.pause()
    setIsPlaying(-1)
  }

  useEffect(() => {
    return function cleanup() {
      pauseAudio()
    }
  }, [])

  return (
    <>
      {topTracks[0].preview_url && (
        <PreviewPlayer
          playerNumber={0}
          trackName={topTracks[0].name}
          albumName={topTracks[0].album.name}
          isPlaying={isPlaying}
          onPlay={async () => {
            setIsPlaying(0)
            if (audioObject.current.src != topTracks[0].preview_url) {
              audioObject.current.src = topTracks[0].preview_url
            }
            await audioObject.current.play()
          }}
          onPause={() => {
            setIsPlaying(-1)
            audioObject.current.pause()
          }}
        />
      )}
      {topTracks[1].preview_url && (
        <PreviewPlayer
          playerNumber={1}
          trackName={topTracks[1].name}
          albumName={topTracks[1].album.name}
          isPlaying={isPlaying}
          onPlay={async () => {
            setIsPlaying(1)
            if (audioObject.current.src != topTracks[1].preview_url) {
              audioObject.current.src = topTracks[1].preview_url
            }
            await audioObject.current.play()
          }}
          onPause={() => {
            setIsPlaying(-1)
            audioObject.current.pause()
          }}
        />
      )}
      {topTracks[2].preview_url && (
        <PreviewPlayer
          playerNumber={2}
          trackName={topTracks[2].name}
          albumName={topTracks[2].album.name}
          isPlaying={isPlaying}
          onPlay={async () => {
            setIsPlaying(2)
            if (audioObject.current.src != topTracks[2].preview_url) {
              audioObject.current.src = topTracks[2].preview_url
            }
            await audioObject.current.play()
          }}
          onPause={() => {
            setIsPlaying(-1)
            audioObject.current.pause()
          }}
        />
      )}
    </>
  )
}

export default PreviewPlayers
