(() => {
  class TeamStore {

    constructor() {
      this.team = [];
      this.bindListeners({
        handleStoreTeam: TeamActions.STORE_TEAM,
      });
    }

    handleStoreTeam(response) {
      this.team = response;
    }
  }
  this.TeamStore = alt.createStore(TeamStore);
})();
