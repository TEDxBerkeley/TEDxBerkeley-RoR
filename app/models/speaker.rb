# == Schema Information
#
# Table name: speakers
#
#  id          :integer          not null, primary key
#  description :text             not null
#  quote       :string
#  name        :string           not null
#  tagline     :string
#  created_at  :datetime
#  updated_at  :datetime
#

class Speaker < ActiveRecord::Base
  validates :name, presence: true

  has_many :nominations
end
