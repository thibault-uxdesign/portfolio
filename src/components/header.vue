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
                    src="../assets/images/linkedin.svg" alt="linkedin" />
            </a>

            <a href="https://www.instagram.com/14coeurs/" target="_blank"><img src="../assets/images/instagram.svg"
                    alt="Ig" /></a>
        </div>
    </div>
</template>

<style scoped>
#header {
    display: flex;
    height: 60px;
    position: fixed;
    width: 100%;
    background-color: #fff;
}

#header a {
    color: #0b1b4e;
    text-decoration: none;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
}

#header .navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 0px 6px 40px;
    gap: 60px;
    flex-basis: 95%;
}

#header .link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 40px 6px 0;
    gap: 45px;
    flex-basis: 10%;
}

#header .link img {
    width: 36px;
    height: 36px;
    border-radius: 5%;
}

@media (max-width: 860px) {
    #header .link {
        gap: 25px;
        padding-right: 0;
    }

    #header .navigation {
        flex-direction: column;
        gap: 10px;
        padding-left: 0;
    }

    #header {
        flex-direction: column;
        height: auto;
        justify-content: center;
        padding: 0;
        position: inherit;
    }
}
</style>
