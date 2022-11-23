@CartTest @Mobile @MTO
Feature: Cart tests Esika Chile - Mobile
    As a customer, I want to test the cart functionalities on Esika CL - Mobile  with Consultants URL
    # todo: refactor: build cart url with including URL Consultant. Current code needs to access pdp, and then go to cart.
    Background:
        Given At Mobile
        And I am on a PDP for Cart
        And I add the consultants store Store

    @Cart @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 20519 [Cart/Checkout][Mobile][MTO] Reduce item units in the cart
        When I add the product to the cart Mobile
        And I add 2 units to the cart
        And I reduce the quantity for 2 units
        Then I validate if the quantity has been reset to 2
        And the url must contain the following parameter Store in the final part

    @Cart @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 20520 [Cart/Checkout][Mobile][MTO] Add invalid discount coupon
        When I have one item in the cart with 1 units
        And I type a invalid discount coupon
        Then The discount coupon should be invalid Mobile

    @Cart @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 20521 [Cart/Checkout][Mobile][MTO] Add and delete valid discount coupon
        When I add the product to the cart Mobile
        And I type a valid discount coupon
        Then The discount coupon should be valid
        And Delete the coupon
        And the url must contain the following parameter Store in the final part

    @Cart @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 20522 [Cart/Checkout][Mobile][MTO] Calculate valid shipping
        When I add the product to the cart Mobile
        And I select a valid address
        Then The shipping price is displayed
        And the url must contain the following parameter Store in the final part

    @Cart @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 20523 [Cart/Checkout][Mobile][MTO] Calculate valid shipping without required fields
        When I add the product to the cart Mobile
        And I do not fill the required fields
        Then The shipping price is not displayed
        And the url must contain the following parameter Store in the final part

    @Cart @Mobile @MTO @CL @CO @PE
    # @focus
    Scenario: 20524 [Cart/Checkout][Mobile][MTO] Calculate valid shipping without Comuna field
        When I add the product to the cart Mobile
        And I do not fill the comuna field
        Then The shipping price is not displayed
        And the url must contain the following parameter Store in the final part