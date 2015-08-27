class NominationsController < ApplicationController
  def new
  end

  def create
    nomination_params = params[:nominations]
    @speaker = Speaker.new(name: nomination_params[:speaker_name],
                           email: nomination_params[:speaker_email],
                           description: nomination_params[:description])
    @nomination = Nomination.new(submitter_name: nomination_params[:submitter_name],
                                 submitter_email: nomination_params[:submitter_email],
                                 description: nomination_params[:description], 
                                 speaker_id: @speaker.id)
    if @speaker.save and @nomination.save
      redirect_to @speaker
    else
      logger.debug "failed"
      render 'new'
    end
  end

  def index
    @nominations = Nomination.all
  end

  def show
    @nomination = Nomination.find(params[:id])
  end

  def delete
  end
end
