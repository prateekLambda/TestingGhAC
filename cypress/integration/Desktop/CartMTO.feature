@Cart @Desktop @MTO
Feature: Cart tests - Desktop
    As a customer, I want to test the cart functionalities - Desktop with Consultants URL
    
    Background:
        Given At Desktop
        And I am on a PDP for Cart
        And I add the consultants store Store

    @Cart @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 15478 [Cart][Desktop][MTO] Check cart after change the store
        When I add the product to the cart
        And I Change the store
        And I go to cart
        Then I validate if the product is in the cart
        And the url must contain the following second parameter Other_Store in the final part

    @Cart @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17790 [Cart/Checkout][Desktop][MTO] Add item to cart
        When I add the product to the cart
        And I validate if the product is in the cart
        And I check if the price is correct
        And I go to checkout
        Then the url must contain the following parameter Store in the final part

    @Cart @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17791 [Cart/Checkout][Desktop][MTO] Remove item from the cart
        When I add the product to the cart
        And I validate if the product is in the cart
        And I remove the item from cart
        Then I validate if the product is not in the cart
        And the url must contain the following parameter Store in the final part

    @Cart @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17792 [Cart/Checkout][Desktop][MTO] Add two items to cart
        When I add two items in the cart
        Then I validate if the two items are in cart
			
	@Cart @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 20511 [Cart/Checkout][Desktop][MTO] Add item with two units
        When I add the product to the cart
        And I validate if the product is in the cart
        And I add the quantity for 3 units
        Then I validate if the quantity has been changed to 3
        And the url must contain the following parameter Store in the final part
 
    @Cart @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17793 [Cart/Checkout][Desktop] Clear all cart
        When I add two items to the cart by URL
        And I remove all items from cart
        Then I validate if is clean cart
        And the url must contain the following parameter Store in the final part

  