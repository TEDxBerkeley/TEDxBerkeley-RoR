class Footer extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        top: '0px',
        left: '0px',
        zIndex: StyleConstants.planes.eight,
        width: '100%',
        minHeight: StyleConstants.size.header_height,
        backgroundColor: StyleConstants.colors.darkGrey,
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        width: '260px',
        padding: '0px 12px',
        color: StyleConstants.colors.white,
        textDecoration: 'None',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          content={'TEDxBerkeley'}
          route={RouteConstants.pages.home}
          styles={this.clickableStyles}
          type={'h2'} />
      </div>
    );
  }
}
