Given 'I have created a music queue' do
  steps %Q{
    Given I am logged in to Google
    Then I see the welcome page
    And I create a music queue
    Then another music queue exists
    Then I am on my music queue page
  }
end

Given(/^I search for "(.*?)"$/) do |track|
  fill_in 'track_name', with: track
  stub_request(:post, "http://api.rdio.com/1/").to_return(:status => 200, body: rdio_track_response, headers: {})
  click_on 'Search for Tracks'

end

Then(/^I see search results$/) do
  expect(page).to have_content('Chop Suey!')
end

When(/^I click "(.*?)"$/) do |link_text|
  click_on link_text
end

Then(/^"(.*?)" is added to the music queue$/) do |track_name|
  expect(page).to have_content("#{track_name} has been added to the Playlist")
end

When(/^I add a track to the music queue$/) do
 steps %Q{
    Given I search for "Chop Suey!"
    Then I see search results
    When I click "Chop Suey!"
    Then "Chop Suey!" is added to the music queue
 }
end

Given(/^I vote up for the track$/) do
  @track_request_score = TrackRequest.first.score
  click_on '+1'
end

Given(/^I try to vote up for the track$/) do
  @track_request_score = TrackRequest.first.score
  expect(page).not_to have_link('+1')
end

Given(/^I vote down for the track$/) do
  @track_request_score = TrackRequest.first.score
  click_on '-1'
end

Given(/^I try to vote down for the track$/) do
  @track_request_score = TrackRequest.first.score
  expect(page).not_to have_link('-1')
end

Given(/^I change my vote to up$/) do
  click_on '+1'
end

Given(/^I change my vote to down$/) do
  click_on '-1'
end

Then(/^the track request's score increases by one$/) do
  expect(TrackRequest.first.score).to eq(@track_request_score + 1)
end

Then(/^the track request's score decreases by one$/) do
  expect(TrackRequest.first.score).to eq(@track_request_score - 1)
end

Then(/^the track request's score doesn't increase$/) do
  expect(TrackRequest.first.score).to eq(@track_request_score)
end

Then(/^the track request's score doesn't decrease$/) do
  expect(TrackRequest.first.score).to eq(@track_request_score)
end
