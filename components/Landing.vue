<template>
    <div class="min-h-screen bg-gradient-to-b from-white via-sky-50 to-blue-100 px-6 py-12">
        <div class="max-w-5xl mx-auto">
            <header class="text-center mb-12">
                <h1 class="text-4xl font-extrabold text-sky-700 drop-shadow-lg animate-fade-in-up">
                    🌍 Les principaux indicateurs du changement climatique
                </h1>
                <p class="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                    Découvrez les signes visibles d’un climat qui change : températures, glaciers, inondations,
                    biodiversité…
                </p>
            </header>

            <main class="space-y-12">
                <section v-for="(item, i) in indicators" :key="i"
                    class="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-transform duration-300 hover:scale-[1.01] animate-fade-in">
                    <h2 class="text-2xl font-bold text-primary mb-4">{{ item.title }}</h2>
                    <p class="text-gray-700 text-justify leading-relaxed whitespace-pre-line">
                        {{ item.content }}
                    </p>
                </section>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
const indicators = [
    {
        title: "La hausse des températures",
        content: `La hausse croissante des températures est l’un des tout premiers indicateurs de changement climatique. […]`
    },
    {
        title: "La montée des eaux",
        content: `La montée des eaux est une conséquence directe du réchauffement climatique dû à la hausse des températures. […]`
    },
    {
        title: "Augmentation de la concentration du gaz à effet de serre",
        content: `Les principaux gaz à effet de serre, notamment le dioxyde de carbone (CO2), le méthane et le protoxyde d’azote […]`
    },
    {
        title: "Le recul des glaciers et banquises",
        content: `Les glaciers et banquises désignent d’énormes blocs de glace situés majoritairement en Antarctique […]`
    },
    {
        title: "La sécheresse",
        content: `La sécheresse est un phénomène qui se traduit par un assèchement des sols, altérant le bon développement […]`
    },
    {
        title: "Les inondations",
        content: `Plusieurs raisons expliquent la survenance des inondations. Mais parmi celles-ci, le changement climatique […]`
    },
    {
        title: "La propagation d’algues",
        content: `Les eaux chaudes constituent un environnement favorisant la propagation des algues. […]`
    },
    {
        title: "Les ouragans",
        content: `Les ouragans ne sont pas intimement liés au changement climatique. Cependant, il le renforce considérablement. […]`
    },
    {
        title: "Les feux de forêt",
        content: `Le changement climatique constitue la cause de la sécheresse. En asséchant la végétation, il entraine un […]`
    },
    {
        title: "Extinction progressive de la biodiversité",
        content: `Le réchauffement climatique bouleverse le mode de vie de certaines espèces au point d’entraîner leur extinction. […]`
    },
    {
        title: "La recrudescence des effondrements de terrain",
        content: `Les effondrements de terrain sont causés par le dégel du permafrost. […]`
    },
    {
        title: "L’intensification des tempêtes",
        content: `Le réchauffement climatique renforce la fréquence et l’intensité des tempêtes. […]`
    },
    {
        title: "Les pluies extrêmes",
        content: `Quand la fréquence des pluies se dérègle et devient incontrôlable, c’est un indicateur de changement climatique. […]`
    },
    {
        title: "La diminution de l’enneigement",
        content: `Lorsque les températures s’élèvent, la neige fond plus vite et la période d’enneigement diminue. […]`
    },
    {
        title: "Dégradation accélérée du littoral et érosion",
        content: `La disparition du littoral est liée à l’érosion marine, amplifiée par la montée des eaux causée par le réchauffement climatique. […]`
    },
]
</script>

<style scoped>
@keyframes fade-in-up {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in {
    animation: fade-in-up 1s ease-out forwards;
}
</style>