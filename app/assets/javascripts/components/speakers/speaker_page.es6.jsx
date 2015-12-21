class SpeakerPage extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
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
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header />
        <div style={this.styles.container}>
          <SpeakerBanner
            speaker=this.props.speaker
          />
          <SpeakerBody
            speaker=this.props.speaker
          />
          <h1> Speaker Page </h1>
        </div>
    </div>
    );
  }
}
