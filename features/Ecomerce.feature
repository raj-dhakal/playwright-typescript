Feature: E-commerce Order Validation

  Scenario: Successfully placing an order
    Given I log in to the E-commerce application with username "User Name" and password "Password"
    When I add "Zara Coat 3" to the cart
    Then I should see "Zara Coat 3" displayed in the cart
    When I enter valid shipping and payment details and place the order
    Then I should see the order recorded in the order history

 ## whenn you want to run your scinario with different data sets the we use this
    Scenario Outline: Successfully placing an order
    Given I log in to the E-commerce application with username "<userName>" and password "<password>"
    When I add "Zara Coat 3" to the cart
    Then I should see "Zara Coat 3" displayed in the cart
    When I enter valid shipping and payment details and place the order
    Then I should see the order recorded in the order history

    Examples:
    |userName                 |password           |
    |rajdhaka1988@gmail.com   |YoubaRaj123        |
    |dhakalra1988@gmail.com   |sarita123Yh        |

