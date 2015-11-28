(1..20).each do |index|
  new_speaker = Speaker.create(
    approved: true,
    description: Faker::Lorem.paragraph,
    email: Faker::Internet.email,
    name: Faker::Name.name,
  )
  puts "Created speaker: #{new_speaker.name}"
end
