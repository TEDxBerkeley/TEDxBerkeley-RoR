(() => {
  class SpeakersStore {

    constructor() {
      this.speakers = [];
      this.bindListeners({
        handleStoreSpeakers: SpeakersActions.STORE_SPEAKERS,
      });
    }

    handleStoreSpeakers(response) {
      this.speakers = response;
    }
  }
  this.SpeakersStore = alt.createStore(SpeakersStore);
})();
