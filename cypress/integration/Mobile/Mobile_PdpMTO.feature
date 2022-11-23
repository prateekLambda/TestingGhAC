@Pdp @Mobile @MTO @CL @CO @MX @PE
Feature: Product Detail Page tests Ésika Chile - Mobile
	As a customer, I want to test the product detail page functionalities on Ésika Chile - Mobile with Consultant's URL

    Background:
        Given At Mobile
		Given I am on a PDP 
		When I add the consultants store store	

	# @Mobile @PDP @focus @MTO
	Scenario: 15389 [PDP][Android][MTO] Validate Consultants bar		
		And it must appear Mobile

	# @Mobile @PDP @focus @MTO
	Scenario: 15390 [PDP][Android][MTO] Validate Consultants URL
		Then the url must contain the following parameter TienditaLiam in the final part
	
	#CLONE
	# @PDP @Mobile @focus @MTO
	Scenario: 17530 [PDP][Mobile][MTO] Validate product elements
		Then the product name is displayed correctly Mobile
        Then the url must contain the following parameter Store in the final part
	
	# @PDP @Mobile @focus @MTO
	Scenario: 17531 [PDP][Mobile][MTO] Validate fixed bar
		When the user checks the fixed bar Mobile
		Then it must have the quantity field and add to cart button Mobile
        Then the url must contain the following parameter Store in the final part

	# @PDP @Mobile @focus @MTO
	Scenario: 17784 [PDP][Mobile][MTO] Validate price informations
		When the user checks the price information Mobile
		Then it must have the original price, current price and saving amount Mobile
        Then the url must contain the following parameter Store in the final part
	
	# @PDP @Mobile @focus @MTO	
	Scenario: 17785 [PDP][Mobile][MTO] Fixed bar - button behavior
		When the user clicks on add to cart button Mobile
		Then the product is added to the cart with the quantity selected Mobile
        Then the url must contain the following parameter Store in the final part

	# @PDP @Mobile @focus @MTO
	Scenario: 17786 [PDP][Mobile][MTO] Validate block review - bottom
		When the user checks the review informations
		Then it must have title, stars, comments, and rating elements
        Then the url must contain the following parameter Store in the final part
	
	# @PDP @Mobile @focus @MTO  
	Scenario: 17787 [PDP][Mobile][MTO] Validate image and stamps
		And I am on a PDP stamps MTO
		When the user checks the product image - Mobile
		Then it must have stamps
        And I check the consultant cookie for TienditaLiam
