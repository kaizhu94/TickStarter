class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.text  :title, null: false
      t.text  :description
      t.date  :estimated_delivery, null: false
      t.float :amount, null: false
      t.timestamps
    end
    add_index :rewards, :project_id
  end
end
