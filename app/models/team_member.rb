# == Schema Information
#
# Table name: team_members
#
#  id         :integer          not null, primary key
#  name       :string
#  role       :string
#  bio        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TeamMember < ActiveRecord::Base
end
