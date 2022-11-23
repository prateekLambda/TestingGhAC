@Promotions @Desktop
Feature: Cart Promotion tests Esika Chile - Desktop
    As a customer, I want to test the cart promotion functionalities on Esika CL - Desktop
    Background:
        Given At Desktop

    @Promotions @Desktop
    Scenario: 23468 [Promotion][Desktop] Validate Promo More for Less
        Given I have 3 units of the product
        Then I see full price and free units
        And The purchase are according to the promotion rules

    @Promotions @Desktop
    Scenario: 23469 [Promotion][Desktop] Validate Promo Buy Together
        Given I have 1 unit of 2 promotion products
        Then I see both products with the right prices
        And The purchase are according to the Buy Together rules

    @Promotions @Desktop
    Scenario: 23470 [Promotion][Desktop] Validate Promo Not Free Ship
        Given I have one item in the cart with 1 units promotion
        And I select a valid address
        Then The shipping price is not free

    @Promotions @Desktop
    Scenario: 23471 [Promotion][Desktop] Validate Promo Free Ship
        Given I have one item in the cart with 6 units promotion
        And I select a valid address
        Then The shipping price is free

# @Cart @Promotion @Desktop @focus
#  todo: Promo not set
# Scenario: 00000 [Promotion][Desktop] Validate Promo Gift
#     Given I have one item in the cart with 1 units for Gift
#     Then The Gift name is according to the promotion rules