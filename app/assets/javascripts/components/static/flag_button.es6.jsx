class FlagButton extends Component {

  static get PropTypes() {
    return ({
      link: React.PropTypes.string.isRequired,
      image_link: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    });
  }

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
        height: '200px',
        width: '250px',
        padding: '64px 8px',
        margin: '64px',
        backgroundImage: `url(${this.props.image_link})`,
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
      },
      description: {
        margin: '32px 128px',
      },
      title: {
        fontSize: StyleConstants.fonts.sizes.large,
      }
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <Clickable style={this.styles.container}>
        <div style={this.styles.title}>{this.props.title}</div>
        <div style={this.styles.description}>{this.props.description}</div>
      </Clickable>
    );
  }
}
