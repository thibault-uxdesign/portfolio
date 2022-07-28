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
                <img src="../assets/images/bulle/photo1.png" alt="application bulle">
                <img src="../assets/images/bulle/photo2 (2).png" alt="application bulle">
                <img src="../assets/images/bulle/photo3.png" alt="application bulle">
            </div>
        </div>
        <div class="tools">
            <h2>Outils utilisés</h2>
            <div class="logo">
                <img src="../assets/images/bulle/figma logo.png" alt="Logo Figma">
                <img src="../assets/images/bulle/logo bleu.png" alt="Logo Maze Slack App">
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
                    <img src="../assets/images/bulle//benchmark 1.png" alt="benchmark">
                </div>
                <p class="subtitle2">B. Atelier d’idéation</p>
                <p>Parmis l’ensemble des services de méditation proposé, vers où nous voulons allé ?<br>
                    Pour qui on veut créer cette application ?</p>
                <p>Pour répondre à ces questions nous avons réalisés un atelier sur Figjam et nous en avons sortis 2
                    personas (un principal et un secondaire).</p>
                <div class="image2">
                    <img src="../assets/images/bulle/ateliers1.png" alt="atelier ideation">
                </div>
                <p class="conclusion"><strong>Conclusion de l’atelier : une application pour...</strong><br>
                    Avoir une meilleure maîtrise de ses émotions<br>
                    S’endormir plus facilement et rapidement, et comprendre pourquoi il n’arrive pas à s’endormir<br>
                    Faire une différence entre le travail et la vie personelle<br>
                    Avoir un sas de décompression à portée de main</p>
                <p class="subtitle3">Judith, persona principal</p>
                <div class="judith">
                    <img class="face" src="../assets/images/bulle/Frame 76.png" alt="persona judith">
                    <img class="graphic" src="../assets/images/bulle/Frame 92.png" alt="persona judith">
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
                    <img src="../assets/images/bulle/Frame 100.png" alt="color styles">
                </div>
                <div class="images3">
                    <img src="../assets/images/bulle/Frame 103.png" alt="typo styles">
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
                    <img src="../assets/images/bulle/Wireframe 1.png" alt="exemple">
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
                    <img class="picture2" src="../assets/images/bulle/on boarding avec dr bulle 1.png"
                        alt="first screen">
                    <img class="picture1" src="../assets/images/bulle//01.00 - Accueil V1.png" alt="first screen">
                </div>
                <h3>B. Méditation et lecteur média</h3>
                <div class="image6">
                    <img src="../assets/images/bulle/02.png" alt="meditation">
                    <img src="../assets/images/bulle/4.png" alt="meditation">
                    <img src="../assets/images/bulle/5.png" alt="meditation">
                </div>
                <div class="image7">
                    <img src="../assets/images/bulle/2.png" alt="meditation">
                    <img src="../assets/images/bulle/03.png" alt="meditation">
                    <img src="../assets/images/bulle//04.png" alt="meditation">
                </div>
                <h3>C. le SOS</h3>
                <div class="image8">
                    <img src="../assets/images/bulle/05.png" alt="sos">
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
                    <img src="../assets/images/bulle/Test 1 1.png" alt="atelier ideation">
                </div>
                <p>5 secondes en moyenne le test</p>
                <p>78% des testeurs ont cliqué sur le CTA SOS Dr. Bülle</p>
                <p>92% ont réussi de manière directe le parcours</p>
                <h3 class="yellow">Deuxième scénario :</h3>
                <div class="image10">
                    <img src="../assets/images/bulle/test 2 1.png" alt="atelier ideation">
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
                    <img src="../assets/images/bulle/question.png" alt="question">
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
                    <img src="../assets/images/bulle/après sus 2 écran 1.png" alt="iteration">
                    <img src="../assets/images/bulle/après sus 1 écran 1.png" alt="iteration">
                </div>
                <div class="image13">
                    <img src="../assets/images/bulle/après sus 3 écran 1.png" alt="iteration">
                    <img src="../assets/images/bulle/après sus 4 écran 1.png" alt="iteration">
                </div>
                <p class="subtitle6">B. Deuxième test SUS</p>
                <h3>Effectuer un deuxième test SUS sur le dernier écran (celui du player)</h3>
                <div class="image14">
                    <img src="../assets/images/bulle/question2.png" alt="iteration">
                </div>
                <h3>Itération des maquettes :</h3>
                <div class="image15">
                    <img src="../assets/images/bulle/après sus2 1.png" alt="iteration">
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
#bulle {
    background-color: #020717;
}

