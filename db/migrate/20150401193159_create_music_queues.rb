class CreateMusicQueues < ActiveRecord::Migration
  def change
    create_table :music_queues do |t|

      t.timestamps
    end
  end
end
