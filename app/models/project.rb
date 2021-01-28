class Project < ApplicationRecord
    validates :project_name, allow_nil: true, uniqueness: true
    validates :location_id,  :founder_id, :category_id, presence: true
    validates :published, :inclusion => {:in => [true, false]}
    belongs_to :founder,
        primary_key: :id,
        foreign_key: :founder_id,
        class_name: :User
    belongs_to :location,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :Location
    belongs_to :category,
        primary_key: :id,
        foreign_key: :category_id,
        class_name: :Category

    has_many :likes,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Like
    has_many :likers,
        through: :likes,
        source: :users

    has_many :rewards,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Reward

    has_many :items,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Item

    
end