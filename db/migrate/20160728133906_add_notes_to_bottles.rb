class AddNotesToBottles < ActiveRecord::Migration
  def change
    add_column :bottles, :notes, :string
  end
end
