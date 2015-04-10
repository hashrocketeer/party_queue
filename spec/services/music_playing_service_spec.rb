require 'spec_helper'

describe MusicPlayingService do
  let(:tracks) { Fabricate.times(5, :track)  }
  let(:music_queue) { Fabricate(:music_queue)  }
  let(:list) do
    "#{tracks[0].key}, #{tracks[1].key}, #{tracks[2].key}, #{tracks[3].key}, #{tracks[4].key}"
  end
  let(:subject) { described_class.new(music_queue) }

  describe "#tracks_list" do
    it "converts tracks to a list for api calls" do
      expect(subject.send(:tracks_list, tracks)).to eq(list)
    end
  end

  describe "#sorted_tracks_list" do
    let(:sorted_list) do
      "#{tracks[4].key}, #{tracks[3].key}, #{tracks[2].key}, #{tracks[1].key}, #{tracks[0].key}"
    end

    before do
      (0..4).each { |i| Fabricate(:track_request, track_id: tracks[i].id, music_queue_id: music_queue.id, score: (10 - i )) }
    end

    it 'sorts tracks by track request score' do
      expect(subject.send(:sorted_tracks_list)).to eq(sorted_list)
    end
  end
end
