<script>
export default {
    name: "Header",
};
</script>

<template>
    <div id="header">
        <div class="navigation">
            <p><a href="#accueil">Accueil</a></p>

            <p><a href="#projets">Mes projets</a></p>

            <p><a href="#competences">Qui suis-je ?</a></p>

            <p><a href="#contact">Contact</a></p>
        </div>
        <div class="link">
            <a href="https://www.linkedin.com/in/thibault-b%C3%A9ral-de-vaulx/" target="_blank"><img
                    src="../../assets/images/linkedin.svg" alt="linkedin" />
            </a>

            <a href="https://www.instagram.com/14coeurs/" target="_blank"><img src="../../assets/images/instagram.svg"
                    alt="Ig" /></a>
        </div>
    </div>
</template>

<style scoped>
@import url(../../style/header.css);
</style>
