'use client'

import { useIntersection } from '@mantine/hooks'
import { useTheme } from 'next-themes'
import { FC, useEffect, useRef, useState } from 'react'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

interface AboutContentProps {}

const AboutContent: FC<AboutContentProps> = ({}) => {
  const [show, setShow] = useState<boolean>(false)
  const initRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  const { ref, entry } = useIntersection({
    root: initRef.current,
    threshold: 1
  })

  useEffect(() => {
    if (entry?.isIntersecting) {
      setShow(true)
    }
  }, [entry, setShow])

  return (
    <div ref={ref}>
      <RoughNotationGroup show={show}>
        <div className="mt-[4.5rem] flex flex-col space-y-3 py-10 md:px-10 lg:px-32">
          <h2 className="text-2xl font-semibold">
            Hello! I'm Jian, a{' '}
            <RoughNotation
              type="highlight"
              color={isDark ? '#4A456A' : '#C2C3F5'}
              iterations={1}>
              developer
            </RoughNotation>{' '}
            based in Canada.
          </h2>
          <p>
            I love building tools that are user-friendly, simple and intuitive.
          </p>
          <p>
            I am a graduate of Seneca College's Computer Programming program,
            where I spent 2 years learning the fundamentals of front-end and
            back-end web developement , along with object-oriented programming.
            I also worked at CIBC as an Application Developer Co-op, where I got
            extensive knowledge and experience working with Java, as well as the
            Azure DevOps cloud platform.
          </p>
          <p>
            Through these experiences, I had the opportunity to work with both
            small and large, specialised and cross-functional teams across
            different time zones and developed a working style that leans
            towards flexibility , and collaboration.
          </p>
          <p>
            I'm currently looking for a new role as a developer.{' '}
            <RoughNotation type="circle" color="#B56470" iterations={2}>
              Hire me?
            </RoughNotation>
          </p>
        </div>
      </RoughNotationGroup>
    </div>
  )
}

export default AboutContent
