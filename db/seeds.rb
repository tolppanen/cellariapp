# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'alkodata.csv'))


csv = CSV.parse(csv_text, :headers => true, :encoding => 'UTF-8')


# csvdata = csv.to_a.map { |row| row.to_hash }

# puts csvdata

csv.each do |row|
  prodno = row['product_number']
  winename = row['name']
  winestring = row['winetype']

  winetype = case winestring
  when "punaviinit"
  	:red
  when "valkoviinit"
  	:white
  when "kuohuviinit & samppanjat"
  	:sparkling
  else
  	:other
  end

  wine = Wine.new(product_number: prodno, name: winename, winetype: winetype)
  puts wine
  wine.save!

end