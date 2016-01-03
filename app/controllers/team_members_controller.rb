class TeamMembersController < ApplicationController
  def new
  end

  def index
    @members = TeamMember.all
  end

  def show
    @member = TeamMember.find(params[:id])
  end

  def team_member_params
    params.require(:team_member).permit(
      :bio,
      :name,
      :role,
    )
  end
end


