import React from 'react'

import { Logo } from '../public/logo.svg'

export const Header = () => (
  <div className="rounded-lg border border-headerOutline p-4">
    {Logo}
    <p>Header</p>
  </div>
)
