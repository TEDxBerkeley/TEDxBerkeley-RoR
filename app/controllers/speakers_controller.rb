class SpeakersController < ApplicationController
  load_and_authorize_resource
  before_action :set_s3_direct_post, only: [:new, :edit, :create, :update]

  def new
    @speaker = Speaker.new
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
    redirect_to root_url
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
      :event_id,
      :quote,
      :name,
      :photo_url,
      :tagline,
      :twitter,
      :website,
    )
  end

  private

    def set_s3_direct_post
      @s3_direct_post = S3_BUCKET.presigned_post(key: "speakers/#{SecureRandom.uuid}_${filename}", success_action_status: '201', acl: 'public-read')
    end
end
