module UpVotesHelper
  def valid_up_vote(track_request)
    !track_request.up_votes.map(&:user).map(&:email).include?(current_google_user.email)
  end
end
