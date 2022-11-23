@Promotions @Mobile @MTO
Feature: Cart tests Esika Chile - Mobile MTO
    As a customer, I want to test the cart functionalities on Esika CL - Mobile  with Consultants URL

    Background:
        Given At Mobile
        And I set the Consultant cookie for TienditaLiam

    @Promotions @Mobile @MTO
    Scenario: 23480 [Cart][Mobile][MTO] Validate Promo More for Less
        When I have 3 units of the product
        Then I see full price and free units
        And The purchase are according to the promotion rules
        And I check the consultant cookie for TienditaLiam

    @Promotions @Desktop @MTO
    Scenario: 23481 [Cart][Mobile][MTO] Validate Promo Buy Together
        When I have 1 unit of 2 promotion products
        Then I see both products with the right prices
        And The purchase are according to the Buy Together rules
        And I check the consultant cookie for TienditaLiam

    @Promotions @Mobile @MTO
    Scenario: 23482 [Cart][Mobile][MTO] Validate Promo Not Free Ship
        When I have one item in the cart with 1 units promotion
        And I select a valid address
        Then The shipping price is not free
        And I check the consultant cookie for TienditaLiam

    @Promotions @Mobile @MTO
    Scenario: 23483 [Cart][Mobile][MTO] Validate Promo Free Ship
        When I have one item in the cart with 6 units promotion
        And I select a valid address
        Then The shipping price is free
        And I check the consultant cookie for TienditaLiam
