(() => {
  class SpeakerStore {

    constructor() {
      this.speaker = {};
      this.bindListeners({
        handleStoreSpeaker: SpeakerActions.STORE_SPEAKER,
      });
    }

    handleStoreSpeaker(response) {
      console.log(response);
      this.speaker = response;
    }
  }
  this.SpeakerStore = alt.createStore(SpeakerStore);
})();
