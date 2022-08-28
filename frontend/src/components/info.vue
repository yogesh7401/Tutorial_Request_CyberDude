<template>
    <div class="info">
        <div class="container">
            <b-container class="bv-example-row py-5">
                <h3 class="text-sm-left text-md-center font-weight-bold mt-3">
                    Trusted by recruitment companies.
                </h3>
                <h5 class="text-muted text-sm-left text-md-center ">
                    Developers from all over the world who knows tamil recommending our initiative.
                </h5><br><br>
                <b-row class="text-center">
                    <b-col md='4'>
                        <b-card title="Subscribers" class="text-center text-muted shadow-card">
                            <b-card-text>
                                <h2>
                                    <animated-number
                                        :value="subscribers"
                                        :formatValue="formatToPrice"
                                        :duration="1000"
                                        :round='0'
                                        class="text-success"
                                    />
                                </h2>
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col md='4'>
                        <b-card title="Total views" class="text-center text-muted shadow-card">
                            <b-card-text>
                                <h2>
                                    <animated-number
                                        :value="views"
                                        :formatValue="formatToPrice"
                                        :duration="1000"
                                        :round='0'
                                        class="text-success"
                                    />
                                </h2>
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col md='4'>
                        <b-card title="Total videos" class="text-center text-muted shadow-card">
                            <b-card-text>
                                <h2>
                                    <animated-number
                                        :value="videos"
                                        :formatValue="formatToPrice"
                                        :duration="1000"
                                        :round='0'
                                        class="text-success"
                                    />
                                </h2>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row><br>
            </b-container>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import AnimatedNumber from "animated-number-vue";

export default {
    components: {
        AnimatedNumber
    },
    data() {
        return {
                subscribers: '',
                views: '',
                videos: '',
            }
        },
    mounted() {
        let obj = this
        axios
            .get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCteUj8bL1ppZcS70UCWrVfw&key='+process.env.VUE_APP_YT_KEY)
            .then(function (response) {
                obj.subscribers = response.data.items[0].statistics.subscriberCount
                obj.views = response.data.items[0].statistics.viewCount
                obj.videos = response.data.items[0].statistics.videoCount
            })
            .catch(function() {
                return true
            })
    },
    methods: {
        formatToPrice(value) {
            return `${value.toFixed(0)}`;
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.info {
    font-family: 'Nunito', sans-serif;
}
.shadow-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
@media all and (min-width: 992px) {   
    .shadow-card:hover {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 8px 22px 0 rgba(0, 0, 0, 0.29);
    }
}
@media only screen and (max-width: 400px) {
    h3 {
        font-size: 20px;
    }
    h5 {
        font-size: 18px;
    }
}
</style>