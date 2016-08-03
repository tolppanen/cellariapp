class BottlesController < ApplicationController

	def create
		params.permit!
		@newBottleWine = Wine.find_by(name: params[:bottle][:wine_id])
		if(@newBottleWine == nil) 
			redirect_to bottles_path
		else
		@newbottle = Bottle.new(user_id: params[:bottle][:user_id], wine_id: @newBottleWine.id, vintage: params[:bottle][:vintage], notes: params[:bottle][:notes])
		puts params
		@newbottle.save
		redirect_to bottles_path
		end
	end

	def destroy
		@bottle = Bottle.find(params[:id])
		@bottle.destroy
		redirect_to root_path
	end

	def index
		@user = current_user
		if(current_user != nil)
			@bottles = @user.bottles.all
			@newbottle = Bottle.new
		end
	end


	private

	  def bottle_params
	    params.require(:bottle).permit(:user, :wine, :notes, :others)
	  end

end
