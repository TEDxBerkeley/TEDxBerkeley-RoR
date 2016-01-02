class SpeakerBanner extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      speaker: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'row',
        width: '100%',
        padding: '16px',
        backgroundColor: StyleConstants.colors.darkGrey,
      },
      image: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        minHeight: '360px',
        width: '360px',
      },
      links: {
        marginTop: '8px',
        fontSize: StyleConstants.fonts.sizes.medium,
        color: StyleConstants.colors.white,
      },
      name: {
        fontSize: StyleConstants.fonts.sizes.largest,
        color: StyleConstants.colors.white,
      },
      tag: {
        fontSize: StyleConstants.fonts.sizes.larger,
        color: StyleConstants.colors.white,
      },
      text: {
        flex: 2,
        display: 'flex',
        flexFlow: 'column',
        paddingLeft: '16px',
        color: StyleConstants.colors.white,
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  render() {
    return (
      <div style={this.styles.container}>
        <img style={this.styles.image} />
        <div style={this.styles.text}>
          <div style={this.styles.name}>{this.props.speaker.name}</div>
          <div style={this.styles.tag}>{this.props.speaker.tagline}</div>
          <div style={this.styles.links}> Personal Site - Twitter </div>
        </div>
      </div>
    );
  }
}
