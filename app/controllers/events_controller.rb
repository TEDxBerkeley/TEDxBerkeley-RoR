class EventsController < ApplicationController
  load_and_authorize_resource

  def create
    @event = Event.new event_params
    if @event.save
      redirect_to @event
    else
      render 'new'
    end
  end

  def destroy
  @event = Event.find(params[:id])
    @event.destroy
    redirect_to events_url
  end

  def edit
    @event = Event.find(params[:id])
  end

  def index
    @events = Event.all
  end

  def new
  end

  def show
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      redirect_to @event
    else
      render 'edit'
    end
  end

  def event_params
    params.require(:event).permit(
      :theme,
      :date,
      :description,
    )
  end
end
