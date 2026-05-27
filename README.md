````markdown
# 🏆 TOORNAMENT APP

## 📌 Présentation du projet

Toornament App est une application web fullstack de gestion de tournois sportifs développée avec :

- Spring Boot pour le backend
- Angular pour le frontend
- MySQL pour la base de données

L’application permet d’organiser et gérer des compétitions sportives de manière moderne, intuitive et centralisée.

Le système prend en charge :
- la gestion des tournois
- les équipes
- les utilisateurs
- les classements
- les publications sociales
- un chatbot intelligent intégré avec Dialogflow

---

# 🚀 Technologies utilisées

# 🔹 Backend
- Java 17
- Spring Boot 3
- Spring Data JPA
- Hibernate
- Maven
- MySQL
- Dialogflow API
- Swagger/OpenAPI

# 🔹 Frontend
- Angular
- TypeScript
- HTML5
- CSS3

# 🔹 Outils et environnement
- IntelliJ IDEA
- VS Code
- Git & GitHub
- MySQL Workbench
- Postman

---

# 📂 Structure du projet

```txt
toornament-app/
│
├── Backend/
│   └── gestiontournois/
│
├── Frontend/
│   └── gestion-tournois-frontend/
│
└── README.md
```

---

# ⚙️ Fonctionnalités principales

# ✅ Gestion des tournois
- Création de tournois
- Modification
- Suppression
- Consultation des tournois

# ✅ Gestion des équipes
- Ajout d’équipes
- Modification des informations
- Suppression

# ✅ Gestion des utilisateurs
- Création de comptes
- Gestion des profils
- Administration

# ✅ Classements
- Calcul des scores
- Classement automatique des équipes

# ✅ Réseau social
- Création de publications
- Interactions utilisateurs

# ✅ Chatbot intelligent
- Assistance automatisée
- Réponses aux questions des utilisateurs via Dialogflow

---

# 🛠️ Installation complète du projet

# 1️⃣ Cloner le projet

```bash
git clone https://github.com/Boubacar-NIANG/toornament-app.git
```

---

# 2️⃣ Installation du Backend

# 📍 Accéder au backend

```bash
cd Backend/gestiontournois
```

---

# 📍 Configurer MySQL

Créer une base de données MySQL :

```sql
CREATE DATABASE gestion_tournois;
```

---

# 📍 Configurer le fichier application.properties

Chemin :

```txt
src/main/resources/application.properties
```

Exemple de configuration :

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/gestion_tournois
spring.datasource.username=root
spring.datasource.password=VOTRE_MOT_DE_PASSE

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

---

# 📍 Installer les dépendances Maven

```bash
mvn clean install
```

---

# 📍 Lancer le backend

```bash
mvn spring-boot:run
```

Le serveur backend démarre sur :

```txt
http://localhost:8080
```

---

# 🌐 Installation du Frontend

# 📍 Accéder au frontend

```bash
cd Frontend/gestion-tournois-frontend
```

---

# 📍 Installer les dépendances Angular

```bash
npm install
```

Cette commande installe tous les packages nécessaires au fonctionnement du frontend.

Parce qu’Angular considère qu’il faut approximativement 14 000 dépendances pour afficher une simple page web. La sobriété numérique est officiellement décédée.

---

# 📍 Lancer le frontend

```bash
ng serve
```

Le frontend démarre sur :

```txt
http://localhost:4200
```

---

# 🔗 Communication Frontend / Backend

Le frontend Angular communique avec le backend Spring Boot via des API REST.

Le backend doit être lancé avant le frontend.

---

# 📘 Documentation API Swagger

Swagger est intégré au backend pour tester les endpoints REST.

Accès :

```txt
http://localhost:8080/swagger-ui/index.html
```

---

# 🤖 Configuration Dialogflow

Le projet utilise Google Dialogflow pour le chatbot intelligent.

# 📍 Ajouter les credentials Google Cloud

Créer un dossier :

```txt
src/main/resources/credentials/
```

Puis ajouter le fichier JSON des credentials Google Cloud.

⚠️ Important :
Ne jamais publier ces fichiers sur GitHub.

Ajouter le dossier dans `.gitignore` :

```gitignore
src/main/resources/credentials/
```

---

# 🔐 Configuration Git Ignore recommandée

Créer un fichier `.gitignore` à la racine :

```gitignore
# Backend
Backend/gestiontournois/target/
Backend/gestiontournois/bin/

# Credentials
Backend/gestiontournois/src/main/resources/credentials/

# Frontend
Frontend/gestion-tournois-frontend/node_modules/
Frontend/gestion-tournois-frontend/dist/

# IDE
.idea/
.vscode/

# Logs
*.log
```

---

# 📦 Commandes utiles

# Backend

```bash
mvn clean install
```

```bash
mvn spring-boot:run
```

---

# Frontend

```bash
npm install
```

```bash
ng serve
```

```bash
ng build
```

---

# 🚀 Déploiement

# 🔹 Frontend
Le frontend peut être déployé sur :
- Vercel
- Netlify

# 🔹 Backend
Le backend peut être déployé sur :
- Render
- Railway
- VPS Linux

---

# 🧪 Tests API

Les tests API peuvent être réalisés avec :
- Swagger
- Postman

---

# 👨‍💻 Auteur

## Boubacar NIANG

Projet académique réalisé dans le cadre d’un mémoire et de l’apprentissage avancé du développement fullstack moderne.

---

# 📜 Licence

Projet à but éducatif et académique.

---

# ❤️ Remerciements

Merci à tous les outils modernes du développement web qui transforment chaque installation en chasse au trésor de dépendances, conflits de versions et variables d’environnement mystérieuses. Malgré tout, le projet fonctionne. Ce qui relève déjà presque du miracle informatique.
````
