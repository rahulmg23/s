import React from 'react'
 const Greet = props => {
  const {name, heroName}= props 
    return (
    <div>
      <h1>
        Helle {name} aks from {heroName}
      </h1>
    </div>
  )
}

export default Greet