# question 1
Num1 and Num2 are stored as strings and not integers and thus the result concatonates the strings.

# question 2
When defining result, make sure num1 and num2 are numbers when calculating. change line 11 to be:
let result = Number(num1) + Number(num2)
