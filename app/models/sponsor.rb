# == Schema Information
#
# Table name: sponsers
#
#  id          :integer          not null, primary key
#  name        :string
#  website     :string
#  logo        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Sponsor < ActiveRecord::Base
end
