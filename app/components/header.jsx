import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="logo">
          <Link href={"/"}>Lalit Sawant</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  )
}

export default header