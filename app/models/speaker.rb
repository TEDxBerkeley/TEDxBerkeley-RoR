# == Schema Information
#
# Table name: speakers
#
#  id          :integer          not null, primary key
#  name        :string
#  email       :string
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#  approved    :boolean
#

class Speaker < ActiveRecord::Base
  validates :name, presence: true
  validates :email, presence: true

  has_many :nominations
end
