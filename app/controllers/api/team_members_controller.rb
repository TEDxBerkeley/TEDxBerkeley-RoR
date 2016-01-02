class Api::TeamMembersController < ApplicationController

  def create
    member = TeamMember.new team_member_params
    render json: member
  end

  def index
    members = TeamMember.where(approved: true)
    render json: members
  end

  def show
    member = TeamMember.find(params[:id])
    render json: member
  end

  def team_member_params
    params.require(:team_member).permit(
      :bio,
      :name,
      :role,
    )
  end
end


