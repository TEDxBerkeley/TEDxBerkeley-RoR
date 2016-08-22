(1..12).each do |index|
  new_sponsor = Sponsor.create(
    name: Faker::Company.name,
    description: Faker::Lorem.paragraphs(3).join(' '),
    event_id: 1,
    tagline: Faker::Company.bs,
    logo_url: "https://s3.amazonaws.com/tedxberkeley/uploads/5b2f09a3-bab5-4a10-b5da-d3eb7ff2722d/Kathy.jpg",
    facebook: "www.facebook.com/#{Faker::Company.name}",
    website: "www.#{Faker::Company.name}.com"
  )
  puts "Created sponsor: #{new_sponsor.name}"
end
