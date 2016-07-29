class Wine < ActiveRecord::Base
	has_many :bottles
	has_many :users, :through => :bottles
	enum winetype: [ :red, :white, :sparkling, :other ]
end
