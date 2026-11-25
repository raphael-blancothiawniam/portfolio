/*
  PROJETS
  ---------------------------------------------------------------------------
  Chaque projet a sa page : projet.html?id=<id>.
  Pour enrichir un projet, remplis la partie "ressources" ; tout ce qui reste
  vide n'est pas affiché.

  captures : [{ src: "img/projets/reseau-vlan.png", alt: "Ce que montre la capture" }]
  schemas  : [{ src: "img/projets/reseau-topologie.png", alt: "Schéma de la topologie" }]
  pdf      : [{ titre: "Dossier technique", url: "docs/reseau-dossier.pdf" }]
  github   : "https://github.com/ton-compte/ton-depot"

  Parties facultatives pour expliquer le projet (affichées seulement si remplies) :
  contexte    : "Un paragraphe : pourquoi ce projet, pour qui, avec quelles contraintes."
  demarche    : [{ titre: "Étape", texte: "Ce que j'ai fait à cette étape." }]
  difficultes : [{ titre: "Le problème", texte: "Ce que j'ai trouvé et comment je l'ai réglé." }]
  resultats   : [{ valeur: "8 min", label: "ce que mesure le chiffre" }]

  Pour ajouter un projet : copie un bloc { ... } en entier, change son id
  (en minuscules, sans espace), puis ajoute sa carte dans index.html
  (section "projets", un commentaire indique où).
*/
window.PROJETS = [
  {
    id: "migration-windows-11",
    titre: "Migration du parc de Windows 10 vers Windows 11",
    outil: "Alternance à la CPAM de Paris · Ivanti, GLPI, Nexthink",
    resume: "Le projet de mon alternance, présenté en soutenance de Bachelor en 2026 : migrer les postes de la CPAM de Paris vers Windows 11 avant la fin du support de Windows 10, sans interrompre le service et en respectant les exigences de sécurité de l'Assurance Maladie.",
    technologies: ["Windows 11", "Ivanti", "GLPI", "Nexthink", "Active Directory", "GPO", "TPM 2.0", "Secure Boot", "BitLocker"],
    objectifs: [
      "Recenser le parc avec Nexthink et Ivanti : version de Windows, TPM 2.0, processeur, mémoire, disque",
      "Classer les postes en trois groupes : migrés, à migrer, cas particuliers",
      "Télédistribuer une icône Ivanti pour que chaque agent lance sa migration lui-même",
      "Suivre chaque poste en temps réel et traiter les anomalies",
      "Contrôler après migration les applications, l'authentification et les droits réseau",
      "Vérifier la sécurité : GPO, droits AD au moindre privilège, BitLocker, VBS",
      "Tracer chaque intervention dans GLPI et rédiger la base de connaissances"
    ],
    contexte: "Microsoft a arrêté le support de Windows 10 en octobre 2025. Sans mises à jour de sécurité, les postes deviennent des cibles et ne respectent plus le référentiel de sécurité de l'Assurance Maladie ni le RGPD. À la CPAM de Paris, la première CPAM de France avec 2 500 agents répartis sur 18 sites, il fallait donc passer le parc sous Windows 11. La contrainte : ne jamais bloquer un agent dans son travail, et que chaque poste migré reste conforme aux règles de sécurité. J'ai mené cette migration au sein du service Déploiement de la DSI, pendant mon alternance de Bachelor.",
    demarche: [
      { titre: "Recenser le parc", texte: "Avec une requête Ivanti et Nexthink, j'ai listé chaque poste : version de Windows, date de dernière connexion, présence d'une puce TPM 2.0, processeur, mémoire et disque. Les postes incompatibles avec Windows 11 ont été repérés pour le plan de renouvellement, et l'inventaire GLPI mis à jour." },
      { titre: "Classer les postes", texte: "J'ai réparti le parc en trois groupes : déjà migrés, à migrer, et cas particuliers (applications métiers spécifiques, postes partagés). Un tableau de suivi commun à l'équipe donnait pour chaque poste son utilisateur, son site, sa version et son statut." },
      { titre: "Laisser l'agent lancer sa migration", texte: "Plutôt que de passer sur chaque poste, j'ai télédistribué par Ivanti une icône sur le bureau des agents. L'agent lance lui-même la migration au moment qui l'arrange : ses données et ses réglages sont conservés. Une procédure pas à pas lui expliquait quoi faire et qui appeler en cas de souci." },
      { titre: "Suivre en temps réel", texte: "Pendant le déploiement, je suivais dans Ivanti les postes passés sous Windows 11, je relançais ceux qui tardaient et je traitais les anomalies remontées par téléphone, par mail ou par ticket." },
      { titre: "Contrôler la sécurité de chaque poste", texte: "Après chaque migration, je vérifiais que le poste recevait bien les GPO de l'Assurance Maladie (verrouillage de session, mots de passe, pare-feu), que TPM 2.0, Secure Boot, BitLocker et VBS étaient actifs, et que les droits Active Directory respectaient le moindre privilège." },
      { titre: "Documenter et clôturer", texte: "Chaque intervention a été tracée dans GLPI. Les incidents résolus sont devenus une base de connaissances pour l'équipe, et l'inventaire a été remis à jour pour tous les postes migrés." }
    ],
    difficultes: [
      { titre: "Des paquets logiciels qui refusaient de s'installer", texte: "Certaines applications métiers échouaient sans message d'erreur clair. J'ai pris une méthode fixe : journaux de l'Observateur d'événements, puis journaux d'installation du paquet, puis vérification des GPO appliquées. Selon la cause, j'ai modifié les paramètres d'installation, adapté les droits d'exécution ou, en dernier recours, installé à la main." },
      { titre: "Des postes injoignables", texte: "Postes éteints, hors réseau ou en télétravail : Ivanti ne pouvait pas les atteindre. Ils ont été suivis à part dans le tableau et relancés auprès des agents." },
      { titre: "L'inquiétude des agents", texte: "Beaucoup craignaient de perdre leurs données. J'ai expliqué que rien n'était supprimé, distribué le guide utilisateur et répondu rapidement aux questions après la migration." }
    ],
    resultats: [
      { valeur: "≈ 100", label: "postes migrés vers Windows 11" },
      { valeur: "0", label: "interruption de service" },
      { valeur: "100\u00a0%", label: "des postes migrés conformes aux règles de sécurité" }
    ],
    ressources: {
      captures: [
        { src: "img/projets/cpam-ivanti.jpg", alt: "Les cinq étapes du pilotage dans Ivanti : recensement, segmentation, déploiement par icône, suivi en temps réel, contrôle après migration." }
      ],
      schemas: [
        { src: "img/projets/cpam-phases.jpg", alt: "Les trois phases du projet : audit et préparation, déploiement progressif, stabilisation et clôture." },
        { src: "img/projets/cpam-securite.jpg", alt: "La gestion de la sécurité : GPO, droits d'accès, mécanismes de Windows 11 et traçabilité." }
      ],
      pdf: [],
      github: ""
    }
  },
  {
    id: "infrastructure-hybride-hds",
    titre: "Infrastructure hybride HDS pour Althea Systems",
    outil: "Projet de cours Bachelor · VMware vSphere 8 et Microsoft Azure",
    resume: "Le livrable technique individuel du projet fil rouge de Bachelor (groupe Trinode, mai 2026), pour un client fictif : un éditeur de logiciels médicaux de 250 personnes à Paris et Genève, qui héberge des données de santé. J'ai conçu la partie infrastructure : datacenter VMware à Paris, cloud Azure en Europe, stockage, sauvegarde et plan de reprise.",
    technologies: ["VMware vSphere 8", "vSAN ESA", "NSX-T", "Dell PowerEdge R750", "Microsoft Azure", "Azure VMware Solution", "Azure Virtual Desktop", "NetApp AFF A400", "Veeam Backup & Replication", "Azure Bicep", "Ansible"],
    objectifs: [
      "Dimensionner un cluster de 4 serveurs ESXi en haute disponibilité",
      "Concevoir le réseau Azure en hub-and-spoke avec des Private Endpoints",
      "Cloisonner les environnements de développement, test, préproduction et production",
      "Sauvegarder selon la règle 3-2-2-3-6 avec des copies immuables",
      "Écrire et tester quatre scénarios de reprise : panne de serveur, sinistre, rançongiciel, perte de liaison",
      "Déployer en Infrastructure as Code avec Azure Bicep et Ansible",
      "Respecter le cadre HDS, le RGPD et l'ISO 27001"
    ],
    contexte: "Projet fil rouge de Bachelor, mené en groupe de trois (le groupe Trinode) pour un client fictif : Althea Systems, éditeur de logiciels pour cabinets médicaux, 250 personnes à Paris et une filiale à Genève. L'entreprise déménage son siège et héberge des données de santé : elle doit reconstruire toute son infrastructure en respectant le cadre HDS (hébergeur de données de santé), le RGPD et l'ISO 27001, avec une reprise en moins d'une heure et moins de 30 minutes de données perdues en cas de panne. Les rôles étaient partagés : réseau et sécurité, annuaire et messagerie, et pour moi l'infrastructure. Ce livrable est ma partie, rédigée seul.",
    demarche: [
      { titre: "Dimensionner les serveurs", texte: "J'ai calculé la charge des machines virtuelles puis choisi un cluster de 4 serveurs Dell PowerEdge R750 sous VMware vSphere 8 : 448 cœurs, 4 To de mémoire, environ 46 To utiles sur vSAN. Si un serveur tombe, les trois autres reprennent toute la charge." },
      { titre: "Cloisonner les environnements", texte: "Développement, test, préproduction et production sont séparés par NSX-T : un pare-feu au niveau de chaque machine virtuelle bloque les échanges non autorisés entre zones, même à l'intérieur d'un même serveur." },
      { titre: "Concevoir la partie cloud", texte: "Dans Azure, en région Europe certifiée HDS, j'ai conçu un réseau hub-and-spoke : un réseau central filtré par un pare-feu et des réseaux dédiés aux applications, à l'annuaire, au stockage et à la sauvegarde. Les services sensibles ne sont joignables que par des adresses privées (Private Endpoints). Genève accède aux mêmes services par des postes virtuels Azure Virtual Desktop." },
      { titre: "Organiser la sauvegarde", texte: "Avec Veeam et un stockage NetApp, j'ai appliqué la règle 3-2-2-3-6 : trois copies, sur deux types de supports, dans deux régions, dont des copies immuables qu'un attaquant ne peut ni modifier ni supprimer, même avec le compte propriétaire." },
      { titre: "Préparer la reprise après incident", texte: "J'ai écrit quatre scénarios avec leurs procédures : panne d'un serveur, perte complète du datacenter de Paris, attaque par rançongiciel et coupure de la liaison vers Azure. La bascule vers Azure est automatisée pour tenir le délai." },
      { titre: "Automatiser le déploiement", texte: "Les réseaux Azure sont décrits en Azure Bicep et les machines virtuelles déployées avec Ansible : l'infrastructure se recrée à l'identique, sans erreur de saisie." },
      { titre: "Tester et prouver", texte: "J'ai rédigé le plan de tests de recette et réuni les preuves en annexe : copies immuables impossibles à supprimer, règles de filtrage, politiques Azure qui refusent une ressource non conforme, accès refusé à un coffre de secrets sans le bon rôle." }
    ],
    difficultes: [
      { titre: "Une machine critique redémarrait trop lentement", texte: "Au premier test de panne d'un serveur, la base de données principale a mis 14 minutes à repartir au lieu de 8. Sa priorité de redémarrage était réglée sur « normale » : je l'ai passée en « la plus haute » pour toutes les bases, et le test rejoué est revenu à 8 minutes." },
      { titre: "L'espace de sauvegarde presque plein", texte: "La première sauvegarde complète a rempli 91 % de l'espace prévu : la taille des disques virtuels avait été sous-estimée. J'ai agrandi le volume de 20 To et abaissé le seuil d'alerte à 80 %." },
      { titre: "Une liaison ralentie sous la charge", texte: "Pendant un test de charge, la latence vers Azure est montée à 18 ms au lieu de 5. Il manquait une règle de priorité sur le pare-feu FortiGate : en faisant passer le trafic d'annuaire avant la réplication des données, elle est retombée à 4 ms." }
    ],
    resultats: [
      { valeur: "8 min", label: "pour repartir après la panne d'un serveur" },
      { valeur: "45 min", label: "pour repartir après la perte du datacenter, pour 60 exigées" },
      { valeur: "99,97\u00a0%", label: "de disponibilité sur les 72 heures de recette" }
    ],
    ressources: {
      captures: [],
      schemas: [
        { src: "img/projets/althea-architecture.jpg", alt: "L'architecture globale : datacenter de Paris, Azure Amsterdam en région principale, Azure Dublin pour la reprise, filiale de Genève." },
        { src: "img/projets/althea-azure-hub-spoke.jpg", alt: "L'architecture Azure en hub-and-spoke, avec ses réseaux virtuels et ses règles de filtrage." },
        { src: "img/projets/althea-cluster-vsphere.jpg", alt: "Le cluster vSphere 8 de quatre nœuds, avec vSAN ESA et NSX-T." },
        { src: "img/projets/althea-nsx.jpg", alt: "La micro-segmentation NSX-T et le pare-feu distribué par zone." },
        { src: "img/projets/althea-sauvegarde.jpg", alt: "Le pipeline de sauvegarde Veeam selon la règle 3-2-2-3-6." }
      ],
      pdf: [],
      github: ""
    }
  },
  {
    id: "reseau",
    titre: "Architecture réseau multi-sites",
    outil: "Cisco Packet Tracer",
    resume: "Une infrastructure réseau qui relie trois sites, Paris, Marseille et Lyon, maquettée sous Cisco Packet Tracer.",
    technologies: ["Cisco Packet Tracer", "Switches et routeurs Cisco", "VLAN", "Routage"],
    objectifs: [
      "Relier les sites de Paris, Marseille et Lyon",
      "Séparer les usages par VLAN",
      "Établir le plan d'adressage IP",
      "Configurer le routage entre les sites"
    ],
    ressources: { captures: [], schemas: [], pdf: [], github: "" }
  },
  {
    id: "active-directory",
    titre: "Infrastructure Active Directory",
    outil: "Windows Server",
    resume: "Un environnement Windows Server avec ses services d'annuaire : utilisateurs, groupes et droits d'accès.",
    technologies: ["Windows Server 2022", "Active Directory"],
    objectifs: [
      "Créer et organiser les comptes utilisateurs",
      "Regrouper les comptes par groupes",
      "Attribuer les droits d'accès",
      "Administrer les services d'annuaire"
    ],
    ressources: { captures: [], schemas: [], pdf: [], github: "" }
  },
  {
    id: "cloud",
    titre: "Infrastructure cloud",
    outil: "AWS et Microsoft Azure",
    resume: "Des travaux pratiques sur les deux grands clouds publics, AWS et Microsoft Azure.",
    technologies: ["AWS IAM", "AWS Security Groups", "Microsoft Azure"],
    objectifs: [
      "Gérer les identités et les accès avec AWS IAM",
      "Filtrer le trafic avec les Security Groups",
      "Prendre en main l'environnement Microsoft Azure"
    ],
    ressources: { captures: [], schemas: [], pdf: [], github: "" }
  },
  {
    id: "cybersecurite",
    titre: "Sécurité des infrastructures",
    outil: "Travaux pratiques et études",
    resume: "Des travaux pratiques et des études sur la sécurité des infrastructures et l'analyse des menaces informatiques.",
    technologies: ["Segmentation réseau", "Pare-feu", "Gestion des droits"],
    objectifs: [
      "Analyser les menaces qui visent une infrastructure",
      "Limiter les accès au strict nécessaire",
      "Cloisonner le réseau",
      "Appliquer et suivre une politique de sécurité"
    ],
    ressources: { captures: [], schemas: [], pdf: [], github: "" }
  }
];
