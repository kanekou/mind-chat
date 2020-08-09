<template>
<div class="app-layout">
  <div class="side-bar">
    test
  </div>
  <div id="Chat" class="main-contents" v-bind:class="{threadOpendisplay: thread_open}">
    <div class="two-container" v-bind:class="{threadOpen: thread_open}">
      <div ref="chats" class="chats-layout">
        <div class="containier">
          <div class="chat_container">
            <div v-if="messages">
              <section class="card" v-for="(message, index) in messages">
                <div class="thumbnail">
                  <img src="">
                </div>
                <div class="message-container">
                  <div class="user-name-layout">
                    <div class="user-name">
                      {{ message.from }}
                      <span @click="openThread(index)">→</span>
                      <span @click="deleteMessage(index)">×</span>
                    </div>
                  </div>
                  <div class="text">
                    <p>{{ message.content }}</p>
                  </div>
                  <div class="option" v-if="message.child">
                    <span class="setting" @click="openThread(index)">スレッドを表示する</span>
                  </div>
                </div>
              </section>
            </div>
            <div v-else>
              <p class="noFire">No Message</p>
            </div>
          </div>
        </div>
      </div>
      <div class="input-layout">
        <div class="new-form">
          <div class="new-form-container">
            <form @submit.prevent="addMessage">
              <textarea v-model="newMessage"></textarea>
              <button type="submit">
                <svg width="100%" height="100%" viewBox="0 0 16 16" class="bi bi-caret-right-fill"
                  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="thread-container" v-if="thread_open">
      <div class="chats-layout">
        <div class="containier">
          <div class="chat_container">
            <section class="card">
              <div class="thumbnail">
                <img src="">
              </div>
              <div class="message-container">
                <div class="user-name-layout">
                  <div class="user-name">
                    {{ thread_messages.from }}
                    <!-- <span @click="openThread(index2)">→</span>
                    <span @click="deleteMessage(index2)">×</span> -->
                  </div>
                </div>
                <div class="text">
                  <p>{{ thread_messages.content }}</p>
                </div>
                <div class="option" v-if="thread_messages.child">
                  <span class="setting" @click="openThread(index)">スレッドを表示する</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div class="input-layout">
        <div class="new-form">
          <div class="new-form-container">
            <form @submit.prevent="addMessage">
              <textarea v-model="newMessage"></textarea>
              <button type="submit">
                <svg width="100%" height="100%" viewBox="0 0 16 16" class="bi bi-caret-right-fill"
                  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Cookies from 'universal-cookie';

