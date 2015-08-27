class CreateNominations < ActiveRecord::Migration
  def change
    create_table :nominations do |t|
      t.string :speaker_name
      t.text :speaker_description
      t.string :speaker_email

      t.timestamps
    end
  end
end
