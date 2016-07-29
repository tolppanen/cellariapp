class AddDetailsToWines < ActiveRecord::Migration
  def change
    add_column :wines, :country, :string
    add_column :wines, :area, :string
  end
end
