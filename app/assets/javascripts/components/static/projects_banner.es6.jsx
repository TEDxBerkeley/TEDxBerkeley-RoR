class ProjectsBanner extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      buttonHolder: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-around',
      },
      container: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '500px',
        width: '100%',
        padding: '100px 0px 32px 0px',
        backgroundColor: StyleConstants.colors.white,
      },
      line_break: {
        width: '30%',
        minHeight: '2px',
        margin: '4px',
        backgroundColor: StyleConstants.colors.red,
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
      <div style={this.styles.container}>
        <div style={this.styles.title}>GET INVOLVED</div>
        <div style={this.styles.line_break} />
        <div style={this.styles.buttonHolder}>
          <FlagButton
            link='cat'
            image_link='https://farm4.staticflickr.com/3759/13203367085_f0e4d12240_k.jpg'
            title='Become a Sponsor'
            description='catcatcat'
          />
          <FlagButton
            link='cat'
            image_link='https://farm4.staticflickr.com/3759/13203367085_f0e4d12240_k.jpg'
            title='Join Our Mailing List'
            description='catcatcat'
          />
          <FlagButton
            link='cat'
            image_link='https://farm4.staticflickr.com/3759/13203367085_f0e4d12240_k.jpg'
            title='Contact Us'
            description='catcatcat'
          />
        </div>
      </div>
    );
  }
}
