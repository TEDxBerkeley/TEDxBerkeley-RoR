(() => {
  class MemberActions {

    constructor() {
      this.generateActions(
        'storeMember',
      );
    }

    fetchMember(id) {
      var resolve = (response) => this.storeMember(response);
      Requester.get(ApiConstants.team.show(id), resolve);
      return true;
    }
  }
  this.MemberActions = alt.createActions(MemberActions);
})();
