package BehavioralPatterns.MementoPattern;

import java.util.ArrayList;
import java.util.List;

// Originator
class Originator {
    private String state;

    public void setState(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }

    // Create a memento with the current state
    public Memento createMemento() {
        return new Memento(state);
    }

    // Restore the state from a memento
    public void restoreFromMemento(Memento memento) {
        this.state = memento.getState();
    }
}