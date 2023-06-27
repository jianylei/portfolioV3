import { FC } from 'react'
import Image from 'next/image'

interface ExperienceContentProps {}

const ExperienceContent: FC<ExperienceContentProps> = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="my-2 flex justify-center gap-4 space-x-2">
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

      <ul className="ml-5 list-disc space-y-4 px-10 pb-12 text-base">
        <li>
          Integrated automated testing in CI/CD pipelines, resulting in improved
          code quality and faster deployment times
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
  )
}

export default ExperienceContent
