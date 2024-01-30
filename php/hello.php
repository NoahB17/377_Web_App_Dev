<!DOCTYPE html>
<html lang="en">
    
    <head>
       <title>PHP lesson 1</title> 
    </head>

    <body>
        <?php
        //keywords are NOT case sensitive (variables and functions are)
        echo"<h1>Welcome to PHP!</h1>";
        ECHO"<br>";
        EChO"its a great language to know ";
        echO"<br><br>";
        eCHo"<h2>this is my first PHP website</h2>";

        //variables have to start with $
        $name = "Noah Balewicz";

        // string concatenation
        echo"Hello ".$name."! (with concatenation)";
        echo"<br>";

        // string interpritation - it only works with double quoted strings
        echo"Hello $name! (with interpritation)";
        echo"<br>"; 
        echo 'Hello $name!';
        echo "<br><br>";

        // some math 
        echo "<h3> Math time </h3>";
        $x= 5;
        $y=3;
        echo "$x * $y = ". ($x * $y);
        echo"<br>";
        function square($number)
        {
            return $number * $number;
        }
         echo "4 squared is ". square(4);
        ?>
    </body>

</html>