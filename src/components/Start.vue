<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div>
        <form>
            <input type="text" v-model="world">
            <button>Iniciar Jogo</button>
            <input type="text" v-model="letter" maxlength="1">
            <button v-on:click="check">Checar</button>

        </form>

        <ul>
            <li v-for="letter_space in world"></li>
        </ul>

        <div v-if="isWinner">
            Winner!!!
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            world: 'Douglas',
            letter: '',
            started: false,
            isWinner: false
        }
    },
    methods: {
        check: function () {
            alert('test: ' + this.world);
        }
    }
}
</script>

<style scoped>
    input {
        width: 180px;
        height: 35px;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        height: 35px;
    }

    ul li {
        list-style: none;
        display: inline-block;
        width: 35px;
        height: 42px;
        border: 2px solid gray;
        margin: 0 2px;
    }
</style>