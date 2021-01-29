class UpdateProject < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :catagory_id, :integer
    add_column :projects, :category_id, :integer
    add_index :projects, :category_id
  end
end
