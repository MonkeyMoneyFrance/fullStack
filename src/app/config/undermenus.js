export default  [
  {
    match:/^((\/bo)|)\/games\/\w+\/(detail|history)$/,
    menus:[
      {
      label:'Detail Match',
      href:'detail',
      accessLevel:10
      },
      // {
      // label:'Historique',
      // href:'history',
      // accessLevel:10
      // }
    ],
    title : ''
  },
  {
    match:/^((\/bo)|)\/teams\/\w+\/(detail|history|registrations)$/,
    menus:[
      {
      label:'Informations Générales',
      href:'/detail',
      accessLevel:10
      },
      {
      label:'Adhesions',
      href:'/registrations',
      accessLevel:10
      }
    ],
    title : ''
  },
  {
    match:/^((\/bo((\/teams)|))|)\/users\/\w+\/(detail|teams|registrations)$/,
    menus:[
      {
      label:'Informations',
      href:'detail',
      accessLevel:10
      },
      {
      label:'Equipes',
      href:'teams',
      accessLevel:10
      },
      {
      label:'Adhesions',
      href:'registrations',
      accessLevel:10
      }
    ],
    title : ''
  }
]
