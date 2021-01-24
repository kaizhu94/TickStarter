class Location < ApplicationRecord
    validates :location, presence:true, uniqueness: true
    
    has_many :projects,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :Project
end
