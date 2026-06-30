# Mini Boutique - TP 4.2

Questions de comprehension

1. Rôle du composant App ?
Il sert a assembler tous les composants, cest le composant principal

2. Pourquoi un dossier components ?
Pour garder les composants au même endroit

3. Différence entre ProductList et ProductCard ?
ProductCard est une seule carte produit
ProductList affiche plusieurs ProductCard

4. Pourquoi ProductCard commence par une majuscule ?
Pour que React le reconnaisse comme un composant pas une balise html

5. À quoi servent les props dans ProductCard ?
À passer des données (name, price, category, et image) pour personnaliser les cartes

6. Pourquoi réutiliser plusieurs fois ProductCard ?
Parce qu'un composant se réutilise avec des props différentes à chaque fois

7. Parent de ProductCard ?
ProductList.

8. Parent principal de toute l'application ?
app

# TP 5 - Catalogue interactif

Questions de comprehension

1. Difference entre une prop et un state ?
Une prop est recue du parent et ne change pas un state est interne et peut changer

2. Pourquoi selectedProduct est dans App ?
Parce que plusieurs composants en ont besoin donc on le met dans le parent commun

3. Pourquoi ProductCard ne modifie pas directement selectedProduct ?
Parce que le state appartient a App et lenfant appelle juste une fonction du parent

4. A quoi sert setSelectedProduct ?
A changer la valeur de selectedProduct

5. Pourquoi passe-t-on une fonction en props ?
Pour que lenfant puisse declencher une action dans le parent

6. Que fait showDetails && ProductDetails ?
Elle affiche ProductDetails seulement si showDetails vaut true

7. Pourquoi favoriteProductId est initialise a null ?
Parce que au depart aucun produit nest favori
