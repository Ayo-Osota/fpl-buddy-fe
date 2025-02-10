export interface PlayerProps {
  playerName: string
  playerPosition: number
  playerScore: number
  playerTeam: number
  isCaptain?: boolean
  isVice?: boolean
  featured?: boolean
  bench?: number
}

export interface IPlayer extends PlayerProps {
  playerId: number
}

const players: IPlayer[] = [
  {
    playerId: 1,
    playerPosition: 1,
    playerName: 'De Bruyne',
    playerScore: 10,
    playerTeam: 1,
    bench: 0,
    isCaptain: true,
    isVice: false,
    featured: true
  },
  {
    playerId: 2,
    playerPosition: 1,
    playerName: 'Salah',
    playerScore: 9,
    playerTeam: 1,
    bench: 1,
    isCaptain: false,
    isVice: true,
    featured: true
  },
  {
    playerId: 3,
    playerPosition: 2,
    playerName: 'Kane',
    playerScore: 8,
    playerTeam: 1,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 4,
    playerPosition: 2,
    playerName: 'Son',
    playerScore: 7,
    playerTeam: 1,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 5,
    playerPosition: 2,
    playerName: 'Fernandes',
    playerScore: 6,
    playerTeam: 1,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 6,
    playerPosition: 2,
    playerName: 'Rashford',
    playerScore: 5,
    playerTeam: 1,
    bench: 3,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 7,
    playerPosition: 2,
    playerName: 'Grealish',
    playerScore: 4,
    playerTeam: 1,
    bench: 4,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 8,
    playerPosition: 3,
    playerName: 'Foden',
    playerScore: 3,
    playerTeam: 1,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 9,
    playerPosition: 3,
    playerName: 'Sterling',
    playerScore: 2,
    playerTeam: 1,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 10,
    playerPosition: 3,
    playerName: 'Mane',
    playerScore: 1,
    playerTeam: 1,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 11,
    playerPosition: 3,
    playerName: 'Aubameyang',
    playerScore: 0,
    playerTeam: 1,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 12,
    playerPosition: 3,
    playerName: 'Vardy',
    playerScore: 0,
    playerTeam: 1,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: false
  },
  {
    playerId: 13,
    playerPosition: 4,
    playerName: 'Martial',
    playerScore: 0,
    playerTeam: 1,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: false
  },
  {
    playerId: 14,
    playerPosition: 4,
    playerName: 'Werner',
    playerScore: 0,
    playerTeam: 1,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: false
  },
  {
    playerId: 15,
    playerPosition: 4,
    playerName: 'Havertz',
    playerScore: 0,
    playerTeam: 1,
    bench: 2,
    isCaptain: false,
    isVice: false,
    featured: false
  }
]

const teams = [
  {
    teamId: 1,
    gkpImg: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_43-66.webp',
    img: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_43-66.webp'
  }
]

export { players, teams }
