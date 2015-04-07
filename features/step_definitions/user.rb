Given(/^I am not logged in with Google$/) do
  # noop
end

Given(/^I visit the homepage$/) do
  visit root_path
end

Then(/^I see the Google login page$/) do
  expect(current_path).to eq(new_google_session_path)
end

Then(/^I am logged in to Google$/) do
  stub_request(:get, /\/o\/oauth2\/auth/).
    with(headers: {'Accept'=>'*/*', 'User-Agent'=>'Ruby'}).
    to_return(status: 200, body: hashrocket_google_response, headers: {})
  uri = URI('https://accounts.google.com/o/oauth2/auth')
  response = Net::HTTP.get(uri)
  Capybara.current_session.driver.submit :post, google_sessions_path, response
end

Then(/^I see the welcome page$/) do
  expect(current_path).to eq(root_path)
end

And 'I create a music queue' do
  stub_request(:get, /\/auth\/rdio/).
    with(headers: {'Accept'=>'*/*', 'User-Agent'=>'Ruby'}).
    to_return(status: 200, body: rdio_response, headers: {})
  uri = URI('https://accounts.google.com/o/oauth2/auth')
  response = Net::HTTP.get(uri)
  @music_queue_count = MusicQueue.count
  Capybara.current_session.driver.submit :post, music_queues_path, response
end

Then(/^another music queue exists$/) do
  expect(MusicQueue.count).to eq(@music_queue_count + 1)
end

Then(/^I am on my music queue page$/) do
  music_queue = MusicQueue.last
  expect(current_path).to eq(music_queue_path(music_queue))
  within 'h3' do
    expect(page).to have_content("Queue ##{music_queue.id}")
  end
end

Given(/^I login to Google without a Hashrocket email$/) do
  stub_request(:get, /\/o\/oauth2\/auth/).
    with(headers: {'Accept'=>'*/*', 'User-Agent'=>'Ruby'}).
    to_return(status: 200, body: non_hashrocket_google_response, headers: {})
  uri = URI('https://accounts.google.com/o/oauth2/auth')
  response = Net::HTTP.get(uri)
  Capybara.current_session.driver.submit :post, google_sessions_path, response
end

Then(/^I see the google sessions new page$/) do
  expect(current_path).to eq(new_google_session_path)
end
