import PlayButton from '../../public/icons/play.svg'
import PauseButton from '../../public/icons/pause.svg'

interface PlayerProps {
  playerNumber: number
  trackName: string
  albumName: string
  onPlay: () => void
  onPause: () => void
  isPlaying: number
}

function PreviewPlayer({
  playerNumber,
  trackName,
  albumName,
  onPlay,
  onPause,
  isPlaying,
}: PlayerProps) {
  return (
    <article className="player-container">
      <div className="name-container">
        <p className="track-name">{trackName}</p>
        <p className="album-name">{albumName}</p>
      </div>
      <div className="button-container">
        <button
          onClick={onPlay}
          className={isPlaying == playerNumber ? 'is-playing' : 'not-playing'}
        >
          <PlayButton />
        </button>
        <button onClick={onPause}>
          <PauseButton />
        </button>
      </div>
    </article>
  )
}

export default PreviewPlayer
