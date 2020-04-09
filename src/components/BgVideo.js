import React from 'react'
import bgvideo from '../video/bgvideo.mp4'

export default function BgVideo() {
    return (
        <video className="bg-video" loop autoPlay muted={true} controls={false} playsInline src={bgvideo} type="video/webm"></video>
    )
}
