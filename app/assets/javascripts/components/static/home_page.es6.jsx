class HomePage extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        marginTop: '48px',
        backgroundColor: StyleConstants.colors.white,
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
          <HomeBanner />
          <WelcomeBanner />
          <ActionBanner />
          <ProjectsBanner />
        </div>
    </div>
    );
  }
}
