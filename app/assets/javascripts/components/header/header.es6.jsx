class Header extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------

  static get propTypes() {
    return {
      showSidebar: React.PropTypes.bool.isRequired,
    };
  }

  static get defaultProps() {
    return {
      showSidebar: false,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        top: '0px',
        left: '0px',
        zIndex: StyleConstants.planes.eight,
        width: '100%',
        height: StyleConstants.size.header_height,
        backgroundColor: StyleConstants.colors.white,
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
      },
      sidebar: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        width: '196px',
        paddingLeft: '12px',
        boxSizing: 'border-box',
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
        color: StyleConstants.colors.black,
        textDecoration: 'None',
        backgroundColor: StyleConstants.colors.white,
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderToggler() {
    if (this.props.hasSidebar) {
      return (
        <Clickable
          icon={'fa fa-bars fa-x'}
          styles={this.clickableStyles}
          type={'i'} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          content={'TEDxBerkeley'}
          route={RouteConstants.pages.home}
          styles={this.clickableStyles}
          type={'h1'} />
        <HeaderNavigation />
      </div>
    );
  }
}
