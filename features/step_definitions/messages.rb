Then(/^I see a message "(.*?)"$/) do |message|
  within '.flash' do
    expect(page).to have_content message
  end
end
