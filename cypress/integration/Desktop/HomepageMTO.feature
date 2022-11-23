@Desktop @Homepage @MTO @CL @CO @MX @PE
Feature: Home page tests Belcorp - Desktop
	As a customer, I want to test the Ésika Chile home page´s component - Desktop with Consultant's URL

	Background:
		Given At Desktop
		Given I am on the homepage with the correct URL
		When I go to consultants store TienditaLiam
		Then the url must contain the following parameter TienditaLiam in the final part

	# @Desktop @Homepage @focus @MTO
	Scenario: 15383 [Homepage][Desktop][MTO] Validate Consultants bar
		When it must appear at top left the Consultants bar

	# @Desktop @Homepage @focus @MTO
	Scenario: 15384 [Homepage][Desktop][MTO] Validate Consultants URL
		Then the url must contain the following parameter TienditaLiam in the final part

	# @Desktop @Homepage @focus @MTO
	Scenario: 15477 [Homepage][Desktop][MTO] Change the store
		And the url must contain the following parameter TienditaLiam in the final part
		Then I Change the store

	# @Homepage @Desktop @MTO @focus
	Scenario: 17521 [Home][Desktop][MTO] Validate main banner
		When I check the main banner
		Then Main Banner has arrows and dots to slide and the main image with link

	# @Homepage @Desktop @focus @MTO
	Scenario: 17523 [Home][Desktop][MTO] Validate carousel (first)
		When I check the carousel
		Then Carousel has arrows and dots to slide, a title, and shows 5 product images

	# @Homepage @Desktop @focus @MTO
	Scenario: 17522 [Home][Desktop][MTO] Validate category section
		When I check the category section
		Then Section has a title, shows five images with links and text

	# @Homepage @Desktop @focus
	Scenario: 18522 [Home][Desktop][MTO] Validate YO ELIJO ÉSIKA section
		When I check the yoelijoesika section
		Then Section has an image, title, subtitle, and logo

	# @Homepage @Desktop @focus @MTO
	Scenario: 17798 [Home][Desktop][MTO] Validate Quotation section
		# When I check to validate quotation section
		Then Section has a phrase and a quote

	# @Homepage @Desktop @focus @MTO
	Scenario: 17799 [Home][Desktop][MTO] Blog and catálogo section
		# When I check the blog and catálogo section
		Then Section has two cards with title, subtitle, and a btn with link