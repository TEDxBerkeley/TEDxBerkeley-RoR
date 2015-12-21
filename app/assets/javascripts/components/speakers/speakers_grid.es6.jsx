class SpeakersGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      speakers: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'wrap',
        alignContent: 'flex-start',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderSpeakerCard(speaker) {
    return (
      <SpeakersCard
        key={speaker.id}
        speaker={speaker} />
    );
  }

  renderSpeakers() {
    return this.props.speakers.map((speaker) => this.renderSpeakerCard(speaker));
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderSpeakers()}
      </div>
    );
  }
}
