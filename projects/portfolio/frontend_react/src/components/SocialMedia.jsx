import React from 'react'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'
// import { FaFacebook } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <a href='https://github.com/rodasemi5'>
            <BsGithub/>
        </a>
        <a href='https://www.linkedin.com/in/rodrigo-seminario-4ab30519a/'>
            <BsLinkedin href='https://www.linkedin.com/in/rodrigo-seminario-4ab30519a/'/>
        </a>
        <a href='https://twitter.com/ChillestLlama'>
            <BsTwitter />
        </a>
    </div>
  )
}

export default SocialMedia