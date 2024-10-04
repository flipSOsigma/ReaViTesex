import react from '../assets/logo-react.png'
import { FaGithub } from 'react-icons/fa'
const Index = () => {
  const cardContent = [
    {
      id :1, 
      ttl : 'Card components',
      hglt : 'build in components',
      cntnt : 'this feature is make you easier to make card like product card',
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
    <div className="h-screen w-full text-sm flex-center">
      <div className="flex-center min-h-screen py-20 container flex-col text-lg justify-between">
        <div className='flex-center'>
          <div className="box-ttl shadow-none box-md">
            <h1>ReaViTesex</h1>
            <p>version 1.0.0</p>
          </div>
          <div className="box-ttl box-md opacity-0"></div>
          <div className="box-ttl box-md opacity-0"></div>
        </div>
        <div className="flex-center flex-col">
          <img src={react} alt="" className='w-40 grayscale'/>
          <h1 className='font-bold typewriter text-3xl'><span className=''>React</span> + Vite</h1>
          <p className='text-sm mt-4'>modified by : <span className=''>flipSOsigma</span></p>
          <a href='https://github.com/flipSOsigma' className="flex-center gap-1 text-sm">
            <FaGithub/>
            https://github.com/flipSOsigma
          </a>
        </div>
        <div className="flex-center items-start gap-4 mt-8">
          { cardContent?.map((doc) => (
            <div key={doc.id} className="box-md text-sm flex flex-col">
              <div className="box-ttl">
                <h1>{doc.ttl}</h1>
                <p>{doc.hglt}</p>
              </div>
              <hr />
              <div className="box-cntnt">
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
