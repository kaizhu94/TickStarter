class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :email, presence: true, uniqueness: true
    

    has_many :projects,
      primary_key: :id,
      foreign_key: :founder_id,
      class_name: :Project

    has_many :likes,
      primary_key: :id,
      foreign_key: :user_id,
      class_name: :Like
    has_many :liked_projects,
      through: :likes,
      source: :projects
    has_many :likers,
      through: :projects,
      source: :likers

    has_many :backings,
      primary_key: :id,
      foreign_key: :backer_id,
      class_name: :Backing

    after_initialize :ensure_session_token
    attr_reader :password
  
    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      return user && user.isPassword?(password) ? user : nil
    end
  
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  
    def isPassword?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def generate_session_token
      SecureRandom::urlsafe_base64
    end
  
    def ensure_session_token
      self.session_token ||= self.generate_session_token
    end
  
    def reset_session_token!
      self.update!(session_token: self.generate_session_token)
      self.session_token
    end
end
