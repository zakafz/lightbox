import React from 'react'
import Frame from './components/frame'
import Image from './components/image'

const Lightbox = (props: { title: string; src: string; }) => {
  return (
    <Frame title={props.title}>
      <Image />
    </Frame>
  )
}

export default Lightbox