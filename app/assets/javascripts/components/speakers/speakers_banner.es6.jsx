class SpeakersBanner extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      year: React.PropTypes.number.isRequired,
    };
  }

  static get defaultProps() {
    return {
      year: 2016,
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
      },
      imageBanner: {
        flex: 7,
        overflow: 'hidden',
        minHeight: '360px',
        width: '100%',
      },
      yearBanner: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        minHeight: '32px',
        padding: '4px',
        backgroundColor: StyleConstants.colors.darkGrey,
      },
      year: {
        color: StyleConstants.colors.red,
      },
      rest: {
        color: StyleConstants.colors.white,
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
          <img src={'https://farm4.staticflickr.com/3759/13203367085_f0e4d12240_k.jpg'}/>
        </div>
        <div style={this.styles.yearBanner}>
          <h1 style={this.styles.year}>{`${this.props.year}`}</h1> <h1 style={this.styles.rest}>Speakers</h1>
        </div>
      </div>
    );
  }
}
