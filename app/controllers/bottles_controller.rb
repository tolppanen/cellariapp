class BottlesController < ApplicationController

	def create
		params.permit!
		puts(Wine.find_by(name: params[:bottle][:wine_id]))
		@newBottleWine = Wine.find_or_create_by(name: params[:bottle][:wine_id])
		@newbottle = Bottle.new(user_id: params[:bottle][:user_id], wine_id: @newBottleWine.id)
		puts(@newbBottleWine)
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
