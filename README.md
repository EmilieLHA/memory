# Memory

Qui a dit que le Memory c'était pas fun?

## Partie HTML / CSS

J'ai créé la grille du Memory en CSS Grid.

En travaillant avec des hauteurs relatives, j'ai essayé de rendre le boardgame aussi responsive que possible en limitant au maximum les media queries.

La partie complexe etait de créer 1 carte recto verso avec une perspective dans l'animation de retournement. J'ai d'abord travaillé sur [codepen](https://codepen.io/emilieLHA/pen/OJpegKy?editors=1111) pour tester en conditions simplifiées.


Chaque carte est regroupée dans une div .card à laquelle on applique une propriété CSS **perspective** et une propriété **transform-style: preserve-3d** afin de pourvoir retourner la carte.
La div .card contient 2 faces: front et back et j'utilise la propriété CSS **backface-visibility: hidden** afin de cacher le dos de la carte.
Par défaut, le côté de face de la carte est caché par une rotation à 180 deg.

La class **.active** permet de retourner la carte en JS.

Enfin, j'ai utilisé une animation keayframes pour afficher le message de fin de jeu.

## Partie JS

### Génération de la grille aléatoire et remplissage de la grille
Il fallait pouvoir redistribuer les cartes à chaque nouveau jeu.

J'ai travaillé en deux étapes, d'abord générer un ordre aléatoire, puis remplir la grille.

Je pars d'un tableau contenant tous les index des cartes, je le vide progressivement grâce à la méthode splice, en basculant l'élément dans un nouveau tableau newGrid de façon aléatoire.

Ensuite je supprime le premier noeud de la classe .flip pour le remplacer par la carte dont l'index a été géré dans mon bloc précédent.

### Le jeu
La retournement en soit est assez simple, il s'agit d'écouter l'événement click et toggle la classe active de la carte. Il faut cependant veiller à bloquer la première carte une fois retournée tant que la seconde n'a pas été choisie.

Pour vérifier si les cartes sont identiques, je suis passée par un **attribut universel** data-key. Cela me permet d'identifier simplement les cartes en JS.

Hope you had fun!


