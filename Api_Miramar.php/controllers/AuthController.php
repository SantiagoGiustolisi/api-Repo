<?php

function show_login($error = null) {
    require "views/auth/login.php";
}

function login_post($pdo) {
    $email = $_POST['email'] ?? "";
    $pass = $_POST['password'] ?? "";

    // Buscar admin por email
    $stmt = $pdo->prepare("SELECT * FROM admins WHERE email = ?");
    $stmt->execute([$email]);
    $admin = $stmt->fetch();

    if (!$admin) {
        return show_login("Usuario o contraseña incorrectos");
    }

    // Verificar contraseña (bcrypt)
    if (!password_verify($pass, $admin["password_hash"])) {
        return show_login("Usuario o contraseña incorrectos");
    }

    // Guardar datos en sesión
    $_SESSION["admin"] = [
        "id" => $admin["id"],
        "email" => $admin["email"]
    ];

    header("Location: /api_miramar/admin/eventos");
    exit;
}

function logout() {
    session_destroy();
    header("Location: /api_miramar/admin/login");
    exit;
}
