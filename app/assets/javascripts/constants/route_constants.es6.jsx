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
        index: '/team',
        show: function(id) {
          return `/team/${id}`;
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
