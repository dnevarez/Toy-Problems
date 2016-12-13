# Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn that
#
# accepts the name of a programmer, and
# returns the number of lightsabers owned by that person.
# The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
#
# No starting help here -- you'll need to know how to write a function that accepts a parameter and returns a value based on that parameter.

# howManyLightsabersDoYouOwn("Adam") // => 0
# howManyLightsabersDoYouOwn("Zach") // => 18

# My Answer

def howManyLightsabersDoYouOwn(name = nil)
  if name === 'Zach'
    18
  else
    0
  end
end

# Best answers

def howManyLightsabersDoYouOwn(name="")
  name == "Zach" ? 18 : 0
end

def howManyLightsabersDoYouOwn(person="Anyone else")
  return 18 if person == "Zach"
  return 0
end
