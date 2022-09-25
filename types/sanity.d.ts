interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

export interface Experience extends SanityBody {
  _type: 'experience'
  company: string
  companyImage: string
  dateStarted: Date
  dateEnded: Date
  isCurrentlyWorkingHere: boolean
  jobTitle: string
  points: string[]

  technologies: Technology[]
}
export interface PageInfo extends SanityBody {
  _type: 'pageInfo'
  address: string
  backgroundInformation: string
  email: string
  heroImage: Image
  name: string
  phoneNumber: string
  profilePic: Image
  role: string
}

export interface Project extends SanityBody {
  _type: 'project'
  image: Image
  linkToProject: string
  summary: string
  technologies: Technology[]
  title: string
}

export interface Skill extends SanityBody {
  _type: 'skill'
  image: Image
  title: string
}

export interface Social extends SanityBody {
  _type: 'social'
  title: string
  url: string
}

export interface Technology extends SanityBody {
  _type: 'skill'
  image: Image
  title: string
}
