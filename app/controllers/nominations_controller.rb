class NominationsController < ApplicationController
  load_and_authorize_resource

  def new
  end

  def create
    @nomination = Nomination.new nomination_params
    if @nomination.save
      redirect_to @nomination
    else
      logger.debug "failed"
      render 'new'
    end
  end

  def destroy
    nomination = Nomination.find(params[:id])
    if nomination.destroy
      flash[:success] = "Nomination Deleted"
    end
    redirect_to nominations_path
  end

  def index
    @nominations = Nomination.all
  end

  def show
    @nomination = Nomination.find(params[:id])
  end

  def update
    @nomination = Nomination.find(params[:id])
  end

  def delete
  end

  private

  def nomination_params
    params.require(:nomination).permit(
      :description,
      :speaker_email,
      :speaker_name,
      :submitter_name,
      :submitter_email,
    )
  end
end
