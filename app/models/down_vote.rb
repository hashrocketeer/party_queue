class DownVote < ActiveRecord::Base
  belongs_to :user
  belongs_to :track_request
end
