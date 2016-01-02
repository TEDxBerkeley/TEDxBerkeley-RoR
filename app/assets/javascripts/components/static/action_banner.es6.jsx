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
        minHeight: '750px',
        width: '100%',
        backgroundImage: 'url("https://farm8.staticflickr.com/7599/16900992825_311fcc0578_k.jpg")',
        overflow: 'hidden',
      },
      actionContainer: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
        width: "33%",
        padding: '16px',
        backgroundColor: StyleConstants.colors.white,
      },
      description: {
        fontSize: StyleConstants.fonts.sizes.medium,
      },
      exploreButton: {
        default: {
          display: 'flex',
          alignElements: 'center',
          justifyContent: 'center',
          width: '128px',
          marginTop: '16px',
          padding: '16px',
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
        <div style={this.styles.actionContainer}>
        <div style={this.styles.description}>Get immersed in our favorite talks from previous events</div>
        <Clickable
          content={'EXPLORE'}
          route={RouteConstants.speakers.index}
          styles={this.styles.exploreButton}
          type={'h4'} />
        </div>
      </div>
    );
  }
}
