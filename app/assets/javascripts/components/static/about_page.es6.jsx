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
          <div class="banner" id="home-banner">
            <div id="title-box">
              <h1> TEDxBerkeley </h1>
              <h2> Finding X </h2>
            </div>
            <div id="ticket-box">
              <h1> Buy Tickets Now! </h1>
            </div>
          </div>

          <div class="thin-banner" id="about-banner">
            <h1> About </h1>
            <p> Text about how TEDxBerkeley is a great thing with many warm good feelings, this should be some about of characters longer than a single paragraph. Does this covera  single paragraph yet? I'm not sure it's enough. Perhaps it is, what do you think about it? Should it be longer?
            </p>

            <p> This is the second paragraph and should be handled gracefully </p>
          </div>
        </div>
      </div>
      );
  }
}
