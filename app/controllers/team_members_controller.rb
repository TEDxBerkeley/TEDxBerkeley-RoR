class TeamMembersController < ApplicationController
  def new
  end

  def index
    @members = TeamMember.where(approved: true)
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


