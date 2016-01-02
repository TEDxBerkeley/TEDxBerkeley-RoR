(1..20).each do |index|
  new_speaker = Speaker.create(
    approved: true,
    description: Faker::Lorem.paragraphs(3).join(" \n"),
    email: Faker::Internet.email,
    has_quote: true,
    name: Faker::Name.name,
    quote: Faker::Lorem.sentence,
    tagline: Faker::Lorem.words(3).join(' '),
  )
  puts "Created speaker: #{new_speaker.name}"
end
