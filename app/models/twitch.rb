class Twitch < ApplicationRecord
  include AASM

  aasm column: "state" do
    state :disconnected, initial: true
    state :connected

    event :connect do
      transitions from: :disconnected, to: :connected
    end

    event :disconnect do
      transitions from: :connected, to: :disconnected
    end
  end
end
