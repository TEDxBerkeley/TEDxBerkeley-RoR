class CreateTeamMembers < ActiveRecord::Migration
  def change
    create_table :team_members do |t|
      t.string :photo_url
      t.string :name
      t.string :role

      t.text :bio

      t.timestamps null: false
    end
  end
end
