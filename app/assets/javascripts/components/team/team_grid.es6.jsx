class TeamGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      teamMembers: React.PropTypes.array.isRequired,
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
  renderMemberCard(member) {
    return (
      <MemberCard
        key={member.id}
        teamMember={member} />
    );
  }

  renderTeamMembers() {
    return this.props.teamMembers.map((member) => this.renderMemberCard(member));
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderTeamMembers()}
      </div>
    );
  }
}
