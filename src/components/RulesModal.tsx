import Rules from '../public/image-rules.svg'

export const RulesModal = ({ handleClose }) => (
  <div className="fixed inset-0 z-10 flex h-screen w-screen flex-col justify-center gap-20 bg-white text-dark">
    <p className="text-center text-2xl font-bold ">RULES</p>
    <img src={Rules} alt="rules" className="mx-auto" />
    <button
      className="mx-auto cursor-pointer justify-self-end"
      onClick={handleClose}
    >
      X
    </button>
  </div>
)
