<template>
   <button :disabled="disabled" @click="click">
       {{text}}
    </button>
</template>

<style scoped>
    button {
        font-size: 1.1em;
        background: lightblue;
        padding: 8px 14px;
        border-radius: 4px;
        border: 0 none;
        cursor: pointer;
    }
    button:disabled {
        background: #aaa;
        cursor: not-allowed;
    }
    button:hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    }
</style>
<script>
export default {
    name: 'styled-button',
   props: ['text', 'click', 'disabled'], 
}
</script>