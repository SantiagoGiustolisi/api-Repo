<?php
require_once "config.php";

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// ROUTING BÁSICO
switch ($uri) {

    // LOGIN
    case "/api_miramar/admin/login":
        require "controllers/AuthController.php";
        show_login();
        break;

    case "/api_miramar/admin/login-post":
        require "controllers/AuthController.php";
        login_post($pdo);
        break;

    case "/api_miramar/admin/logout":
        require "controllers/AuthController.php";
        logout();
        break;

    // ADMIN: EVENTOS
    case "/api_miramar/admin/eventos":
        require_auth();
        require "controllers/AdminEventosController.php";
        eventos_list($pdo);
        break;
        
        // ADMIN: ACTIVIDADES
    case "/api_miramar/admin/actividades":
        require_auth();
        require "controllers/AdminActividadesController.php";
        actividades_list($pdo);
        break;


    default:
        echo "404 - Página no encontrada";
}
