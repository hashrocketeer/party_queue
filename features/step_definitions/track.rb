Then(/^the track plays from the beginning$/) do
  expect(TrackRequest.first.playing_position).to eq(0)
end

When(/^I refresh the page$/) do
  visit music_queues_path(MusicQueue.first)
end

Then(/^the track resumes playing where it stopped$/) do
  expect(TrackRequest.first.playing_position).not_to eq("0")
end
