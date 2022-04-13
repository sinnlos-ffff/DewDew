import { useEffect, useRef, useState } from 'react'
import PreviewPlayer from './PreviewPlayer'

interface AudioProps {
  tracks: any
}

function PreviewPlayers({ tracks }: AudioProps) {
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
      {tracks[0].preview_url && <h3>New Release</h3>}
      {tracks[0].preview_url && (
        <PreviewPlayer
          key={`preview-player-newtrack${0}`}
          playerNumber={0}
          trackName={tracks[0].name}
          albumName={tracks[0].album.name}
          isPlaying={isPlaying}
          onPlay={async () => {
            setIsPlaying(0)
            if (audioObject.current.src != tracks[0].preview_url) {
              audioObject.current.src = tracks[0].preview_url
            }
            await audioObject.current.play()
          }}
          onPause={() => {
            if (isPlaying == 0) {
              setIsPlaying(-1)
              audioObject.current.pause()
            }
          }}
        />
      )}
      {(tracks[1].preview_url ||
        tracks[2].preview_url ||
        tracks[3].preview_url) && <h3>Popular tracks</h3>}
      {[1, 2, 3].map((i, _) => {
        if (tracks[i].preview_url) {
          return (
            <PreviewPlayer
              key={`preview-player-toptrack${i}`}
              playerNumber={i}
              trackName={tracks[i].name}
              albumName={tracks[i].album.name}
              isPlaying={isPlaying}
              onPlay={async () => {
                setIsPlaying(i)
                if (audioObject.current.src != tracks[i].preview_url) {
                  audioObject.current.src = tracks[i].preview_url
                }
                await audioObject.current.play()
              }}
              onPause={() => {
                if (isPlaying == i) {
                  setIsPlaying(-1)
                  audioObject.current.pause()
                }
              }}
            />
          )
        }
      })}
    </>
  )
}

export default PreviewPlayers
