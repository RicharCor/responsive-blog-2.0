class CreateTwitches < ActiveRecord::Migration[5.2]
  def change
    create_table :twitches do |t|
      t.string :username
      t.string :state, default: "disconnected"
    end
  end
end
