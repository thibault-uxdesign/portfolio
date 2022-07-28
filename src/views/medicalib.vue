<script>

import Header from '../components/header.vue';

export default {
    name: 'Medicalib',
    components: {
        Header
    }
};

</script>

<template>
    <Header></Header>
    <div id="medicalib">
        <h1>Refonte de l’Espace Professionnel de Medicalib</h1>
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
                <img src="../assets/images/medicalib/figma logo.png" alt="Logo Figma">
                <img src="../assets/images/medicalib/miro-2 1.png" alt="Logo Miro">
            </div>
            <h2>Pourquoi ce projet ?</h2>
            <div class="info">
                <p>L’Espace Professionnel de Medicalib est disponible pour tous les professionnels de santé ayant
                    souscrit un abonnement<br> chez Medicalib.<br>
                    Il leur permet de modifier leur zone d’intervention, de décocher des soins qu’ils ne souhaitent plus
                    recevoir dans leurs<br> demandes de soin, consulter leurs factures....</p>
                <p>
                    Cependant, plus de 80% du traffic est réalisé sur desktop, alors que le responsive web mobile n’est
                    pas adapté. Le design<br> system utilisé n’est pas l’actuel (font, couleurs, composants). En
                    regardant les chiffres, l’Espace Professionnel est peu<br> utilisé et constitue de belles
                    opportunités d’amélioration.</p>
            </div>
        </div>
        <div class="search">
            <div class="title">
                <h2>1. Discovery</h2>
            </div>
            <div class="content">
                <h3>Un espace utile qui ne doit pas être délaissé</h3>
                <p>J’ai reccueillis l’ensemble des verbatims issues de multiples User Research sur différents sujets,
                    qui citaient l’Espace<br> Professsionnel, en positif comme en négatif.
                </p>
                <p>Quel a été le constat ? </p>
                <p>Un espace peu connu où on a du mal à comprendre sa plue-value. Une diffrence flagrante d’UX/UI avec
                    l’app Medicalib Pro. Des problèmes de responsive web mobile qui poussaient les professionnels de
                    santé a appelé le support pour par exemple : modifier sa zone d’intervention (action que les
                    professionnels font régulièrement pour avoir davantage de demandes de soin).
                </p>
                <h3>Verbatims de professionnels de santé</h3>
                <div class="block">
                    <div class="block1">
                        <p>“Il y a eu un temps je le faisais, ça me
                            permettait d’avoir le nombre de demande
                            que j’avais etc., ça fais longtemps que<br>
                            je l’ai pas fais...” (<strong>Louise</strong>)</p>
                    </div>
                    <div class="block2">
                        <p>“Pour le moment j’en ai pas trouvé l’utilité, je<br> me suis peut-être pas assez penché
                            dessus”
                            (<strong>Anne</strong>)</p>
                    </div>
                </div>
                <div class="block">
                    <div class="block3">
                        <p>“J’ai voulu changer la zone géographique, dans<br> l’Espace Pro, je l’ai modifié, seulement
                            ça m’a<br> pris un temps fou, ça bouge à chaque fois, j’ai du<br> recommencer à chaque
                            fois.” (<strong>Anita</strong>)</p>
                    </div>
                    <div class="block4">
                        <p>“L’appli a une présentation tout à fait adaptée<br> à un téléphone portable alors que
                            l’espace<br>
                            Pro...” (<strong>Raphaëlle</strong>)</p>
                    </div>
                </div>
                <div class="block">
                    <div class="block5">
                        <p>“Modifier le secteur d’intervention c’est plus facile de le modifier quand on est sur pc que
                            par<br> téléphone. faut être assez minutieux, c’est pour ça que j’y vais pas forcément. Le
                            fait qu’il me faut<br> forcément le PC, que je sois bien posé, que je m’authentifie.”
                            (<strong>Maureen</strong>)</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="idea">
            <div class="title">
                <h2>2. Idéation</h2>
            </div>
            <div class="content">
                <h3>Avant de repartir à zéro il faut se poser les bonnes questions : être dans le “problème” avant
                    d’être dans la solution.</h3>
                <p>Un certain nombre de questions entouraient la refonte de cet espace :<br>
                    Pour quel type de professionnel de santé devant nous refondre cet espace ?<br>
                    Comment l’utilise t-il ?<br>
                    Qu’est-ce qui fonctionne bien actuellement ?<br>
                    Quel est le positionnement produit de cet espace ?<br>
                </p>
                <p class="subtitle6">A. L’état des lieux</p>
                <h3>Atelier Retrospective, avant d’avancer dans une nouvelle direction (Miro)</h3>
                <p>Partie-prenante de l’atelier : <strong>Alice</strong> (UX/UI Designer), <strong>Guillaume</strong>
                    (Lead PM) et <strong>Caroline</strong> (PM)</p>
                <div class="swot">
                    <img src="../assets/images/medicalib/Retrospective 1.png" alt="retrospective">
                </div>
                <p class="subtitle7">B. Quelles sont les typologies de professionnels qui utilisent l’espace ?</p>
                <h3>Atelier Empathy Map (Miro)</h3>
                <p>Partie-prenante de l’atelier : <strong>Alice</strong> (UX/UI Designer), <strong>Guillaume</strong>
                    (Lead PM) et <strong>Caroline</strong> (PM)</p>
                <h3>Atelier Personas (Miro)</h3>
                <p>Partie-prenante de l’atelier : <strong>Alice</strong> (UX/UI Designer), <strong>Guillaume</strong>
                    (Lead PM) et <strong>Caroline</strong> (PM)</p>
                <p>Nous avons établie une typologie d’utilisateurs de l’Espace Pro avec <strong>3 personas :</strong>
                </p>
                <div class="board">
                    <img src="../assets/images/medicalib/Aimée.png" alt="personas">
                    <img src="../assets/images/medicalib/Adrien.png" alt="personas">
                </div>
                <div class="board">
                    <img class="yellow" src="../assets/images/medicalib/Stéphanie.png" alt="personas">
                </div>
            </div>
        </div>
        <div class="audit">
            <div class="title">
                <h2>3. Audit UX & Use case</h2>
            </div>
            <div class="content">
                <h3>Explorer l’Espace Pro pour comprendre les différents scénarios d’usages (sur mobile et desktop dans
                    un second temps)
                </h3>
            </div>
        </div>
    </div>

