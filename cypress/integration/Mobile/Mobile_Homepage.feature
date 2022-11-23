@Homepage @Mobile @CL @CO @MX @PE
Feature: Home page tests Belcorp - Mobile
	As a customer, I want to test the Ésika Chile home page´s component - Mobile

	Background:
		Given At Mobile
		Given I am on the homepage with the correct URL

	# @Homepage @Mobile
	# @focus
	Scenario: 11541 [Home][Mobile] Validate main banner
		When I check the main banner mobile
		Then Main Banner has arrows and dots to slide and two images with links Mobile

	# @Homepage @Mobile @focus
	Scenario: 11543 [Home][Mobile] Validate carousel (first)
		When I check the carousel mobile
		Then Carousel has arrows and dots to slide, a title, and shows 2 product images mobile

	# @Homepage @Mobile @focus
	Scenario: 11565 [Home][Mobile] Validate carousel cards (first)
		When I check the carousel mobile
		Then Cards have the product names, product prices, price details, agregar btn, and rate stars mobile

	# @Homepage @Mobile @focus
	Scenario: 11542 [Home][Mobile] Validate category section
		When I check the category section mobile
		Then Section has a title, shows five images with links and text Mobile

	# @Homepage @Mobile @focus
	Scenario: 11575 [Home][Mobile] Validate YO ELIJO ÉSIKA section
		When I check the yoelijoesika section mobile
		Then Section has an image, title, subtitle, and logo mobile

	# @Homepage @Mobile @focus
	Scenario: 11577 [Home][Mobile] Validate Quotation section
		# When I check to validate quotation section mobile
		Then Section has a phrase and a quote mobile

	# @Homepage @Mobile @focus
	Scenario: 11578 [Home][Mobile] Blog and catálogo section
		# When I check the blog and catálogo section mobile
		Then Section has two cards with title, subtitle, and a btn with link mobile

