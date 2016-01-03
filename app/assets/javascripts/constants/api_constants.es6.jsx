(() => {
  class ApiConstants {

    get team() {
      return {
        index: '/api/team_members',
        show: function(id) {
          return `/api/team_members/${id}`;
        },
      };
    }

    get speakers() {
      return {
        index: '/api/speakers',
        show: function(id) {
          return `/api/speakers/${id}`;
        },
      };
    }
  }
  this.ApiConstants = new ApiConstants();
})();
