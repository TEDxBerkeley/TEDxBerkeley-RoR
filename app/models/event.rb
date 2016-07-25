# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  theme       :string
#  description :text
#  date        :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ActiveRecord::Base

  has_many :speakers
end
