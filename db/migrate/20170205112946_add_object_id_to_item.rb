class AddObjectIdToItem < ActiveRecord::Migration
  def change
    add_column :items, :objectID, :string, default: ""
  end
end
