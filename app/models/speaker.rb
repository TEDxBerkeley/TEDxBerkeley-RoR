# == Schema Information
#
# Table name: speakers
#
#  id          :integer          not null, primary key
#  event_id    :integer
#  description :text             not null
#  quote       :string
#  photo_url   :string
#  name        :string           not null
#  tagline     :string           not null
#  twitter     :string
#  youtube_url :string
#  website     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Speaker < ActiveRecord::Base
  validates :name, presence: true
  validates :tagline, presence: true
  validates :description, presence: true

  belongs_to :event
end
