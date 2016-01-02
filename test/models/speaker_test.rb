# == Schema Information
#
# Table name: speakers
#
#  id          :integer          not null, primary key
#  approved    :boolean
#  has_quote   :boolean
#  description :text
#  quote       :text
#  email       :string
#  name        :string
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
