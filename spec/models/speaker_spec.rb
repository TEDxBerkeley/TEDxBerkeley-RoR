# == Schema Information
#
# Table name: speakers
#
#  id          :integer          not null, primary key
#  event_id    :integer
#  description :text             not null
#  quote       :string
#  photo_url   :string
#  name        :string           not null
#  tagline     :string           not null
#  twitter     :string
#  website     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

describe Speaker, type: :model do
  it "is valid" do
    speaker = Speaker.new(name: "Donald Drumpf",
                          description: "Make Donald Drumpf Again.",
                          tagline: "Cat Lover",
                          twitter: "@DonaldDrumpf",
                          website: "www.makeDonaldDrumpf.com",)
    expect(speaker.valid?).to eq true
  end

  it "is invalid without name" do
    speaker = Speaker.new(description: "Make Donald Drumpf Again.",
                          tagline: "Cat Lover",
                          twitter: "@DonaldDrumpf",
                          website: "www.makeDonaldDrumpf.com",)
    expect(speaker.valid?).to eq false
  end

  it "is invalid without description" do
    speaker = Speaker.new(name: "Donald Drumpf",
                          tagline: "Cat Lover",
                          twitter: "@DonaldDrumpf",
                          website: "www.makeDonaldDrumpf.com",)
    expect(speaker.valid?).to eq false
  end

  it "is invalid without tagline" do
    speaker = Speaker.new(name: "Donald Drumpf",
                          description: "Make Donald Drumpf Again.",
                          twitter: "@DonaldDrumpf",
                          website: "www.makeDonaldDrumpf.com",)
    expect(speaker.valid?).to eq false
  end
end
