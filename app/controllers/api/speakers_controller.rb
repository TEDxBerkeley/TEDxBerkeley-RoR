class Api::SpeakersController < Api::BaseController

  def create
    speaker = Speaker.new speaker_params
    render json: speaker
  end

  def index
    speakers = Speaker.where(approved: true)
    render json: speakers
  end

  def show
    speaker = Speaker.find(params[:id])
    render json: speaker
  end

  def speaker_params
    params.require(:speaker).permit(
      :description,
      :email,
      :name,
      :tagline,
    )
  end
end
