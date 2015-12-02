class HeaderNavigation extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      showShortcuts: React.PropTypes.bool.isRequired,
    };
  }

  static get defaultProps() {
    return {
      showShortcuts: true,
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return { dropdown: false };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingRight: '12px',
        boxSizing: 'border-box',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '126px',
          height: StyleConstants.size.header_height,
          color: StyleConstants.colors.darkGrey,
          backgroundColor: StyleConstants.colors.white,
      },
      hover: {
        color: StyleConstants.colors.white,
        backgroundColor: StyleConstants.colors.red,
      },
      tickets: {
        default: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '126px',
          height: StyleConstants.size.header_height,
          backgroundColor: StyleConstants.colors.red,
          color: StyleConstants.colors.white,
      },
      hover: {
        backgroundColor: StyleConstants.colors.white,
        color: StyleConstants.colors.red,
      },
      }
    };
  }

  get dropdownStyles() {
    return {
      child: {
        default: {
          flex: '1',
          padding: '12px',
        },
        hover: {
          backgroundColor: StyleConstants.colors.turquoise,
        },
      },
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          position: 'absolute',
          width: '128px',
          top: StyleConstants.size.header_height,
          right: '0px',
          fontSize: StyleConstants.fonts.larger,
        }
      ),
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleBlur(event) {
    this.setState({ dropdown: false });
  }

  handleClick(event) {
    this.setState({ dropdown: !this.state.dropdown });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.state.dropdown) {
      var options = [
        {
          content: 'Profile',
          route: RouteConstants.pages.profile,
        },
        {
          content: 'Logout',
          func: () => {
            Requester.delete(
              ApiConstants.users.logout,
              (response) => { window.location = RouteConstants.pages.login }
            );
          },
        },
      ];
      return (
        <Dropdown
          options={options}
          styles={this.dropdownStyles}
          blur={(event) => this.handleBlur(event)} />
      );
    }
  }

  renderShortcuts() {
    if (this.props.showShortcuts) {
      return [
        <Clickable
          key={1}
          content={'BUY TICKETS'}
          route={RouteConstants.external.tickets}
          styles={this.clickableStyles.tickets}
          type={'h4'} />,
        <Clickable
          key={2}
          content={'SPEAKERS'}
          route={RouteConstants.speakers.index}
          styles={this.clickableStyles}
          type={'h4'} />,
        <Clickable
          key={3}
          content={'TEAM'}
          route={RouteConstants.team.index}
          styles={this.clickableStyles}
          type={'h4'} />,
        <Clickable
          key={4}
          content={'ABOUT'}
          route={RouteConstants.pages.about}
          styles={this.clickableStyles}
          type={'h4'} />,
      ];
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderShortcuts()}
        {this.renderDropdown()}
      </div>
    );
  }
}
