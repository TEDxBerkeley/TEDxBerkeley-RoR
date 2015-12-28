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
        minHeight: '600px',
        width: '100%',
        backgroundColor: StyleConstants.colors.white,
      },
      quote: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      description: {
        flex: 4,
        display: 'flex',
        marginLeft: '32px',
      }
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.quote}> {this.props.speaker.description} </div>
        <div style={this.styles.description}> {this.props.speaker.description} </div>
      </div>
    );
  }
}
