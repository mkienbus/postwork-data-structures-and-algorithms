def fibonacci(num)
  numbers = [0, 1]

  return numbers[num] if num < 2

  (num -1).times do
    sum = numbers[0] + numbers[1]
    numbers = [numbers[1], sum]
  end

  numbers.last
  
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# pseudo
# And a written explanation of your solution
