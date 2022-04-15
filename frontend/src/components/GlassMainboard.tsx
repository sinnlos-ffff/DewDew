import axios from 'axios'
import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function GlassMainboard() {
  const navigate = useNavigate()
  const [categories, setCategories] = useState<any>()

  useEffect(() => {
    async function getCategories() {
      const response = await axios.get('http://127.0.0.1:8000/api/main')
      console.log(response.data.categories)
      setCategories(response.data.categories.categories.items)
    }
    getCategories()
  }, [])

  const handleClick = (c: string) => {
    navigate(`/daily_pick${'/' + c}`)
  }

  return (
    <div className="glassboard">
      <p>You want to listen to someone who...</p>
      <button
        className="glassbutton"
        onClick={() => handleClick('new_release')}
      >
        Released new music
      </button>
      <p>Or choose from one of the categories</p>
      <div>
        {categories &&
          categories.map((c: any, idx: number) => {
            const name = c.name
            return (
              <button
                key={`category-${idx}`}
                className="glassbutton-mini"
                onClick={() => handleClick(name)}
              >
                {name}
              </button>
            )
          })}
      </div>
    </div>
  )
}

export default GlassMainboard
