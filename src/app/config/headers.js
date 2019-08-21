export default  [
  {
    match:/^\/$/,
    menus:[
      {
      label:'Derniers Matchs',
      href:'/games',
      accessLevel:10
      },
      {
      label:'Equipes',
      href:'/team',
      accessLevel:10
      },
      {
      label:'Mon Profil',
      href:'/profile',
      accessLevel:10
      }
    ],
    title : ''
  },
  {
    match:/^\/(games|profile|team|users)/,
    menus:[
      {
      label:'Derniers Matchs',
      href:'/games',
      accessLevel:10
      },
      {
      label:'Equipes',
      href:'/team',
      accessLevel:10
      },
      {
      label:'Mon Profil',
      href:'/profile',
      accessLevel:10
      }
    ],
    title : ''
  },
  {
    match:/^\/bo\/(user|users|games|profile|teams)/,
    menus:[
      {
      label:'Matchs',
      href:'/bo/games',
      accessLevel:10
      },
      {
      label:'Equipes',
      href:'/bo/teams',
      accessLevel:10
      },
      {
      label:'Joueurs',
      href:'/bo/users',
      accessLevel:10
      }
    ],
    title : ''
  }
]
