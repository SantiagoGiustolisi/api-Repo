<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Actividades - Admin</title>
</head>
<body>

<?php include "views/partials/admin-header.php"; ?>

<h1>Actividades</h1>

<table border="1" cellpadding="10">
    <thead>
        <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Publicado</th>
        </tr>
    </thead>

    <tbody>
        <?php foreach ($actividades as $a): ?>
        <tr>
            <td><?= $a["id"] ?></td>
            <td><?= $a["titulo"] ?></td>
            <td><?= $a["descripcion"] ?></td>
            <td><?= $a["publicado"] ? "SI" : "NO" ?></td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>

</body>
</html>
