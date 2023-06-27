import { FC } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from '../ui/Dialog'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectDetailProps {}

const ProjectDetail: FC<ProjectDetailProps> = ({}) => {
  return (
    <Dialog>
      <DialogTrigger
        className="text-sm text-[#D4AF37] hover:text-[#cd9827] dark:text-[#F7AB0A]
      dark:hover:text-[#F7AB0A]/80">
        Learn More
      </DialogTrigger>
      <DialogContent className="px-[3.75rem] py-10">
        <DialogHeader className="mx-5 flex items-center break-all text-center text-2xl font-semibold">
          Writeit
        </DialogHeader>

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

        <ul className="ml-5 list-disc space-y-4 text-base">
          <li>
            Writeit is a Reddit-inspired social media platform with a
            forum-style discussion structure; allowing users to
            register/sign-in, create their own communities, and publish posts of
            their own
          </li>
          <li>
            Integrated secure authentication with OAuth protocol, using NextAuth
            with Google
          </li>
          <li>
            Used React Query for modern data fetching; allowing for handling of
            query state to improve UX with optimistic updates
          </li>
          <li>
            Improved user experience by implementing infinite scrolling for
            dynamic posts loading
          </li>
          <li>Features full comment functionality with nested replies</li>
        </ul>
        <DialogFooter className="flex gap-3">
          <a
            href="https://github.com/jianylei"
            target="_blank"
            rel="noreferrer"
            className="text-[#D4AF37] hover:text-[#cd9827] dark:text-[#F7AB0A]
              dark:hover:text-[#F7AB0A]/80">
            Demo
          </a>

          <a
            href="https://github.com/jianylei"
            target="_blank"
            rel="noreferrer"
            className="text-[#D4AF37] hover:text-[#cd9827] dark:text-[#F7AB0A]
              dark:hover:text-[#F7AB0A]/80">
            GitHub
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDetail
