require "rails_helper"

RSpec.describe "The app works" do
  describe "if the home page" do
    before :each do
      @current_event = Event.create(theme: "Test",
                              description: "Test",
                              date: "5-1-2016",)
      visit root_path
    end

    it "works" do
      expect(page).to have_content "Buy Tickets Now!"
    end
  end
end
