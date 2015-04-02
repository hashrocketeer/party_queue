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
  click_on 'Search Tracks'

end

Then(/^I see search results$/) do
  expect(page).to have_content('Chop Suey!')
end
