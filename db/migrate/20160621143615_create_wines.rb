class CreateWines < ActiveRecord::Migration
  def change
    create_table :wines do |t|
      t.string :name
      t.integer :vintage

      t.timestamps null: false
    end
  end
end
