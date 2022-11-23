@Pdp @Mobile @CL @CO @MX @PE
Feature: Product Detail Page tests Ésika Chile - Mobile
	As a customer, I want to test the product detail page functionalities on Ésika Chile - Mobile

    Background:
        Given At Mobile
		Given I am on a PDP 

	# @PDP @Mobile @focus
	Scenario: 13678 [PDP][Mobile] Validate product elements
		Then the product name is displayed correctly Mobile
	
	# @PDP @Mobile @focus
	Scenario: 13679 [PDP][Mobile] Validate fixed bar
		When the user checks the fixed bar Mobile
		Then it must have the quantity field and add to cart button Mobile

	# @PDP @Mobile @focus
	Scenario: 13681 [PDP][Mobile] Validate price informations
		When the user checks the price information Mobile
		Then it must have the original price, current price and saving amount Mobile
	
	# @PDP @Mobile @focus
	Scenario: 13680 [PDP][Mobile] Fixed bar - button behavior
		When the user clicks on add to cart button Mobile
		Then the product is added to the cart with the quantity selected Mobile

	# @PDP @Mobile @focus 
	Scenario: 17427 [PDP][Mobile] Validate block review - bottom
		When the user checks the review informations
		Then it must have title, stars, comments, and rating elements
	
	# @PDP @Mobile @focus
	Scenario: 17428 [PDP][Mobile] Validate image and stamps
		And I am on a PDP stamps
		When the user checks the product image - Mobile
		Then it must have stamps

	# @PDP @Mobile @focus
	# ! Cypress not get quantity block - opacity: 0
	# Scenario: 13682 [PDP][Mobile] Fixed bar - quantity block behavior 
	# 	When  the user checks the fixed bar to change the quantity Mobile
	# 	Then it must add one after clicking on plus sign Mobile
	# 	And the same quantity is added to the cart Mobile
	# 	And it must subtract one after clicking on minus sign Mobile