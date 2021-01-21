import React from 'react';
import Ohayo from '../imgs/ohayo.gif';

export default function Home(){
  return (
    <main>
      <img src={Ohayo} alt='Anime Lake with boy staring at japanze shrine in the center' className="absolute bg-cover width-screen height-full md:h-screen background-home"/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-purple-300 font-bold cursive leading-none lg: leading-snug home-name">Ohayo. I'm Austin</h1>
      </section>
    </main>
  )
}
