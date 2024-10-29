import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useAnimate } from 'framer-motion'
import styled from '@emotion/styled'
import Image from 'next/image'

const InteractiveLandingWrapper = styled.div`
  width: 100%;
  height: 200vh;
  position: relative;
  overflow: hidden;
  font-family: Arial, sans-serif;
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const MainContent = styled(motion.div)`
  width: 100%;
  height: 200vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10rem;
  padding: 1.25rem;
  z-index: 40;
`

const LetsTalk = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1.25rem;
  font-size: 12.5rem;
`

const Footer = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #ff391e;
  display: flex;
  z-index: -20;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  color: white;
  font-size: 1.5rem;
`

const Credits = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: -30;
`

const InteractiveLanding: React.FC = () => {
  const ref = useRef(null)
  const [scope, animate] = useAnimate()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  const springConfig = {
    stiffness: 600,
    damping: 50
  }

  const rotate = useTransform(scrollYProgress, [0.5, 1], [0, -5])
  const xOff = useTransform(scrollYProgress, [0.5, 1], [0, -100])
  const yOff = useTransform(scrollYProgress, [0.5, 1], [0, -600])

  const xSpring = useSpring(xOff, springConfig)
  const ySpring = useSpring(yOff, springConfig)
  const rotSpring = useSpring(rotate, springConfig)

  const handleLeave = (e: React.MouseEvent) => {
    e.preventDefault()
    rotSpring.set(rotate.get())
    xSpring.set(xOff.get())
    ySpring.set(yOff.get())
  }

  const handleEnter = (e: React.MouseEvent) => {
    e.preventDefault()
    rotSpring.set(5)
    xSpring.set(-100)
    ySpring.set(-800)
  }

  const handleLastPanel = () => {
    animate(scope.current, { x: 140, y: -380, rotate: -5 }, { type: 'spring', stiffness: 600, damping: 50 })
  }

  const handleLastPanelReset = () => {
    animate(scope.current, { x: 0, y: 0, rotate: 0 }, { type: 'spring', stiffness: 600, damping: 50 })
  }

  return (
    <InteractiveLandingWrapper ref={ref}>
      <MainContent style={{ rotate: rotSpring, x: xSpring, y: ySpring }}>
        <LetsTalk>
          <div>Let's Talk</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </LetsTalk>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1684 419" style={{ width: '100%' }}>
          <path d="M1684 215.276v90.04H0v-90.04z" />
          <path d="M1483.31 102h95.98v316.592h-95.98z" />
          <path d="M1684 328.552v90.04h-200.684v-90.04zM1684 102v90.04h-200.684V102zM1177.93 102h95.98v316.592h-95.98z" />
          <path d="M1177.93 102h95.98l186.14 316.592h-95.98z" />
          <path d="M1364.07 102h95.98v316.592h-95.98zM1058.68 102h95.98v316.592h-95.98zM852.18 102h95.98v316.592h-95.98z" />
          <path d="M1035.41 328.552v90.04H852.177v-90.04zM535.156 102h95.98v316.592h-95.98z" />
          <path d="M735.842 328.552v90.04H535.158v-90.04zM735.842 102v90.04H535.158V102zM258.852 102h95.98v316.592h-95.98zM415.908 102h95.98v316.592h-95.98zM69.805 102h95.979v316.592h-95.98z" />
          <path d="M235.586 102v90.04H.001V102z" />
        </svg>
      </MainContent>

      <Footer ref={scope}>
        <FooterContent>
          {/* Footer content here */}
        </FooterContent>
      </Footer>

      <Credits onClick={(e) => { handleLastPanelReset(); handleLeave(e); }}>
        {/* Credits content here */}
      </Credits>
    </InteractiveLandingWrapper>
  )
}

export default InteractiveLanding