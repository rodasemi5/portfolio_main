import React from 'react'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'
// import { FaFacebook } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsGithub/>
        </div>
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <BsTwitter/>
        </div>
    </div>
  )
}

export default SocialMedia