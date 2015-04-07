class AddKeyToMusicQueue < ActiveRecord::Migration
  def change
    add_column :music_queues, :key, :string
  end
end
