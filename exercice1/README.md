# Exercice 1 : Code & Unit tests

The exercice purpose is to develop a script which returns as an output, the number of offers per profession category
and by contract types from two csv files:

1. *(INPUT)* The "technical-test-jobs.csv" file contains a list of few thousand job offers.

    Example:

    | profession_id | contract_type | name | office_latitude | office_longitude |
    | ------------- | ------------- | --------------- | --------------- | ---------------- |
    | 2             | FULL_TIME     | Dev Full Stack  | 48.8768868      | 2.3091203        |

2. *(INPUT)* The "technical-test-professions.csv" file contains a list of professional categroy (id references profession_id).

    Example:

    | id | name | category_name |
    | -- | ------------- | --------------- |
    | 16 | Développement Fullstack     | Tech  |
 
3. *(OUTPUT)* This an example of the expected matrix:

   Example:

    ```bash
    ------------------------------------- 
    |            |   TOTAL   |   TECH   | 
    | ---------- | --------- | -------- | 
    | TOTAL      |     1     |     1    | 
    | ---------- | --------- | -------- | 
    | FULL_TIME  |     1     |     1    | 
    | ---------- | --------- | -------- | 
    | INTERNSHIP |     0     |     0    | 
    ------------------------------------- 
    ```
For this first exercise, you can use the language of your choice: Ruby, Elixir or Go would be appreciated because we use these languages ​​on a daily basis, but any other language can be used as long as the rendering is readable and intelligible.

Also, we expect for this exercise to see a minimum of unit tests.

## Solution
    
 Create a ruby gem **jungle_test** to generate the result matrix from these two csv files

### Installation

```ruby
gem install jungle_test
```
### Usage
