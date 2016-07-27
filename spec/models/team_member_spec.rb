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

require 'rails_helper'

RSpec.describe TeamMember, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
