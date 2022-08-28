<template>
    <div class="social py-5 px-3 px-md-3">
        <div class="container">
            <div class="py-5 px-3 row">
                <div class="col-xl-6">
                    <h3 class="font-weight-bold">Stay connected with cyberdude team</h3>
                    <h5>Join our telegram channel to stay up to date.</h5>
                </div>
                <div class="col-xl-6">
                    <a href="https://t.me/cyberdudechannel" target="_blank">
                        <button class="card bg-primary my-xl-3 d-inline my-2" style="width: 12rem;border-radius: 2rem;border:none">
                            <div class="card-body mx-2 p-1">
                                <img :src="telegram" class="d-inline" alt="telegram" height="35px">
                                <p class="d-inline p-2 font-weight-bold" style="color:white">Join Telegram</p>
                            </div>
                        </button>
                    </a>
                    <a href="https://www.youtube.com/c/cyberdudenetworks" target="_blank">
                        <button class="card bg-danger ml-sm-2 my-xl-3 d-inline my-2" style="width: 12rem;border-radius: 2rem;border:none">
                            <div class="card-body mx-2  p-1">
                                <img :src="youtube" class="d-inline" alt="telegram" height="35px">
                                <p class="d-inline px-4 font-weight-bold" style="color:white">YouTube</p>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.social {
    font-family: 'Nunito', sans-serif;
    color: white;
}
.container {
    background: #7395ae;
    border-radius: 10px;
}
a {
    text-decoration: none;
}
a:visited {
  text-decoration: none;
}
</style>

<script>
import telegram from '../assets/image/Telegram.svg'
import youtube from '../assets/image/youtube.svg'
export default {
    data() {
        return {
            telegram : telegram,
            youtube : youtube,
        }
    },
}
</script>