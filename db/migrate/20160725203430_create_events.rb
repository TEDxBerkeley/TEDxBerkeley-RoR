class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :theme, null: false
      t.text :description, null: false
      t.date :date, null: false

      t.timestamps null: false
    end
  end
end
