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
                <img src="../../assets/images/DIGITALOVA2.png" alt="Laylow cover Gogo">
                <img src="../../assets/images/Raw-Z.png" alt="Laylow cover Prince de Sang Mêlé">
                <img src="../../assets/images/Trinity2png.png" alt="Laylow cover Nakré">
            </div>
        </div>
        <div class="tools">
            <h2>Outils utilisés</h2>
            <img src="../../assets/images/figmalogo.png" alt="Logo Figma">
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
                    <img src="../../assets/images/neumorphism2.png" alt="benchmark inspiration">
                    <img src="../../assets/images/neumorphism1.jpeg" alt="benchmark inspiration">
                    <img src="../../assets/images/neumorphism3.png" alt="benchmark inspiration">
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
                    <img src="../../assets/images/IMG_1285.png" alt="croquis exemple">
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
                    <img src="../../assets/images/MockupDIGITALOVA2.png" alt="laylow gogo cover">
                </div>
                <div class="first">
                    <img class="frame1" src="../../assets/images/Frame42.1.png" alt="boutons spotify">
                    <img class="frame2" src="../../assets/images/Frame46.1.png" alt="boutons spotify">
                </div>
            </div>
            <p>Laylow - Prince de sang-mêlé (Projet : .RAW-Z, sortie : 2018)</p>
            <div class="double">
                <div class="blood">
                    <img src="../../assets/images/MockupRAWZ.png" alt="laylow prince de sang mêlé cover">
                </div>
                <div class="second">
                    <img class="frame3" src="../../assets/images/Frame41.1.png" alt="boutons spotify">
                    <img class="frame4" src="../../assets/images/Frame43.1.png" alt="boutons spotify">
                </div>
            </div>
            <p>Laylow - NAKRé (Projet : Trinity, sortie : 2020)</p>
            <div class="double">
                <div class="nakre">
                    <img src="../../assets/images/MockupTrinity.png" alt="laylow nakré cover">
                </div>
                <div class="third">
                    <img class="frame5" src="../../assets/images/Frame40.1.png" alt="boutons spotify">
                    <img class="frame6" src="../../assets/images/Frame44.1.png" alt="boutons spotify">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url(../../style/neumorphism.css);
</style>