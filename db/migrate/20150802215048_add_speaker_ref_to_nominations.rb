class AddSpeakerRefToNominations < ActiveRecord::Migration
  def change
    add_reference :nominations, :speaker, index: true
  end
end
