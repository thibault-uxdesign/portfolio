<script>

import Header from '../components/header.vue';

export default {
    name: 'Bulle',
    components: {
        Header
    }
};

</script>

<template>

    <Header></Header>

    <div id="bulle">
        <h1>Bülle l’application de méditation</h1>
        <div class="box">
            <div class="images">
                <img src="../../assets/images/photo1.png" alt="application bulle">
                <img src="../../assets/images/photo2.png" alt="application bulle">
                <img src="../../assets/images/photo3.png" alt="application bulle">
            </div>
        </div>
        <div class="tools">
            <h2>Outils utilisés</h2>
            <div class="logo">
                <img src="../../assets/images/figmalogo.png" alt="Logo Figma">
                <img src="../../assets/images/logobleu.png" alt="Logo Maze Slack App">
            </div>
            <h2>Pourquoi ce projet ?</h2>
            <div class="info">
                <p>Projet dirigé par <strong>Romain Dao</strong> Senior Product Designer, fondateur de The Cacaotès
                    Theory.</p>
                <p>Le défi : créer <strong>une application de méditation</strong>.</p>
                <p>Accompagné d’une équipe de choc : Morgane, Lise, Vincent, Yasemin et moi-même, nous avons relever le
                    défi et y mettant<br> du coeur.</p>
                <h2>Notre proposition :</h2>
                <p>Une application qui répond aux problématiques de stress quotidiennes, et notamment <strong>aux crises
                        d’anxiétés qui peuvent<br> survenir à tous moments</strong>.</p>
                <p>Nous proposons aux utilisateurs <strong>des méditations audio guidées</strong> par des professionnels
                    de santé.</p>
                <p>De plus, nous mettons en place <strong>un onglet “SOS”</strong> avec de courtes méditations qui
                    peuvent être écouté
                    rapidement et à<br> n’importe quel moment. </p>
            </div>
        </div>
        <div class="search">
            <div class="title">
                <h2>1. Discovery</h2>
            </div>
            <div class="content">
                <h3>Pour qui doit-on créer cette application de méditation ? </h3>
                <p class="subtitle1">A. Benchmark : applications (workflow, identité graphique)</p>
                <p>Quelles sont les applications existantes en matière de méditation ?<br>
                    Quel(s) service(s) proposent-elles ?<br>
                    Quelles sont leurs identités ?</p>
                <div class="image1">
                    <img src="../../assets/images/benchmark1.png" alt="benchmark">
                </div>
                <p class="subtitle2">B. Atelier d’idéation</p>
                <p>Parmis l’ensemble des services de méditation proposé, vers où nous voulons allé ?<br>
                    Pour qui on veut créer cette application ?</p>
                <p>Pour répondre à ces questions nous avons réalisés un atelier sur Figjam et nous en avons sortis 2
                    personas (un principal et un secondaire).</p>
                <div class="image2">
                    <img src="../../assets/images/ateliers1.png" alt="atelier ideation">
                </div>
                <p class="conclusion"><strong>Conclusion de l’atelier : une application pour...</strong><br>
                    Avoir une meilleure maîtrise de ses émotions<br>
                    S’endormir plus facilement et rapidement, et comprendre pourquoi il n’arrive pas à s’endormir<br>
                    Faire une différence entre le travail et la vie personelle<br>
                    Avoir un sas de décompression à portée de main</p>
                <p class="subtitle3">Judith, persona principal</p>
                <div class="judith">
                    <img class="face" src="../../assets/images/Frame76.png" alt="persona judith">
                    <img class="graphic" src="../../assets/images/Frame92.png" alt="persona judith">
                </div>
            </div>
        </div>
        <div class="graphics">
            <div class="title">
                <h2>2. Chartre graphique</h2>
            </div>
            <div class="content">
                <h3>Création de color styles et de text styles sur Figma pour faciliter le travail et que tout le monde
                    travaille sur la même base</h3>
                <p>Typographie sélectionnée : Montserrat
                </p>
                <div class="images2">
                    <img src="../../assets/images/Frame100.png" alt="color styles">
                </div>
                <div class="images3">
                    <img src="../../assets/images/Frame103.png" alt="typo styles">
                </div>
            </div>
        </div>
        <div class="wireframe">
            <div class="title">
                <h2>3. Wireframe</h2>
            </div>
            <div class="content">
                <h3>Judith a besoin d’une application pour l’aider dans de potentielles crises</h3>
                <p>Retranscrire une atmosphère bienveillante, avec une architecture inspirée de l’existant (les lecteurs
                    de musiques).</p>
                <div class="image4">
                    <img src="../../assets/images/Wireframe-1.png" alt="exemple">
                </div>
            </div>
        </div>
        <div class="maquetage">
            <div class="title">
                <h2>4. Maquetage</h2>
            </div>
            <div class="content">
                <h3>A. First screen et homepage</h3>
                <div class="image5">
                    <img class="picture2" src="../../assets/images/on-boarding-avec-dr-bulle-1.png" alt="first screen">
                    <img class="picture1" src="../../assets/images/01.00-AccueilV1.png" alt="first screen">
                </div>
                <h3>B. Méditation et lecteur média</h3>
                <div class="image6">
                    <img src="../../assets/images/02.png" alt="meditation">
                    <img src="../../assets/images/4.png" alt="meditation">
                    <img src="../../assets/images/5.png" alt="meditation">
                </div>
                <div class="image7">
                    <img src="../../assets/images/2.png" alt="meditation">
                    <img src="../../assets/images/03.png" alt="meditation">
                    <img src="../../assets/images/04.png" alt="meditation">
                </div>
                <h3>C. le SOS</h3>
                <div class="image8">
                    <img src="../../assets/images/05.png" alt="sos">
                </div>
            </div>
        </div>
        <div class="testing">
            <div class="title">
                <h2>5. Prototypage & Test utilisateur</h2>
            </div>
            <div class="content">
                <h3>Objectif : comprendre l’affordance du bouton “SOS” au travers de l’on-boarding et de la<br> homepage
                </h3>
                <p><strong>Cible :</strong> personnes ayant déjà souffert d’anxiété et/ou de stress, en excluant les
                    personnes expertes en méditation.</p>
                <p><strong>Test (via Maze) :</strong> 2 scénarios utilisateurs testés</p>
                <p><strong>Résultats :</strong> 24 testeurs et testeuses</p>
                <h3 class="yellow">Premier scénario :</h3>
                <div class="image9">
                    <img src="../../assets/images/Test-1-1.png" alt="atelier ideation">
                </div>
                <p>5 secondes en moyenne le test</p>
                <p>78% des testeurs ont cliqué sur le CTA SOS Dr. Bülle</p>
                <p>92% ont réussi de manière directe le parcours</p>
                <h3 class="yellow">Deuxième scénario :</h3>
                <div class="image10">
                    <img src="../../assets/images/test-2-1.png" alt="atelier ideation">
                </div>
                <p>5,2 secondes en moyenne le test</p>
                <p>19% de miss-click dans le 2eme écran</p>
                <p>85% ont réussi de manière directe le parcours</p>
                <h3>Conclusion du test : les écrans du scénario 1 ont été sélectionné c’est-à-dire : l’on-boarding</h3>
            </div>
        </div>
        <div class="iteration">
            <div class="title">
                <h2>6. Itération</h2>
            </div>
            <div class="content">
                <p class="subtitle5">A. Premier test SUS</p>
                <h3>Effectuer un test SUS (System Usability Scale) et itérer en fonction des résultats</h3>
                <p class="blue">Cette partie du projet a été encadrée par <strong>Marianne Abramovici</strong>,
                    enseignante
                    chercheuse en design de service et<br><strong>Guillaume Patry</strong> expert technique SAP.</p>
                <p class="blue">Le test SUS a été réalisé par Guillaume Patry, sur le <strong>premier scénario</strong>
                    (cf. au-dessus), nous étions à distance.</p>
                <div class="image11">
                    <img src="../../assets/images/question.png" alt="question">
                </div>
                <div class="more">
                    <h3>Par la suite nous en avons sortis des préconisations UX : </h3>
                    <ul>
                        <li>
                            Navbar
                        </li>
                    </ul>
                    <div class="two">
                        <p class="blue">Renforcer la lisibilité</p>
                        <p class="blue">Mettre en évidence l’onglet SOS</p>
                    </div>
                    <ul>
                        <li>
                            Accueil - Section des méditations “humeurs”
                        </li>
                    </ul>
                    <div class="two">
                        <p class="blue">Retravailler le wording de titre</p>
                        <p class="blue">Ajouter la durée du contenu (je sais que je vais accéder à une méditation
                            courte)
                        </p>
                    </div>
                    <ul>
                        <li>
                            Pages preview des médiations longues
                        </li>
                    </ul>
                    <div class="two">
                        <p class="blue">Ajouter la durée du contenu de chaque chapitre</p>
                        <p class="blue">Ajouter un bouton player associé à chaque chapitre</p>
                    </div>
                    <ul>
                        <li>
                            Global
                        </li>
                    </ul>
                    <div class="two">
                        <p class="blue">Uniformiser les visuels des émojis d’humeur sur les différentes pages afin de
                            garder
                            la cohérence.</p>
                    </div>
                </div>
                <h3>Itération des maquettes :</h3>
                <div class="image12">
                    <img src="../../assets/images/après-sus-2-écran-1.png" alt="iteration">
                    <img src="../../assets/images/après-sus-1-écran-1.png" alt="iteration">
                </div>
                <div class="image13">
                    <img src="../../assets/images/après-sus-3-écran-1.png" alt="iteration">
                    <img src="../../assets/images/après-sus-4-écran-1.png" alt="iteration">
                </div>
                <p class="subtitle6">B. Deuxième test SUS</p>
                <h3>Effectuer un deuxième test SUS sur le dernier écran (celui du player)</h3>
                <div class="image14">
                    <img src="../../assets/images/question2.png" alt="iteration">
                </div>
                <h3>Itération des maquettes :</h3>
                <div class="image15">
                    <img src="../../assets/images/après-sus2-1.png" alt="iteration">
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
@import url('../../style/bulle.css');
</style>