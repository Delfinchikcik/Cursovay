<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="text-center logo">
          <q-avatar class="logo">
            <img src="\logo.png" alt="Герб" />
          </q-avatar>
          <div>
            <p class="title">Путеводитель по Ялте</p>
            <q-tabs class="tab">
              <q-route-tab to="/" label="Главная" />
              <q-route-tab to="/HistoryPage" label="История" />
              <q-route-tab to="/SightsPage" label="Достопримечательности" />
              <q-route-tab to="/BeachPage" label="Пляжи" />
              <q-route-tab to="/EntertainmentPage" label="Развлечения" />
              <q-route-tab to="/HotelsPage" label="Гостиницы" />
            </q-tabs>
          </div>
          <q-avatar class="logo">
            <img
              src="\logo.png"
              alt="Герб"
            />
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
      <div
      class="fixed-bottom"
      style="display: flex; top: 555px; justify-content: right; width: 100px; height: 100px;"
    >
      <div class="float-right">
        <q-dialog v-model="dialog" :position="position" class="float-right">
          <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
              <div class="chat_container q-pb-sm">
                <div class="chat_header">Чат</div>
                <div class="chat_body">
                <q-chat-message
                  v-for="(message, index) in chatMessages"
                  :key="index"
                  :sent="message.sent"
                  :text-color="message.textColor"
                  :bg-color="message.bgColor"
                >
                  <template v-slot:name>{{ message.name }}</template>
                  <template v-slot:avatar>
                    <img class="q-message-avatar" :src="message.avatar" />
                  </template>
                  <div>{{ message.text }}</div>
                </q-chat-message>
                <q-chat-message
                  sent
                  text-color="white"
                  bg-color="primary"
                  v-if="newMessageText"
                >
                  <template v-slot:name>me</template>
                  <template v-slot:avatar>
                    <img
                      class="q-message-avatar q-message-avatar--sent"
                      src="\аватар_пользователь.png"
                    />
                  </template>
                  <q-spinner-dots size="2rem" />
                </q-chat-message>
              </div>
              </div>

              <q-input
                dark
                dense
                standout
                v-model="newMessageText"
                class="q-ml-md input_area"
                placeholder="Введите ваше сообщение"
                @keyup.enter="sendMessage"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="newMessageText"
                    name="send"
                    class="cursor-pointer"
                    @click="sendMessage"
                  />
                </template>
              </q-input>
            </div>
          </div>
        </q-dialog>
      </div>
    </div>
    <q-btn class="chat_icon" color="primary" icon-right="mail" @click="open('right')" />
    </q-page-container>
    <q-footer elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="flex column items-center justify-center">
          <div class="link_box">
            <a
              href="https://www.mediayalta.ru/"
              target="blank"
              class="btn_link"
            >
              <img class="logo_link" src="media.png" alt="logo" />
            </a>
            <a
              href="https://vk.com/in_yalta"
              target="blank"
              class="btn_link"
            >
              <img class="logo_link" src="\vk.png" alt="logo" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCN7chNAa8Qq2fxlsHNUy58Q"
              target="blank"
              class="btn_link"
            >
              <img class="logo_link" src="\ютуб.png" alt="logo" />
            </a>
          </div>
          <div class="footer_copy">&#xa9; Ялта 2024</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref} from 'vue';
const dialog = ref(false);
const position = ref("right");
const newMessageText = ref("");
const open = (position) => {
  dialog.value = true;
  position.value = position;
};
const chatMessages = ref([{
  name: "Рустем",
  avatar: "\аватар_админ.png",
  text: 'Добро пожаловать в город счастья дорогой гость!',
  sent: false,
  textColor: "black",
  bgColor: "white",
},
{
  name: "Рустем",
  avatar: "\аватар_админ.png",
  text: 'Здесь вы можете задать интересующие вас вопросы и получить на них ответы.',
  sent: false,
  textColor: "black",
  bgColor: "white",
}]);
const sendMessage = () => {
  if (newMessageText.value != "") {
    chatMessages.value.push({
      name: "me",
      avatar: "\аватар_пользователь.png",
      text: newMessageText.value,
      sent: true,
      textColor: "white",
      bgColor: "primary",
    });
    newMessageText.value = "";
  } else {
    let catcher = document.querySelector(".input_area");
    catcher.classList.add("shake");
    setTimeout(() => {
      catcher.classList.remove("shake");
    }, 1000);
  }
};
</script>

<style>
.header{
  background-color: #fff;
}
.footer_copy {
  font-size: 20px;
}
.logo {
  width: 100px;
  height: 100px;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
}

.title{
  font-size: 40px;
  margin: 0 auto;
}
.tab {
  border-top: 1px solid;
  max-width: 1000px;
  margin: 0 auto;
}
.logo_link {
  width: 45px;
  height: 40px;
  border-radius: 30%;
  background-color: #fff;
}
.link_box {
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding-top: 10px;
}

/* Стили для чата */
.input_area {
  border-radius: 20px;
  background-color: #555151;
}

.chat_container {
  background-color: #9cc4d6;
  border-radius: 24px;
}
.chat_body{
  padding: 10px;
}

.chat_header {
  text-align: center;
  font-size: 28px;
  color: white;
  background-color: #64b2d6;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
}
.chat_icon{
  position: fixed;
  bottom: 14vh;
  right: 2vw;
  z-index: 2;
  width: 4vw;
  height: 2vw;
  border-radius: 30%;
}
.shake {
  animation: shake 0.3s;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
