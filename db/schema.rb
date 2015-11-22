# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150829233619) do

  create_table "nominations", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "submitter_name"
    t.string   "submitter_email"
    t.text     "description"
    t.integer  "speaker_id"
  end

  add_index "nominations", ["speaker_id"], name: "index_nominations_on_speaker_id"

  create_table "speakers", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "approved"
  end

  create_table "users", force: true do |t|
    t.string "email"
    t.string "name"
    t.string "password_digest"
    t.string "username"
  end

end
