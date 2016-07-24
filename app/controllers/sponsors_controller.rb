class SponsorsController < ApplicationController
  def new
  end

  def create
  end

  def edit
  end

  def destroy
  end

  def index
    @sponsors = Sponsor.all
  end

  def update
  end

  def sponsor_params
    params.require(:sponsor).permit(
      :name,
      :website,
      :logo,
      :description,
    )
  end
end
