class CreateSpeakers < ActiveRecord::Migration
  def change
    create_table :speakers do |t|

      t.text :description, null: false
      t.string :quote
      t.string :name, null: false
      t.string :tagline

      t.timestamps
    end
  end
end
