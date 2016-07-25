# == Schema Information
#
# Table name: speakers
#
#  id          :integer          not null, primary key
#  event_id    :integer
#  description :text             not null
#  quote       :string
#  name        :string           not null
#  tagline     :string
#  twitter     :string
#  website     :string
#  created_at  :datetime
#  updated_at  :datetime
#

class Speaker < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :event
end
