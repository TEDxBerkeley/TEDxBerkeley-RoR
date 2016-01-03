# == Schema Information
#
# Table name: team_members
#
#  id         :integer          not null, primary key
#  name       :string
#  role       :string
#  bio        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :team_member do
    name "MyString"
role "MyString"
  end

end
