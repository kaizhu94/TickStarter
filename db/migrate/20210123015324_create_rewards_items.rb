class CreateRewardsItems < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards_items do |t|
      t.integer :rewards_id, null: false
      t.integer :items_id, null: false
      t.timestamps
    end
    add_index :rewards_items, :rewards_id
    add_index :rewards_items, :items_id
  end
end
