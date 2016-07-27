(1..12).each do |index|
  new_member = TeamMember.create(
    name: Faker::Name.name,
    photo_url: "https://s3.amazonaws.com/tedxberkeley/uploads/5b2f09a3-bab5-4a10-b5da-d3eb7ff2722d/Kathy.jpg",
    role: Faker::Lorem.sentence(3),
    bio: Faker::Lorem.paragraphs(3).join(' '),
  )
  puts "Created team member: #{new_member.name}"
end
