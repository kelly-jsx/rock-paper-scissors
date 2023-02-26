import { ActionButton } from './ActionButton'
import Paper from '../../public/icon-paper.svg'
import Scissors from '../../public/icon-scissors.svg'
import Rock from '../../public/icon-rock.svg'

export const Actions = () => (
  <div className="grid grid-cols-2 justify-items-center">
    <div className="paper grid h-48 w-48 cursor-pointer items-center justify-center rounded-full">
      <ActionButton>
        <img src={Paper} alt="" />
      </ActionButton>
    </div>
    <div className="scissors grid h-48 w-48 cursor-pointer items-center justify-center rounded-full">
      <ActionButton>
        <img src={Scissors} alt="" />
      </ActionButton>
    </div>
    <div className="col-span-2">
      <div className="rock grid h-48 w-48 cursor-pointer items-center justify-center rounded-full">
        <ActionButton>
          <img src={Rock} alt="" />
        </ActionButton>
      </div>
    </div>
  </div>
)