@media (max-width: 1140px) {
    #bulle {
        min-height: 100%;
    }
}

#bulle h1 {
    color: white;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    margin-top: 0rem;
    padding-top: 10rem;
}

.tools {
    margin-left: auto;
    margin-right: auto;
    width: 1128px;
    height: 422px;
}

@media (max-width: 1140px) {
    .tools {
        width: 90%;
        height: auto;
    }
}

.tools h2 {
    color: white;
    font-weight: 700;
    font-size: 30px;
    line-height: 36.36px;
    margin-top: 50px;
}

.tools img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
}

.tools p {
    color: white;
    font-size: 18px;
    line-height: 24px;
    font-weight: lighter;
}

.tools .logo {
    display: flex;
    gap: 20px;
}

.box {
    border: 1px solid #D8D8D8;
    border-radius: 10px;
    background-color: #D8D8D8;
    width: 880px;
    height: 480px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
}

@media (max-width: 890px) {
    .box {
        width: 90%;
        height: auto;
    }
}

.box img {
    width: 181px;
    height: 332px;
    object-fit: cover;
    margin-bottom: 25px;
}

.box .images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 74px 99px 74px 99px;
    gap: 70px;
}

@media (max-width: 890px) {
    .box .images {
        flex-direction: row;
        padding: 0;
        gap: 10px;
        align-items: center;
        margin-top: 7%;
    }

    .box .images img {
        width: 100%;
        height: auto;
        padding: 10px;
    }
}

.info {
    width: 1128px;
    height: 203px;
}

@media (max-width: 1140px) {
    .info {
        width: 90%;
        height: auto;
    }
}

.info strong {
    font-weight: bold;
}

.proposition {
    width: 1128px;
    height: 236px;
}

@media (max-width: 1140px) {
    .proposition {
        width: 90%;
        height: auto;
    }
}

.proposition strong {
    font-weight: bold;
}

.search {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 2644px;
    border: 1px solid #2E9262;
    border-radius: 10px;
    background-color: #2E9262;
    margin-right: auto;
    margin-left: auto;
    margin-top: 280px;
}

@media (max-width: 1140px) {
    .search {
        width: 90%;
        height: auto;
        margin-top: auto;
    }

    .search .content {
        padding-right: 10px;
    }
}



.title {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 36px;
    background: #FFFFFF;
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 20px;
    padding: 10px;
}

.title h2 {
    font-size: 30px;
    line-height: 36px;
    color: #1A2E70;
}

.content h3 {
    font-size: 24px;
    line-height: 29px;
    color: white;
    margin-left: 20px;
    font-weight: 500;
}

.content p {
    font-size: 20px;
    line-height: 24px;
    color: white;
    margin-left: 20px;
    font-weight: lighter;
    margin-bottom: 1.5rem;
    width: 80%;
}

.content strong {
    font-weight: bold;
}

.content .subtitle1 {
    font-size: 24px;
    line-height: 30px;
    color: white;
    font-weight: 500;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    background: #2F4692;
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 20px;
    padding: 10px;
    width: fit-content;
    flex-wrap: wrap;
}

@media (max-width: 1000px) {
    .content .subtitle1 {
        max-width: 75%;
        min-width: 75%;
    }
}

.image1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    width: 1109px;
    height: 373px;
    justify-content: center;
}

@media (max-width: 1140px) {
    .image1 {
        flex-direction: column;
        gap: 0;
        height: auto;
        width: auto;
    }

    .image1 img {
        width: 95%;
        height: auto;
    }
}

.image1 img {
    max-height: 353px;
    border-radius: 5px;
}

.content .subtitle2 {
    font-size: 24px;
    line-height: 30px;
    color: white;
    font-weight: 500;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    background: #2F4692;
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 20px;
    padding: 10px;
    width: fit-content;
    flex-wrap: wrap;
}

.image2 {
    display: flex;
    justify-content: center;
}

.image2 img {
    width: 1058px;
    height: 463px;
}

@media (max-width: 1140px) {
    .image2 img {
        width: 90%;
        height: auto;
    }
}

.content .conclusion {
    font-size: 20px;
    line-height: 24px;
}

