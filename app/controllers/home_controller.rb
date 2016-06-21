class HomeController < ApplicationController
	def index
		@user = current_user
		@wines = Wine.all
	end
end
