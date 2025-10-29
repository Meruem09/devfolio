'use client'
import { Project } from '@/features/profile/types/projects'

export function ProjectVideo({
  project,
}: {
  project: Project;
}){
  return (
    <>
      <video
      src={project.video}
      className=" w-96 rounded-2xl object-fill"
      autoPlay
      loop
      muted
      playsInline
      />
    </>
  )
}
