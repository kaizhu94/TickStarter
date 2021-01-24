class Item < ApplicationRecord
    validates :item_name, :project_id, presence: true

    belongs_to :from_project,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Project

    has_many :reward_items,
        primary_key: :id,
        foreign_key: :items_id,
        class_name: :RewardsItem
    has_many :rewards,
        through: :reward_items,
        source: :rewards
end
