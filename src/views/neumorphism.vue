<script>

import Header from '../components/header.vue';

export default {
    name: 'Neumorphism',
    components: {
        Header
    }
};

</script>

<template>
    <Header></Header>
    <div id="neumorphism">
        <h1>Le Neumorphism et Laylow</h1>
        <div class="box">
            <div class="images">
                <img src="../assets/images/neumorphism/DIGITALOVA 2.png" alt="Laylow cover Gogo">
                <img src="../assets/images/neumorphism/Raw Z.png" alt="Laylow cover Prince de Sang Mêlé">
                <img src="../assets/images/neumorphism/Trinity2png.png" alt="Laylow cover Nakré">
            </div>
        </div>
        <div class="tools">
            <h2>Outils utilisés</h2>
            <img src="../assets/images/neumorphism/figma logo.png" alt="Logo Figma">
            <h2>Pourquoi ce projet ?</h2>
            <div class="info">
                <p>Travailler une nouvelle tendance d’UI Design : le neumorphism.</p>
                <p>Etant un utilisateur quotidien de Spotify, j’ai voulu <strong>imaginer le lecteur</strong> sous ce
                    design. De plus,
                    j’ai
                    mis en lumière 3 sons du<br>même artiste : <strong>Laylow</strong>. Un artiste de rap, mais pas que,
                    qui astrongorde avec
                    grand
                    intérêt l’impact des <strong>technologies</strong> sur<br> l’Homme dans certains de ses sons.

                </p>
                <p>Jouer d’une tendance “<strong>futuriste</strong>” en mettant en avant un artiste très influencé par
                    les films et
                    séries SF, a été comme une<br> évidence. </p>
            </div>
        </div>
        <div class="search">
            <div class="title">
                <h2>1. Discovery</h2>
            </div>
            <div class="content">
                <h3>Un nouveau style</h3>
                <p>“Né d’un shot dribbble, le neumorphism est défini comme un style graphique, le principe est de
                    <strong>donner
                        du réalisme<br></strong> aux éléments UI d’une interface.
                </p>
                <p>Le neumorphism doit s’apparenter au skeuomorphism mais 2.0. Toutefois contrairement à son
                    prédécesseur il se<br> veut beaucoup moins détaillé et complexe mais <strong>garde l’aspect réaliste
                        et
                        palpable</strong>.</p>
                <p>Attention cependant : la plupart des applications étant “flatélisées”, cette différence radicale
                    <strong>pourrait perturber<br> l’accessibilité et la lisibilité du contenu</strong>.” (Guillaume
                    Berthonneau, 2020,
                    Medium)
                </p>
            </div>
        </div>
        <div class="benchmark">
            <div class="title">
                <h2>2. Benchmark</h2>
            </div>
            <div class="content">
                <h3>Décrypter la création des composants</h3>
                <p>Inspirations trouvées sur Dribble
                </p>
                <div class="images2">
                    <img src="../assets/images/neumorphism/neumorphism 2.png" alt="benchmark inspiration">
                    <img src="../assets/images/neumorphism/neumorphism 1.jpeg" alt="benchmark inspiration">
                    <img src="../assets/images/neumorphism/neumorphism 3.png" alt="benchmark inspiration">
                </div>
            </div>
        </div>
        <div class="wireframe">
            <div class="title">
                <h2>3. Wireframe</h2>
            </div>
            <div class="content">
                <h3>Poser sur papier ses idées</h3>
                <p>Le meilleur moyen de perdre 0 matière est celui de prendre au plus vite son crayon
                </p>
                <div class="images3">
                    <img src="../assets/images/neumorphism/IMG_1285.png" alt="croquis exemple">
                </div>
            </div>
        </div>
        <div class="maquetage">
            <div class="title2">
                <h2>4. Maquetage</h2>
            </div>
            <p>Laylow, Jok'air - Gogo (Projet : Digitalova, sortie : 2017)</p>
            <div class="double">
                <div class="gogo1">
                    <img src="../assets/images/neumorphism/MockupDIGITALOVA 2.png" alt="laylow gogo cover">
                </div>
                <div class="first">
                    <img class="frame1" src="../assets/images/neumorphism/Frame 42.1.png" alt="boutons spotify">
                    <img class="frame2" src="../assets/images/neumorphism/Frame 46.1.png" alt="boutons spotify">
                </div>
            </div>
            <p>Laylow - Prince de sang-mêlé (Projet : .RAW-Z, sortie : 2018)</p>
            <div class="double">
                <div class="blood">
                    <img src="../assets/images/neumorphism/MockupRAW Z.png" alt="laylow prince de sang mêlé cover">
                </div>
                <div class="second">
                    <img class="frame3" src="../assets/images/neumorphism/Frame 41.1.png" alt="boutons spotify">
                    <img class="frame4" src="../assets/images/neumorphism/Frame 43.1.png" alt="boutons spotify">
                </div>
            </div>
            <p>Laylow - NAKRé (Projet : Trinity, sortie : 2020)</p>
            <div class="double">
                <div class="nakre">
                    <img src="../assets/images/neumorphism/MockupTrinity.png" alt="laylow nakré cover">
                </div>
                <div class="third">
                    <img class="frame5" src="../assets/images/neumorphism/Frame 40.1.png" alt="boutons spotify">
                    <img class="frame6" src="../assets/images/neumorphism/Frame 44.1.png" alt="boutons spotify">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#neumorphism {
    background-color: #020717;
    min-height: 500vh;
}

