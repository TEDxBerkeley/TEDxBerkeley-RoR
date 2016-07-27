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

class Event < ActiveRecord::Base

  has_many :speakers
end
