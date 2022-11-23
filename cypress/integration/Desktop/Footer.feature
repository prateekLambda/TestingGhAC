@Footer @Desktop @CL @CO @MX @PE
Feature: Footer tests Belcorp - Desktop
	As a customer, I want to test the Ésika Chile Footer component - Desktop

	Background:
		Given At Desktop
		Given I access to any page that is not checkout or my Account

	# @Desktop @focus
	# Scenario: 11773 [Footer][Desktop] Validate footer layout
	#     When I check the footer
	# 	Then it must be located at the end of the page

	# @Desktop @focus
	Scenario: 11774 [Footer][Desktop] Validate social media link
		When I check the footer
		Then it must have 3 icons of social media Facebook, Instagram, Youtube with their respective links

	# @Desktop @focus
	Scenario: 11775 [Footer][Desktop] Validate list container
		When I check the footer
		Then it must have 3 list container sections Nuestras marcas, Legal, Contáctanos with their respective subsections

	# @Desktop @focus
	Scenario: 11776 [Footer][Desktop] Validate payment icons
		When I check the footer
		Then it must have a text with 2 payment icons

	# @Desktop @focus
	Scenario: 11777 [Footer][Desktop] Validate benefits
		When I check the footer
		Then it must have benefits icons and texts

