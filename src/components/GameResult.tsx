import { ActionButton } from './Actions/ActionButton'
import Paper from './../public/icon-paper.svg'
import Scissors from './../public/icon-scissors.svg'
import Rock from './../public/icon-rock.svg'

export const GameResult = ({ choice, computerChoice }) => {
  return (
    <div className="flex flex-col items-center gap-20 uppercase text-white">
      <div className="flex gap-8 lg:gap-14">
        {/* your pick */}
        <div className="flex flex-col gap-7">
          {choice === 'paper' ? (
            <div className="paper grid h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-paper-primary to-paper-secondary lg:h-48 lg:w-48">
              <div
                className={`action-button relative grid h-24 w-24 place-items-center rounded-full bg-white lg:h-36 lg:w-36`}
              >
                <img src={Paper} alt="" />
              </div>
            </div>
          ) : choice === 'rock' ? (
            <div className="rock grid h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-rock-primary to-rock-secondary lg:h-48 lg:w-48">
              <div
                className={`action-button relative grid h-24 w-24 place-items-center rounded-full bg-white lg:h-36 lg:w-36`}
              >
                <img src={Rock} alt="" />
              </div>
            </div>
          ) : (
            <div className="scissors grid h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-scissors-primary to-scissors-secondary lg:h-48 lg:w-48">
              <div
                className={`action-button relative grid h-24 w-24 place-items-center rounded-full bg-white lg:h-36 lg:w-36`}
              >
                <img src={Scissors} alt="" />
              </div>
            </div>
          )}
          <p className="text-center">you picked</p>
        </div>
        {/*  */}
        <div className="hidden flex-col items-center justify-center gap-7 lg:flex">
          <p className="text-5xl font-bold">You lose</p>
          <div className="flex">
            <button className="w-max rounded-lg bg-white px-16 py-3 uppercase text-dark hover:text-rock-primary">
              play again
            </button>
          </div>
        </div>
        {/* computer pick */}
        <div className="flex flex-col gap-7">
          {computerChoice === 'paper' ? (
            <div className="paper grid h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-paper-primary to-paper-secondary lg:h-48 lg:w-48">
              <div
                className={`action-button relative grid h-24 w-24 place-items-center rounded-full bg-white lg:h-36 lg:w-36`}
              >
                <img src={Paper} alt="" />
              </div>
            </div>
          ) : computerChoice === 'rock' ? (
            <div className="rock grid h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-rock-primary to-rock-secondary lg:h-48 lg:w-48">
              <div
                className={`action-button relative grid h-24 w-24 place-items-center rounded-full bg-white lg:h-36 lg:w-36`}
              >
                <img src={Rock} alt="" />
              </div>
            </div>
          ) : (
            <div className="scissors grid h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-scissors-primary to-scissors-secondary lg:h-48 lg:w-48">
              <div
                className={`action-button relative grid h-24 w-24 place-items-center rounded-full bg-white lg:h-36 lg:w-36`}
              >
                <img src={Scissors} alt="" />
              </div>
            </div>
          )}
          <p className="text-center">the house picked</p>
        </div>
      </div>
      {/* actions */}
      <div className="flex h-full flex-col items-center gap-7 lg:hidden">
        <p className="text-5xl font-bold">You lose</p>
        <div className="flex">
          <button
            className="w-max rounded-lg bg-white px-16 py-3 uppercase text-dark hover:text-rock-primary"
            // onClick={() => handlePlayAgain}
          >
            play again
          </button>
        </div>
      </div>
    </div>
  )
}
