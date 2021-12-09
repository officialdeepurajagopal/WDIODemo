Feature: To test the login functionality

    Background:

        Given User goes to Login page

    @Bla
    Scenario: JP User Login to the application with valid normal user

        When the user enters username as "<username>" and password as "<password>"
        Then User verify login successful for "<username>"
        Then user logout from the application
        Examples:

            | username      | password     |
            | standard_user | secret_sauce |