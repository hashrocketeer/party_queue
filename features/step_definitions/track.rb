Then(/^the track plays from the beginning$/) do
  expect(TrackRequest.first.playing_position).to eq("0")
end

When(/^I refresh the page$/) do
  Capybara.current_session.driver.submit :post, "/track_requests/update_playing_position/" + TrackRequest.first.id.to_s + "/3", {'id' => TrackRequest.first.id, 'position' => '3'}
end

Then(/^the track resumes playing where it stopped$/) do
  expect(TrackRequest.first.playing_position).to eq("3")
end
