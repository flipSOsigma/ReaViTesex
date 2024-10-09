import react from '../assets/logo-react.png'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Index = () => {
  const cardContent = [
    {
      id :1, 
      ttl : 'Fullstack Friendly',
      hglt : 'build in Firebase database',
      cntnt : 'this feature is make you easier to make connection with firebase',
      btn : 'explore card',
    },
    {
      id :2, 
      ttl : 'Class grouping',
      hglt : 'grouped class from tailwind',
      cntnt : 'this feature is make u feel like using bootstrap but from tailwind css',
      btn : 'documentation',
    },
    {
      id :3, 
      ttl : 'Common Components',
      hglt : 'commonly most used component',
      cntnt : 'theres a navbar, modal, and sidebar. the component that make u feel ez',
      btn : 'explore component',
    },
  ]
  return (
    <div className="h-screen w-full flex-center bg-[url('./src/assets/bg.png')]">
      <div className="flex-center text-sm min-h-screen container flex-col justify-center ">
        <div className="flex-center flex-col">
          <img src={react} alt="" className='w-40 grayscale'/>
          <h1 className='font-bold typewriter text-3xl'><span className=''>React</span> + Vite</h1>
          <p className='w-full max-w-2xl text-center'>
            this is still react vite that u know before, i just make u easier to devolope react app, 
            such as build in react-router-app, react-icons, and little bit common components
          </p>
          <div className="flex gap-2 mt-2">
            <Link to={"/doc"} className="box px-3 py-2 bg-black text-white">read document</Link>
            <button className="box px-3 py-2 bg-black text-white">read document</button>
          </div>
          <p className='mt-4'>modified by : <span className=''>flipSOsigma</span></p>
          <a href='https://github.com/flipSOsigma' className="flex-center gap-1 text-sm">
            <FaGithub/>
            https://github.com/flipSOsigma
          </a>
        </div>
        <div className="flex-center flex-col w-full sm:flex-row items-start gap-4 mt-8">
          { cardContent?.map((doc) => (
            <div key={doc.id} className="w-full bg-white border neo relative duration-150 overflow-hidden border-black group">
              <div className="p-4 ">
                <b className='text-xl'>{doc.ttl}</b>
                <p>{doc.hglt}</p>
              </div>
              <hr className='border-t border-black'/>
              <div className="p-4">
                <p>{doc.cntnt}</p>
                <button className='btn mt-2'>{doc.btn}</button>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Index
