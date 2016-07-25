# == Schema Information
#
# Table name: sponsors
#
#  id          :integer          not null, primary key
#  name        :string
#  website     :string
#  logo        :string
#  description :text
#  facebook    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Sponsor < ActiveRecord::Base
end
