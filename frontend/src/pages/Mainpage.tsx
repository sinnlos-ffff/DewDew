import axios from 'axios'
import { useEffect, useState } from 'react'

function Mainpage() {
  const [playlist, setPlaylist] = useState()
  useEffect(() => {
    async function getPlaylist() {
      const response = await axios.get('http://127.0.0.1:8000/api/daily_pick')
      console.log(response.data)
      setPlaylist(response.data)
    }
    getPlaylist()
  }, [])

  return (
    <>
      <div>success</div>
    </>
  )
}

export default Mainpage
