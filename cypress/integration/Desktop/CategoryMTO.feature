@Desktop @Category @MTO @CL @CO @MX @PE
Feature: Category tests Belcorp - Desktop Mto
	As a customer, I want to test the Category Page - Desktop with Consultants URL

	Background:
		Given I go to consultants store Store
		Given At Desktop
		Given I access the Perfumes category page

	# @focus
	Scenario: 14990 [Category][Desktop][MTO] Validate Consultants bar
		Then it must appear at top left the Consultants bar
		Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 14991 [Category][Desktop][MTO] Validate Consultants URL
		Then the url must contain the following parameter Store in the final part

	# @focus
	# Scenario: 17532 [Category][Desktop][MTO] Validate Category Main Banner
	# 	Then there is one category banner-image
	# 	Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 17533 [Category][Desktop][MTO] Validate show more button layout
		When I scroll to the end of the page
		Then it has a button with the text Ver más productos
		Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 17534 [Category][Desktop][MTO] Validate "Perfumes" breadcrumb
		When I check the breadcrumb
		Then it has a home icon and the name of the Perfumes category structure
		And I must be redirected to the Perfumes category page selected after click
		Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 18525 [Category][Desktop][MTO] Validate "Sort by" options
		When I click on the "Ordenar por" option
		Then it must appear a list with the options "relevancia", "Ventas", "Más reciente", "Descuento", "Precio más alto" and "Precio más bajo"
		Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 18527 [Category][Desktop][MTO] Validate Sort by Ventas
		When I click on the "Ordenar por" option
		And I sort by "Ventas"
		Then The url must be reset to sort by "Ventas"
		Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 18526 [Category][Desktop][MTO] Validate Product Card
		When I check the product card
		Then it has image, title, price and button
		Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 18528 [Category][Desktop][MTO] Validate Order by Más reciente
		When I click on the "Ordenar por" option
		And I sort by "Más reciente"
		Then I validate the page sorting by "Más reciente"
		Then the url must contain the following parameter Store in the final part