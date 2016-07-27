(1..20).each do |index|
  new_speaker = Speaker.create(
    description: Faker::Lorem.paragraphs(3).join(" \n"),
    event: Event.order(:date).last,
    name: Faker::Name.name,
    quote: Faker::Lorem.sentence,
    photo_url: "https://s3.amazonaws.com/tedxberkeley/uploads/5b2f09a3-bab5-4a10-b5da-d3eb7ff2722d/Kathy.jpg",
    tagline: Faker::Lorem.words(3).join(' '),
    twitter: Faker::Lorem.word,
    website: Faker::Lorem.word + ".com"
  )
  puts "Created speaker: #{new_speaker.name}"
end
