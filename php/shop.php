<?php
header("Content-Type: text/html;charset=utf-8");
$db = mysqli_connect('w.rdc.sae.sina.com.cn:3306','ojzl3oxz22','22zk0mwzwlm51xwh4m15hih5k0jlx5h41zk4xyj1','app_teashop');

if ($db) {
    mysql_select_db('SELECT * FROM shop', $db);
    echo "string";
}
echo "11111";
?>