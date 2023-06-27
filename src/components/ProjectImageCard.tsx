import Image from 'next/image'
import { FC } from 'react'

interface ProjectImageCardProps {}

const ProjectImageCard: FC<ProjectImageCardProps> = ({}) => {
  return (
    <div className="m-auto h-64 w-96 overflow-hidden rounded-lg shadow">
      <div
        className="flex h-8 w-full gap-1 border-b border-gray-default
        bg-gray-800 p-3 dark:border-gray-400 dark:bg-gray-default/50">
        <div className="h-2 w-2 rounded-full bg-gray-600 dark:bg-gray-default" />
        <div className="h-2 w-2 rounded-full bg-gray-600 dark:bg-gray-default" />
        <div className="h-2 w-2 rounded-full bg-gray-600 dark:bg-gray-default" />
      </div>

      <Image src="/test.png" alt="test" width="500" height="500" />
    </div>
  )
}

export default ProjectImageCard
