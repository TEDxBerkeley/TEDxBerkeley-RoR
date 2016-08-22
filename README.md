### TEDxBerkeley Ruby on Rails Site

## Getting Started

0. Install Postgres. The easiest way to do this is the with [Postgres.app](http://www.postgresapp.com/)

1. Install Rails at the command prompt if you haven't yet:

        $ gem install rails

2. Clone the TEDxBerkeley app into your workspace:

        $ git clone https://github.com/TEDxBerkeley/tedxberkeley.org.git

3. Create a new rails project from the project directory. Answer `n` to Overwriting files:

        $ rails new project_directory

4. Install dependencies:

        $ bundle install

5. Create database:

        $ rake db:create

6. Run Migrations:

	      $ rake db:migrate

7. Add seed data:

        $ rake db:seed

8. Run tests:

        $ rspec

9. Run Application.

        $ rails s
