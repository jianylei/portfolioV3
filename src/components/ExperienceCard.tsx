import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

interface ExperienceCardProps {}

const ExperienceCard: FC<ExperienceCardProps> = ({}) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
      md:w-[700px] lg:w-[850px] xl:w-[900px] snap-center bg-slate-200 dark:bg-[#292929] p-10
      transition-opacity duration-200 overflow-hidden">
      {/* opacity-40 hover:opacity-100 */}
      <motion.div
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        <Image
          src="/cibc_logo.png"
          alt="CIBC logo"
          width="500"
          height="500"
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Application Developer Co-op</h4>
        <p className="font-bold text-2xl mt-1">CIBC</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-9 w-9 rounded-full"
            src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png"
            alt="Skill icon"
            width="100"
            height="100"
          />
          <Image
            className="h-9 w-9 rounded-full"
            src="https://user-images.githubusercontent.com/25181517/183911544-95ad6ba7-09bf-4040-ac44-0adafedb9616.png"
            alt="Skill icon"
            width="100"
            height="100"
          />
          <Image
            className="h-9 w-9 rounded-full"
            src="https://user-images.githubusercontent.com/25181517/183891303-41f257f8-6b3d-487c-aa56-c497b880d0fb.png"
            alt="Skill icon"
            width="100"
            height="100"
          />
          <Image
            className="h-9 w-9 rounded-full"
            src="https://user-images.githubusercontent.com/25181517/117533873-484d4480-afef-11eb-9fad-67c8605e3592.png"
            alt="Skill icon"
            width="100"
            height="100"
          />
        </div>
        <p className="uppercase py-5 text-slate-600 dark:text-gray-300">
          Jan. 2022 - April 2022
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Integrated automated testing in CI/CD pipelines, resulting in
            improved code quality and faster deployment times
          </li>
          <li>
            Optimized CI jobs by creating shell script to detect pending/running
            builds of the same service, reducing time and resource consumption
          </li>
          <li>
            Automated triggering of Azure DevOps pipelines with changes to Git
            repository, increasing development efficiency
          </li>
          <li>
            Documented microservices; defining endpoints, usage, and container
            resources requests and limits
          </li>
          <li>
            Developed unit tests for Java Spring Boot microservices using JUnit,
            targeting at least 95% coverage
          </li>
          <li>
            Utilized Agile software development methodologies, working with Jira
            and Confluence
          </li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
