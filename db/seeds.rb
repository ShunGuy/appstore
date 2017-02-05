json = ActiveSupport::JSON.decode(File.read('db/data.json'))

json.each do |item|
  new_item = Item.create!(item)
  new_item.update_attributes(objectID: new_item.id)
end

index = Algolia::Index.new('Appstore')

index.clear
Item.all.each_slice(1000) do |batch|
  index.add_objects batch
end
