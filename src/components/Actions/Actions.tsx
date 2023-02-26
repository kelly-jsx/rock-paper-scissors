import { ActionButton } from './ActionButton'
import Paper from '../../public/icon-paper.svg'
import Scissors from '../../public/icon-scissors.svg'
import Rock from '../../public/icon-rock.svg'
import ActionsBg from '../../public/bg-triangle.svg'

type Props = {
  handleChoice: (choice: string) => void
}

export const Actions = ({ handleChoice }: Props) => (
  <div
    className="actions grid grid-cols-2 justify-items-center gap-20"
    style={{
      backgroundImage: `url(${ActionsBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}
  >
    <div
      className="paper grid h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-paper-primary to-paper-secondary lg:h-48 lg:w-48"
      onClick={() => handleChoice('paper')}
    >
      <ActionButton>
        <img src={Paper} alt="" />
      </ActionButton>
    </div>
    <div
      className="scissors grid h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-scissors-primary to-scissors-secondary lg:h-48 lg:w-48"
      onClick={() => handleChoice('scissors')}
    >
      <ActionButton>
        <img src={Scissors} alt="" />
      </ActionButton>
    </div>
    <div className="rock col-span-2 rounded-full">
      <div
        className="grid h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-rock-primary to-rock-secondary lg:h-48 lg:w-48"
        onClick={() => handleChoice('rock')}
      >
        <ActionButton>
          <img src={Rock} alt="" />
        </ActionButton>
      </div>
    </div>
  </div>
)
