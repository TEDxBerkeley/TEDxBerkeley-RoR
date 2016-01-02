class HomeBanner extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      center: {
        margin: '0px auto',
        borderRadius: '50px',
      },
      container: {
        display: 'flex',
        flexFlow: 'column',
      },
      imageBanner: {
        display: 'flex',
        flexFlow: 'column',
        alignElements: 'center',
        justifyContent: 'center',
        height: '800px',
        color: StyleConstants.colors.white,
        backgroundImage: 'url("https://farm4.staticflickr.com/3759/13203367085_f0e4d12240_k.jpg")',
        overflow: 'hidden',
      },
      hosting: {
        textAlign: 'center',
        margin: '16px',
        color: StyleConstants.colors.white,
        fontSize: StyleConstants.fonts.sizes.medium,
      },
      ticket_button: {
        default: {
          display: 'flex',
          alignElements: 'center',
          justifyContent: 'center',
          width: '256px',
          padding: '16px',
          margin: '8px auto',
          color: StyleConstants.colors.white,
          backgroundColor: StyleConstants.colors.red,
          boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: '50px',
        },
        hover: {
          color: StyleConstants.colors.red,
          backgroundColor: StyleConstants.colors.white,
        },
      }
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.imageBanner}>
          <div style={this.styles.hosting}>Hosted by TEDxBerkeley on FEBRUARY 6TH, 2016. ZELLERBACH HALL </div>
          <Clickable
            content={'BUY TICKETS'}
            external={true}
            style={this.styles.center}
            styles={this.styles.ticket_button}
            route={RouteConstants.external.tickets}
            type={'h4'}/>
        </div>
      </div>
    );
  }
}