#neumorphism h1 {
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
    width: 159px;
    height: 345px;
    object-fit: cover;
    margin-bottom: 25px;
}

.box .images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 67px;
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
    height: 200px;
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

.search {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 369px;
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

.benchmark {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 463px;
    border: 1px solid #F8BB90;
    border-radius: 10px;
    background-color: #F8BB90;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
}

.benchmark h3 {
    color: #1A2E70;
}

.benchmark p {
    color: #1A2E70;
}


@media (max-width: 1140px) {
    .benchmark {
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

@media screen and (max-width: 1140px) and (min-width: 500px) {
    .images2 {
        flex-direction: row;
        gap: 10px;
        height: auto;
        width: auto;
        padding-left: 20px;
    }

    .benchmark .images2 img {
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

    .benchmark .images2 img {
        max-width: 95%;
    }

}

@media (max-width: 370px) {

    .maquetage .double .gogo1 {
        max-width: 185%;
        height: auto;
    }

    .maquetage .double .blood {
        max-width: 185%;
    }

    .maquetage .double .nakre {
        max-width: 185%;
    }

    .maquetage .double .first {
        max-width: 185%;
    }

    .maquetage .double .second {
        max-width: 185%;
    }

    .maquetage .double .third {
        max-width: 185%;
    }

}

.images2 img {
    width: 312px;
    height: 234px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 25px;
}

.wireframe {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 609px;
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
}

.images3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    gap: 40px;
    width: 1108px;
    height: 400px;
}

@media (max-width: 1140px) {
    .images3 {
        flex-direction: column;
        gap: 0;
        height: auto;
        width: auto;
    }

    .images3 img {
        width: 95%;
    }
}

.images3 img {
    height: 380px;
    border-radius: 5px;
    margin-bottom: 25px;
}


.maquetage {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1128px;
    height: 609px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
}

.maquetage .title2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 36px;
    border-radius: 10px;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid white;
    color: white;
}

.maquetage .title2 h2 {
    font-size: 30px;
    line-height: 36px;
    color: white;
}

.maquetage p {
    font-size: 30px;
    line-height: 36px;
    color: white;
    margin-top: 60px;
    font-weight: bold;
}

.double .first {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 546px;
    height: 350px;
    border: 1px solid #831D0B;
    border-radius: 5px;
    background-color: #831D0B;
    margin-top: 40px;
    gap: 60px;
}

.first .frame1 {
    width: 190px;
    height: 250px;
}

.first .frame2 {
    width: 130px;
    height: 185px;
}

.double .blood {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 546px;
    height: 350px;
    border: 1px solid #D5DCDC;
    border-radius: 5px;
    background-color: #D5DCDC;
    margin-top: 40px;
}

.double .nakre {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 546px;
    height: 350px;
    border: 1px solid #09A71E;
    border-radius: 5px;
    background-color: #09A71E;
    margin-top: 40px;
}

.gogo1 img {
    width: 161px;
    height: 308px;
    margin-top: 15px;
}

.blood img {
    width: 161px;
    height: 308px;
}

.nakre img {
    width: 161px;
    height: 308px;
}

.double .gogo1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 546px;
    height: 350px;
    border: 1px solid #FACB4E;
    border-radius: 5px;
    background-color: #FACB4E;
    margin-top: 40px;
}

.double .second {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 546px;
    height: 350px;
    border: 1px solid #293133;
    border-radius: 5px;
    background-color: #293133;
    margin-top: 40px;
    gap: 60px;
}

.second .frame3 {
    width: 190px;
    height: 250px;
}

.second .frame4 {
    width: 130px;
    height: 185px;
}

.double .third {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 546px;
    height: 350px;
    border: 1px solid #0A1400;
    border-radius: 5px;
    background-color: #0A1400;
    margin-top: 40px;
    gap: 60px;
}

.third .frame5 {
    width: 190px;
    height: 250px;
}

.third .frame6 {
    width: 130px;
    height: 185px;
}

.maquetage .double {
    display: flex;
    gap: 26px;
}

@media screen and (max-width: 1140px) and (min-width: 600px) {
    .maquetage .double {
        flex-direction: row;
        width: 100%;
    }

    .maquetage .double img {
        gap: 0;
    }
}

@media screen and (max-width: 600px) {
    .maquetage .double {
        flex-direction: column;
        width: 42%;
    }
}

@media (max-width: 1140px) {
    .maquetage {
        width: 90%;
        height: auto;
    }

    .maquetage .double .gogo1 {
        width: 235%;
        height: auto;
    }

    .maquetage .double .blood {
        width: 235%;
        height: auto;
        padding: 15px 0px 15px 0px;
    }

    .maquetage .double .nakre {
        width: 235%;
    }

    .maquetage .double .first {
        width: 235%;
        gap: 0;
    }

    .maquetage .double .second {
        width: 235%;
        gap: 0;
    }

    .maquetage .double .third {
        width: 235%;
        margin-bottom: 4rem;
        gap: 0;
    }
}
</style>