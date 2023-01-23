import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';

// import {images} from '../../constants'
import './About.scss';
import { urlFor, client } from '../../client';

// const abouts = [
//   {
//     title: 'Front-End Development',
//     description: 'I am a good front-end developer',
//     imgUrl: images.about01
//   },

//   {
//     title: 'Web Design',
//     description: 'I am a good web designer',
//     imgUrl: images.about02
//   },

//   {
//     title: 'Full-stack Development',
//     description: 'I am a good full-stack developer',
//     imgUrl: images.about04
//   },
// ];


const About = () => {

  const [abouts, setAbout] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
     .then((data) => setAbout(data))
  }, [])


  return (
    <>
    <h2 className='head-text'>
      I Know that 
      <span className=''>Good Dev</span>
      <br/>
      means
      <span>Good Business</span>
    </h2>

    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrap(About, 'about')