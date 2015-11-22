class SpeakersController < ApplicationController
  def new
  	render nominations_url
  end

  def index
    @speakers = Speaker.where(approved: true)
  end

  def show
    @speaker = Speaker.find(params[:id])
  end
end

