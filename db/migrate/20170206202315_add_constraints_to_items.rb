class AddConstraintsToItems < ActiveRecord::Migration
  def change
    change_column :items, :name, :string, null: false
    change_column :items, :link, :text, null: false
    change_column :items, :category, :string, null: false
    change_column :items, :rank, :integer, null: false
  end
end
