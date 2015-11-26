class Header extends Component {

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
        height: '48px',
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
        flex: '1',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: '0px 12px',
        color: StyleConstants.colors.black,
        textDecoration: 'None',
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
      <Clickable
        content={'TEDxBerkeley'}
        styles={this.clickableStyles}
        type={'h1'} />
    );
  }
}
