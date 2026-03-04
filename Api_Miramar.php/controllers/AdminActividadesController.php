<?php

function actividades_list($pdo) {
    $stmt = $pdo->query("SELECT * FROM actividades ORDER BY id DESC");
    $actividades = $stmt->fetchAll();

    require "views/admin/actividades-list.php";
}
