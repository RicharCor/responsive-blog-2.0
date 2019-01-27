class UsersController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_user, only: [:show]

  def index
    @users = User.all
  end

  def show
    @posts = @user.posts
    @comments = @user.comments
    @tags = @user.tags
  end

  private
    def set_user
      @user = User.find(params[:id])
    end
end
