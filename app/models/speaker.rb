# == Schema Information
#
# Table name: speakers
#
#  id                :integer          not null, primary key
#  approved          :boolean
#  description       :text
#  email             :string
#  name              :string
#  created_at        :datetime
#  updated_at        :datetime
#  {:index=>true}_id :integer
#

class Speaker < ActiveRecord::Base
  validates :name, presence: true
  validates :email, presence: true

  has_many :nominations
end
