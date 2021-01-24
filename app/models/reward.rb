class Reward < ApplicationRecord
    validates :project_id, :title, :estimated_delivery, :amount, presence: true

    belongs_to :from_project,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Project

    has_many :reward_items,
        primary_key: :id,
        foreign_key: :rewards_id,
        class_name: :RewardsItem
    has_many :items,
        through: :reward_items,
        source: :items
    
    has_many :backings,
        primary_key: :id,
        foreign_key: :reward_id,
        class_name: :Backing

end
