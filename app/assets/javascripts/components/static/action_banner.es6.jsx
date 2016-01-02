class ActionBanner extends Component {

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
        minHeight: '400px',
        width: '100%',
        backgroundImage: 'url("https://farm8.staticflickr.com/7599/16900992825_311fcc0578_k.jpg")',
        overflow: 'hidden',
      },
      actionContainer: {
        minHeight: '100px',
        width: "33%",
        backgroundColor: StyleConstants.colors.white,
        padding: '16px',
      },
      ticketButton: {
        display: 'flex',
        alignElements: 'center',
        justifyContent: 'center',
        width: '128px',
        margin: '16px auto 0px auto',
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
        <div style={this.styles.actionContainer}>
          Text about TEDxBerkeley. Get immersed in our favorite talks from Steve Wozniak to Dan Garcia.
          <div style={this.styles.ticketButton}>EXPLORE</div>
        </div>
      </div>
    );
  }
}
