<?php
  $etablissement = "Nom de l’établissement";
  $module = "Développement Web";
  $annee = 2025;

  $a = 10;
  $b = 3;

  $add = $a + $b;
  $mul = $a * $b;
?>
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Info PHP</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

<header>

  <h1>Info PHP</h1>
</header>

<main>
  <p><b>Établissement :</b> <?php echo $etablissement; ?></p>
  <p><b>Module :</b> <?php echo $module; ?></p>
  <p><b>Année :</b> <?php echo $annee; ?></p>

  <hr>

  <p><b>a :</b> <?php echo $a; ?></p>
  <p><b>b :</b> <?php echo $b; ?></p>
  <p><b>a+b :</b> <?php echo $add; ?></p>
  <p><b>a*b :</b> <?php echo $mul; ?></p>

  <a href="index.html">Retour</a>
</main>

</body>
</html>
