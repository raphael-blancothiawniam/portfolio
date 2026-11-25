# Portfolio de Raphaël Blanco-Thiaw-Niam

Site statique : du HTML, du CSS et un peu de JavaScript. Aucune installation, aucun build.
Il s'ouvre dans un navigateur et s'héberge gratuitement (GitHub Pages, Netlify, Cloudflare Pages).

## Voir le site sur ton ordinateur

Le site lit des fichiers JavaScript ; il faut un petit serveur local plutôt qu'un double-clic :

```
cd portfolio
python -m http.server 8000
```

puis ouvre http://localhost:8000 dans ton navigateur.

## Ce que tu modifies, et où

| Je veux… | Fichier |
|---|---|
| Ajouter un article de veille | `content/veille.js` (copie un bloc ; la page trie par date et affiche 5 articles par page) |
| Ajouter captures, schémas, PDF ou lien GitHub à un projet | `content/projets.js`, partie `ressources` (mets les images dans `img/projets/`) |
| Afficher LinkedIn et GitHub | `content/site.js` : colle l'adresse de ton profil ; vide, le lien n'apparaît pas |
| Mettre à jour le CV | remplace `cv/CV_Raphael_BLANCO--THIAW-NIAM.pdf` (même nom), puis l'aperçu `cv/apercu.webp` et `cv/apercu-480.webp` (une image de la première page, 800 et 480 px de large) |
| Ajouter une expérience | `index.html`, section `experiences` : copie une ligne `<li data-peek-to=…>` et sa fiche `<article … data-peek-for=…>` avec la même clé |
| Expliquer un projet (contexte, étapes, difficultés, chiffres clés) | `content/projets.js`, champs `contexte`, `demarche`, `difficultes`, `resultats` (modèle en haut du fichier ; vide = non affiché) |
| Ajouter ou modifier un TP | `content/travaux.js` : copie un bloc, change son `id`, choisis `cadre` (`b3` ou `m1`) ; la ligne apparaît seule dans la section Travaux pratiques et sa page est `projet.html?id=…` |
| Ajouter un projet | un bloc dans `content/projets.js` et une carte `<article>` dans la section `projets` de `index.html` |
| Changer les textes | `index.html` (chaque section est commentée) |
| Ajouter tes mentions ou le nombre de postes informatiques | `index.html`, sections `experiences` et `formations` : les lignes « Mention », « Résultat » et « Postes informatiques » sont cachées ; écris la valeur entre `<dd>` et `</dd>`, puis retire `data-a-completer hidden` |

## Les comptes rendus en PDF

Les comptes rendus des TD et TP de cryptologie sont dans `docs/`. Sur la page d'un TP, le visiteur
peut les lire dans la page (sur ordinateur) ou les télécharger. Pour en ajouter un : dépose le PDF
dans `docs/`, son aperçu (une image JPG de la première page, même nom) dans `docs/apercus/`, puis
remplis `pdf` dans le bloc du TP, dans `content/travaux.js`.

## La veille : l'étiquette « Nouveau »

Elle s'affiche toute seule sur les articles de moins de 10 jours et disparaît ensuite.
Pour changer la durée : `js/site.js`, ligne `NOUVEAU_JOURS`.

## Documents volontairement non publiés

- **Énoncés des TP OSINT, SOC et Azure** : ce sont les documents des enseignants (l'énoncé OSINT porte
  la mention « usage interne pédagogique »). Les pages de ces TP décrivent le travail sans les reproduire.
- **Gophish** : le document contient deux captures, déjà affichées sur la page du TP, et les noms des
  membres du groupe.

- **Mémoire et soutenance CPAM** : le PDF contient des captures d'Ivanti et de l'annuaire interne
  (noms de postes, comptes, collègues). Seules trois diapositives de schémas sont reprises dans
  `img/projets/cpam-*.jpg`. Ne mets pas le PDF complet en ligne sans accord de la CPAM.
- **Livrable Althea Systems (Trinode)** : il cite les deux autres membres du groupe et un schéma porte
  la mention « Confidentiel – Sup de Vinci ». Cinq schémas sont repris dans `img/projets/althea-*.jpg`.
  Pour publier le PDF : place-le dans `docs/` puis, dans `content/projets.js`, projet
  `infrastructure-hybride-hds`, remplis `pdf: [{ titre: "Livrable technique (PDF)", url: "docs/ton-fichier.pdf" }]`.
- **Relevé de notes du BTS et diplôme du brevet** : ils contiennent ta date de naissance, ton adresse et
  ton numéro INE. Ils ne sont pas dans le site ; donne-les directement aux recruteurs qui les demandent.

## Le formulaire de contact

Par défaut, il ouvre la messagerie du visiteur avec le message prêt à partir vers ton adresse Gmail.
Pour recevoir les messages sans que le visiteur ouvre sa messagerie : crée un formulaire gratuit sur
https://formspree.io (ou un service équivalent), puis colle l'adresse qu'il te donne dans
`content/site.js`, champ `formulaire`. Le site affichera alors une confirmation après l'envoi.

## Mettre en ligne avec GitHub Pages

1. Crée un dépôt public sur GitHub (par exemple `portfolio`).
2. Dépose tout le contenu du dossier `portfolio` à la racine du dépôt. Le site compte un peu plus de
   100 fichiers et GitHub n'en accepte que 100 par envoi : envoie d'abord tout sauf le dossier `docs`,
   puis le dossier `docs` dans un second envoi.
3. Dans le dépôt : Settings > Pages > Branch : `main`, dossier `/ (root)` > Save.
4. Le site est en ligne quelques minutes plus tard à l'adresse que GitHub affiche.

Une fois l'adresse connue, dans `index.html` : décommente la ligne `<link rel="canonical" …>`
avec ton adresse, et remplace `share.jpg` par l'adresse complète
(`https://ton-adresse/share.jpg`) dans la balise `og:image`, pour l'aperçu sur LinkedIn.

## Ce qui est dans le dossier

- `index.html` : la page ; `projet.html` : la page de détail d'un projet (`projet.html?id=reseau`).
- `content/` : tes contenus modifiables (veille, projets, réglages).
- `css/`, `js/`, `fonts/` : le style, les petits scripts du site, les polices (hébergées ici, sans appel à Google).
- `assets/` : le kit d'interface (mise en page, animations, schémas, logos). À ne pas modifier.
- `cv/` : le CV et son aperçu.

Les noms et logos de produits (Cisco, Fortinet, Microsoft, AWS, VMware, Docker, Debian, Gmail)
sont des marques de leurs propriétaires. Polices Urbanist et DM Mono : licence SIL Open Font.
