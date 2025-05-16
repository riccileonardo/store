import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <section className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white py-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl animate-ping"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
                Bem-vindo à nossa plataforma!
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Aqui você encontra ferramentas poderosas, uma comunidade vibrante e tudo que precisa para crescer com estilo.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <button className="px-6 py-3 rounded-xl bg-white text-purple-700 font-semibold shadow-lg hover:scale-105 transition-transform">
                  Começar agora
                </button>
                <button className="px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-purple-700 transition-colors">
                  Saiba mais
                </button>
              </div>
            </div>
      </section>
  )
}

export default App
