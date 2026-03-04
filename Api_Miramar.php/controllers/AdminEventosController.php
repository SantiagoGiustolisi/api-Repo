<?php

function eventos_list($pdo) {
    $stmt = $pdo->query("SELECT * FROM eventos ORDER BY id DESC");
    $eventos = $stmt->fetchAll();

    require "views/admin/eventos-list.php";
}
