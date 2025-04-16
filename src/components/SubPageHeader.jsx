import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const SubPageHeader = ({subtitle, title}) => {
  const headerRef = useRef(null)

  useGSAP(() => {
    gsap.from(headerRef.current.querySelector('h5'), {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    })

    gsap.from(headerRef.current.querySelector('h1'), {
      y: -50,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out"
    })
  })

  return (
    <div ref={headerRef}>
       <div className="container">
            <div className="row">
                <div className="col-md-10">
                <h5 className="pb-2 text-primary-color font-semibold">
                    {subtitle}
                </h5>
                <h1 className="subpageHeaderTitle font-semibold text-secondary-color">
                    {title}
                </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubPageHeader
