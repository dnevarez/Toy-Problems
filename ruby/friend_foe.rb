# Make a program that filters a list of strings and returns a list with only your friends name in it.
#
# If a name has 4 letters in it, you can be sure that it has to be a friend of yours!
#
# Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

# My Answer

def friend(friends)
  arr = []
  friends.map do |friend|
    if friend.length == 4
      arr.push(friend)
    end
  end
  arr
end

# Best Answer

def friend(friends)
  friends.select { |name| name.length == 4 }
end
