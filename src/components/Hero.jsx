import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="ezzy-logo" 
              className='w-28 object-contain'
            />
        </nav>

        <h1 className='head_text'>
           Summarize Articles With <br className='max-md:hidden' />
           <span className='purple_gradient'>OpenAI GPT-4</span>
        </h1>

        <h2 className='desc'>
        Transform extensive articles into concise, clear, and focused summaries using our open-source article summarization tool.
        </h2>
    </header>
  )
}

export default Hero
