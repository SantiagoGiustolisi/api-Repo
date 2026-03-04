<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login Admin</title>
</head>
<body>

<h2>Ingreso al panel administrativo</h2>

<?php if (!empty($error)): ?>
    <p style="color: red;"><?= $error ?></p>
<?php endif; ?>

<form action="/api_miramar/admin/login-post" method="POST">
    <label>Email:</label><br>
    <input type="email" name="email" required><br><br>

    <label>Contraseña:</label><br>
    <input type="password" name="password" required><br><br>

    <button type="submit">Ingresar</button>
</form>

</body>
</html>
