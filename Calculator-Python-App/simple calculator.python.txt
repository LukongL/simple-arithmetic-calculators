def add(Num1, Num2):
    result = Num1 + Num2
    return result

def sub(Num1, Num2):
    result = Num1 - Num2
    return result

def multiply(Num1, Num2):
    result = Num1 * Num2
    return result

def div(Num1, Num2):
    if Num2 != 0:
        result = Num1 / Num2
        return result
    else:
        raise ValueError("Cannot divide by zero")

operator = input("Enter an operator (+ - * /): ")
Num1 = float(input("Enter the 1st number: "))
Num2 = float(input("Enter the 2nd number: "))

if operator == "+":
    result = add(Num1, Num2)
elif operator == "-":
    result = sub(Num1, Num2)
elif operator == "*":
    result = multiply(Num1, Num2)
elif operator == "/":
    try:
        result = div(Num1, Num2)
    except ValueError as e:
        print(e)
        result = None
else:
    print(f"{operator} is not a valid operator")
    result = None

if result is not None:
    print(result)
