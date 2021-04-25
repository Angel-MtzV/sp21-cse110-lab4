part1a
    1. values added: 20
    
    2. final result: 20
    
    3. values added: 20
    
    4. result is not defined, because line 13 is not in the same block as 'let result = 0;' this line is unable to access the value for result.
    
    5. nothing is printed by line 9 because there is this error in line 7 cannot reassign to a constant valiable after declaring it. since result has a value of 0 we cannot assign the summation value to result
    
    6. Nothing is printed by line 13 because there is this error in line 7 cannot reassign to a constant valiable after declaring it. since result has a value of 0 we cannot assign the summation value to result

part1b
    1. line 12 will output 3 because the for loop runs without errors and since prices.length is 3 when i = 3 the for loop will stop 
    
    2. line 13 will output 150 because the last value of prices is 300 once we do the operation in line 7 discountedPrice will have the value of 150
    
    3. line 14 will output 150 because the last value of prices is 300 once we do the operation in line 8 discountedPrice will have the value of 150
    
    4. The function returns {50, 100, 150}. the function halfs the given price i, stores the value in discountPrice and finalPrice, and then appends the value into the array discounted 
    
    5. There is an error, since i was declared in the for loop then this variable is not in the same block space as line 12 which means line 12 cannot access i
    
    6. There is an error, since discountedPrice was declared inside the for loop then this variable is not in the same block space as line 13 which means line 13 cannot access discountedPrice
    
    7. like question 3 line 14 will output 150 since there is no error in the code because the for loop is in the same block space
    
    8. the function will return {50, 100, 150}. Because there are no variables being accesed outside of theit block space then the functions runs just like question 4.
    
    9. the code will not reach line 11 because there is an error in line 8. since dicounted is of type const then the code cannot push discountedPrice into discounted.
    
    10. the code will not reach line 12 because there is an error in line 8. since dicounted is of type const then the code cannot push discountedPrice into discounted.
    
    11. the code will not reach the return statement because there is an error in line 8. since dicounted is of type const then the code cannot push discountedPrice into discounted. 
    
    12. a. student.name;
        b. student['Grad Year'];
        c. 
        d.
        e.
    
    13. a. '32' because 2 is converted to a      string since + also signifies concatination
        b. 1 since - only signifies subtraction '3' is converted to an integer
        c. 3, null is converted to 0 so 3 + 0 is 3
        d. 3null, null is converted to a string and concatinated with '3'
        e. 4, true maps to 1 and it is then added to 3.
        f. false and null are mapped to 0 and then added
        g. '3undefined', undefined is converted to a string and then concatenated with '3'
        h. NaN, 3 is converted to an integer and since undefinded does not have an integer value we get NaN(Not a Number)

    14. a. true, 2 is converted to an integer so 2 > 1 is true
        b. false, since both are strings we compare the first element and since '2' > '1' we get false
        c. true, '2' is converted to a number so 2 = 2
        d. false, since there is not conversion the string '2' is not the same as the integer 2
        e. false, true is converted to the integer 1 and 1 is not equal to 2
        f. true, since the inside of the function is not empty, 0, -0, null, false, NaN, undefined, or "" then the function returns true, so true is equal to true.

    15. == checks for equality and allows for type conversion but === checks for equality without allowing for type conversion
