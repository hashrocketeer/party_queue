class User < ActiveRecord::Base
  has_many :up_votes
  has_many :down_votes
end
