class RemoveSpeakerInformationNominations < ActiveRecord::Migration
  def change
    remove_column :nominations, :speaker_name, :string
    remove_column :nominations, :speaker_description, :text
    remove_column :nominations, :speaker_email, :string
    add_column :nominations, :submitter_name, :string
    add_column :nominations, :submitter_email, :string
    add_column :nominations, :description, :text
  end
end
