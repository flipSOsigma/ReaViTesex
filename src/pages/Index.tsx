import react from '../assets/logo-react.png'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Index = () => {
  
  return (
    <div className="h-screen w-full flex-center">
      <div className="flex-center min-h-screen container flex-col justify-center ">
        <h1 className="font-extrabold text-3xl mb-4 capitalize"> react vite tsx </h1>
        <p className='max-w-4xl text-center'> react vite typsscript kit that make you easier to start a new project. we try to make you feel comfortable when starting a new react + vite + tsx project,
          we ve been install react-router-dom, react-icons, and tailwindcss here, so you dont have to isntall
          it yourself
        </p>
        <div className="flex-center gap-4 mt-4">
          <Link to={'/docs'} className='neo'>read documentation</Link>
          <Link to={'/components'} className='neo'>search components</Link>
        </div>
      </div>
    </div>
  )
}

export default Index
