'use client'

import { useState } from 'react'
import { Home, Phone, Mail } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
    subject: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <div>
          <h2 className="mb-8 text-3xl font-bold">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              name="message"
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[150px] w-full resize-none rounded border border-gray-300 p-3 focus:border-gray-500 focus:outline-none"
              required
            />
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 p-3 focus:border-gray-500 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 p-3 focus:border-gray-500 focus:outline-none"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-3 focus:border-gray-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="rounded border border-red-500 px-8 py-3 text-red-500 transition-colors hover:bg-red-500 hover:text-white"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8 lg:pl-8">
          <div className="flex items-start gap-4">
            <Home className="mt-1 h-6 w-6 text-gray-600" />
            <div>
              <p className="font-medium text-gray-900">Buttonwood, California.</p>
              <p className="text-gray-600">Rosemead, CA 91770</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="mt-1 h-6 w-6 text-gray-600" />
            <div>
              <p className="font-medium text-gray-900">+1 253 565 2365</p>
              <p className="text-gray-600">Mon to Fri 9am to 6pm</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="mt-1 h-6 w-6 text-gray-600" />
            <div>
              <p className="font-medium text-gray-900">support@colorlib.com</p>
              <p className="text-gray-600">Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

