class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  has_many :has_tagging
  has_many :tags, through: :has_tagging, dependent: :destroy
  after_create :save_tags

  def tags=(value)
    @tags = (value)
  end

  private

  def save_tags
    @tags.each do |tag_id|
      HasTagging.create(tag_id: tag_id, post_id: self.id)
    end
  end
end
