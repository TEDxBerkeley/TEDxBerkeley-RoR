(() => {
  class TeamActions {

    constructor() {
      this.generateActions(
        'storeTeam',
      );
    }

    fetchTeam(page) {
      var resolve = (response) => this.storeTeam(response);
      Requester.get(ApiConstants.team.index, resolve);
      return true;
    }
  }
  this.TeamActions = alt.createActions(TeamActions);
})();
