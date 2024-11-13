<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const credenciais = reactive({
    email: '',
    password: ''
});
const erroLogin = ref('');

const fazerLogin = async () => {
    try {
        const response = await fetch(`http://localhost:3000/login?login=${credenciais.email}&senha=${credenciais.password}`);
        const users = await response.json();

        if (users.length > 0) {
            erroLogin.value = '';
            localStorage.setItem('isLoggedIn', 'true');
            alert('Login bem-sucedido');
            router.push('/categoria');
        } else {
            erroLogin.value = 'Usuário ou senha incorretos';
            alert('email ou senha errado');
        }
    } catch (error) {
        erroLogin.value = 'Erro ao fazer login';
        console.error('Erro:', error);
    }
};




</script>

<template>
    <main class="login-main flex align-items-center justify-content-center">
        <section class="login-container flex flex-column align-items-center justify-content-center">
            <h2 class="row-login">Login</h2>
            <div class="row-login">
                <FloatLabel>
                    <label for="email-input">Email</label> <br>
                    <input v-model="credenciais.email" type="email" id="email-input" class="input-text">        
                </FloatLabel>
            </div>
            <div class="row-login">
                <FloatLabel>
                    <label for="email-input">Senha</label> <br>
                    <input v-model="credenciais.password" type="password" id="password-input" class="input-text" />
                </FloatLabel>
            </div>
            <div class="row-login">
                <Button @click="fazerLogin" id="login-button">Entrar</Button>
            </div>
        </section>
    </main>
</template>


<style scoped lang="scss">
.login-main {
    width: 82vw;
    height: 75vh;
    background-repeat: repeat;
    background-size: cover;

    .login-container {
        width: 30vw;
        height: 70vh;
        background-color: white;

        .row-login {
            margin: 1rem 0 1rem 0;

            .input-text {
                height: 2.5rem;
                width: 250px;
            }

            #login-button {
                width: 250px;
                height: 30px;
                font-weight: bold;
                background-color: rgb(105, 15, 189);
                color: black;
                border-color: black;
            }

            #erro {
                color: tomato;
                font-size: 0.8rem;
            }
        }
    }
}

</style>