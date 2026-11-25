/*
  TRAVAUX PRATIQUES
  ---------------------------------------------------------------------------
  Les TP et TD de cours. Chacun a sa page : projet.html?id=<id>, comme les projets.
  Ils s'affichent dans la section "Travaux pratiques" de l'accueil, rangés par "cadre".

  cadre    : "b3" (Bachelor 3) ou "m1" (Mastère 1)
  icone    : un fichier de assets/icons/ (sans le .svg)
  theme    : une ligne courte affichée sous le titre
  Les autres champs sont ceux des projets (voir content/projets.js) ;
  tout ce qui reste vide n'est pas affiché.
*/
window.TRAVAUX = [
  /* ------------------------------------------------------------ Bachelor 3 */
  {
    id: "tp-osint",
    cadre: "b3",
    icone: "python",
    titre: "Reconnaissance OSINT automatisée en Python",
    theme: "Renseignement en sources ouvertes · Kali Linux",
    outil: "TP Bachelor 3 · Kali Linux, Python 3, ExifTool",
    resume: "En analyste OSINT junior, je devais collecter tout ce qu'un site d'entreprise laisse voir sans jamais l'attaquer, puis automatiser cette collecte dans un script Python qui produit un rapport.",
    contexte: "Le site d'une entreprise fictive, NovaTech Solutions, était hébergé en local sur Kali Linux. Seule la reconnaissance passive était autorisée : lire ce qui est publié, sans rien forcer. Le TP durait deux heures, en individuel.",
    technologies: ["Kali Linux", "Python 3", "requests", "BeautifulSoup", "ExifTool", "whois", "curl", "Google Dorks"],
    objectifs: [],
    demarche: [
      { titre: "Lire le site comme un attaquant", texte: "Code source, commentaires HTML, robots.txt, sitemap.xml et en-têtes HTTP : j'ai relevé le serveur et sa version, les chemins sensibles, les adresses mail visibles et les en-têtes de sécurité absents." },
      { titre: "Interroger le WHOIS", texte: "Propriétaire du domaine, contacts, serveurs DNS et date d'expiration : ce qu'un registre public révèle d'une entreprise." },
      { titre: "Fouiller les métadonnées", texte: "Avec ExifTool, j'ai analysé les images et les PDF du site. Ils peuvent trahir l'auteur d'un document, le logiciel utilisé, le modèle de l'appareil photo, la date de création et même des coordonnées GPS." },
      { titre: "Construire des Google Dorks", texte: "Dix requêtes de recherche avancée pour trouver ce qu'un moteur a indexé par erreur : pages d'administration, fichiers de configuration, sauvegardes, documents internes, messages d'erreur." },
      { titre: "Tout automatiser dans un script", texte: "osint_scanner.py enchaîne sept modules (en-têtes HTTP, WHOIS, robots et sitemap, extraction du HTML, téléchargement et EXIF, dorks) et génère un rapport HTML avec un résumé, les en-têtes manquants en rouge et un lien de carte si une photo contient des coordonnées GPS." }
    ],
    difficultes: [],
    resultats: [],
    ressources: { captures: [], schemas: [], pdf: [], github: "" }
  },
  {
    id: "tp-gophish",
    cadre: "b3",
    icone: "si-kalilinux",
    titre: "Simulation de campagne de phishing avec Gophish",
    theme: "Sensibilisation à l'hameçonnage · Gophish",
    outil: "TP Bachelor 3 · Gophish sur Kali Linux, en groupe de trois",
    resume: "Préparer une fausse campagne d'hameçonnage dans un laboratoire, pour comprendre comment les attaquants piègent les utilisateurs et comment une entreprise peut tester et former ses équipes.",
    contexte: "Gophish est l'outil open source que les équipes de sécurité utilisent pour simuler des campagnes de phishing et mesurer qui clique. Nous l'avons installé sur Kali Linux, en local, à trois. Les scénarios reprennent les pièges les plus courants : un réseau social professionnel, la paie, une plateforme de streaming et la visioconférence.",
    technologies: ["Gophish", "Kali Linux", "HTML", "Ingénierie sociale"],
    objectifs: [],
    demarche: [
      { titre: "Installer Gophish", texte: "Mise en route du serveur Gophish sur Kali Linux et accès à sa console d'administration, en local." },
      { titre: "Écrire les mails piégés", texte: "Des modèles de mail qui imitent des messages du quotidien : une demande de connexion LinkedIn, une fiche de paie disponible, une alerte Netflix, une invitation à une réunion Zoom, et un scénario Roblox." },
      { titre: "Créer les fausses pages", texte: "Pour chaque mail, une page de connexion qui imite le vrai site, par exemple LinkedIn, un portail RH « MyHR », Netflix ou Zoom. C'est là qu'une victime saisirait ses identifiants." }
    ],
    difficultes: [],
    resultats: [
      { valeur: "5", label: "scénarios d'hameçonnage : LinkedIn, paie, Netflix, Zoom et Roblox" }
    ],
    ressources: {
      captures: [
        { src: "img/projets/gophish-email-templates.jpg", alt: "La liste des modèles de mail dans Gophish : fiche de paie, LinkedIn, Netflix et réunion Zoom." },
        { src: "img/projets/gophish-landing-pages.jpg", alt: "La liste des fausses pages de connexion dans Gophish : LinkedIn, MyHR, Netflix et Zoom." }
      ],
      schemas: [], pdf: [], github: ""
    }
  },
  {
    id: "tp-soc",
    cadre: "b3",
    icone: "ui-radar",
    titre: "Mini SOC : détecter et analyser des attaques",
    theme: "Supervision de sécurité · Wazuh",
    outil: "TP Bachelor 3 · Wazuh, Kali Linux, Nmap",
    resume: "Monter un petit centre de supervision de la sécurité, attaquer son propre laboratoire, puis analyser les alertes comme un analyste SOC.",
    contexte: "Un SOC surveille en continu les journaux d'une entreprise pour repérer les attaques. Le laboratoire comptait quatre machines : le SIEM Wazuh, une cible Linux, un poste Windows et une machine attaquante sous Kali Linux.",
    technologies: ["Wazuh", "Kali Linux", "Nmap", "Gobuster", "Linux", "Windows", "Apache"],
    objectifs: [],
    demarche: [
      { titre: "Déployer le SIEM", texte: "Installation de Wazuh et vérification de ses services et de son tableau de bord." },
      { titre: "Centraliser les journaux", texte: "Agents installés sur une machine Linux et une machine Windows, avec la remontée des journaux système, SSH et du serveur web, y compris les erreurs HTTP 404 et 500." },
      { titre: "Attaquer le laboratoire", texte: "Depuis Kali : scan réseau avec Nmap, force brute sur SSH, injection SQL simple (' OR 1=1) et recherche de répertoires cachés avec Gobuster." },
      { titre: "Analyser comme un analyste SOC", texte: "Pour chaque alerte : adresse source, type d'attaque et chronologie, puis classement en faux positif ou en incident réel, dans un tableau d'analyse." },
      { titre: "Écrire des règles de détection", texte: "Règles personnalisées pour repérer le scan réseau, la force brute SSH et les attaques web (rafales de 404, injection), puis test de ces règles." },
      { titre: "Rédiger le rapport d'incident", texte: "Description des attaques, journaux associés, chronologie, classement et recommandations." }
    ],
    difficultes: [],
    resultats: [],
    ressources: { captures: [], schemas: [], pdf: [], github: "" }
  },
  {
    id: "tp-azure-hub-spoke",
    cadre: "b3",
    icone: "azure",
    titre: "Reverse proxy et site WordPress sur Azure",
    theme: "Réseau cloud en hub-and-spoke · Azure",
    outil: "TP Bachelor 3 · Microsoft Azure, Nginx, Apache, WordPress",
    resume: "Publier un site WordPress sur Azure sans exposer son serveur : seul un reverse proxy Nginx est joignable depuis Internet.",
    contexte: "L'architecture hub-and-spoke est le modèle recommandé par Microsoft : un réseau central (le hub) porte les services partagés, et chaque application vit isolée dans son propre réseau (un spoke). Ce TP l'applique à un site web.",
    technologies: ["Microsoft Azure", "Réseaux virtuels", "Peering", "NSG", "Nginx", "Apache", "MariaDB", "WordPress", "Linux"],
    objectifs: [],
    demarche: [
      { titre: "Créer les deux réseaux", texte: "Un réseau hub en 10.0.0.0/16 pour le reverse proxy et un réseau web en 10.1.0.0/16 pour le serveur." },
      { titre: "Isoler le serveur web", texte: "La machine du site est créée sans adresse IP publique : personne ne peut l'atteindre directement depuis Internet." },
      { titre: "Relier les réseaux", texte: "Un peering entre les deux réseaux permet au reverse proxy de joindre le serveur web, vérifié par ping et par SSH." },
      { titre: "Configurer le reverse proxy", texte: "Nginx reçoit les visiteurs et transmet leurs requêtes au serveur Apache, en conservant leur adresse d'origine dans les en-têtes." },
      { titre: "Ouvrir le bon port", texte: "Le site restait inaccessible : le groupe de sécurité réseau (NSG) n'autorisait que SSH. Une règle ajoutée pour HTTP a rendu le site joignable." },
      { titre: "Installer WordPress", texte: "PHP, base MariaDB dédiée, puis WordPress sur le serveur web, accessible à travers l'adresse publique du reverse proxy." }
    ],
    difficultes: [],
    resultats: [],
    ressources: { captures: [], schemas: [], pdf: [], github: "" }
  },

  /* ------------------------------------------------------------ Mastère 1 */
  {
    id: "td-aes",
    cadre: "m1",
    icone: "si-openssl",
    titre: "Chiffrement symétrique AES : ECB contre CBC",
    theme: "Cryptologie · TD 1 · OpenSSL",
    outil: "TD Mastère 1 Cybersécurité · OpenSSL sur Debian · novembre 2026",
    resume: "Chiffrer la même image en AES-256 avec deux modes différents, et montrer à l'œil nu pourquoi l'un des deux ne protège pas vraiment les données.",
    contexte: "AES est l'algorithme de chiffrement le plus utilisé au monde, mais sa sécurité dépend aussi du mode choisi. Le TD compare le mode ECB, qui chiffre chaque bloc séparément, au mode CBC, qui enchaîne les blocs.",
    technologies: ["OpenSSL 3.5", "AES-256", "ECB", "CBC", "Debian", "ImageMagick"],
    objectifs: [],
    demarche: [
      { titre: "Préparer l'image", texte: "Conversion d'un schéma en BMP avec ImageMagick, pour obtenir un en-tête de 54 octets." },
      { titre: "Chiffrer en ECB", texte: "Chiffrement et déchiffrement avec OpenSSL, puis vérification avec cmp : l'image déchiffrée est identique à l'originale, octet par octet." },
      { titre: "Rendre le chiffré visible", texte: "En recopiant l'en-tête d'origine sur le fichier chiffré avec dd, l'image s'ouvre : la silhouette du dessin reste reconnaissable, car deux blocs identiques donnent le même bloc chiffré." },
      { titre: "Chiffrer en CBC", texte: "Même méthode avec un vecteur d'initialisation : cette fois l'image n'est plus qu'un bruit uniforme, chaque bloc dépendant du précédent." },
      { titre: "Tester la variante avec mot de passe", texte: "OpenSSL dérive alors la clé d'un mot de passe et d'un sel aléatoire. J'ai relevé l'avertissement sur la dérivation de clé dépassée, qui recommande PBKDF2." }
    ],
    difficultes: [
      { titre: "Un « bad decrypt » en CBC", texte: "Une faute de frappe dans le nom de l'algorithme, puis le fichier ECB donné en entrée par erreur : j'ai relu le message d'erreur, corrigé les commandes et relancé toute la partie CBC." },
      { titre: "Des tirets qui cassent les commandes", texte: "Le sujet contenait des tirets longs (–iv) que le terminal refuse : je les ai remplacés par des tirets simples." }
    ],
    resultats: [],
    ressources: {
      captures: [],
      schemas: [
        { src: "img/projets/td1-ecb-cbc.jpg", alt: "La même image chiffrée en AES-256 : à gauche en mode ECB, où la silhouette reste visible ; à droite en mode CBC, où il ne reste qu'un bruit uniforme." }
      ],
      pdf: [{ titre: "Compte rendu du TD 1 (PDF)", url: "docs/Raphael_BLANCO--THIAW-NIAM_TD1_AES_ECB_CBC.pdf" }], github: ""
    }
  },
  {
    id: "td-rsa",
    cadre: "m1",
    icone: "si-openssl",
    titre: "Chiffrement asymétrique RSA : coût et limites",
    theme: "Cryptologie · TD 2 · OpenSSL",
    outil: "TD Mastère 1 Cybersécurité · OpenSSL sur Debian · novembre 2026",
    resume: "Générer des clés RSA de deux tailles, chiffrer des fichiers et mesurer ce que coûte RSA, jusqu'à la limite où il ne peut plus rien chiffrer.",
    contexte: "RSA protège les échanges de clés sur Internet. Le TD mesure l'effet de la taille de clé sur le temps de calcul et sur la taille des données chiffrées.",
    technologies: ["OpenSSL 3.5", "RSA 2048", "RSA 4096", "PKCS#1", "Debian"],
    objectifs: [],
    demarche: [
      { titre: "Générer les clés", texte: "Paires de clés de 2048 et 4096 bits, avec mesure du temps de génération et clés privées lisibles par leur seul propriétaire." },
      { titre: "Chiffrer un petit message", texte: "« hello world » chiffré avec chaque clé publique : le résultat fait 256 octets avec la clé 2048 bits et 512 avec la clé 4096 bits, quelle que soit la taille du message." },
      { titre: "Chiffrer une image", texte: "Échec avec les deux clés (« data too large for key size ») : avec ce remplissage, RSA ne chiffre pas plus de 245 octets en 2048 bits et 501 en 4096 bits, pour une image de 117 270 octets." },
      { titre: "Conclure", texte: "En pratique, on chiffre les données avec AES et seulement la clé AES avec RSA : c'est le chiffrement hybride, réalisé au TD 3." }
    ],
    difficultes: [],
    resultats: [
      { valeur: "0,04 s", label: "pour générer une clé de 2048 bits" },
      { valeur: "1,5 s", label: "pour une clé de 4096 bits, environ 38 fois plus" },
      { valeur: "245 o", label: "au plus chiffrables avec une clé de 2048 bits" }
    ],
    ressources: {
      captures: [
        { src: "img/projets/td2-cles-rsa.jpg", alt: "L'erreur « data too large for key size » quand on chiffre l'image directement avec RSA." }
      ],
      schemas: [], pdf: [{ titre: "Compte rendu du TD 2 (PDF)", url: "docs/Raphael_BLANCO--THIAW-NIAM_TD2_RSA.pdf" }], github: ""
    }
  },
  {
    id: "td-certificats",
    cadre: "m1",
    icone: "si-openssl",
    titre: "Chaîne de certificats et chiffrement hybride",
    theme: "Cryptologie · TD 3 · OpenSSL et Bash",
    outil: "TD Mastère 1 Cybersécurité · OpenSSL et Bash sur Debian · novembre 2026",
    resume: "Construire une autorité de certification à trois niveaux, en RSA et en courbes elliptiques, puis écrire deux scripts qui chiffrent un fichier avec AES et protègent la clé avec RSA.",
    contexte: "Sur Internet, la confiance dans un site repose sur une chaîne de certificats : une racine, une autorité intermédiaire, puis le certificat du serveur. Le TD la construit de bout en bout.",
    technologies: ["OpenSSL", "RSA", "Courbes elliptiques", "X.509", "SAN", "RSA-OAEP", "AES-256-CBC", "Bash"],
    objectifs: [],
    demarche: [
      { titre: "Créer les clés des trois niveaux", texte: "En RSA (15360, 7680 et 3072 bits) et en courbes elliptiques (512, 384 et 256 bits). La clé RSA de la racine a demandé près de 4 minutes, celle du serveur moins d'une seconde." },
      { titre: "Signer la chaîne", texte: "Racine valable 7 ans, autorité intermédiaire 3 ans, serveur 1 an, avec des extensions qui empêchent le certificat serveur de signer d'autres certificats." },
      { titre: "Vérifier la chaîne", texte: "La chaîne complète est valide ; sans l'autorité intermédiaire, la vérification échoue, car le serveur n'est pas signé directement par la racine." },
      { titre: "Ajouter des noms alternatifs (SAN)", texte: "Le certificat est accepté pour www.td3.local et refusé pour un nom absent de la liste, comme le feraient les navigateurs." },
      { titre: "Écrire encrypt.sh et decrypt.sh", texte: "Le premier génère une clé AES de 256 bits et un IV aléatoire, chiffre le fichier, puis chiffre la clé avec RSA-OAEP. Le second fait l'inverse et efface la clé en clair à la fin. Empreintes SHA-256 identiques après l'aller-retour." }
    ],
    difficultes: [],
    resultats: [
      { valeur: "3", label: "niveaux de certificats, en RSA et en courbes elliptiques" },
      { valeur: "32 o", label: "de clé AES protégés par RSA pour chiffrer toute l'image" }
    ],
    ressources: {
      captures: [
        { src: "img/projets/td3-chaine-rsa.jpg", alt: "La vérification de la chaîne RSA : racine, autorité intermédiaire et serveur, avec leurs dates et leurs tailles de clé." },
        { src: "img/projets/td3-hybride.jpg", alt: "L'exécution des scripts de chiffrement hybride et la comparaison des empreintes SHA-256." }
      ],
      schemas: [], pdf: [{ titre: "Compte rendu du TD 3 (PDF)", url: "docs/Raphael_BLANCO--THIAW-NIAM_TD3_Certificats_chiffrement_hybride.pdf" }], github: ""
    }
  },
  {
    id: "td-tls-anssi",
    cadre: "m1",
    icone: "ui-lock-keyhole",
    titre: "Configurer TLS selon les recommandations de l'ANSSI",
    theme: "Cryptologie · TD 4 · Apache",
    outil: "TD Mastère 1 Cybersécurité · Apache, OpenSSL · novembre 2026",
    resume: "Configurer HTTPS sur Apache en appliquant le guide TLS de l'ANSSI, pour deux cas opposés : un réseau interne maîtrisé et un site commercial ouvert à tous.",
    contexte: "Le guide de l'ANSSI liste les réglages TLS recommandés. Le TD les applique un par un, en justifiant chaque choix, puis montre quels écarts accepter quand il faut rester accessible aux vieux navigateurs.",
    technologies: ["Apache", "TLS 1.3", "TLS 1.2", "ECDSA", "OpenSSL", "Guide TLS de l'ANSSI"],
    objectifs: [],
    demarche: [
      { titre: "Réseau maîtrisé : limiter les versions", texte: "Seuls TLS 1.3 et TLS 1.2 sont acceptés ; SSL et TLS 1.0 et 1.1 sont refusés." },
      { titre: "Choisir les suites", texte: "Quatre suites avec échange ECDHE, AES-GCM et SHA-2, l'ordre du serveur primant sur celui du client, compression désactivée." },
      { titre: "Créer un certificat conforme", texte: "Certificat ECDSA 256 bits signé en SHA-256, valable 825 jours, avec les extensions demandées. Chaque recommandation est tracée dans un tableau." },
      { titre: "Vérifier", texte: "Connexions testées avec openssl s_client : TLS 1.3 et 1.2 aboutissent, TLS 1.1 et 1.0 sont refusés." },
      { titre: "Site public : arbitrer", texte: "Pour un serveur ouvert à tous, TLS 1.0 et 1.1 et un certificat RSA sont réintroduits, mais les suites sont classées de la plus sûre à la moins sûre : un client récent obtient toujours la connexion forte." }
    ],
    difficultes: [],
    resultats: [],
    ressources: {
      captures: [
        { src: "img/projets/td4-config-apache.jpg", alt: "La configuration Apache commentée, chaque réglage citant la recommandation de l'ANSSI appliquée." },
        { src: "img/projets/td4-versions-tls.jpg", alt: "Les tests de connexion : TLS 1.3 et 1.2 acceptés, TLS 1.1 et 1.0 refusés." }
      ],
      schemas: [], pdf: [{ titre: "Compte rendu du TD 4 (PDF)", url: "docs/Raphael_BLANCO--THIAW-NIAM_TD4_TLS_ANSSI.pdf" }], github: ""
    }
  },
  {
    id: "tp-telnet-ssh",
    cadre: "m1",
    icone: "si-wireshark",
    titre: "Telnet contre SSH : ce que voit un espion réseau",
    theme: "Cryptologie · TP 1 · Wireshark",
    outil: "TP Mastère 1 Cybersécurité · Wireshark, Debian · novembre 2026",
    resume: "Capturer une session Telnet puis une session SSH avec Wireshark, et montrer qu'il suffit d'écouter le réseau pour voler un mot de passe Telnet.",
    contexte: "Telnet et SSH donnent tous deux accès à distance à un serveur, mais Telnet ne chiffre rien. Le TP le prouve sur un laboratoire isolé de deux machines Debian, sans accès à Internet.",
    technologies: ["Wireshark", "Telnet", "OpenSSH", "Debian", "TCP/IP", "nftables"],
    objectifs: [],
    demarche: [
      { titre: "Isoler le laboratoire", texte: "Deux machines en adresses fixes, sans route vers Internet, pour que les identifiants en clair ne puissent pas fuiter." },
      { titre: "Monter les deux services", texte: "Serveur Telnet lancé par inetd et serveur OpenSSH, avec un compte de test." },
      { titre: "Capturer la session Telnet", texte: "Dans Wireshark, le flux se lit directement : identifiant, mot de passe, commandes, réponses et message secret apparaissent en clair." },
      { titre: "Capturer la session SSH", texte: "Mêmes commandes : seules les bannières et la liste des algorithmes restent lisibles ; tout le reste est chiffré (chacha20-poly1305)." },
      { titre: "Comparer et fermer", texte: "Tableau comparatif sur sept critères, puis désactivation de Telnet et vérification que le port 23 n'écoute plus." }
    ],
    difficultes: [],
    resultats: [],
    ressources: {
      captures: [
        { src: "img/projets/tp1-telnet-en-clair.jpg", alt: "Le flux Telnet dans Wireshark : l'identifiant, le mot de passe et les commandes se lisent en clair." },
        { src: "img/projets/tp1-ssh-chiffre.jpg", alt: "Le flux SSH dans Wireshark : après la négociation, les données sont illisibles." }
      ],
      schemas: [], pdf: [{ titre: "Compte rendu du TP 1 (PDF)", url: "docs/Raphael_BLANCO--THIAW-NIAM_TP1_Telnet_SSH_Wireshark.pdf" }], github: ""
    }
  },
  {
    id: "tp-pki-ad",
    cadre: "m1",
    icone: "windows",
    titre: "PKI privée Active Directory et site web HTTPS",
    theme: "Cryptologie · TP 2 · Windows Server, en binôme",
    outil: "TP Mastère 1 Cybersécurité · Windows Server, AD CS, IIS · en binôme · novembre 2026",
    resume: "Créer une autorité de certification interne dans un domaine Active Directory, puis publier un site IIS en HTTPS que les postes du domaine ouvrent sans aucun avertissement.",
    contexte: "Une entreprise n'achète pas un certificat public pour chaque application interne : elle crée sa propre autorité de certification. Le laboratoire comptait trois machines : un contrôleur de domaine avec l'autorité, un serveur web et un poste client.",
    technologies: ["Windows Server 2019", "Active Directory", "AD CS", "DNS", "IIS", "PowerShell", "Wireshark"],
    objectifs: [],
    demarche: [
      { titre: "Monter le domaine", texte: "Création de la forêt Active Directory et du DNS, vérification des services et des enregistrements, puis rattachement du serveur web et du poste client." },
      { titre: "Installer l'autorité de certification", texte: "Autorité racine d'entreprise, clé RSA 4096 bits et SHA-256, valable 10 ans." },
      { titre: "Créer un modèle de certificat web", texte: "Modèle dupliqué, valable 1 an, avec le nom DNS du serveur dans le certificat et le droit d'inscription accordé au compte du serveur web." },
      { titre: "Publier le site en HTTPS", texte: "Demande du certificat depuis le serveur web, puis liaison HTTPS sur le port 443 dans IIS." },
      { titre: "Vérifier la confiance", texte: "La racine est distribuée par Active Directory : le poste client ouvre le site en HTTPS sans avertissement, chaîne validée de bout en bout." },
      { titre: "Proposer l'architecture cible", texte: "Schéma avec pare-feu et DMZ et tableau des flux à autoriser, avec sa principale limite : un serveur de DMZ joint au domaine ouvre de nombreux ports vers le contrôleur." }
    ],
    difficultes: [
      { titre: "Une erreur RPC 1722 trompeuse", texte: "Le modèle de certificat restait introuvable. Le réseau, Kerberos et les stratégies de groupe fonctionnaient : la session était ouverte avec un compte local au lieu d'un compte du domaine. Leçon retenue : vérifier son contexte de sécurité avec whoami avant de chercher une cause réseau." },
      { titre: "Un serveur web sous Windows 10", texte: "Les commandes du sujet étaient réservées à Windows Server : IIS a été installé comme fonctionnalité Windows." }
    ],
    resultats: [
      { valeur: "3", label: "machines : contrôleur et autorité, serveur web, poste client" },
      { valeur: "0", label: "avertissement de sécurité dans le navigateur du client" }
    ],
    ressources: {
      captures: [
        { src: "img/projets/tp2-connexion-securisee.jpg", alt: "Le navigateur du poste client indique que la connexion au site est sécurisée." },
        { src: "img/projets/tp2-certificat.jpg", alt: "Le certificat du serveur web, délivré par l'autorité interne." }
      ],
      schemas: [
        { src: "img/projets/tp2-architecture.jpg", alt: "Le schéma du laboratoire : contrôleur de domaine, serveur web et poste client, avec les flux entre eux." }
      ],
      pdf: [{ titre: "Compte rendu du TP 2 (PDF)", url: "docs/Raphael_BLANCO--THIAW-NIAM_TP2_PKI_Active_Directory_HTTPS.pdf" }], github: ""
    }
  }
];