</template>

<style scoped>
#medicalib {
    background-color: #020717;
    min-height: 500vh;
}

#medicalib h1 {
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

.search {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 870px;
    border: 1px solid #2E9262;
    border-radius: 10px;
    background-color: #2E9262;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
}

@media (max-width: 1140px) {
    .search {
        width: 90%;
        height: auto;
    }

    .search .content {
        padding-right: 10px;
        width: 95%;
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
}

.content p {
    font-size: 20px;
    line-height: 24px;
    color: white;
    margin-left: 20px;
    font-weight: lighter;
    margin-bottom: 1.5rem;
}

.content strong {
    font-weight: bold;
}

.block {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
}

.block p {
    color: #1A2E70;
    font-size: 22px;
    font-weight: 500;
}

.block1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 10px 0px 0px;
    border-radius: 10px;
    gap: 10px;
    width: 446px;
    height: 128px;
    background-color: #ACFFD7;
}

.block2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 10px 0px 0px;
    border-radius: 10px;
    width: 476px;
    height: 101px;
    background-color: #ACFFD7;
}

.block3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 540px;
    height: 128px;
    background-color: #ACFFD7;
}

.block3 p {
    margin-left: 0;
}

.block4 p {
    margin-left: 0;
}

.block5 p {
    margin-left: 0;
}

.block4 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 10px 0px 0px;
    border-radius: 10px;
    width: 510px;
    height: 101px;
    background-color: #ACFFD7;
}

.block5 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 10px 0px 0px;
    border-radius: 10px;
    width: 1070px;
    height: 116px;
    background-color: #ACFFD7;
}

@media screen and (max-width: 1140px) {
    .block {
        width: 95%;
        height: auto;
    }

    .block1 {
        width: 100%;
        height: auto;
    }

    .block2 {
        width: 100%;
        height: auto;
    }

    .block3 {
        height: auto;
        width: 100%;
    }

    .block3 p {
        margin-left: 20px;
        margin-right: 10px;
    }

    .block4 {
        width: 100%;
        height: auto;
    }

    .block4 p {
        margin-left: 20px;
    }

    .block5 {
        width: 100%;
        height: auto;
    }

    .block5 p {
        margin-left: 20px;
    }

}

@media screen and (max-width: 620px) {
    .block {
        flex-direction: column;
        width: 95%;
        height: auto;
    }
}

.idea {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 1925px;
    border: 1px solid #F8BB90;
    border-radius: 10px;
    background-color: #F8BB90;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
}

.idea h3 {
    color: #1A2E70;
}

.idea p {
    color: #1A2E70;
}


@media (max-width: 1140px) {
    .idea {
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

    .idea .images2 img {
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

    .idea .images2 img {
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

    .idea .images3 img {
        width: 85%;
        height: auto;
        margin-bottom: 1rem;
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

.swot {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    margin-top: 2rem;
}

.swot img {
    width: 579px;
    height: 549px;
}

@media screen and (max-width: 1140px) {
    .swot {
        width: auto;
        height: auto;
    }

    .swot img {
        width: 90%;
        height: auto;
    }
}

.content .subtitle7 {
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

@media screen and (max-width: 1140px) {
    .content .subtitle7 {
        max-width: 75%;
        min-width: 75%;
        ;
    }
}

.board {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 60px;
    margin-bottom: 30px;
    margin-top: 2rem;
}

.board img {
    width: 384px;
    height: 216px;
}


@media screen and (max-width: 1140px) {
    .board {
        width: 90%;
        height: auto;
        gap: 20px;
        margin-left: 20px;
    }

    .board img {
        width: 90%;
        height: auto;
    }

    .board .yellow {
        width: 50%;
        height: auto;
    }
}

.audit {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 1877.98px;
    border: 1px solid #FFDA91;
    border-radius: 10px;
    background-color: #FFDA91;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
}

.audit h3 {
    color: #1A2E70;
}

.audit p {
    color: #1A2E70;
}

@media (max-width: 1140px) {
    .audit {
        width: 90%;
        height: auto;
    }

    .audit .content {
        padding-right: 10px;
        width: 95%;
    }
}
</style>