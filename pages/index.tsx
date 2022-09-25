import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Header } from '../components/header'
import { MotionImage } from '../components/motion-image'
import {
  About,
  Contact,
  Experience,
  Hero,
  Skills,
} from '../components/sections'
import { Projects } from '../components/sections/projects'
import {
  Experience as IExperience,
  PageInfo,
  Project,
  Skill,
  Social,
} from '../types/sanity'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

interface Props {
  pageInfo: PageInfo
  experiences: IExperience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

const Home: NextPage<Props> = ({
  experiences,
  pageInfo,
  projects,
  skills,
  socials,
}) => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Miten Chauhan | Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <Experience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer z-30">
          <div className="flex items-center justify-center">
            <MotionImage
              imageProps={{
                src: 'https://mitenchauhan.com/_nuxt/img/122f864.png',
                layout: 'fill',
                objectFit: 'cover',
                priority: true,
              }}
              motionProps={{
                className:
                  'h-10 w-10 rounded-full relative overflow-hidden filter grayscale hover:grayscale-0 cursor-pointer',
              }}
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo()
  const experiences = await fetchExperiences()
  const projects = await fetchProjects()
  const skills = await fetchSkills()
  const socials = await fetchSocials()

  return {
    props: {
      experiences,
      pageInfo,
      projects,
      skills,
      socials,
    },
    // TODO: ondemand revalidation
    // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation
    revalidate: 10,
  }
}