.content .subtitle3 {
    font-size: 24px;
    line-height: 30px;
    color: white;
    font-weight: 500;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    background: #2F4692;
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 20px;
    padding: 10px;
    width: fit-content;
    flex-wrap: wrap;
}

.judith {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.judith .face {
    width: 546px;
    height: 317px;
}

.judith .graphic {
    width: 1064px;
    height: 564px;
}

@media screen and (max-width: 1140px) {
    .judith .face {
        width: 90%;
        height: auto;
    }

    .judith .graphic {
        width: 90%;
        height: auto;
        margin-bottom: 2rem;
    }
}

.graphics {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 736px;
    border: 1px solid #F8BB90;
    border-radius: 10px;
    background-color: #F8BB90;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
}

.graphics h3 {
    color: #1A2E70;
}

.graphics p {
    color: #1A2E70;
}


@media (max-width: 1140px) {
    .graphics {
        width: 90%;
        height: auto;
    }
}

.images2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    gap: 40px;
    width: 1108px;
    height: 254px;
}

@media screen and (max-width: 1140px) {
    .images2 {
        flex-direction: row;
        gap: 10px;
        height: auto;
        width: auto;
        padding-left: 20px;
    }

    .graphics .images2 img {
        width: 100%;
        height: auto;
    }

}

@media (max-width: 500px) {
    .images2 {
        flex-direction: column;
        gap: 0;
        height: auto;
        width: auto;
        padding-left: 20px;
    }

    .graphics .images2 img {
        max-width: 95%;
    }

}

.images3 {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    width: 857px;
    height: 165px;
    padding-left: 20px;
}

@media screen and (max-width: 1140px) {
    .images3 {
        flex-direction: row;
        gap: 10px;
        height: auto;
        width: auto;
        padding-left: 20px;
    }

    .graphics .images3 img {
        width: 85%;
        height: auto;
        margin-bottom: 1rem;
    }

}

.wireframe {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 676px;
    border: 1px solid #FFDA91;
    border-radius: 10px;
    background-color: #FFDA91;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
}

@media (max-width: 1140px) {
    .wireframe {
        width: 90%;
        height: auto;
    }
}

.wireframe h3 {
    color: #1A2E70;
}

.wireframe p {
    color: #1A2E70;
    width: auto;
}

.image4 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    gap: 40px;
    width: 1109px;

}

@media (max-width: 1140px) {
    .image4 {
        flex-direction: column;
        gap: 0;
        height: auto;
        width: auto;
    }

    .image4 img {
        width: 95%;
        height: auto;
    }

    .wireframe p {
        width: 90%;
    }
}

.image4 img {
    max-height: 445px;
}

.maquetage {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 3313px;
    border: 1px solid #2F4692;
    border-radius: 10px;
    background-color: #2F4692;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
}

@media (max-width: 1140px) {
    .maquetage {
        width: 90%;
        height: auto;
    }
}

.maquetage h3 {
    color: white;
}

.maquetage p {
    color: white;
    width: auto;
}

.image5 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    gap: 40px;
    width: 1109px;

}

.image5 .picture2 {
    width: 291px;
    height: 583.34px;
}

.image5 .picture1 {
    width: 291px;
    height: 824px;
}

@media (max-width: 1140px) {
    .image5 {
        height: auto;
        width: auto;
    }

    .image5 .picture1 {
        width: 95%;
        height: auto;
    }

    .image5 .picture2 {
        width: 95%;
        height: auto;
    }
}

.image6 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 40px;
    width: auto;
}

.image6 img {
    width: 291px;
    height: 778.42px;
}

@media screen and (max-width: 1140px) {

    .image6 {
        gap: 0;
        height: auto;
        width: auto;
    }

    .image6 img {
        width: 90%;
        height: auto;
    }
}

.image7 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 40px;
    width: auto;
    margin-top: 30px;
}

.image7 img {
    width: 291px;
    height: 571.97px;
}

@media screen and (max-width: 1140px) {

    .image7 {
        gap: 0;
        height: auto;
        width: auto;
    }

    .image7 img {
        width: 90%;
        height: auto;
    }
}

.image8 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 40px;
    width: auto;
}

.image8 img {
    width: 375px;
    height: 736.05px;
}

@media screen and (max-width: 1140px) {

    .image8 {
        gap: 0;
        height: auto;
        width: auto;
    }

    .image8 img {
        width: 90%;
        height: auto;
    }
}

.testing {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 1565px;
    border: 1px solid #2E9262;
    border-radius: 10px;
    background-color: #2E9262;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
}

