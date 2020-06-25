import React from 'react';

const Hero = ({heroName})=>{
  if(heroName==='joker'){
    throw new Error('Not a hero')
  }
  return(
    <div>
      {heroName}
    </div>
  )
}
export default Hero
