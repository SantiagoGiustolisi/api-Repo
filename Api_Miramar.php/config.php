<?php
session_start();

// DATOS REALES DEL SERVIDOR MYSQL EN DONWEB
$DB_HOST = "127.0.0.1";
$DB_USER = "ic000031_turismo";
$DB_PASS = "damoVE91vo";
$DB_NAME = "ic000031_turismo";

try {
    $pdo = new PDO(
        "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

function require_auth() {
    if (!isset($_SESSION['admin'])) {
        header("Location: /api_miramar/admin/login");
        exit;
    }
}
