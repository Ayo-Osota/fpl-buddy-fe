import { useForm, ValidationError } from '@formspree/react'

const Newsletter = () => {
  const [state, handleSubmit] = useForm('xjvdojvv')
  return (
    <div className="pb- mt-[4.4375rem] rounded-3xl bg-white/5 p-10">
      <h2 className="max-w-[24ch] text-xl font-medium text-white/90">
        Want help from this bot, but No Coding skills?
      </h2>
      <p className="mt-2 max-w-[44ch] text-xs font-light text-white/80">
        Join our effort to make this bot accessible to everyone, regardless of coding experience
      </p>

      {state.succeeded ? (
        <p className="mt-20 text-center">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-9">
          <div className="form-control flex flex-col gap-2.5">
            <label htmlFor="name" className="text-sm font-medium text-white/70">
              FPL team name
            </label>
            <input
              className="rounded-lg border-[0.5px] border-white/70 p-4"
              type="text"
              name="name"
            />
          </div>
          <div className="form-control mt-4 flex flex-col gap-2.5">
            <label htmlFor="email" className="text-sm font-medium text-white/70">
              Email Address
            </label>
            <input
              className="rounded-lg border-[0.5px] border-white/70 p-4"
              type="text"
              name="email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <button
            type="submit"
            className="bg-primary/90 disabled:bg-primary/60 hover:bg-primary/60 float-right mt-7.5 cursor-pointer rounded-lg p-4 text-base font-semibold"
            disabled={state.submitting}
          >
            Subscribe now
          </button>
        </form>
      )}
      <a
        className="mt-[14rem] mb-8 inline-block text-sm text-white/60 underline"
        href="https://github.com/Ayo-Osota/fpl-buddy"
      >
        More details on how the bot was built?
      </a>
    </div>
  )
}

export default Newsletter
