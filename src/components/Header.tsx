import React from 'react'

import Logo from '../public/logo.svg'

export const Header = ({ score }: { score: number }) => (
  <div className="flex items-center justify-between rounded-md border-2 border-headerOutline p-3.5 pl-6 desktop:w-2/3 desktop:rounded-lg">
    <img
      src={Logo}
      alt="Rock Paper Scissors Logo"
      className="h-12 desktop:h-24"
    />
    <div className="flex h-16 w-16 flex-col justify-center rounded-md bg-white text-center desktop:h-28 desktop:w-36 desktop:rounded-lg">
      <p className="text-[9px] leading-none text-score desktop:text-base">
        SCORE
      </p>
      <p className="text-[28px] font-bold leading-none text-dark desktop:text-5xl">
        {score}
      </p>
    </div>
  </div>
)
