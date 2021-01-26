# monkey-island-api

Algorithm to solve the problem described below

Given a jungle in the middle of an island of n * m dimensions. Each field in this jungle contains a
positive integer which is the amount of bananas in that field. Initially, the monkey is in first place
column, but can be in any row. The monkey can only move (right ->, right up /, right down \) of a given
cell. Find out the maximum amount of bananas they can collect.

**Running the project**

1) Open terminal in folder "monkey-island-api"
2) Run command: npm install
4) Run command: npm start
5) Run tests: npm test

**How to use the application**

Make a POST request to the path http://localhost:3000/search-bananas passing the desired matrix in the body.

Request body example:
    
    {
        "matriz": [
            [17],
            [22],
            [50],
            [75],
            [14]
        ]
    }
    
 Response:
 
    {
        "total": 75
    }
 

 #

 **Big-O Time Complexity**

    O(log(n)) — Logarithmic Time
