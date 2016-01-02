class TeamCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      teamMember: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.grid,
        {
          flexFlow: 'row',
          justifyContent: 'space-around',
          minWidth: '400px',
          marginLeft: '12px',
        }
      ),
      colorStrip: {
        width: '8px',
        backgroundColor: 'red',
      },
      image: {
        width: '200px',
        height: '200px',
      },
      section: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        paddingLeft: '12px',
      },
    };
  }

  get clickableStyles() {
    return {
      hover: {
        textDecoration: 'underline',
        opacity: '0.875',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var member = this.props.teaMember;
    return (
      <div style={this.styles.container}>
        <div style={this.styles.colorStrip} />
        <Clickable
          styles={this.clickableStyles}
          route={RouteConstants.team.show(member.id)}
          type={'img'}>
          <img
            src={'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'}
            style={this.styles.image} />
        </Clickable>
        <div style={this.styles.section}>
          <Clickable
            content={`${member.name}`}
            route={RouteConstants.team.show(member.id)}
            styles={this.clickableStyles}
            type={'h2'} />
          <h5>{`${member.tagline}`}</h5>
        </div>
      </div>
    );
  }
}

