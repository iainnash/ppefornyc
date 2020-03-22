<template>
<div class="container">
<div class="bg" />
<div class="goal">
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