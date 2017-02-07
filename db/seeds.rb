json = ActiveSupport::JSON.decode(File.read('db/data.json'))

json.each do |app|
  new_app = App.create!(app)
  new_app.update_attributes(objectID: new_app.id)
end

index = Algolia::Index.new('Appstore')

index.clear
App.all.each_slice(1000) do |batch|
  index.add_objects batch
end
