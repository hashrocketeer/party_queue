class CreateTrackRequests < ActiveRecord::Migration
  def change
    create_table :track_requests do |t|
      t.integer :music_queue_id
      t.integer :track_id

      t.timestamps
    end
    add_index :track_requests, :music_queue_id
    add_index :track_requests, :track_id
  end
end
