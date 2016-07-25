class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    if user.admin?
      # Admin users can perfom all operations on any object.
      can :manage, :all
    else
      can :read, :all
      can [:create, :update], Nomination
      cannot :read, Nomination
    end
  end
end
