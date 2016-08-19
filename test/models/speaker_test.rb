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

require 'test_helper'

class SpeakerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
