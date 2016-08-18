class UsersController < ApplicationController
	def show
		if @user = User.where(username: params[:username]).take
		else redirect_to friends_path	
		end
	end
end
