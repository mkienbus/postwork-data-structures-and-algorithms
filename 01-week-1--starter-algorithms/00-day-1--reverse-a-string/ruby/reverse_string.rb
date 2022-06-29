def reverse_string(str)
  #my code

  #easy solution with built in methods
  # reversed_str = str.reverse
  # return reversed_str

  #solution without using methods, but iteration instead
  reversed_str = ""

  str.chars.each do |character|
    reversed_str = character + reversed_str
  end

  return reversed_str

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
# join string into new array
# return new array