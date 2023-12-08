package BehavioralPatterns.InterpreterPattern;
public class InterpreterPatternExample {
    public static void main(String[] args) {
        // Represent 1 + (2 - 3)
        Expression expression = new Addition(new Number(1), new Subtraction(new Number(2), new Number(3)));

        // Interpret the expression
        int result = expression.interpret();
        System.out.println("Result: " + result);
    }
}