@Cart @Mobile @MTO
Feature: Cart tests - Mobile
    As a customer, I want to test the cart functionalities - Mobile  with Consultants URL
    Background:
        Given At Mobile
        And I am on a PDP for Cart
        And I add the consultants store Store

    @Cart @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 15480 [Cart][Mobile][MTO] Check cart after change the store	
        When I add the product to the cart Mobile
        Then I Change the store
        And I go to cart
        And I validate if the product is in the cart
        And the url must contain the following second parameter Other_Store in the final part

    @Cart @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17794 [Cart/Checkout][Mobile][MTO] Add item to cart	
        When I add the product to the cart Mobile
        Then I validate if the product is in the cart        
        And I check if the price is correct Mobile
        And I go to checkout
        And the url must contain the following parameter Store in the final part

    @Cart @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17795 [Cart/Checkout][Mobile][MTO] Remove item from the cart
        When I add the product to the cart Mobile
        And I remove the item from cart
        Then I validate if the product is not in the cart
        And the url must contain the following parameter Store in the final part

    @Cart @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17796 [Cart/Checkout][Mobile][MTO] Add two items to cart	                
        When I add two items in the cart Mobile
        Then I validate if the two items are in cart

    @Cart @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17797 [Cart/Checkout][Mobile][MTO] Clear all cart	
        When I add two items to the cart by URL
        And I remove all items from cart
        Then I validate if is clean cart

    @Cart @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 20518 [Cart/Checkout][Mobile][MTO] Add item with two units
        When I add the product to the cart Mobile
        And I add the quantity for 3 units
        Then I validate if the quantity has been changed to 3
        And the url must contain the following parameter Store in the final part