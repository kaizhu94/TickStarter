class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :item_name, null: false
      t.integer :project_id, null: false
      t.timestamps
    end
    add_index :items, :item_name
    add_index :items, :project_id
  end
end
