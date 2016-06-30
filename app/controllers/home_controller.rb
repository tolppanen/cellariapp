class HomeController < ApplicationController
	def index
		@user = current_user
		if(current_user != nil)
			@bottles = @user.bottles.all
			@newbottle = Bottle.new
		end
	end
end
