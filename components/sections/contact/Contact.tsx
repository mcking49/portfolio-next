import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Inputs {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {}

const Contact = ({}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:miten@chauhan.nz?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message}`
  }

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx0auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Do you want to work together?{' '}
          <span className="underline decoration-[#F7AB0A]/50">
            Let&apos;s get in touch.
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+12345667</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">miten@chauhan.nz</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Developer Lane</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              type="text"
              placeholder="Name"
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40"
            />
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40"
            />
          </div>

          <input
            {...register('subject')}
            type="text"
            placeholder="Subject"
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40"
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
