<template>
    <div class="p-aos-panel">
        <!--aos-->
        <div class="p-aos" data-aos="fade-up"  data-aos-mirror="true"
        >
            aaa
        </div>
        <div class="p-aos" data-aos="fade-right">
            bbb
        </div>
        <div class="p-aos" data-aos="fade-left">
            ccc
        </div>
    </div>
</template>

<script>
    import AOS from '../assets/utils/aos/aos'
    export default {
        name: "test",
        mounted() {
            AOS.init()
            console.log(22,AOS)
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/utils/aos/aos.css";
    .p-aos-panel {
        height: 200vh;
        padding-top: 900px;

        .p-aos {
            background-color: red;
            height: 200px;
            width: 200px;
            margin-top: 20px;
            color: white;
        }
    }
</style>