Fabricator(:track) do
  artist { Faker::Name.name }
  album { Faker::Lorem.word }
  name { Faker::Lorem.sentence }
  key { Faker::Number.number(10) }
end
