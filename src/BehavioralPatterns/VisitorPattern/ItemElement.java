package BehavioralPatterns.VisitorPattern;
public interface ItemElement {

    public int accept(ShoppingCartVisitor visitor);
}