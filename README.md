# JavaScript
p1: You are given two codes C1 and C2, both are strings. Your task is to check whether C2 lies in C1 or not.
If yes, return the first occurrence index of C2 in C1. Otherwise print -1.
Input Format:
-------------
Line-1: A string C1.
Line-2: A string C2.
Output Format: An integer, print the index.
Sample Input-1:
goibibo
ib
Sample Output-1:
2
Sample Input-2:
goibibo
ibb
Sample Output-2:
-1
p2. You are playing a game. There are N boxes placed in a row (0-indexed), every box has some points.
You need to play the game with the following rules:
- Initially your score is &#39;0&#39; points.
- Suppose the box has P points in it.
if p&gt;0 you will gain P points, if p&lt;0 you will loose P points.
- You are allowed to choose any number of consecutive boxes, atleast 1 box.
You are given the points in the N boxes as points[]. Your target is to maximize your score, and return the
highest score possible.
Input Format:
Line-1: An integer N.
Line-2: N space separated integers, points[].
Output Format:
An integer, print the highest score.
Sample Input-1:
9
-3 1 -2 4 -2 2 3 -5 4

Sample Output-1:
7
Explanation: By selecting consecutive boxes are [4,-2,2,3] has the highest score is 7
Sample Input-2:
2
1 -2
Sample Output-2:
1
Explanation:
By picking the box is [1] has the highest score is 7
p3. Sachin wants to try his luck in diamonds business.He decides to purchase and sell one diamond.
He is given the list of price of one diamond for N days by his friend. Initially, it is assumed that he has no
diamonds. You need to help Sachin in making the maximum profit that is possible. He can sell the
diamond only after he purchases it. Note: He is allowed to do only one complete transaction (purchase
one diamond and sell it).
Input Format: N space separated integers, price of the diamond for N days.
Output Format: Print an integer, maximum profit.
Sample Input-1: 7 1 5 3 6 4
Sample Output-1: 5
Explanation: Purchase on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Sample Input-2: 7 6 5 4 2
Sample Output-2: 0
p4. Mr Crazy Robert is given in integer array arr[], where arr[i] value is between [0,9] For example: if the
arr[]=[1, 2, 3, 4], then the number can be formed is N=1234. Now, increment the valuf of N by 1, and the
resultant array is arr[]= [1, 2, 3, 5] Your task is to help Mr Crazy Robert, to increment the number formed
using arr[] and print the resultant array. Note: There should be no leading zeros in the number/array[]
Input Format: N space separated integers, array[] the integers are in the range of [0,9].
Output Format: Print the integer array, resultant array.
Sample Input-1: 1 2 3 4

Sample Output-1: 1 2 3 5
Sample Input-2: 1 2 9 9
Sample Output-2: 1 3 0 0
Sample Input-3: 9 9 9
Sample Output-3: 1 0 0 0
