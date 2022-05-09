
export interface CharacterResponse  {
    info: {
      count: number
      pages: number
      next: number
      prev: number
    }
    results: Array<{
      id: number
      name: string
      image: string
      species: string
      status: string
      episode: string[]
      location: location
      created: string
      gender: string
      origin: origin
      type: string
      url: string
    }>
  }


export interface Character {
    id: number
    name: string
    image: string
    status: string
    episode: string[]
    species: string
    location: location
    created: string
    gender: string
    origin: origin
    type: string
    url: string
}

export interface FilterOpt {
  species: string
  gender: string
  status: string
}

export interface filter {
  name: string
  value: string
}

export interface location {
  name: string
  url: string
}

export interface origin {
  name: string
  url: string
}