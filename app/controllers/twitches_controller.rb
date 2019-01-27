class TwitchesController < ApplicationController
  before_action :create_twitch, only: [:index]
  before_action :find_twitch, except: [:index]

  def index
    @twitch = Twitch.find(1)
  end

  def update
    respond_to do |format|
      if @twitch.update(twitch_params)
        format.html { redirect_to request.referrer, notice: 'Twitch was successfully updated.' }
        format.json { render :show, status: :ok, location: @twitch }
      else
        format.html { redirect_to request.referrer, notice: 'Twitch could not be updated.' }
        format.json { render json: @twitch.errors, status: :unprocessable_entity }
      end
    end
  end

  def connect
    @twitch.connect!
    redirect_to request.referrer, notice: 'Twitch has connected successfully'
  end

  def disconnect
    @twitch.disconnect!
    redirect_to request.referrer, notice: 'Twitch has disconnected successfully'
  end

  private
    def create_twitch
      unless Twitch.any?
        @twitch = Twitch.new(id: 1, username: 'Richarlivex')
        if @twitch.save
          redirect_to twitches_path, notice: 'Twitch was successfully created.'
        else
          redirect_to root_path, notice: 'Twitch could not be created.'
        end
      end
    end

    def find_twitch
      @twitch = Twitch.find(params[:id])
    end

    def twitch_params
      params.require(:twitch).permit(:username)
    end
end
