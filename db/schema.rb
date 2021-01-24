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

ActiveRecord::Schema.define(version: 2021_01_23_015731) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "backings", force: :cascade do |t|
    t.integer "backer_id", null: false
    t.float "backing_amount", null: false
    t.integer "reward_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["backer_id"], name: "index_backings_on_backer_id"
    t.index ["reward_id"], name: "index_backings_on_reward_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "category_name", null: false
    t.integer "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_name"], name: "index_categories_on_category_name", unique: true
    t.index ["parent_id"], name: "index_categories_on_parent_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "item_name", null: false
    t.integer "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_name"], name: "index_items_on_item_name"
    t.index ["project_id"], name: "index_items_on_project_id"
  end

  create_table "likes", force: :cascade do |t|
    t.boolean "is_like", null: false
    t.integer "project_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_likes_on_project_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "location", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location"], name: "index_locations_on_location", unique: true
  end

  create_table "projects", force: :cascade do |t|
    t.string "project_name"
    t.string "title"
    t.string "subtitle", null: false
    t.string "description"
    t.text "risks"
    t.float "goal"
    t.datetime "end_date"
    t.integer "location_id", null: false
    t.datetime "launch_date"
    t.boolean "published", null: false
    t.integer "founder_id", null: false
    t.integer "catagory_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["catagory_id"], name: "index_projects_on_catagory_id"
    t.index ["founder_id"], name: "index_projects_on_founder_id"
    t.index ["location_id"], name: "index_projects_on_location_id"
    t.index ["project_name"], name: "index_projects_on_project_name", unique: true
  end

  create_table "rewards", force: :cascade do |t|
    t.integer "project_id", null: false
    t.text "title", null: false
    t.text "description"
    t.date "estimated_delivery", null: false
    t.float "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_rewards_on_project_id"
  end

  create_table "rewards_items", force: :cascade do |t|
    t.integer "rewards_id", null: false
    t.integer "items_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["items_id"], name: "index_rewards_items_on_items_id"
    t.index ["rewards_id"], name: "index_rewards_items_on_rewards_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
