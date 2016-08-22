(1..12).each do |index|
  new_sponsor = Sponsor.create(
    name: Faker::Company.name,
    description: Faker::Lorem.paragraphs(3).join(' '),
    facebook: Faker::Company.bs,
  )
  puts "Created sponsor member: #{new_sponsor.name}"
end
