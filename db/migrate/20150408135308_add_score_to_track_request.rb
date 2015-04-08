class AddScoreToTrackRequest < ActiveRecord::Migration
  def change
    add_column :track_requests, :score, :integer
  end
end
