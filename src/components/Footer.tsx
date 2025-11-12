import { FormEvent, useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email) {
      return
    }

    const subject = encodeURIComponent('New BéƠi newsletter subscription')
    const body = encodeURIComponent(`Hi Dylan,\n\n${email} would love to keep in touch with BéƠi.\n\nThanks!`)
    window.location.href = `mailto:dylantranatwork@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Popular links</h4>
             <ul className="space-y-2 text-sm text-gray-400">
               <li><a href="#" className="hover:text-brand-yellow transition-colors">Subscriptions</a></li>
               <li><a href="#" className="hover:text-brand-yellow transition-colors">Order Now</a></li>
               <li><a href="#" className="hover:text-brand-yellow transition-colors">Download Our App</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
             <ul className="space-y-2 text-sm text-gray-400">
               <li><a href="#" className="hover:text-brand-yellow transition-colors">About</a></li>
               <li><a href="#" className="hover:text-brand-yellow transition-colors">Partnerships</a></li>
               <li><a href="#" className="hover:text-brand-yellow transition-colors">Careers</a></li>
               <li><a href="#" className="hover:text-brand-yellow transition-colors">BéƠi Gives</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Helpful links</h4>
             <ul className="space-y-2 text-sm text-gray-400">
               <li><a href="#" className="hover:text-brand-yellow transition-colors">Locations</a></li>
               <li><a href="#" className="hover:text-brand-yellow transition-colors">Contact Us</a></li>
               <li><a href="#" className="hover:text-brand-yellow transition-colors">Manage Account</a></li>
               <li><a href="#" className="hover:text-brand-yellow transition-colors">Shipping & Returns</a></li>
               <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-brand-yellow transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Let's keep in touch.</h4>
            <form onSubmit={handleSubmit} className="mb-6 space-y-2">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-brand-yellow transition-colors"
              />
              <button
                type="submit"
                 className="w-full px-4 py-2 bg-brand-yellow text-brand-blue font-medium hover:bg-brand-soft transition-colors"
              >
                Submit
              </button>
            </form>
            <div className="flex gap-4">
               <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors" aria-label="Instagram">Instagram</a>
               <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors" aria-label="TikTok">TikTok</a>
               <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          Copyright © 2025 BéƠi.
        </div>
      </div>
    </footer>
  )
}

export default Footer

