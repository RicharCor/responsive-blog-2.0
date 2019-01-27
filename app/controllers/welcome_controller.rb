class WelcomeController < ApplicationController
  def index
    @twitch = Twitch.find(1)
  end
end
