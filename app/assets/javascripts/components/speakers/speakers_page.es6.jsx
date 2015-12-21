class SpeakersPage extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        flexFlow: 'column',
        paddingTop: '48px',
      },
      body: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        overflow: 'scroll',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(SpeakersStore.getState());
  }

  componentDidMount() {
    SpeakersStore.listen(this._listener);
    SpeakersActions.fetchSpeakers();
  }

  componentWillUnmount() {
    SpeakersStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderSpeakerCard(speaker) {
    return (
      <SpeakersCard
        key={speaker.id}
        speaker={speaker} />
    );
  }

  renderSpeakers() {
    return this.state.speakers.map((speaker) => this.renderSpeakerCard(speaker));
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header />
        <div style={this.styles.container}>
          <SpeakerBanner
              year={2016}
            />
          <h1> Speakers Page! </h1>
          {this.renderSpeakers()}
        </div>
    </div>
    );
  }
}
