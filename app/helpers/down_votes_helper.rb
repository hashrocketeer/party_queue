module DownVotesHelper
  def valid_down_vote(track_request)
    !track_request.down_votes.map(&:user).map(&:email).include?(current_google_user.email)
  end
end
