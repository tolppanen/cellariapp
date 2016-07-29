class CreateBottles < ActiveRecord::Migration
  def change
    create_table :bottles do |t|
    	t.belongs_to :user, index: true
    	t.belongs_to :wine, index: true
    	t.integer :vintage

      t.timestamps null: false
    end
  end
end
