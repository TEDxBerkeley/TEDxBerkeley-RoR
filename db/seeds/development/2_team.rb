(1..12).each do |index|
  new_member = TeamMember.create(
    name: Faker::Name.name,
    role: Faker::Lorem.sentence(3),
    bio: Faker::Lorem.paragraphs(3).join(' '),
  )
  puts "Created team member: #{new_member.name}"
end
