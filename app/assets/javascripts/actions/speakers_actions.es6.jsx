(() => {
  class SpeakersActions {

    constructor() {
      this.generateActions(
        'storeSpeakers',
      );
    }

    fetchSpeakers(page) {
      var resolve = (response) => this.storeSpeakers(response);
      Requester.get(ApiConstants.speakers.index, resolve);
      return true;
    }
  }
  this.SpeakersActions = alt.createActions(SpeakersActions);
})();
