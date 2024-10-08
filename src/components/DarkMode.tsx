import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa6"


const DarkMode = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const getTheme = localStorage.getItem('theme') 
    if ( getTheme ) {
      setTheme( getTheme )
      if( getTheme == "dark" ) {
        document.querySelector('html')?.classList.add('dark')
      }else{
        document.querySelector('html')?.classList.remove('dark')
      }
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [])

  const themeToggle = () => {
    if(theme == 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      document.querySelector('html')?.classList.add('dark')
    }else{
      setTheme('light')
      localStorage.setItem('theme', 'light')
      document.querySelector('html')?.classList.remove('dark')
    }
  }

  return (
    <div>
      <button className="flex-center p-2 rounded-lg box text-xl" onClick={themeToggle}>
        {theme == 'light' ? (
          <FaSun/>
        ) : (
          <FaMoon/>
        )}
      </button>
    </div>
  )
}

export default DarkMode
