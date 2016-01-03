class AboutTEDBanner extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        width: '100%',
        backgroundColor: StyleConstants.colors.white,
        padding: '32px 0px',
      },
      line_break: {
        width: '30%',
        minHeight: '2px',
        margin: '4px',
        backgroundColor: StyleConstants.colors.red,
      },
      description: {
        margin: '32px 128px',
      },
      title: {
        fontSize: StyleConstants.fonts.sizes.large,
      }
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.title}>ABOUT TED</div>
        <div style={this.styles.line_break} />
        <div style={this.styles.description}>
          TED was founded with cats in mind and is an organization run by a load of banananas. The cats really fancy seeing the mice, but I'm not sure its such a good idea to be able to fly again. So lets not.
        </div>
      </div>
    );
  }
}
