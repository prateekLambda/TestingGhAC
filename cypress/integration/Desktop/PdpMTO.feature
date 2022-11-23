@Pdp @Desktop @MTO @CL @CO @MX @PE
Feature: Product Detail Page tests Ésika Chile - Desktop
	As a customer, I want to test the product detail page functionalities on Ésika Chile - Desktop with Consultant's URL

    Background:
        Given At Desktop
		Given I am on a PDP
		When I add the consultants store TienditaLiam

	 # @PDP @Desktop @focus @MTO
	Scenario: 17528 [PDP][Desktop][MTO] Validate fixed bar
		#And I am on a PDP stamps MTO
		When the user checks the fixed bar
		Then it must have the product name, original price, current price, quantity field, and add to cart button
		And I check the consultant cookie for TienditaLiam

	# @Desktop @PDP @focus @MTO
	Scenario: 15387 [PDP][Desktop][MTO] Validate Consultants bar
		Then it must appear at top left the Consultants bar
		And I check the consultant cookie for TienditaLiam

	# @Desktop @PDP @focus @MTO
	Scenario: 15388 [PDP][Desktop][MTO] Validate Consultants URL
		Then the url must contain the following parameter TienditaLiam in the final part

	#CLONE
	# @PDP @Desktop @focus @MTO
	Scenario: 17527 [PDP][Desktop][MTO] Validate product elements
		Then the product name is displayed correctly
		And I check the consultant cookie for TienditaLiam
	
	# @PDP @Desktop @focus @MTO
	Scenario: 17529 [PDP][Desktop][MTO] Fixed bar - button behavior
		When the user clicks on add to cart button
		Then the product is added to the cart with the righ amount
		And I check the consultant cookie for TienditaLiam

	# @PDP @Desktop @focus @MTO
	Scenario: 17781 [PDP][Desktop][MTO] Validate price informations
		When the user checks the price information
		Then it must have the original price, current price and saving amount
		And I check the consultant cookie for TienditaLiam

	# @PDP @Desktop @focus @MTO
	Scenario: 17782 [PDP][Desktop][MTO] Validate block review - bottom
		When the user checks the review informations
		Then it must have title, stars, comments, and rating elements
		And I check the consultant cookie for TienditaLiam
	
	# @PDP @Desktop @focus @MTO
	Scenario: 17783 [PDP][Desktop][MTO] Validate image and stamps
		And I am on a PDP stamps MTO
		When the user checks the product image
		Then it must have stamps
		And I check the consultant cookie for TienditaLiam