class SponsorsController < ApplicationController
  load_and_authorize_resource
  before_action :set_s3_direct_post, only: [:new, :edit, :create, :update]

  def new
    @sponsor = Sponsor.new
  end

  def create
    @sponsor = Sponsor.new sponsor_params
    if @sponsor.save
      redirect_to @sponsor
    else
      render 'new'
    end
  end

  def edit
    @speaker = Speaker.find(params[:id])
  end

  def destroy
    @sponsor = Sponsor.find(params[:id])
    @sponsor.destroy
    redirect_to sponsors_path
  end

  def index
    @sponsors = Sponsor.all
  end

  def show
    @sponsor = Sponsor.find(params[:id])
  end

  def update
    @sponsor = Sponsor.find(params[:id])
    if @sponsor.update_attributes(sponsor_params)
      redirect_to @sponsor
    else
      render 'edit'
    end
  end

  def sponsor_params
    params.require(:sponsor).permit(
      :description,
      :event_id,
      :facbeook,
      :logo_url,
      :name,
      :tagline,
      :website,
    )
  end

  private
    def set_s3_direct_post
      @s3_direct_post = S3_BUCKET.presigned_post(key: "sponsors/#{SecureRandom.uuid}_${filename}", success_action_status: '201', acl: 'public-read')
    end
end
