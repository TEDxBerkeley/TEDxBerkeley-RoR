class ApplicationController < ActionController::Base
  include CanCan::ControllerAdditions
  before_action :get_current_event

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_url, :alert => exception.message
  end

  def get_current_event
    @current_event = Event.order(:date).last
  end

end
