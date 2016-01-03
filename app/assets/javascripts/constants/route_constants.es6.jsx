(() => {
  class RouteConstants {

    get external() {
      return {
        tickets: '/tickets'
      };
    }

    get pages() {
      return {
        about: '/about',
        contact: '/contact',
        home: '/',
        login: '/login',
        signup: '/signup',
      };
    }

    get team() {
      return {
        index: '/team_members',
        show: function(id) {
          return `/team_members/${id}`;
        },
      };
    }

    get speakers() {
      return {
        index: '/speakers',
        show: function(id) {
          return `/speakers/${id}`;
        },
      };
    }
  }
  this.RouteConstants = new RouteConstants();
})();
