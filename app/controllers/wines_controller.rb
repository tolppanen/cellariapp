require "pp"
require "json"

class WinesController < ApplicationController


	def index
		@wine = Wine.select(:name)
		render :json  => @wine.to_json( :only => [:name] )
	end


end
