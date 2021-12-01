Feature: To test the login functionality

    Background:

        Given User goes to PodOp page

    @Bla2
    Scenario: (smoke suite)US User Login to the application with valid normal user

        When the user enters username as '<username>' and password as '<password>'
        Then User verify login successful for '<username>'
        Then user logout from the application
        Examples:

            | username        | password |
            | deepu@podop.com | podop123 |

    @Smoke
    Scenario: US User Login to the application with wrong user

        When the user enters username as '<username>' and password as '<password>'
        Then User verify login successful for '<password>'
        Then user logout from the application
        Examples:

            | username         | password |
            | deepu1@podop.com | podop123 |

# @Regression
# Scenario: US User Login to the application with employee user

#     When the user enters username as '<username>' and password as '<password>'
#     Then User verify login successful for '<password>'
#     Then user logout from the application
#     Examples:

#         | username        | password  |
#         | deepu@podop.com | podop1234 |




