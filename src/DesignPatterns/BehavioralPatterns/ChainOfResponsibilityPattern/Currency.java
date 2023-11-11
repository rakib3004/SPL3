package DesignPatterns.BehavioralPatterns.ChainOfResponsibilityPattern;
public class Currency {

    private int amount;

    public Currency(int amt){
        this.amount=amt;
    }

    public int getAmount(){
        return this.amount;
    }
}