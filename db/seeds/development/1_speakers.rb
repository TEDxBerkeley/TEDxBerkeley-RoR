(1..20).each do |index|
  new_speaker = Speaker.create(
    description: Faker::Lorem.paragraphs(3).join(" \n"),
    name: Faker::Name.name,
    quote: Faker::Lorem.sentence,
    tagline: Faker::Lorem.words(3).join(' '),
    twitter: Faker::Lorem.word,
    website: Faker::Lorem.word + ".com"
  )
  puts "Created speaker: #{new_speaker.name}"
end
