def reverse_string(str)
  #my code
  str_array = str.split

  return str_array
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')


end

#pseudocode
# split string into an array
# reverse the array
# return array