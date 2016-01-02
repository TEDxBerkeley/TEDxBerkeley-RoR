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
        marginTop: '48px',
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

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header />
        <div style={this.styles.container}>
          <SpeakersBanner
              year={2016}
          />
          <SpeakersGrid
            speakers={this.state.speakers}
          />
        <Footer />
        </div>
    </div>
    );
  }
}
