import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function Members () {
  const state = {
    maintainers: [
      { id: '2346494', name: 'Romain Beaumont', username: 'rom1504' },
      { id: '1069318', name: 'Robin Lambertz', username: 'roblabla' },
      { id: '1977472', name: 'Karang', username: 'Karang' },
      { id: '8526903', name: 'Keegan', username: 'mhsjlw', extra: 'flying-squid' },
      { id: '13330620', name: 'Kasper Seweryn', username: 'wvffle', extra: 'mineflayer' },
      { id: '8838132', name: 'plexigras', username: 'plexigras', extra: 'mineflayer' }
    ],
    contributors: [
      { id: '106511', name: 'Andrew Kelley', username: 'andrewrk' },
      { id: '87436', name: 'Josh Wolfe', username: 'thejoshwolfe' },
      { id: '850714', name: 'Georges Oates Larsen', username: 'flynnn' },
      { id: '2260564', name: 'Harold Feit', username: 'DreadWingKnight' },
      { id: '5000732', name: '', username: 'ciolt', extra: 'website' },
      { id: '1270100', name: 'Will Franzen', username: 'wtfaremyinitials' },
      { id: '1077050', name: 'Dennis Bartlett', username: 'dcbartlett' }
    ]
  }

  return (
    <div className='container' style={{ marginTop: 20 }}>
      <h2>Main projects</h2>
      <ul>
        <li><a href='https://prismarinejs.github.io/minecraft-data'>Minecraft data</a> : Language independent module providing minecraft data for minecraft clients, servers and libraries.</li>
        <li><a href='https://prismarinejs.github.io/mineflayer'>Mineflayer</a> : Create Minecraft bots with a powerful, stable, and high level JavaScript API..</li>
        <li><a href='https://prismarinejs.github.io/flying-squid'>Flying-squid</a> : Create Minecraft servers with a powerful, stable, and high level JavaScript API.</li>
        <li><a href='https://prismarinejs.github.io/node-minecraft-protocol'>Minecraft protocol</a> : Parse and serialize minecraft packets, plus authentication and encryption..</li>
      </ul>
      <h2>How to contribute</h2>
      <p>Go to <a href='https://github.com/PrismarineJS/prismarine-contribute'>prismarine-contribute</a> to learn more about the projects
        and start contributing !
      </p>
      <h2>Meet the Team</h2>
      <p>PrismarineJS is made possible by many contributors who have put their time and effort into making the project possible.</p>
      <div className='row'>
        <div className='col-md'>
          <h3>Maintainers</h3>
          <ul>
            {state.maintainers.map((e) => {
              return (
                <li key={e.id}>
                  <img src={`https://avatars.githubusercontent.com/u/${e.id}?s=54`} alt='true' /> {e.name} <a href={`https://github.com/${e.username}`}>@{e.username}</a> {e.extra ? (<code>{e.extra}</code>) : undefined}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='col-md'>
          <h3>Contributors</h3>
          <ul>
            {state.contributors.map((e) => {
              return (
                <li key={e.id}>
                  <img src={`https://avatars.githubusercontent.com/u/${e.id}?s=54`} alt='true' /> {e.name} <a href={`https://github.com/${e.username}`}>@{e.username}</a> {e.extra ? (<code>{e.extra}</code>) : undefined}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

function NavEntry ({ name, link, image }) {
  return (
    <li className='nav-item nav-button'>
      <a className='nav-link' href={link}>
        <img src={image} style={{ width: 24, height: 24 }} />
        {name}
      </a>
    </li>
  )
}

export function App () {
  const [backgroundPosition, setBackgroundPosition] = useState('0 0, 0 0')

  function onMouseMove (e) {
    const posX = e.clientX / 20
    const posY = e.clientY / 20
    setBackgroundPosition(`${posX}px ${posY}px, 0px 0px`)
  }

  return (
    <div onMouseMove={onMouseMove}>
      <div className='promoBanner active' style={{ backgroundPosition }}>
        <nav className='navbar navbar-expand-md container transparent navbar-dark'>
          <a className='navbar-brand' href='/'><img className='d-inline-block align-top' src='/images/prismarine_js.svg' width={32} height={32} alt='PrismarineJS' /></a><button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarContent' aria-controls='navbarContent' aria-expanded='false' aria-label='Toggle navigation'><span className='navbar-toggler-icon' /></button>
          <div className='collapse navbar-collapse' id='navbarContent'>
            <ul className='navbar-nav mr-auto'>
              <NavEntry name='GitHub' link='https://github.com/PrismarineJS' image='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' />
              <NavEntry name='Discord' link='https://discord.gg/GsEFRM8' image='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg' />
            </ul>
          </div>
        </nav>
        <div className='container promo pb-5 pt-5 mb-5' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 'fit-content' }}>
          <h1 className='text-left display-4 col-md-auto'>PrismarineJS</h1>
          <h3 className='text-left col-md-12'>Minecraft-compatible <a href='https://github.com/PrismarineJS/flying-squid' title='PrismarineJS/Flying-Squid on GitHub'>server</a>, <a href='https://github.com/PrismarineJS/mineflayer' title='PrismarineJS/Mineflayer on GitHub'>bot</a>, and <a href='https://github.com/PrismarineJS/node-minecraft-protocol' title='PrismarineJS/Node-Minecraft-Protocol on GitHub'>API</a>. All written in JavaScript.</h3>
          <div className='col-md-auto mt-4'><a href='https://github.com/PrismarineJS'><button className='btn btn-light' type='button'>Check it out on GitHub</button></a></div>
        </div>
      </div>
      <div className='content container-fluid' style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='row markdown-render meetTheTeam'>
          <Members />
        </div>
      </div>
    </div>
  )
}

export default App
