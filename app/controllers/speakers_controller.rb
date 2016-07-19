class SpeakersController < ApplicationController
  def new
  end

  def create
    @speaker = Speaker.new speaker_params
    if @speaker.save
      redirect_to @speaker
    else
      render 'new'
    end
  end

  def edit
    @speaker = Speaker.find(params[:id])
  end

  def destroy
    @speaker = Speaker.find(params[:id])
    @speaker.destroy
    redirect_to speakers_url
  end

  def index
    @speakers = Speaker.all
  end

  def show
    @speaker = Speaker.find(params[:id])
  end

  def update
    @speaker = Speaker.find(params[:id])
    if @speaker.update_attributes(speaker_params)
      redirect_to @speaker
    else
      render 'edit'
    end
  end

  def speaker_params
    params.require(:speaker).permit(
      :description,
      :quote,
      :name,
      :tagline,
    )
  end
end
