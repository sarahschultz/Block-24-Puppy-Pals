import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'
import './puppy.css'

function App() {

const [puppies, setPuppies] = useState(puppyList)
const [featPupId, setFeatPupId] = useState(null)
const [featuredPup, setFeaturedPup] = useState(null)

console.log(puppies)
  return (
    <>
      <div>
      {
        puppies.map((puppy) => {
          return <p onClick = { () => {
            setFeaturedPup(puppy)
            setFeatPupId(puppy.id)}
        } key = {puppy.id} > {puppy.name} </p>
        } )
      }

      {featuredPup && (
      
      <div>
        <h1> Our Puppy Pals </h1>
        <h1 className ={"puppy-header"}> {featuredPup.name} </h1>
      <ul> <h2> Click a Puppy to See Details </h2>
        <li> Featured Puppy Id#: {featPupId}</li>
        <li> Age: {featuredPup.age}</li>
        <li> Email Address: {featuredPup.email}</li>
        <li> Ownder ID#: {featuredPup.ownerId}</li>
        <li> Number of tricks: {featuredPup.tricks.length}</li>
      </ul>
      </div>

      )}
      
      </div>

    </>
  )
}

export default App
