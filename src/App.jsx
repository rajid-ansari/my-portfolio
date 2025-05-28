import About from './components/About'
import Hero from './components/Hero'
import Project from './components/Project'
import Social from './components/Social'

const App = () => {
  return (
    <div className='min-h-dvh bg-zinc-900 md:px-20 px-5 text-gray-100 overflow-hidden'>
      <Hero />
      <Project />
      <About />
      <Social />
    </div>
  )
}

export default App  