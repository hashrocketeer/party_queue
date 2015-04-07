class AddNameToMusicQueue < ActiveRecord::Migration
  def change
    add_column :music_queues, :name, :string
  end
end
