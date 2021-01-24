class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.boolean :is_like, null: false
      t.integer :project_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :likes, :project_id
    add_index :likes, :user_id
  end
end
