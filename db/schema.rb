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

ActiveRecord::Schema.define(version: 20150414191801) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "down_votes", force: true do |t|
    t.integer  "user_id"
    t.integer  "track_request_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "music_queues", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
    t.string   "description"
    t.string   "key"
    t.integer  "playing_track_request_id"
  end

  create_table "track_requests", force: true do |t|
    t.integer  "music_queue_id"
    t.integer  "track_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "score"
  end

  add_index "track_requests", ["music_queue_id"], name: "index_track_requests_on_music_queue_id", using: :btree
  add_index "track_requests", ["track_id"], name: "index_track_requests_on_track_id", using: :btree

  create_table "tracks", force: true do |t|
    t.string   "artist"
    t.string   "album"
    t.string   "name"
    t.string   "icon"
    t.string   "key"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "up_votes", force: true do |t|
    t.integer  "user_id"
    t.integer  "track_request_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
