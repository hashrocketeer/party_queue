require 'spec_helper'

describe 'VoteProcessingService' do
  let(:track) { Fabricate(:track) }
  let(:music_queue) { Fabricate(:music_queue) }
  let(:user) { Fabricate(:user) }
  let(:track_request) { Fabricate(:track_request, music_queue_id: music_queue.id, track_id: track.id) }
  let(:vote_processing_service) { VoteProcessingService.new(track, music_queue, user) }

  context 'processing up vote' do

    it "adds one to track request's score" do
      stub_request(:post, "http://api.rdio.com/1/").to_return(status: 200, body: '', headers: {})
      score = track_request.score
      vote_processing_service.process_up_vote
      updated_track_request = TrackRequest.find(track_request.id)
      expect(updated_track_request.score).to eq(score + 1)
    end

    it 'removes down vote if it exists' do
      stub_request(:post, "http://api.rdio.com/1/").to_return(status: 200, body: '', headers: {})
      Fabricate(:down_vote, track_request_id: track_request.id, user_id: user.id)
      vote_processing_service.process_up_vote
      expect(DownVote.count).to eq(0)
    end
  end

  context 'processing down vote' do
    it "subtracts one from track request's score" do
      stub_request(:post, "http://api.rdio.com/1/").to_return(status: 200, body: '', headers: {})
      score = track_request.score
      vote_processing_service.process_down_vote
      updated_track_request = TrackRequest.find(track_request.id)
      expect(updated_track_request.score).to eq(score - 1)
    end

    it 'removes down vote if it exists' do
      stub_request(:post, "http://api.rdio.com/1/").to_return(status: 200, body: '', headers: {})
      Fabricate(:up_vote, track_request_id: track_request.id, user_id: user.id)
      vote_processing_service.process_down_vote
      expect(UpVote.count).to eq(0)
    end
  end
end
