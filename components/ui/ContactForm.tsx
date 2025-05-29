'use client'

export default function ContactForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      alert('Thank you for your message! I will get back to you soon.');
      e.currentTarget.reset();
    }}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-md bg-slate-800 border-slate-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md bg-slate-800 border-slate-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md bg-slate-800 border-slate-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  )
} 