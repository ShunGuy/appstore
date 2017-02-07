class RenameItemsToApps < ActiveRecord::Migration
  def change
    rename_table :items, :apps
  end
end
