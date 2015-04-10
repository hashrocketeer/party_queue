require 'spec_helper'

describe VoteProcessingService do
  let(:track) { Fabricate(:track) }
  let(:music_queue) { Fabricate(:music_queue) }
  let(:user) { Fabricate(:user) }
  let(:track_request) { Fabricate(:track_request, music_queue_id: music_queue.id, track_id: track.id) }
  let(:subject) { described_class.new(track, music_queue, user) }

  describe "#process_up_vote" do
    before do
      stub_request(:post, "http://api.rdio.com/1/").to_return(status: 200, body: '', headers: {})
    end

    it "adds one to track request's score" do
      score = track_request.score
      subject.process_up_vote
      expect(track_request.reload.score).to eq(score + 1)
    end

    it 'removes down vote if it exists' do
      Fabricate(:down_vote, track_request_id: track_request.id, user_id: user.id)
      subject.process_up_vote
      expect(DownVote.count).to eq(0)
    end
  end

  describe '#process_down_vote' do
    it "subtracts one from track request's score" do
      stub_request(:post, "http://api.rdio.com/1/").to_return(status: 200, body: '', headers: {})
      score = track_request.score
      subject.process_down_vote
      expect(track_request.reload.score).to eq(score - 1)
    end

    it 'removes down vote if it exists' do
      stub_request(:post, "http://api.rdio.com/1/").to_return(status: 200, body: '', headers: {})
      Fabricate(:up_vote, track_request_id: track_request.id, user_id: user.id)
      subject.process_down_vote
      expect(UpVote.count).to eq(0)
    end
  end
end
