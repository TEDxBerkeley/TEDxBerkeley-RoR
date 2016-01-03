class ActionButtons extends Component {
  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px',
        height: '64px',
      },
    };
  }

  get clickableStyles() {
    return {
      ticketButton: {
        default: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '256px',
          height: '64px',
          color: StyleConstants.colors.white,
          backgroundColor: StyleConstants.colors.red,
          boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
        }
      },
      contactButton: {
        default: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '256px',
          height: '64px',
          marginLeft: '16px',
          color: StyleConstants.colors.white,
          backgroundColor: StyleConstants.colors.darkGrey,
          boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
          child : {
            margin: '0px',
          }
        }
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
          content={'Buy Tickets'}
          external={true}
          route={RouteConstants.external.tickets}
          styles={this.clickableStyles.ticketButton}
          type={'h2'} />
       <Clickable
          content={'Contact Us'}
          route={RouteConstants.pages.home}
          styles={this.clickableStyles.contactButton}
          type={'h2'} />
      </div>
    );
  }
}
