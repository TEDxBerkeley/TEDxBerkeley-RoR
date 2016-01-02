class ProjectsBanner extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-around',
        minHeight: '400px',
        width: '100%',
        padding: '8px 0px',
        backgroundColor: StyleConstants.colors.white,
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <FlagButton
          link='cat'
          image_link='https://farm4.staticflickr.com/3759/13203367085_f0e4d12240_k.jpg'
          title='catMouse0'
          description='catcatcat'
        />
        <FlagButton
          link='cat'
          image_link='https://farm4.staticflickr.com/3759/13203367085_f0e4d12240_k.jpg'
          title='catMouse1'
          description='catcatcat'
        />
        <FlagButton
          link='cat'
          image_link='https://farm4.staticflickr.com/3759/13203367085_f0e4d12240_k.jpg'
          title='catMouse2'
          description='catcatcat'
        />
      </div>
    );
  }
}
