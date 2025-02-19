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
    playerId: 328,
    playerPosition: 3,
    playerName: 'M.Salah',
    playerScore: 0,
    playerTeam: 12,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 351,
    playerPosition: 4,
    playerName: 'Haaland',
    playerScore: 0,
    playerTeam: 13,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 182,
    playerPosition: 3,
    playerName: 'Palmer',
    playerScore: 0,
    playerTeam: 6,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 401,
    playerPosition: 4,
    playerName: 'Isak',
    playerScore: 0,
    playerTeam: 15,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 541,
    playerPosition: 4,
    playerName: 'Cunha',
    playerScore: 0,
    playerTeam: 20,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 13,
    playerPosition: 3,
    playerName: 'Ødegaard',
    playerScore: 0,
    playerTeam: 1,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 346,
    playerPosition: 3,
    playerName: 'Doku',
    playerScore: 0,
    playerTeam: 13,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 565,
    playerPosition: 3,
    playerName: 'Sarabia',
    playerScore: 0,
    playerTeam: 20,
    bench: 2,
    isCaptain: false,
    isVice: false,
    featured: false
  },
  {
    playerId: 24,
    playerPosition: 2,
    playerName: 'White',
    playerScore: 0,
    playerTeam: 1,
    bench: 0,
    isCaptain: false,
    isVice: true,
    featured: true
  },
  {
    playerId: 508,
    playerPosition: 1,
    playerName: 'Vicario',
    playerScore: 0,
    playerTeam: 18,
    bench: 0,
    isCaptain: true,
    isVice: false,
    featured: true
  },
  {
    playerId: 361,
    playerPosition: 2,
    playerName: 'Rúben',
    playerScore: 0,
    playerTeam: 13,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 396,
    playerPosition: 1,
    playerName: 'Dúbravka',
    playerScore: 0,
    playerTeam: 15,
    bench: 1,
    isCaptain: false,
    isVice: false,
    featured: false
  },
  {
    playerId: 86,
    playerPosition: 2,
    playerName: 'Ajer',
    playerScore: 0,
    playerTeam: 4,
    bench: 0,
    isCaptain: false,
    isVice: false,
    featured: true
  },
  {
    playerId: 337,
    playerPosition: 2,
    playerName: 'Tsimikas',
    playerScore: 0,
    playerTeam: 12,
    bench: 3,
    isCaptain: false,
    isVice: false,
    featured: false
  },
  {
    playerId: 313,
    playerPosition: 2,
    playerName: 'Bradley',
    playerScore: 0,
    playerTeam: 12,
    bench: 4,
    isCaptain: false,
    isVice: false,
    featured: false
  }
]

const teams = [
  {
    teamName: 'arsenal',
    teamId: 1,
    gkpImg: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_43-66.webp',
    img: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_3-110.webp'
  },
  {
    teamName: 'city',
    teamId: 13,
    gkpImg: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_43-66.webp',
    img: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_43-66.webp'
  },
  {
    teamName: 'liverpool',
    teamId: 12,
    gkpImg: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_43-66.webp',
    img: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_14-110.webp'
  },
  {
    teamName: 'newcastle',
    teamId: 15,
    gkpImg: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_4_1-110.webp',
    img: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_43-66.webp'
  },
  {
    teamName: 'wolves',
    teamId: 20,
    gkpImg: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_43-66.webp',
    img: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_39-110.webp'
  },
  {
    teamName: 'brentford',
    teamId: 4,
    gkpImg: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_43-66.webp',
    img: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_94-110.webp'
  },
  {
    teamName: 'spurs',
    teamId: 18,
    gkpImg: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_6_1-110.webp',
    img: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_6-110.webp'
  },
  {
    teamName: 'chelsea',
    teamId: 6,
    gkpImg: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_43-66.webp',
    img: 'https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_8-110.webp'
  }
]

export { players, teams }
