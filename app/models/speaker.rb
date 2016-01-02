# == Schema Information
#
# Table name: speakers
#
#  id          :integer          not null, primary key
#  approved    :boolean
#  has_quote   :boolean
#  description :text
#  quote       :text
#  email       :string
#  name        :string
#  tagline     :string
#  created_at  :datetime
#  updated_at  :datetime
#

class Speaker < ActiveRecord::Base
  validates :name, presence: true
  validates :email, presence: true

  has_many :nominations
end
