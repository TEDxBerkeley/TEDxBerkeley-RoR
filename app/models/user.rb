# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string(255)
#  name            :string(255)
#  password_digest :string(255)
#  username        :string(255)
#

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :confirmable, :database_authenticatable, :recoverable,
         :registerable, :rememberable, :trackable, :validatable


  validates :email, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
end
