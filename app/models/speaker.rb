# == Schema Information
#
# Table name: speakers
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  email       :string(255)
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#  approved    :boolean
#

class Speaker < ActiveRecord::Base
  validates :name, presence: true
  validate :email, presence: true
  has_many :nominations
end
