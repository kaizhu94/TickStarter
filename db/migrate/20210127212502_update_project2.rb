class UpdateProject2 < ActiveRecord::Migration[5.2]
  def change
    change_column_null :projects, :category_id, false
  end
end
