# Exercise 1 : Code & Unit tests

The exercise purpose is to develop a script which returns as an output, the number of offers per profession category
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
 
3. *(OUTPUT)* This is an example of the expected matrix:

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
    
 Create a ruby script **jungle_test** to generate the result matrix from these two csv files

### Get Started

1. Clone the repository wttj_test in a folder
2. Open a terminal or a console in this folder repository.
3. Move on exercise1 folder:
    ```Bash
    $ cd exercise1
    ```
4. In exercise1 folder install gem dependencies
    ```Bash
    $ bundle install
    ```
5. Execute jungle_test
    ```Bash
    $ ./bin/jungle_test
    ```
