<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Eventos - Admin</title>
</head>
<body>

<?php include "views/partials/admin-header.php"; ?>

<h1>Eventos</h1>

<table border="1" cellpadding="10">
    <thead>
        <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Categoría</th>
            <th>Publicado</th>
        </tr>
    </thead>

    <tbody>
        <?php foreach ($eventos as $e): ?>
        <tr>
            <td><?= $e["id"] ?></td>
            <td><?= $e["titulo"] ?></td>
            <td><?= $e["categoria"] ?></td>
            <td><?= $e["publicado"] ? "SI" : "NO" ?></td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>

</body>
</html>