@media (max-width: 1140px) {
    .testing {
        width: 90%;
        height: auto;
    }

    .testing .content {
        padding-right: 10px;
    }
}



.testing .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 56px;
    width: 490px;
    background: #FFFFFF;
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 20px;
    padding: 10px;
}

@media screen and (max-width: 1140px) {
    .testing .title {
        max-width: 80%;
        min-width: 80%;
    }
}

.title h2 {
    font-size: 30px;
    line-height: 36px;
    color: #1A2E70;
}

.content h3 {
    font-size: 24px;
    line-height: 29px;
    color: white;
    margin-left: 20px;
    font-weight: 500;
}

.testing .content p {
    font-size: 20px;
    line-height: 24px;
    color: white;
    margin-left: 20px;
    font-weight: lighter;
    margin-bottom: 1.5rem;
    width: auto;
}

.content strong {
    font-weight: bold;
}

.content .yellow {
    color: #FFDA91;
    font-weight: 600;
}

.image9 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 1128px;
}

.image9 img {
    height: 307.19px;
}

@media (max-width: 1140px) {
    .image9 {
        width: auto;
        height: auto;
    }

    .image9 img {
        width: 90%;
        height: auto;
    }
}

.image10 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 1128px;
}

.image10 img {
    height: 429.28px;
}

@media (max-width: 1140px) {
    .image10 {
        width: auto;
        height: auto;
    }

    .image10 img {
        width: 90%;
        height: auto;
    }
}

.iteration {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 2970px;
    border: 1px solid #F8BB90;
    border-radius: 10px;
    background-color: #F8BB90;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
    margin-bottom: 4rem;
}

@media (max-width: 1140px) {
    .iteration {
        width: 90%;
        height: auto;
    }

    .iteration .content {
        padding-right: 10px;
    }
}

.iteration h3 {
    color: #1A2E70;
    font-weight: 600;
}

.iteration .blue {
    color: #1A2E70;
    width: auto;
    font-weight: normal;
}

.content .subtitle5 {
    font-size: 24px;
    line-height: 30px;
    color: white;
    font-weight: 500;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    background: #2F4692;
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 20px;
    padding: 10px;
    width: fit-content;
    flex-wrap: wrap;
}

.image11 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 40px;
    width: 1128px;
}

.image11 img {
    height: 203px;
}

@media (max-width: 1140px) {
    .image11 {
        width: auto;
        height: auto;
    }

    .image11 img {
        width: 90%;
        height: auto;
    }
}

.more {
    margin-top: 3rem;
}

.more h3 {
    margin-bottom: 2rem;
}

.more .blue {
    margin-bottom: -1.2rem;
}

.more ul {
    margin-left: 14px;
}

.more li {
    color: #1A2E70;
    color: #1A2E70;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
}


.more .two {
    margin-bottom: 3rem;
    margin-top: -1.2rem;
}

.image12 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 1128px;
    margin-bottom: 3rem;
    gap: 40px;
    height: auto;
}

.image12 img {
    width: 375px;
}

@media screen and (max-width: 1140px) {

    .image12 {
        gap: 0;
        height: auto;
        width: auto;
    }

    .image12 img {
        width: 90%;
        height: auto;
    }
}

.image13 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 1128px;
    gap: 40px;
    height: auto;
}

.image13 img {
    width: 375px;
}

@media screen and (max-width: 1140px) {

    .image13 {
        gap: 0;
        height: auto;
        width: auto;
    }

    .image13 img {
        width: 90%;
        height: auto;
    }
}

.content .subtitle6 {
    font-size: 24px;
    line-height: 30px;
    color: white;
    font-weight: 500;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    background: #2F4692;
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 20px;
    padding: 10px;
    width: fit-content;
    flex-wrap: wrap;
}

.image14 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 40px;
    width: 1128px;
    margin-bottom: 3rem;
}

.image14 img {
    height: 203px;
}

@media (max-width: 1140px) {
    .image14 {
        width: auto;
        height: auto;
    }

    .image14 img {
        width: 90%;
        height: auto;
    }
}

.image15 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 1128px;
}

.image15 img {
    height: 567px;
    margin-bottom: 2rem;
}

@media (max-width: 1140px) {
    .image15 {
        width: auto;
        height: auto;
    }

    .image15 img {
        width: 90%;
        height: auto;
    }
}
</style>