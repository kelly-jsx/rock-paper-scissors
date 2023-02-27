import Rules from '../public/image-rules.svg'

export const RulesModal = ({ handleClose }: any) => (
  <div className="fixed inset-0 z-10 flex h-screen w-screen bg-slate-900/70">
    <div className="flex h-screen w-screen flex-col justify-center gap-20 bg-white text-dark lg:m-auto lg:h-max lg:w-max lg:gap-4  lg:rounded-lg lg:px-12 lg:py-5">
      <div className="flex justify-center lg:justify-between">
        <p className="text-center text-3xl font-bold">RULES</p>
        <button className="hidden text-2xl lg:block" onClick={handleClose}>
          X
        </button>
      </div>
      <img src={Rules} alt="rules" className="mx-auto" />
      <button
        className="mx-auto cursor-pointer justify-self-end lg:hidden"
        onClick={handleClose}
      >
        X
      </button>
    </div>
  </div>
)
