# You are a lonely hobbit, and you've been given a manifest of all the residents
# in this side of the country. The manifest is an array of hashes, that have the
# form: {name: 'string', race: 'string', home: 'string'}
#
# You want to find all of the other hobbits! Your task is to return an array
# from a given manifest that contains all of the potential halflings in the list.
# From your experience you know that hobbits don't always follow the rules, and
# some may have entered their race under their home and vice versa. You also
# know that some hobbits will refer to themselves as halflings, and that popular
# homes for hobbits include the shire, south farthing, and hobbiton.
#
# TLDR; For a given array of hashes of the form
# {name: 'string', race: 'string', home: 'string'}, return an array of all the
# objects that have the words halfling,hobbit,shire,farthing, or hobbiton
# anywhere within the race or home field.

# My Solution

def find_hobbits_in(manifest)
result = []
matches = ['halfling','hobbit','shire','farthing', 'hobbiton', 'half-halfling']
  manifest.each do |person|
    person.each do |key, value|
      x = value.to_s.downcase
      y = key.to_s.downcase
      matches.each do |v|
      unless result.include?(person) == true
      if (y == "race" or y == "home") && x.include?(v) == true
        result.push person
        end
        end
      end
      end
      end
      return result
end

# Better Solutions

def find_hobbits_in(manifest)
  keywords = %w{halfling hobbit shire farthing hobbiton}
  r = /#{keywords.join('|')}/i
  manifest.select do |resident|
    [:race,:home].any?{ |field| "#{resident[field]}" =~ r }
  end
end

#######

REGEX = /halfling|hobbit|shire|farthing|hobbiton/i

def find_hobbits_in(manifest)
  manifest.select { |hsh| hsh.values_at(:race, :home).join[REGEX] }
end
