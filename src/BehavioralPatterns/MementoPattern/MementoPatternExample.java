package BehavioralPatterns.MementoPattern;

public class MementoPatternExample {
    public static void main(String[] args) {
        // Create an originator
        Originator originator = new Originator();

        // Create a caretaker
        Caretaker caretaker = new Caretaker();

        // Set the state and save the memento
        originator.setState("State 1");
        caretaker.addMemento(originator.createMemento());

        // Change the state and save the memento
        originator.setState("State 2");
        caretaker.addMemento(originator.createMemento());

        // Restore the state from the first memento
        originator.restoreFromMemento(caretaker.getMemento(0));
        System.out.println("Current State: " + originator.getState());

        // Restore the state from the second memento
        originator.restoreFromMemento(caretaker.getMemento(1));
        System.out.println("Current State: " + originator.getState());
    }
}