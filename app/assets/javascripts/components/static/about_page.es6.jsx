class AboutPage extends Component {

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
      video: {
        display: 'flex',
        minHeight: '400px',
        justifyContent: 'center',
        alignItems: 'center',
      }
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header />
        <WelcomeBanner />
        <div style={this.styles.video} />
        <AboutTEDBanner />
        <Footer />
      </div>
      );
  }
}
