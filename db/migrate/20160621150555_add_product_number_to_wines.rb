class AddProductNumberToWines < ActiveRecord::Migration
  def change
  	add_column :wines, :product_number, :string
  	add_index :wines, :product_number
  end
end
