# == Schema Information
#
# Table name: nominations
#
#  id              :integer          not null, primary key
#  created_at      :datetime
#  updated_at      :datetime
#  submitter_name  :string(255)
#  submitter_email :string(255)
#  description     :text
#  speaker_id      :integer
#

require 'test_helper'

class NominationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
