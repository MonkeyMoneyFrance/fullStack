export default  [
  {
    path : '/',
    main: require('../pages/login').default,
    exact:true
  },
  {
    path : '/login',
    main : require('../pages/login').default,
    exact:true
  },
  {
    path : '/games',
    main : require('../pages/games').default,
    private : true,
    exact:true
  },
  {
    path : '/games/:gameId/detail',
    main: require('../pages/game').default,
    private : true,
    exact:true
  },
  {
    path : '/team',
    main: require('../pages/team').default,
    private : true,
    exact:true
  },
  {
    path : '/users/:userId/detail',
    main: require('../pages/user').default,
    private : true,
    exact:true
  },
  {
    path : '/profile',
    main: require('../pages/profile').default,
    private : true,
    exact:true
  },
  {
    path : '/bo/games',
    main: require('../pages/games').default,
    exact:true,
    admin : true,
  },
  {
    path : '/bo/games/:gameId',
    main: require('../pages/game').default,
    admin : true,
  },
  {
    path : '/bo/teams',
    main: require('../pages/teams').default,
    exact:true,
    admin : true,
  },
  {
    path : '/bo/teams/:teamId',
    main: require('../pages/team').default,
    admin : true,
    exact:true,
  },
  {
    path : '/bo/teams/users/:userId/detail',
    main: require('../pages/user').default,
    admin : true,
    exact:true,
  },
  {
    path : '/bo/users/',
    main: require('../pages/users').default,
    exact:true,
    admin : true,
  },
  {
    path : '/bo/users/:userId/detail',
    main: require('../pages/user').default,
    admin : true,
  }

]
