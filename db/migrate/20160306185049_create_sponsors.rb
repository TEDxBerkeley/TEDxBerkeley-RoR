class CreateSponsors < ActiveRecord::Migration
  def change
    create_table :sponsors do |t|

		t.string :name
		t.string :website
		t.string :logo
		t.text :description
		t.string :facebook


    t.timestamps null: false
    end
  end
end
