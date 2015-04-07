class AddDescriptionToMusicQueues < ActiveRecord::Migration
  def change
    add_column :music_queues, :description, :string
  end
end
