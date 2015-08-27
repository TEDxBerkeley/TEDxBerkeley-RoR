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

class Nomination < ActiveRecord::Base
  validates :submitter_name, presence: true
  validates :submitter_email, presence: true
  belongs_to :speaker
end
