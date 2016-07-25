(1..4).each do |i|
  event = Event.create(
    date: Faker::Date.between(i.years.ago, (i - 1).years.ago),
    description: Faker::Lorem.paragraphs(3).join(" \n"),
    theme: Faker::Lorem.words(3).join(' '),
  )
  puts "Created event: #{event.theme} #{event.date.year}"
end
