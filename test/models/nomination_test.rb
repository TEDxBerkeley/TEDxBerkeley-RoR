# == Schema Information
#
# Table name: nominations
#
#  id              :integer          not null, primary key
#  created_at      :datetime
#  updated_at      :datetime
#  submitter_name  :string
#  submitter_email :string
#  description     :text
#  speaker_id      :integer
#

require 'test_helper'

class NominationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
