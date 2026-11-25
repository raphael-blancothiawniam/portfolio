/*
  VEILLE TECHNOLOGIQUE
  ---------------------------------------------------------------------------
  Pour ajouter un article : copie un bloc { ... } dans la liste, puis remplis
  les champs. La page les trie par date (le plus récent d'abord) et les montre
  5 par 5, avec un filtre par thème. Résumé : une phrase courte (90 caractères environ).

  date    : AAAA-MM-JJ (la date de publication de l'article)
  theme   : un de ces thèmes, écrit exactement ainsi :
            "Cybersécurité", "IA et cybersécurité", "Sécurité des réseaux",
            "Cloud computing", "Vulnérabilités", "Actualités informatiques"
  titre   : ton titre, court (70 caractères au plus)
  resume  : ton résumé en une ou deux phrases, avec tes mots
  angle   : facultatif, "Attaque" ou "Défense"
  source  : le nom du site
  url     : le lien vers l'article
  image   : facultatif, chemin d'une image à toi (ex. "img/veille/ivanti.jpg")

  L'étiquette « Nouveau » s'affiche seule sur les articles de moins de 10 jours.
*/
window.VEILLE = [
  {
    date: "2026-11-19",
    theme: "Vulnérabilités",
    angle: "Attaque",
    titre: "VMware vCenter : une faille déjà exploitée",
    resume: "La CVE-2026-123890 touche vCenter 7, 8 et 9 et est déjà exploitée.",
    source: "Centre canadien pour la cybersécurité",
    url: "https://www.cyber.gc.ca/fr/alertes-avis/bulletin-securite-vmware-av26-1185"
  },
  {
    date: "2026-11-17",
    theme: "Cybersécurité",
    angle: "Défense",
    titre: "NIS 2 : l'Assemblée adopte la loi Résilience",
    resume: "Adoptée par 464 voix contre 64, avec deux ans de retard sur l'échéance européenne.",
    source: "Next",
    url: "https://next.ink/268104/derniere-ligne-droite-pour-le-pjl-resilience-qui-passe-le-vote-solennel-a-lassemblee/"
  },
  {
    date: "2026-11-16",
    theme: "Cybersécurité",
    angle: "Attaque",
    titre: "Ipsos confirme une intrusion dans un système interne",
    resume: "Plainte déposée le 11 novembre ; le groupe dit ses opérations intactes.",
    source: "Clubic",
    url: "https://www.clubic.com/actualite-639574-ipsos-confirme-une-intrusion-dans-son-systeme-informatique.html"
  },
  {
    date: "2026-11-03",
    theme: "IA et cybersécurité",
    angle: "Défense",
    titre: "Le NCSC britannique : l'IA révèle les failles plus qu'elle n'en crée",
    resume: "Son rapport annuel évalue l'effet de l'IA sur les intrusions et alerte sur les infrastructures critiques d'ici 2028.",
    source: "NCSC",
    url: "https://www.ncsc.gov.uk/collection/annual-review-2026/understanding-threat/ai-impact-cyber-threat"
  },
  {
    date: "2026-11-02",
    theme: "Cybersécurité",
    angle: "Attaque",
    titre: "Contrôle technique : 18 millions d'automobilistes exposés",
    resume: "Auto-Planning, prestataire de prise de rendez-vous, a confirmé le piratage ; près de 14 millions de plaques en jeu.",
    source: "Journal du Geek",
    url: "https://www.journaldugeek.com/2026/11/02/piratage-de-14-millions-de-plaque-dimmatriculation-que-risquez-vous-si-vous-etes-concernes/"
  },
  {
    date: "2026-11-19",
    theme: "IA et cybersécurité",
    angle: "Attaque",
    titre: "La Commission européenne visée par une attaque menée avec une IA",
    resume: "Une plateforme d'intrusion autonome serait en cause ; attaque détectée le 22 octobre.",
    source: "Next",
    url: "https://next.ink/268532/cyberattaque-a-la-commission-europeenne-une-plateforme-agentique-de-pentest-mise-en-cause/"
  },
  {
    date: "2026-11-18",
    theme: "IA et cybersécurité",
    angle: "Attaque",
    titre: "Google décrit une attaque menée de bout en bout par un agent IA",
    resume: "Un agent IA a mené seul une chaîne d'exploitation ; des sites français étaient visés.",
    source: "Siècle Digital",
    url: "https://siecledigital.fr/2026/11/18/une-ia-capable-de-mener-seule-des-cyberattaques-frappe-des-sites-francais-selon-google/"
  },
  {
    date: "2026-11-12",
    theme: "Cybersécurité",
    angle: "Défense",
    titre: "Fuites de données : le point de l'ANSSI sur octobre 2026",
    resume: "64 violations de données en un mois, dont des failles IDOR à la CAF et à France Travail.",
    source: "IT-Connect",
    url: "https://www.it-connect.fr/reactiv-anssi-point-situation-fuites-donnees-caf-france-travail/"
  },
  {
    date: "2026-11-10",
    theme: "Cybersécurité",
    angle: "Défense",
    titre: "NIS 2 : la loi Résilience examinée à l'Assemblée nationale",
    resume: "Près de 15 000 organisations françaises dans 18 secteurs auront de nouvelles obligations.",
    source: "Le Monde Informatique",
    url: "https://www.lemondeinformatique.fr/cybersecurite-conformite/nis-2-la-loi-resilience-arrive-enfin-a-l-assemblee"
  },
  {
    date: "2026-11-10",
    theme: "Actualités informatiques",
    angle: "Défense",
    titre: "Correctifs Microsoft de novembre 2026",
    resume: "Windows Server 2025 et .NET concernés ; la faille CVE-2026-124194 est déjà exploitée.",
    source: "Centre canadien pour la cybersécurité",
    url: "https://www.cyber.gc.ca/fr/alertes-avis/bulletin-securite-microsoft-correctif-cumulatif-mensuel-novembre-2026-av26-1142"
  },
  {
    date: "2026-11-09",
    theme: "Cybersécurité",
    angle: "Attaque",
    titre: "L'ANSSI détaille le sabotage des chambres froides de la grande distribution",
    resume: "Contrôleurs de froid de 700 magasins compromis ; la France accuse l'Iran.",
    source: "ANSSI",
    url: "https://cyber.gouv.fr/actualites/campagnes-de-d%C3%A9stabilisation-et-sabotage-men%C3%A9es-%C3%A0-lencontre-des-int%C3%A9r%C3%AAts-fran%C3%A7ais-par-la-r%C3%A9publique-islamique-diran/"
  },
  {
    date: "2026-11-05",
    theme: "Cybersécurité",
    angle: "Attaque",
    titre: "Établissement français du sang : des congélateurs réglés à 110 °C",
    resume: "Un prestataire de froid piraté la nuit du 1er au 2 novembre ; trois sites touchés.",
    source: "IT-Connect",
    url: "https://www.it-connect.fr/cyberattaque-efs-coolworld-congelateurs-plasma/"
  },
  {
    date: "2026-11-02",
    theme: "Cybersécurité",
    angle: "Défense",
    titre: "Google démantèle le botnet XCPE : 1,3 million de box Android TV",
    resume: "Une porte dérobée préinstallée par le fabricant, exclu d'Android par Google.",
    source: "BleepingComputer",
    url: "https://bleepingcomputer.com/news/security/google-disrupts-million-device-xcpe-android-malware-botnet-bans-tv-box-maker"
  },
  {
    date: "2026-11-02",
    theme: "Vulnérabilités",
    angle: "Attaque",
    titre: "Ivanti Connect Secure : trois failles exploitées, alerte du CERT-FR",
    resume: "Exécution de code et élévation de privilèges : corriger, puis chercher une compromission.",
    source: "Ayinedjimi Consultants",
    url: "https://ayinedjimi-consultants.fr/news/ivanti-connect-secure-certfr-2026-ale-013"
  },
  {
    date: "2026-10-07",
    theme: "Cloud computing",
    titre: "Orange Business obtient une nouvelle qualification SecNumCloud",
    resume: "Une offre de plus qualifiée par l'ANSSI, après l'arrêté qui approuve le référentiel 3.2.",
    source: "Le Monde Informatique",
    url: "https://www.lemondeinformatique.fr/actualites/lire-orange-muscle-son-offre-secnumcloud-100841.html"
  },
  {
    date: "2026-09-10",
    theme: "Sécurité des réseaux",
    angle: "Attaque",
    titre: "Cisco, Citrix et Fortinet ajoutés au catalogue KEV de la CISA",
    resume: "Dont CVE-2026-20079, contournement d'authentification noté 10 sur 10 chez Cisco.",
    source: "The Hacker News",
    url: "https://thehackernews.com/2026/09/cisa-flags-exploited-cisco-citrix.html"
  },
  {
    date: "2026-09-07",
    theme: "Cybersécurité",
    angle: "Défense",
    titre: "L'ANSSI crée une capacité de réaction renforcée pour l'État",
    resume: "Une équipe d'intervention dédiée aux cyberattaques visant les services de l'État.",
    source: "ANSSI",
    url: "https://cyber.gouv.fr/actualites/cyberattaques-lanssi-met-en-place-une-capacite-renforcee-de-reaction-dediee-aux-services-de-letat/"
  },
  {
    date: "2026-07-22",
    theme: "IA et cybersécurité",
    angle: "Attaque",
    titre: "Rançongiciels : l'IA rend l'hameçonnage plus crédible",
    resume: "65 % des victimes interrogées disent que l'IA a rendu l'attaque plus efficace.",
    source: "Proofpoint",
    url: "https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-research-finds-65-organizations-affected-ransomware-say-ai-made"
  },
  {
    date: "2026-07-07",
    theme: "IA et cybersécurité",
    angle: "Défense",
    titre: "Un plan européen face aux modèles d'IA avancés en cybersécurité",
    resume: "L'ENISA et le JRC créeront une plateforme pour tester l'IA appliquée à la cybersécurité.",
    source: "Commission européenne",
    url: "https://commission.europa.eu/news-and-media/news/new-eu-plan-address-risks-and-opportunities-advanced-ai-cybersecurity-2026-07-07_fr"
  },
  {
    date: "2026-04-30",
    theme: "IA et cybersécurité",
    angle: "Défense",
    titre: "Adoption prudente de l'IA agentive : un guide des Five Eyes",
    resume: "Les risques des agents IA, dont l'injection de prompt, et comment les sécuriser.",
    source: "Centre canadien pour la cybersécurité",
    url: "https://www.cyber.gc.ca/fr/orientation/adoption-prudente-lia-agentive"
  },
  {
    date: "2026-02-04",
    theme: "IA et cybersécurité",
    angle: "Défense",
    titre: "L'IA générative face aux attaques informatiques : la synthèse du CERT-FR",
    resume: "Comment les attaquants utilisent l'IA en 2025, et les recommandations de l'ANSSI.",
    source: "CERT-FR",
    url: "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2026-CTI-001.pdf"
  }
];
