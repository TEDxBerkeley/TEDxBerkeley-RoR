class CreateSponsors < ActiveRecord::Migration
  def change
    create_table :sponsors do |t|
      t.belongs_to :event, index: true

  		t.string :name, null: false
  		t.string :website, null: false
  		t.string :logo_url
      t.string :tagline, null: false
  		t.text :description, null: false
  		t.string :facebook


      t.timestamps null: false
    end
  end
end
