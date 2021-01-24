class RewardsItem < ApplicationRecord
    validates :rewards_id, :items_id, presence: true

    belongs_to :rewards,
        primary_key: :id,
        foreign_key: :rewards_id,
        class_name: :Reward
    belongs_to :items,
        primary_key: :id,
        foreign_key: :items_id,
        class_name: :Item
end
