# == Schema Information
#
# Table name: nominations
#
#  id              :integer          not null, primary key
#  submitter_name  :string
#  submitter_email :string
#  description     :text
#  speaker_id      :integer
#  created_at      :datetime
#  updated_at      :datetime
#

require 'test_helper'

class NominationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
