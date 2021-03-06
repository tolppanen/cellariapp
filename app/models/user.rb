class User < ActiveRecord::Base
  include Amistad::FriendModel
  validates :email, uniqueness: true
  validates :username, uniqueness: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  has_many :bottles
  has_many :wines, :through => :bottles

end
