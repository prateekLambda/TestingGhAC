@Homepage @Mobile @MTO @CL @CO @MX @PE
Feature: Home page tests Belcorp - Mobile
	As a customer, I want to test the Ésika Chile home page´s component - Mobile with Consultant's URL

	Background:
		Given At Mobile
		Given I am on the homepage with the correct URL
		When I go to consultants store TienditaLiam
		Then the url must contain the following parameter TienditaLiam in the final part

	# @Homepage @Mobile @MTO
	Scenario: 15385 [Home][Mobile][MTO] Validate Consultants bar
		And it must appear Mobile

	# @Homepage @Mobile @MTO
	Scenario: 15386 [Home][Mobile][MTO] Validate Consultants URL
		Then the url must contain the following parameter TienditaLiam in the final part

	# @Homepage @Mobile @MTO
	Scenario: 15479 [Homepage][Mobile][MTO] Change the store
		And the url must contain the following parameter TienditaLiam in the final part
		Then I Change the store

	# @Homepage @Mobile @MTO
	Scenario: 17524 [Home][Mobile][MTO] Validate main banner
		When I check the main banner mobile
		Then Main Banner has arrows and dots to slide and two images with links Mobile

	# @Homepage @Mobile @MTO @focus
	Scenario: 17525 [Home][Mobile][MTO] Validate category section
		When I check the category section mobile
		Then Section has a title, shows five images with links and text Mobile

	# @Homepage @Mobile @MTO @focus
	Scenario: 17526 [Home][Mobile][MTO] Validate carousel (first)
		When I check the carousel mobile
		Then Carousel has arrows and dots to slide, a title, and shows 2 product images mobile

	# @Homepage @Mobile @MTO @focus
	Scenario: 18523 [Home][Mobile][MTO] Validate carousel cards (first)
		When I check the carousel mobile
		Then Cards have the product names, product prices, price details, agregar btn, and rate stars mobile

	# @Homepage @Mobile @MTO @focus
	Scenario: 18524 [Home][Mobile][MTO] Validate YO ELIJO ÉSIKA section
		When I check the yoelijoesika section mobile
		Then Section has an image, title, subtitle, and logo mobile

	# @Homepage @Mobile @MTO
	Scenario: 17800 [Home][Mobile][MTO] Validate Quotation section
		# When I check to validate quotation section mobile
		Then Section has a phrase and a quote mobile

	# @Homepage @Mobile @MTO @focus
	Scenario: 17801 [Home][Mobile][MTO] Blog and catálogo section
		# When I check the blog and catálogo section mobile
		Then Section has two cards with title, subtitle, and a btn with link mobile

