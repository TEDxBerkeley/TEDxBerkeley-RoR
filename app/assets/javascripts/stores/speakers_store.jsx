(() => {
  class SpeakersStore {

    constructor() {
      this.speakers = [];
      this.bindListeners({
        handleStoreSpeakers: SpeakersActions.STORE_SPEAKERS,
      });
    }

    handleStoreSpeakers(response) {
      console.log(response);
      this.speakers = response;
    }
  }
  this.SpeakersStore = alt.createStore(SpeakersStore);
})();
