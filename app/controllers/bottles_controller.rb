class BottlesController < ApplicationController

	def create
		puts "hello"
		params.permit!
		puts(params)
		@newbottle = Bottle.new(params[:bottle])
		@newbottle.save
		redirect_to root_path
	end

	def destroy
		@bottle = Bottle.find(params[:id])
		@bottle.destroy
		redirect_to root_path
	end


	private

	  def bottle_params
	    params.require(:bottle).permit(:user, :wine, :others)
	  end

end
