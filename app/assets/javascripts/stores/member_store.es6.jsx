(() => {
  class MemberStore {

    constructor() {
      this.member = {};
      this.bindListeners({
        handleStoreMember: MemberActions.STORE_MEMBER,
      });
    }

    handleStoreMember(response) {
      this.member = response;
    }
  }
  this.MemberStore = alt.createStore(MemberStore);
})();
