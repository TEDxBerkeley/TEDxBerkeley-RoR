class TeamPage extends Component {

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
    this.setState(TeamStore.getState());
  }

  componentDidMount() {
    TeamStore.listen(this._listener);
    TeamActions.fetchTeam();
  }

  componentWillUnmount() {
    TeamStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header />
        <div style={this.styles.container}>
          <TeamBanner
              year={2016}
          />
          <TeamGrid
            teamMembers={this.state.team}
          />
        <Footer />
        </div>
    </div>
    );
  }
}
