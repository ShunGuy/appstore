json = ActiveSupport::JSON.decode(File.read('db/data.json'))

json.each do |item|
  Item.create!(item)
end
