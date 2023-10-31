package workshop.FizzBuzzModule;

public class FizzBuzzPatternMatcher implements PatternMatcher {
    @Override
    public boolean matches(int number) {
        return number % 7 == 0;
    }

    @Override
    public String generateResponse() {
        return "FizzBuzz";
    }

}