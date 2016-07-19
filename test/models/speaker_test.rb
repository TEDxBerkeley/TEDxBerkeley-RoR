# == Schema Information
#
# Table name: speakers
#
#  id          :integer          not null, primary key
#  description :text             not null
#  quote       :string
#  name        :string           not null
#  tagline     :string
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class SpeakerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
