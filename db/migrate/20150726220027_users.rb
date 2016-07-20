class Users < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.boolean :admin, default: false
      t.string :username
    end
  end
end
