class UpdateRewards < ActiveRecord::Migration[5.2]
  def change
    change_column :rewards, :estimated_delivery, :datetime
  end
end
