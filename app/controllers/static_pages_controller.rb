class StaticPagesController < ApplicationController
  def home
    @popular_talks = Speaker.limit(5).order("RANDOM()") # TODO: Replace with 5 most popular talks
    @staff_talks = Speaker.limit(5).order("RANDOM()") # TODO: Replace with some staff favorites
  end

  def team
  end

  def about
  end

  def involve
  end
end
