class CreateSpeakers < ActiveRecord::Migration
  def change
    create_table :speakers do |t|

      t.boolean :approved
      t.boolean :has_quote
      t.text :description
      t.text :quote
      t.string :email
      t.string :name
      t.string :tagline

      t.timestamps
    end
  end
end
