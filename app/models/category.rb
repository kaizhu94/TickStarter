class Category < ApplicationRecord
    validates :category_name, presence:true, uniqueness: true

    has_many :projects,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :Project
    
    belongs_to :parent_category,
        primary_key: :id,
        foreign_key: :parent_id,
        class_name: :Category,
        optional: true

    has_many :subcategories,
        primary_key: :id,
        foreign_key: :parent_id,
        class_name: :Category
    
end
