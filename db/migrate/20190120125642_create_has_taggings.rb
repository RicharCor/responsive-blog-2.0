class CreateHasTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :has_taggings do |t|
      t.references :post, foreign_key: true
      t.references :tag, foreign_key: true

      t.timestamps
    end
  end
end
