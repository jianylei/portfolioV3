'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface ContactSectionProps {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactSection: FC<ContactSectionProps> = ({}) => {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href =
      `mailto:jianyonglei@gmail.com?subject=${data.subject}&` +
      `body=Hi, my name is ${data.name}: ${data.message} (${data.email})`
  }

  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="relative mx-auto flex h-full max-w-full flex-col
        items-center justify-evenly overflow-hidden px-10 text-left">
        <h3 className="text-2xl uppercase tracking-[20px] text-slate-600 dark:text-gray-default">
          Contact
        </h3>

        <div className="my-20 flex flex-col space-y-10">
          <h4 className="text-center text-2xl font-semibold">
            I have got just what you need.{' '}
            <span className="underline decoration-[#F7AB0A]/50">
              Lets Talk.
            </span>
          </h4>
          <form
            className="mx-auto flex w-fit flex-col space-y-2"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="flex space-x-2">
              <input
                {...register('name')}
                className="contactInput"
                type="text"
                placeholder="Name"
              />
              <input
                {...register('email')}
                className="contactInput"
                type="email"
                placeholder="Email"
              />
            </div>

            <input
              {...register('subject')}
              className="contactInput"
              type="text"
              placeholder="Subject"
            />

            <textarea
              {...register('message')}
              className="contactInput"
              placeholder="Message"
            />
            <button
              type="submit"
              className="rounded-md bg-[#D4AF37]/70 px-10 py-5 text-lg font-semibold text-black transition-colors duration-200
              hover:bg-[#D4AF37] dark:bg-[#F7AB0A]/60 dark:hover:bg-[#F7AB0A]/80">
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection
