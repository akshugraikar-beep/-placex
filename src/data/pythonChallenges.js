// 50 beginner Python questions
export const pythonChallenges = [
  // ── Conditionals (1-10) ───────────────────────────────────────
  { id: 1, category: "Conditionals", difficulty: "Easy", question: "Check if a number is even or odd", answer_code: "n=4\nprint('Even' if n%2==0 else 'Odd')", expected_output: "Even" },
  { id: 2, category: "Conditionals", difficulty: "Easy", question: "Check if number is positive, negative or zero", answer_code: "n=-2\nprint('Positive' if n>0 else 'Negative' if n<0 else 'Zero')", expected_output: "Negative" },
  { id: 3, category: "Conditionals", difficulty: "Easy", question: "Find greater of two numbers", answer_code: "a,b=5,10\nprint(max(a,b))", expected_output: "10" },
  { id: 4, category: "Conditionals", difficulty: "Easy", question: "Check if divisible by 5 and 3", answer_code: "n=15\nprint(n%5==0 and n%3==0)", expected_output: "True" },
  { id: 5, category: "Conditionals", difficulty: "Medium", question: "Check leap year", answer_code: "year=2024\nprint(year%4==0)", expected_output: "True" },
  { id: 6, category: "Conditionals", difficulty: "Easy", question: "Check voting eligibility", answer_code: "age=18\nprint('Eligible' if age>=18 else 'Not Eligible')", expected_output: "Eligible" },
  { id: 7, category: "Conditionals", difficulty: "Easy", question: "Find smallest of 3 numbers", answer_code: "a,b,c=3,1,5\nprint(min(a,b,c))", expected_output: "1" },
  { id: 8, category: "Conditionals", difficulty: "Easy", question: "Check if number greater than 100", answer_code: "n=120\nprint(n>100)", expected_output: "True" },
  { id: 9, category: "Conditionals", difficulty: "Easy", question: "Check equality of two numbers", answer_code: "print(5==5)", expected_output: "True" },
  { id: 10, category: "Conditionals", difficulty: "Medium", question: "Check multiple of 10", answer_code: "n=50\nprint(n%10==0)", expected_output: "True" },

  // ── Loops (11-20) ────────────────────────────────────────────
  { id: 11, category: "Loops", difficulty: "Easy", question: "Print numbers from 1 to 10", answer_code: "for i in range(1,11): print(i)", expected_output: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10" },
  { id: 12, category: "Loops", difficulty: "Medium", question: "Sum of numbers 1 to 10", answer_code: "print(sum(range(1,11)))", expected_output: "55" },
  { id: 13, category: "Loops", difficulty: "Medium", question: "Print even numbers from 1 to 20", answer_code: "for i in range(2,21,2): print(i)", expected_output: "2\n4\n6\n8\n10\n12\n14\n16\n18\n20" },
  { id: 14, category: "Loops", difficulty: "Medium", question: "Print odd numbers", answer_code: "for i in range(1,20,2): print(i)", expected_output: "1\n3\n5\n7\n9\n11\n13\n15\n17\n19" },
  { id: 15, category: "Loops", difficulty: "Hard", question: "Find factorial of 5", answer_code: "f=1\nfor i in range(1,6): f*=i\nprint(f)", expected_output: "120" },
  { id: 16, category: "Loops", difficulty: "Medium", question: "Print numbers from 10 to 1", answer_code: "for i in range(10,0,-1): print(i)", expected_output: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1" },
  { id: 17, category: "Loops", difficulty: "Hard", question: "Multiplication table of 3", answer_code: "for i in range(1,11): print(3*i)", expected_output: "3\n6\n9\n12\n15\n18\n21\n24\n27\n30" },
  { id: 18, category: "Loops", difficulty: "Medium", question: "Count digits in number", answer_code: "n=1234\nprint(len(str(n)))", expected_output: "4" },
  { id: 19, category: "Loops", difficulty: "Hard", question: "Sum of digits", answer_code: "print(sum(int(d) for d in str(123)))", expected_output: "6" },
  { id: 20, category: "Loops", difficulty: "Medium", question: "Print squares from 1 to 5", answer_code: "for i in range(1,6): print(i*i)", expected_output: "1\n4\n9\n16\n25" },

  // ── Strings (21-30) ──────────────────────────────────────────
  { id: 21, category: "Strings", difficulty: "Easy", question: "Reverse a string", answer_code: "print('hello'[::-1])", expected_output: "olleh" },
  { id: 22, category: "Strings", difficulty: "Medium", question: "Check palindrome", answer_code: "s='madam'\nprint(s==s[::-1])", expected_output: "True" },
  { id: 23, category: "Strings", difficulty: "Hard", question: "Count vowels in string", answer_code: "s='hello'\nprint(sum(1 for c in s if c in 'aeiou'))", expected_output: "2" },
  { id: 24, category: "Strings", difficulty: "Easy", question: "Convert to uppercase", answer_code: "print('hello'.upper())", expected_output: "HELLO" },
  { id: 25, category: "Strings", difficulty: "Easy", question: "Convert to lowercase", answer_code: "print('HELLO'.lower())", expected_output: "hello" },
  { id: 26, category: "Strings", difficulty: "Medium", question: "Remove spaces", answer_code: "print('a b c'.replace(' ',''))", expected_output: "abc" },
  { id: 27, category: "Strings", difficulty: "Easy", question: "First character of string", answer_code: "print('hello'[0])", expected_output: "h" },
  { id: 28, category: "Strings", difficulty: "Easy", question: "Last character of string", answer_code: "print('hello'[-1])", expected_output: "o" },
  { id: 29, category: "Strings", difficulty: "Easy", question: "Concatenate strings", answer_code: "print('Hi '+'There')", expected_output: "Hi There" },
  { id: 30, category: "Strings", difficulty: "Easy", question: "Length of string", answer_code: "print(len('hello'))", expected_output: "5" },

  // ── Lists (31-40) ────────────────────────────────────────────
  { id: 31, category: "Lists", difficulty: "Easy", question: "Create and print list", answer_code: "l=[1,2,3]\nprint(l)", expected_output: "[1, 2, 3]" },
  { id: 32, category: "Lists", difficulty: "Medium", question: "Add element to list", answer_code: "l=[1,2,3]\nl.append(4)\nprint(l)", expected_output: "[1, 2, 3, 4]" },
  { id: 33, category: "Lists", difficulty: "Medium", question: "Remove element from list", answer_code: "l=[1,2,3]\nl.remove(2)\nprint(l)", expected_output: "[1, 3]" },
  { id: 34, category: "Lists", difficulty: "Medium", question: "Find max in list", answer_code: "l=[1,5,3]\nprint(max(l))", expected_output: "5" },
  { id: 35, category: "Lists", difficulty: "Medium", question: "Find min in list", answer_code: "l=[1,5,3]\nprint(min(l))", expected_output: "1" },
  { id: 36, category: "Lists", difficulty: "Medium", question: "Sum of list", answer_code: "l=[1,2,3]\nprint(sum(l))", expected_output: "6" },
  { id: 37, category: "Lists", difficulty: "Hard", question: "Reverse list", answer_code: "l=[1,2,3]\nl.reverse()\nprint(l)", expected_output: "[3, 2, 1]" },
  { id: 38, category: "Lists", difficulty: "Hard", question: "Sort list", answer_code: "l=[3,1,2]\nl.sort()\nprint(l)", expected_output: "[1, 2, 3]" },
  { id: 39, category: "Lists", difficulty: "Medium", question: "Check element exists", answer_code: "l=[1,2,3]\nprint(3 in l)", expected_output: "True" },
  { id: 40, category: "Lists", difficulty: "Easy", question: "Length of list", answer_code: "l=[1,2,3]\nprint(len(l))", expected_output: "3" },

  // ── Math / Misc (41-50) ──────────────────────────────────────
  { id: 41, category: "Math", difficulty: "Hard", question: "Swap two numbers", answer_code: "a,b=5,10\na,b=b,a\nprint(a,b)", expected_output: "10 5" },
  { id: 42, category: "Math", difficulty: "Easy", question: "Square of number", answer_code: "print(5*5)", expected_output: "25" },
  { id: 43, category: "Math", difficulty: "Easy", question: "Cube of number", answer_code: "print(3**3)", expected_output: "27" },
  { id: 44, category: "Math", difficulty: "Hard", question: "Check prime number", answer_code: "n=7\nprint(all(n%i!=0 for i in range(2,n)))", expected_output: "True" },
  { id: 45, category: "Math", difficulty: "Medium", question: "Average of 3 numbers", answer_code: "print((2+4+6)/3)", expected_output: "4.0" },
  { id: 46, category: "Math", difficulty: "Easy", question: "Find remainder", answer_code: "print(10%3)", expected_output: "1" },
  { id: 47, category: "Math", difficulty: "Medium", question: "Check number in range 1-100", answer_code: "n=50\nprint(1<=n<=100)", expected_output: "True" },
  { id: 48, category: "Math", difficulty: "Medium", question: "Count even numbers in list", answer_code: "l=[1,2,3,4]\nprint(sum(1 for i in l if i%2==0))", expected_output: "2" },
  { id: 49, category: "Math", difficulty: "Hard", question: "Find largest digit in number", answer_code: "n=528\nprint(max(int(d) for d in str(n)))", expected_output: "8" },
  { id: 50, category: "Math", difficulty: "Medium", question: "Check if string contains 'a'", answer_code: "print('a' in 'apple')", expected_output: "True" },
];
