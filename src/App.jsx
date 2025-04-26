import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const name = 'Danya';
const sites = {

  siteName: 'youtube',
  url: 'youtube.com'
};
const colors = ['red', 'blue', 'yellow']
const num1 = 5;
const num2 = 8;

function App() {

  return (
    <>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={'someSrc'} alt={'someAlt'} />
      <a href={sites.url}>{sites.siteName}</a>
      <p>{num1 + num2}</p>
      <ul>
        {colors.map((color, index) => <li key={index}>{color}</li>)}
      </ul>
    </>
  )
}

export default App;