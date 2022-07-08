require 'set'

def find_first_duplicate(arr)

 # Numbers = Set.new
  map = {}
  dup = nil
  arr.each do |v|
    map[v] = (map[v] || 0 ) + 1

    if map[v] > 1
      dup = v
      break
    end
  end

  return dup
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([])
end

# pseudocode:
# does ruby have same Set functionality as JS?