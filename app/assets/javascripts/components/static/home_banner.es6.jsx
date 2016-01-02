class HomeBanner extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
      },
      imageBanner: {
        display: 'flex',
        flexFlow: 'column',
        alignElements: 'center',
        justifyContent: 'center',
        height: '400px',
        color: StyleConstants.colors.white,
        backgroundImage: 'url("https://farm4.staticflickr.com/3759/13203367085_f0e4d12240_k.jpg")',
        overflow: 'hidden',
      },
      title: {
        textAlign: 'center',
        margin: '16px',
        color: StyleConstants.colors.white,
        fontSize: StyleConstants.fonts.sizes.larger,
      },
      hosting: {
        textAlign: 'center',
        margin: '16px',
        color: StyleConstants.colors.white,
        fontSize: StyleConstants.fonts.sizes.medium,
      },
      ticket_button: {
        display: 'flex',
        alignElements: 'center',
        justifyContent: 'center',
        width: '256px',
        margin: '16px auto',
        padding: '16px',
        color: StyleConstants.colors.white,
        backgroundColor: StyleConstants.colors.red,
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
        borderRadius: '50px',
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
          <div style={this.styles.ticket_button}>BUY TICKETS </div>
        </div>
      </div>
    );
  }
}
