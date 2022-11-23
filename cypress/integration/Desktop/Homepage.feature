@Homepage @Desktop @CL @CO @MX @PE
Feature: Home page tests Belcorp - Desktop
	As a customer, I want to test the Ésika Chile home page´s component - Desktop

	Background:
		Given At Desktop
		Given I am on the homepage with the correct URL

	# @focus
	Scenario: 11407 [Home][Desktop] Validate main banner
		When I check the main banner
		Then Main Banner has arrows and dots to slide and the main image with link

	# @focus
	Scenario: 11408 [Home][Desktop] Validate category section
		When I check the category section
		Then Section has a title, shows five images with links and text

	# @focus
	Scenario: 11409 [Home][Desktop] Validate carousel (first)
		When I check the carousel
		Then Carousel has arrows and dots to slide, a title, and shows 5 product images

	# @focus
	Scenario: 11410 [Home][Desktop] Validate carousel cards (first)
		Then Cards have the product names, product prices, price details, agregar btn, and rate stars

	# @focus
	Scenario: 11411 [Home][Desktop] Validate YO ELIJO ÉSIKA section
		When I check the yoelijoesika section
		Then Section has an image, title, subtitle, and logo
	
	# @focus
	Scenario: 11415 [Home][Desktop] Validate Quotation section
		# When I check to validate quotation section
		Then Section has a phrase and a quote

	# @focus
	Scenario: 11416 [Home][Desktop] Blog and catálogo section
		# When I check the blog and catálogo section
		Then Section has two cards with title, subtitle, and a btn with link

