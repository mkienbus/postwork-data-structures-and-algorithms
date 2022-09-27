def selection_sort(arr)
  # type your code in here
  sorted = []

  until arr.length == 0
    min = arr.length
    idx = arr.index(min)
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }
end

# find min value
# append min value to sorted array
# remove min value from original array
# iterate until complete
