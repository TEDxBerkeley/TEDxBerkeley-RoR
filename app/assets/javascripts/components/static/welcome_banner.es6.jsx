class WelcomeBanner extends Component {

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
        minHeight: '300px',
        width: '100%',
        backgroundColor: StyleConstants.colors.white,
        padding: '64px 0px',
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
        <div style={this.styles.title}>WELCOME TO TEDxBERKELEY</div>
        <div style={this.styles.line_break} />
        <div style={this.styles.description}>
           cats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogscats mice dogs
        </div>
      </div>
    );
  }
}
