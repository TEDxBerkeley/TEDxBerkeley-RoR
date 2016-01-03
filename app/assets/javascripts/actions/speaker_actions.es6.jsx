(() => {
  class SpeakerActions {

    constructor() {
      this.generateActions(
        'storeSpeaker',
      );
    }

    fetchSpeaker(id) {
      var resolve = (response) => this.storeSpeaker(response);
      Requester.get(ApiConstants.speakers.show(id), resolve);
      return true;
    }
  }
  this.SpeakerActions = alt.createActions(SpeakerActions);
})();
