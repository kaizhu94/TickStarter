class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :project_name
      t.string :title
      t.string :subtitle, null: false
      t.string :description
      t.text   :risks
      t.float  :goal
      t.datetime  :end_date
      t.integer :location_id, null: false
      t.datetime  :launch_date
      t.boolean   :published, null: false
      t.integer   :founder_id, null: false
      t.integer   :catagory_id, null: false
      t.timestamps
    end
    add_index :projects, :project_name, unique: true
    add_index :projects, :location_id
    add_index :projects, :founder_id
    add_index :projects, :catagory_id
  end
end
