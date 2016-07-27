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

FactoryGirl.define do
  factory :event do
    year 1
theme "MyString"
description "MyText"
  end

end
