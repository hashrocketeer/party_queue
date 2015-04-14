class AddPlayingTrackRequestIdToMusicQueue < ActiveRecord::Migration
  def change
    add_column :music_queues, :playing_track_request_id, :integer
  end
end
