class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, :if => :devise_controller?

  # def after_sign_out_path_for(resource_or_scope)
  #   if resource_or_scope == :user
  #   	return'/users/sign_in'
  #   else
  #   	return root_path
  #   end
  # end


 def configure_permitted_parameters
        devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:username, :email, :password, :password_confirmation, :remember_me) }
        devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:username, :email, :password, :password_confirmation, :remember_me) }
        devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:email, :password, :password_confirmation, :remember_me) }
 end


end



