Fabricator(:music_queue) do
  name { Faker::Lorem.word }
  description { Faker::Lorem.sentence }
  key { Faker::Number.number(10) }
end
