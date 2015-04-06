class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :artist
      t.string :album
      t.string :name
      t.string :icon
      t.string :key

      t.timestamps
    end
  end
end
