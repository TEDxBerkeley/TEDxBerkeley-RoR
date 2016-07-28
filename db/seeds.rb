def load_from_folder(folder)
  Dir[File.join(Rails.root, 'db', 'seeds', folder, '*.rb')].sort.each do |seed|
    puts "Seeding #{seed}."
    load seed
  end
end

if Rails.env.development? || Rails.env.staging? || Rails.env.production? # TODO Remove this when production seeds ready.
  load_from_folder('development')
end
