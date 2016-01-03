(() => {
  class SpeakerStore {

    constructor() {
      this.speaker = {};
      this.bindListeners({
        handleStoreSpeaker: SpeakerActions.STORE_SPEAKER,
      });
    }

    handleStoreSpeaker(response) {
      this.speaker = response;
    }
  }
  this.SpeakerStore = alt.createStore(SpeakerStore);
})();
