// Base class
class Animal {
    String name;

    public Animal(String name) {
        this.name = name;
    }

    void eat() {
        System.out.println(name + " is eating.");
    }
}

// Interface
interface Swimmer {
    void swim();
}

// Class that extends Animal and implements Swimmer
class Dolphin extends Animal implements Swimmer {
    public Dolphin(String name) {
        super(name);
    }

    @Override
    public void swim() {
        System.out.println(name + " is swimming gracefully in the ocean.");
    }

    public static void main(String[] args) {
        Dolphin dolphin = new Dolphin("Dolly");
        dolphin.eat();
        dolphin.swim();
    }
}
