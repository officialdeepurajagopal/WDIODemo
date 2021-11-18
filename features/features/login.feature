Feature: To test the login functionality

    Background:

        Given User goes to PodOp page

    Scenario: User Login to the application

        When the user enters username as '<username>' and password as '<password>'
        Then User verify login successful for '<username>'
        Examples:

            | username        | password |
            | deepu@podop.com | podop123 |


