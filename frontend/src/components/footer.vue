<template>
    <div class="footer">
        <div class="container py-4">
            <div class="row">
                <div class="col-xl-6 mb-0 col-12 text-xl-left text-center rights">
                    <small class="d-inline">© {{ date }} <a style="font-size:1em" href="">CyberDude Networks Pvt. Ltd.</a>  <p class="d-inline"> | </p> All rights reserved</small>
                </div>
                <div class="col-xl-6 col-12 text-center text-xl-right icons">
                    <div class="mb-xl-0 mb-2" style="font-size: 1.5em">
                        <a href="https://www.instagram.com/CdudeNetworks" target="blank">
                            <i class="fab fa-instagram" ></i>
                        </a>
                        <a href="https://www.facebook.com/CdudeNetworks" target="blank">
                            <i class="fab ml-4 fa-facebook-square"></i>
                        </a>
                        <a href="https://www.twitter.com/CdudeNetworks" target="blank">
                            <i class="fab ml-4 fa-twitter-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/cyberdude-networks" target="blank">
                            <i class="fab ml-4 fa-linkedin"></i>
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    font-family: 'Nunito', sans-serif;
    color: white;
}
small {
    font-size: 14px;
}
a {
    color: whitesmoke;
}
a:hover {
    color: gray;
    text-decoration: none;
}
.fa-instagram ,.fa-facebook-square, .fa-twitter-square ,.fa-linkedin ,.rights{
    size: 1em;
    color: whitesmoke !important
}
.fa-instagram:hover ,.fa-facebook-square:hover, .fa-twitter-square:hover ,.fa-linkedin:hover {
    color: rgba(128, 128, 128, 0.5) !important
}
@media only screen and (max-width: 1200px) {

.row {
    position: relative;
}
.row .rights {
    position: absolute;
    top: 100%;
    width: 100%;
}
}
@media only screen and (max-width: 400px) {
    small {
        font-size: 12px;
    }
}
@media only screen and (max-width: 350px) {
    small {
        font-size: 10px;
    }
}
@media only screen and (max-width: 350px) {
    small {
        font-size: 9px;
    }
}
</style>

<script>
export default {
    data() {
        return {
            date : ''
        }
    },
    mounted() {
        this.date = new Date().getFullYear()
    }
}
</script>pt