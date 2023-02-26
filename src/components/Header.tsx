import React from 'react'

import Logo from '../public/logo.svg'

export const Header = ({ score }: { score: number }) => (
  <div className="flex w-full items-center justify-between rounded-md border-2 border-headerOutline p-3.5 pl-6 lg:w-2/3 lg:rounded-lg lg:py-5 lg:pr-6 lg:pl-8">
    <img src={Logo} alt="Rock Paper Scissors Logo" className="h-12 lg:h-24" />
    <div className="flex h-16 w-16 flex-col justify-center rounded-md bg-white text-center lg:h-28 lg:w-36 lg:rounded-lg">
      <p className="text-[9px] leading-none text-score lg:text-base">SCORE</p>
      <p className="text-[28px] font-bold leading-none text-dark lg:text-5xl">
        {score}
      </p>
    </div>
  </div>
)
