<template>
<div class="container">
<div class="bg" />
<div class="goal">
    <div class="flex mb-2 mt-2 text-2xl">
        <div class="text-white flex-grow bg-black p-2">On now: {{currentDj()}}</div>
        <div class="text-white bg-black p-2">Up next: {{nextDj()}}</div>
    </div>
    <donation-goal />
</div>
</div>
</template>
<script>
import DonationGoal from '../components/DonationGoal';

export default {
    components: {
        [DonationGoal.name]: DonationGoal,    
    },
    methods: {
        currentDj() {
            const now = this.djs.find((dj) => {
                return (this.hour <= dj.hour);
            });
            let djName = 'None';
            if (now) {
               djName = now.name; 
            }
            return djName;
        },
        nextDj() {
            let atDj, nextDj = 'None';
            for (var i = 0; i < this.djs.length; i++) {
                if (this.hour <= this.djs[i].hour) {
                    atDj = i;
                    break;
                }
            }
            if (atDj < 3) {
                nextDj = this.djs[i+1].name;
            }
            return nextDj;
        }
    },
    data () {
        return {
            hour: (((new Date()).getUTCHours() + 1) % 24),
            djs: [
                {hour: 0, name: 'Pari'},
                {hour: 1, name: 'jhan'},
                {hour: 2, name: '@tekbeatz'},
                {hour: 3, name: '+/- @plusminusmusic'},
            ],
        }
    }
};
</script>
<style scoped>
.bg::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.4;
  background: url('../assets/logo.jpg') repeat;
  background-size:20%;
  background-position:-20px -300px;
}
.goal{z-index:1;position:relative;width:auto;}
</style>