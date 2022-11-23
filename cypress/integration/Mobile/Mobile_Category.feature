@Category @Mobile @CL @CO @MX @PE
Feature: Category tests Belcorp - Mobile
	As a customer, I want to test the Category component - Mobile

	Background:
		Given At Mobile
		Given I access the Maquillaje category page

	# @Mobile @Category
	# Scenario: 13179 [Category][Mobile] Validate Category Main Banner
	# 	Then there is one category banner-image Mobile

	# @Mobile @Category
	Scenario: 13180 [Category][Mobile] Validate show more button layout
		When I scroll to the end of the page
		Then it has a button with the text Ver más productos

	# @Mobile @Category
	Scenario: 13181 [Category][Mobile] Validate "Maquillaje" breadcrumb
		When I check the breadcrumb
		Then it has a home icon and the name of the Maquillaje category structure
		And I must be redirected to the Maquillaje category page selected after click

	# @Mobile @Category
	Scenario: 13182 [Category][Mobile] Validate "Sort by" options
		When I click on the "Ordenar por" option Mobile
		Then it must appear a list with the options "relevancia", "Ventas", "Más reciente", "Descuento", "Precio más alto" and "Precio más bajo"

	# @Mobile @Category
	Scenario: 17455 [Category][Mobile] Validate Product Card
		When I check the product card
		Then it has image, title, price and button

	# @Mobile @Category
	Scenario: 17843 [Category][Mobile] Validate Sort by Ventas
		When I click on the "Ordenar por" option Mobile
		And I sort by "Ventas"
		Then The url must be reset to sort by "Ventas"

	# @Mobile @Category
	Scenario: 17844 [Category][Mobile] Validate Sort by Más reciente
		When I click on the "Ordenar por" option Mobile
		And I sort by "Más reciente"
		Then I validate the page sorting by "Más reciente"
