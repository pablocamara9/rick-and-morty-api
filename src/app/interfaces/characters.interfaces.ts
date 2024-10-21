export interface CharacterListResponse {
    info: CharacterInfo;
    results: Character[]
 }

export interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location: Location
    image: string
    episode: string[]
    url: string
    created: string
  }

  export interface CharacterInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }
  
  export interface Origin {
    name: string
    url: string
  }
  
  export interface Location {
    name: string
    url: string
  }
  