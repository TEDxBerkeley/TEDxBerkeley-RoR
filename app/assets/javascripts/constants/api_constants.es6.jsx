(() => {
  class ApiConstants {

    get team() {
      return {
        index: '/team',
        show: function(id) {
          return `/api/team/${id}`;
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
