class CreateSpeakers < ActiveRecord::Migration
  def change
    create_table :speakers do |t|
      t.belongs_to :event, index: true

      t.text :description, null: false
      t.string :quote
      t.string :name, null: false
      t.string :tagline
      t.string :twitter
      t.string :website

      t.timestamps
    end
  end
end
