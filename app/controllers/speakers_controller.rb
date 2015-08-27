class SpeakersController < ApplicationController
  def new
  	render nominations_url
  end

  def index
    @speakers = Speaker.all
  end

  def show
    @speaker = Speaker.find(params[:id])
  end
end


