'use client'

import { FC } from 'react'
import ProjectImageCard from './ProjectImageCard'
import { motion } from 'framer-motion'
import Carousel from './Carousel'
import Image from 'next/image'
import ProjectDetail from './ProjectDetail'

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = ({}) => {
  const images = [
    '/test.png',
    '/test.png',
    '/test.png',
    '/test.png',
    '/test.png'
  ]
  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="relative mx-auto flex h-full max-w-full flex-col
        items-center justify-evenly overflow-hidden px-10 text-left">
        <h3 className="text-2xl uppercase tracking-[20px] text-slate-600 dark:text-gray-default">
          Projects
        </h3>

        <div className="mx-auto w-full p-10">
          <Carousel loop>
            {images.map((src, i) => {
              return (
                <div
                  className="relative h-full flex-[0_0_100%] items-center justify-center space-y-6 px-20
                  py-10 md:px-44"
                  key={i}>
                  <ProjectImageCard />

                  <div className="max-w-6xl px-0 md:px-10">
                    <h4 className="text-center text-4xl font-semibold">
                      Writeit
                    </h4>

                    <p className="m-0 mb-3 mt-5 text-center text-lg md:text-left">
                      Writeit is a Reddit-inspired social media platform with a
                      forum-style discussion structure; allowing users to
                      register/sign-in, create their own communities, and
                      publish posts of their own
                    </p>

                    <div className="flex justify-center">
                      <ProjectDetail />
                    </div>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>

        {/*
        <div
          className="relative z-10 flex w-full snap-x snap-mandatory overflow-y-hidden
          overflow-x-scroll">
          {projects.map((project) => {
            return (
              <div
                className="flex h-full w-screen flex-shrink-0 snap-center flex-col
                items-center justify-center space-y-5 p-20 md:p-44">
                <motion.div
                  initial={{
                    y: -300,
                    opacity: 0
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}>
                  <ProjectImageCard />
                </motion.div>

                <div className="max-w-6xl space-y-10 px-0 md:px-10">
                  <h4 className="text-center text-4xl font-semibold">
                    Writeit
                  </h4>

                  <p className="text-center text-lg md:text-left">
                    Writeit is a Reddit-inspired social media platform with a
                    forum-style discussion structure; allowing users to
                    register/sign-in, create their own communities, and publish
                    posts of their own
                  </p>
                </div>
                </div>
            )
          })}
        </div>*/}
      </motion.div>
    </section>
  )
}

export default ProjectSection
