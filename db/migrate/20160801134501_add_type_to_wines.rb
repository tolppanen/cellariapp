class AddTypeToWines < ActiveRecord::Migration
  def change
    add_column :wines, :winetype, :string
  end
end
