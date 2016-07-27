# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  theme       :string           not null
#  description :text             not null
#  date        :date             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

describe Event, type: :model do
  before :each do
    @e = Event.create(theme: "Test Event",
                      description: "Truely revolutionary. Never done before",
                      date: "1-5-16")
  end

  it "is valid" do
    expect(@e.valid?).to eq true
  end

  it "is invalid without a description" do
    e1 = Event.new(theme: "Wrong",
                   date: "1-5-16",)
    expect(e1.valid?).to eq false
  end

  it "is invalid without a date" do
    e1 = Event.new(theme: "Wrong",
                   description: "Truely revolutionary. Never done before",)
    expect(e1.valid?).to eq false
  end

  it "has speakers" do
    s1 = Speaker.create(name: "John Doe",
                        tagline: "Disruptor",
                        description: "Rspec Description",
                        event: @e,)
    s2 = Speaker.create(name: "Great Speaker",
                        tagline: "Villain",
                        description: "Who brought me?",
                        event: @e,)
    expect(@e.speakers).to include(s1, s2)
  end
end
