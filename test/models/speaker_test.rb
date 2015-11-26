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

require 'test_helper'

class SpeakerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
