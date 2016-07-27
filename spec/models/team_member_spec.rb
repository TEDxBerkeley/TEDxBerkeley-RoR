# == Schema Information
#
# Table name: team_members
#
#  id         :integer          not null, primary key
#  photo_url  :string
#  name       :string
#  role       :string
#  bio        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

describe TeamMember, type: :model do
  it "is valid" do
    tm = TeamMember.new(name: "Team One",
                        role: "Truely revolutionary. Great Human.",
                        bio: "1-5-16",)
    expect(tm.valid?).to eq true
  end

  it "is invalid without a role" do
    tm = TeamMember.new(name: "Team One",
                        bio: "1-5-16",)
    expect(tm.valid?).to eq false
  end

  it "is invalid without a bio" do
    tm = TeamMember.new(name: "Team One",
                        role: "Truely revolutionary. Great Human.",)
    expect(tm.valid?).to eq false
  end
end
