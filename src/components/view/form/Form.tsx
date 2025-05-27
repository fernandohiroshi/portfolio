'use client'

import emailjs from '@emailjs/browser'
import React, { useState, FormEvent } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/shadcn/button'

import Box from '../bento/Box'

const Form: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const templatesParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templatesParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        (response) => {
          toast.success('Email sent successfully!')
          setName('')
          setEmail('')
          setMessage('')
          console.log('Email sent successfully!', response)
        },
        (error) => {
          toast.error(error)
          console.log('ERRO', error)
        },
      )
  }

  return (
    <Box className="col-span-12 md:col-span-6">
      <form onSubmit={sendEmail} className="flex scroll-mt-24 flex-col justify-between gap-3 text-sm" id="contact">
        <div>
          <h2 className="mb-2 text-2xl font-medium tracking-widest text-amber-500 md:text-2xl">Contact Me</h2>
          <p className="mb-2 text-justify text-xs text-foreground opacity-80 lg:text-sm">
            If you prefer, send me an email and share your ideas!
          </p>
        </div>
        <input
          className="rounded-lg px-4 py-2 outline-none dark:bg-neutral-900"
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

        <input
          className="rounded-lg px-4 py-2 outline-none dark:bg-neutral-900"
          type="text"
          placeholder="Your e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <textarea
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
          className="h-[8rem] resize-none rounded-lg px-4 py-2 outline-none dark:bg-neutral-900"
        />

        <div className="flex justify-end">
          <Button variant="outline" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Box>
  )
}

export default Form
