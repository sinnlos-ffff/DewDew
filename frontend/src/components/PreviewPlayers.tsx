import { useEffect, useRef, useState } from 'react'

interface AudioProps {
  topTracks: any
}

function PreviewPlayers({ topTracks }: AudioProps) {
  const audioObject1 = useRef<HTMLAudioElement>(
    new Audio(topTracks[0].preview_url)
  )
  const audioObject2 = useRef<HTMLAudioElement>(
    new Audio(topTracks[1].preview_url)
  )
  const audioObject3 = useRef<HTMLAudioElement>(
    new Audio(topTracks[2].preview_url)
  )

  const pauseAll = () => {
    audioObject1.current.pause()
    audioObject2.current.pause()
    audioObject3.current.pause()
  }

  useEffect(() => {
    return function cleanup() {
      pauseAll()
    }
  })

  return (
    <>
      <div>
        <p>{topTracks[0].name}</p>
        <p>{topTracks[0].album.name}</p>
        <button
          onClick={() => {
            pauseAll()
            audioObject1.current.play()
          }}
        >
          play
        </button>
        <button onClick={() => audioObject1.current.pause()}>stop</button>
      </div>
      <div>
        <p>{topTracks[1].name}</p>
        <p>{topTracks[1].album.name}</p>
        <button
          onClick={() => {
            pauseAll()
            audioObject2.current.play()
          }}
        >
          play
        </button>
        <button onClick={() => audioObject2.current.pause()}>stop</button>
      </div>
      <div>
        <p>{topTracks[2].name}</p>
        <p>{topTracks[2].album.name}</p>
        <button
          onClick={() => {
            pauseAll()
            audioObject3.current.play()
          }}
        >
          play
        </button>
        <button onClick={() => audioObject3.current.pause()}>stop</button>
      </div>
    </>
  )
}

export default PreviewPlayers
