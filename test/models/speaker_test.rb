# == Schema Information
#
# Table name: speakers
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  email       :string(255)
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#  approved    :boolean
#

require 'test_helper'

class SpeakerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