export default {
  name: "Chat",
  data() {
    return {
      formModal: true,
      newMessage: "",
      thread_open: false,
      thread_messages: null,
    };
  },
  async asyncData({ $axios }) {
    // 取得先のURL
    const url = "/test2/messages"
    // リクエスト（Get）
    const response = await $axios.$get(url)
      .catch(
        error => {
          console.log(error);
        }
      );
      return { messages: response.result }
  },
  mounted() {
    this.$nextTick(function () {
      let ref = this.$refs.chats;
      this.scrollToEnd(ref);
    })
  },
  created(){
  },
  updated() {
    // TODO: スレッドのスクロール操作
  },
  methods: {
    scrollToEnd(dom) {
        const chatLog = dom;
        console.log('対象のDOM', chatLog)
        if (!chatLog) return
        chatLog.scrollTop = chatLog.scrollHeight
    },
    openFormModal: function() {
      this.formModal = true;
    },
    openSetting: function(index) {
      this.messages[index].setting = true;
    },
    closeSettingModal: function() {
      this.messages[index].setting = false;
    },

    async addMessage() {
      let item = {
        to: "hogesan",// 一旦
        from: "me",
        content: this.newMessage
      // 	 setting: false,
      // child: [],
      };

      const key= process.env.KEY;
      const url = "/test2/messages"
      const cookies = new Cookies();
      cookies.set('key', key);

      const response = this.$axios
        .$post(url, item
        ).then(res => {
          location.reload();
          // asyncData();
        })
        .catch(error => {
          console.log(response);
          console.log(item)
        })

      this.newMessage = "";
      this.formModal = false;
    },
    openThread: function(index) {
      this.thread_messages = this.messages[index];
      this.thread_open = true;
    },
    deleteMessage: function(index) {
      this.messages.splice(index, 1);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap");

/* ここにテーマとなるカラーを変更する */
:root {
  --main-bg-color: white;
  --main-chara-color: #FF3939;
  --chat-bg-color: white;
  --chat-border-color: cyan;
  }

div{
  display: block;
}
*, :after, :before {
    box-sizing: border-box;
    margin: 0;
}

html,body{
  height: 100%;
  margin: 0;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
html{
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

.app-layout{
  display: flex;
}
.side-bar{
  width: 300px;
    background: #4a4141;
    height: 100vh;
    padding: 20px;
}

.main-contents{
  width: 100%;
  height: 100vh;
  background: #f1f1f1;
}
h1,h2{
  margin: 0;
  /* width: 100%; */
  height: 80px;
  background-color: #2E2E2E;
  border-bottom: solid 2px #707070;
}
@media only screen and (max-width: 750px) {
  h1,h2,p{
    margin: 0;
  }
  h1,h2{
    background-color: #2E2E2E;
    border-bottom: solid 2px #707070;
  }
}

html,body{
  background-color: var(--main-bg-color);
}
header{
  z-index: 0;
  width: 100%;
  height: 70px;
  color: var(--main-chara-color);
  font-weight: 800;
  font-family: 'Kaushan Script', cursive;
  /* background-color: #2E2E2E;
  border-bottom: solid 2px #707070; */
}
header h1{
  line-height: 70px;
  text-align: center;
}

.main-contents .two-container{
  height: 100%;
  padding: 20px;
}
.main-contents .chats-layout{
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
    height: 90%;
}
.input-layout{
  height: 10%;
  /* position: absolute; d */
}

.container{
  height: 100%;
  display: block;
}
.chat_container{
  /* margin-right: 20%; */
}
@media only screen and (max-width: 750px) {
  .chat_container{
    margin: 0;
  }
}
.noFire{
  margin-top: 100px;
  text-align: center;
  color: var(--main-chara-color);
}
.card{
  /* width: calc(100% - 40px);
  margin: 30px auto 0;
  padding: 25px 15px 15px;
  box-sizing: border-box;
  background-color: var(--chat-bg-color);
  border: solid 1.5px var(--chat-border-color);
  border-radius: 7px; */
  display: flex;
    padding: 8px;
}
.thumbnail{
  margin-right: 16px;
}
.thumbnail img {
    width: 50px;
    height: 50px;
  border-radius: 10px;
}
.user-name{
  font-weight: 700;
}
.card .text{
  padding-bottom: 15px;
}
.card .text p{
  color: brack;
  font-size: 18px;
}
.card .option{
  height: 30px;
  padding-top: 15px;
  border-top: solid 1px #707070;
  position: relative;
}
.card .option .setting{
  height: 30px;
  color: brack;
  position: absolute;
  left: 0;
}
.card .option .reaction{
  width: 36px;
  position: absolute;
  left: calc(50% - 13px);
  display: flex;
  align-items: baseline;
}
.card .option .reaction svg{
  width: 22px;
}
.card .option .reaction span{
  font-size: 14px;
  color: brack;
}
.turnRed{
  color: var(--main-chara-color)!important;
}
.fire {
  fill: #fff;
}
.card .fire {
  fill: brack;
}
.fire:hover{
  fill: var(--main-chara-color);
}
.burn{
  fill: var(--main-chara-color);
}

.new{
  width: 70px;
  height: 70px;
  border: solid 3px #fff;
  box-shadow: 0px 2px 5px rgba(255,255,255,0.8);
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.new:hover{
  border: solid 3px var(--main-chara-color);
}
.new-form{
  height: 100%;
}

.new-form-container{
  padding: 10px;
  height: 100%;
}
.new-form form{
  height: 100%;
}

.new-form form textarea{
  width: 80%;
  height: 100%;
  /* padding: 15px; */
  /* color: #fff; */
  font-size: 18px;
  /* background-color: #2e2e2e; */
  box-sizing: border-box;
}
.new-form form button {
  width: 70px;
  position: fixed;
  /* top: 350px; */
  /* left: calc((100% - 70px)/2); */
}
.modalOpen{
  opacity: 1;
  display: block;
  transition-duration: 5s;
}

.settingModal{
  width: 100vw;
  padding: 20px;
  background-color: #2E2E2E;
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  display: none;
}

.settingModal span{
  color: #fff;
  font-size: 30px;
  position: fixed;
  bottom: 60px;
  left: 10px;
}
.settingModal p{
  color: #fff;
}
.settingOpen{
  display: block;
}

.threadOpendisplay{
  display: flex;
}

.threadOpen{
  width: 45vw;;
  border-right: 1px solid gray;
}

.thread-container{
  width: 35vw;
  padding: 20px;
  /* display: flex; */
}

</style>
