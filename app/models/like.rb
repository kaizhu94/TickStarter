class Like < ApplicationRecord
    validates :is_like, :project_id, :user_id, presence: true
    belongs_to :projects,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Project
    belongs_to :users,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
