const output = [] + [];

console.log(output);
/*[emptystring]. The operation tries valueOf(), which returns the array itself (this).
As that result is not a primitive, toString() is called next and returns the empty string. 
Thus, the result of [] + [] is the concatenation of two empty strings*/

const output1 = {} + [];
console.log(output1)
/* Converting an empty object to string yields to [object Object]. Then, the previous result
is thus created by concatenating "" (empty string) and [object Object].*/

const output2 = [] + {};
console.log(output2);
/*The above mentioned happens in a similar way within this inverse-order operation*/

const output3 = {} + {};
console.log(output3);

/* Here, these arguments are parsed as expressions. The input is parsed as a statement and curly
braces at the beginning of a statement are interpreted as a starting code block.
Moreover, another result can be succinted if {} + {} is performed, which yields NaN. Here, JS interprets the first {}
as an empty code block and ignores it. the NaN is therefore computed by evaluating + {}. The plus sign is no the binary
addition operator, but a unary prefix operator that converts its operand to a number, in the same manner as Number().
The following expressions are equivalent:
+{}, Number({}), Number({}. toString()), {}. valueOf(), Number("[object Object]"), NaN */