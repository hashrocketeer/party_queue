require 'spec_helper'

describe 'MusicPlayingService' do
  it 'converts tracks to a list for api calls' do
    tracks = (0..4).map { Fabricate(:track) }
    list = "#{tracks[0].key}, #{tracks[1].key}, #{tracks[2].key}, #{tracks[3].key}, #{tracks[4].key}"
    formatted_tracks = MusicPlayingService.new.tracks_list(tracks)
    expect(formatted_tracks).to eq(list)
  end

  it 'sorts tracks by track request score' do
    tracks = (0..4).map { Fabricate(:track) }
    music_queue = Fabricate(:music_queue)
    sorted_list = "#{tracks[4].key}, #{tracks[3].key}, #{tracks[2].key}, #{tracks[1].key}, #{tracks[0].key}"
    (0..4).each { |i| Fabricate(:track_request, track_id: tracks[i].id, music_queue_id: music_queue.id, score: (10 - i )) }
    sorted_tracks = MusicPlayingService.new.sorted_tracks_list(music_queue)
    expect(sorted_tracks).to eq(sorted_list)
  end
end
