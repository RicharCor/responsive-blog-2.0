class Tag < ApplicationRecord
  belongs_to :user

  has_many :has_tagging
  has_many :posts, through: :has_tagging, dependent: :destroy
end
