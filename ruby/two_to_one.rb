# Take 2 strings s1 and s2 including only letters from ato z. Return a new
# sorted string, the longest possible, containing distinct letters, - each taken
# only once - coming from s1 or s2.
#
# Examples:
#
# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"
#
# a = "abcdefghijklmnopqrstuvwxyz"
# longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

# My answer

def longest(a1, a2)
  new = []
  a1.concat(a2).split("").each do |x|
    new.push(x) if new.index("#{x}") == nil
  end
  new.sort.join
end

# Much better way

def longest(a, b)
  (a+b).chars.uniq.sort.join
end
