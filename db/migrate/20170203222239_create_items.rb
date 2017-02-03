class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string  :name
      t.text    :image
      t.text    :link
      t.string  :category
      t.integer :rank

      t.index   :name
      t.timestamps
    end
  end
end
