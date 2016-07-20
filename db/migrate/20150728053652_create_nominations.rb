class CreateNominations < ActiveRecord::Migration
  def change
    create_table :nominations do |t|

      t.string :submitter_name, null: false
      t.string :submitter_email, null: false
      t.string :speaker_name, null: false
      t.string :speaker_email
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end
