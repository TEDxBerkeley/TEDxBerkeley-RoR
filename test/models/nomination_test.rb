# == Schema Information
#
# Table name: nominations
#
#  id              :integer          not null, primary key
#  submitter_name  :string           not null
#  submitter_email :string           not null
#  speaker_name    :string           not null
#  speaker_email   :string
#  description     :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class NominationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
