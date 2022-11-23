@Pdp @Desktop @CL @CO @MX @PE
Feature: Product Detail Page tests Ésika Chile - Desktop
	As a customer, I want to test the product detail page functionalities on Ésika Chile - Desktop

    Background:
        Given At Desktop
		Given I am on a PDP

	# @PDP @Desktop @focus
	Scenario: 13674 [PDP][Desktop] Validate product elements
		Then the product name is displayed correctly
	
	# @PDP @Desktop @focus
	Scenario: 13675 [PDP][Desktop] Validate fixed bar
		When the user checks the fixed bar
		Then it must have the product name, original price, current price, quantity field, and add to cart button
	
	# @PDP @Desktop @focus
	Scenario: 13676 [PDP][Desktop] Fixed bar - button behavior
		When the user clicks on add to cart button
		Then the product is added to the cart with the righ amount

	# @PDP @Desktop @focus
	Scenario: 13677 [PDP][Desktop] Validate price informations
		When the user checks the price information
		Then it must have the original price, current price and saving amount

	# @PDP @Desktop @focus
	Scenario: 17425 [PDP][Desktop] Validate block review - bottom
		When the user checks the review informations
		Then it must have title, stars, comments, and rating elements
	
	# @PDP @Desktop @focus
	Scenario: 17426 [PDP][Desktop] Validate image and stamps
		And I am on a PDP stamps
		When the user checks the product image
		Then it must have stamps
	
	# @PDP @Desktop @focus
	#  ! Quantity field was depreacted on desktop
	# Scenario: 0000 [PDP][Desktop] Fixed bar - quantity block behavior 
	# 	When  the user checks the fixed bar to change the quantity
	# 	Then it must add one after clicking on plus sign
	# 	And the same quantity is added to the cart
	# 	And it must subtract one after clicking on minus sign