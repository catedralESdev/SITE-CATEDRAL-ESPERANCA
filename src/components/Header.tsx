import Link from 'next/link'
import React from 'react'
export function Header() {
  return (
    <div className="p-5 bg-blue-500 flex justify-center">
      <Link href="/">
        <p className="font-bold text-white">Catedral</p>
      </Link>
    </div>
  )
}