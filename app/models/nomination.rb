# == Schema Information
#
# Table name: nominations
#
#  id              :integer          not null, primary key
#  submitter_name  :string
#  submitter_email :string
#  description     :text
#  speakers_id     :integer
#  created_at      :datetime
#  updated_at      :datetime
#

class Nomination < ActiveRecord::Base
  validates :submitter_name, presence: true
  validates :submitter_email, presence: true

  belongs_to :speaker
end
