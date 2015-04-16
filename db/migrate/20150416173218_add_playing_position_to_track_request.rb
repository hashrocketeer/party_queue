class AddPlayingPositionToTrackRequest < ActiveRecord::Migration
  def change
    add_column :track_requests, :playing_position, :string
  end
end
