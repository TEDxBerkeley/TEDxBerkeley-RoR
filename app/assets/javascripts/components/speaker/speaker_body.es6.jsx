class SpeakerBody extends Component {

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
        flexFlow: 'column',
        minHeight: '400px',
        width: '100%',
        backgroundColor: StyleConstants.colors.white,
      },
      quote: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: StyleConstants.fonts.sizes.medium,
      },
      sectionHeader: {
        marginLeft: '32px',
        fontSize: StyleConstants.fonts.sizes.larger,
      },
      line: {
        height: '2px',
        width: '70%',
        margin: '2px 16px',
        backgroundColor: StyleConstants.colors.black,
      },
      description: {
        flex: 4,
        display: 'flex',
        margin: '8px 32px',
        fontSize: StyleConstants.fonts.sizes.medium,
      }
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.quote}><em>{this.props.speaker.quote}</em></div>
        <div style={this.styles.sectionHeader}><strong>About This Speaker</strong></div>
        <span style={this.styles.line} />
        <div style={this.styles.description}>{this.props.speaker.description}</div>
        <ActionButtons />
      </div>
    );
  }
}
