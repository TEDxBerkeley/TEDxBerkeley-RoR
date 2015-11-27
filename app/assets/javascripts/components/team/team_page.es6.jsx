class TeamPage extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
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
      </div>
      );
  }
}
