# == Schema Information
#
# Table name: sponsors
#
#  id          :integer          not null, primary key
#  event_id    :integer
#  name        :string           not null
#  website     :string           not null
#  logo_url    :string
#  tagline     :string           not null
#  description :text             not null
#  facebook    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Sponsor < ActiveRecord::Base
  validates :name, presence: true
  validates :tagline, presence: true
  validates :description, presence: true
  validates :website, presence: true

  belongs_to :event
end
