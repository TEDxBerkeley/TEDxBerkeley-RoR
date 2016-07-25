# == Schema Information
#
# Table name: nominations
#
#  id              :integer          not null, primary key
#  submitter_name  :string           not null
#  submitter_email :string           not null
#  speaker_name    :string           not null
#  speaker_website :string
#  description     :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Nomination < ActiveRecord::Base
  validates :submitter_name, presence: true
  validates :submitter_email, presence: true

  belongs_to :speaker
end
