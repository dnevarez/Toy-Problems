# Remove first and last character of a string. Only one parameter will be given.

# My Answer

def remove_char(s)
  s[0] = ''
  s[s.length - 1] = ''
  s
end

# Best Answer

def remove_char(s)
  s[1...-1]
end
