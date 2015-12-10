mysqli.php
<?php
    $host_name  = "db589590986.db.1and1.com";
    $database   = "db589590986";
    $user_name  = "dbo589590986";
    $password   = "<hardcodepasswordwhenconnecting>";

    $connect = mysqli_connect($host_name, $user_name, $password, $database);
    if (mysqli_connect_errno())
    {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
?>
