# == Schema Information
#
# Table name: team_members
#
#  id         :integer          not null, primary key
#  photo_url  :string
#  name       :string
#  role       :string
#  bio        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TeamMember < ActiveRecord::Base
  validates :name, presence: true
  validates :role, presence: true
  validates :bio, presence: true
end
