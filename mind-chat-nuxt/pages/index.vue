<template>
<div class="app-layout">
  <div class="side-bar">
    test
  </div>
  <div id="Chat" class="main-contents" v-bind:class="{threadOpendisplay: thread_open}">
    <!-- <div v-if=messages>
      <section class="card" v-for="message in messages">
        <div class="text">
          <p>{{ message.content }}</p>
        </div>
        <div class="option">
          <span class="setting" @click="openSetting(index)">…</span>
        </div>
        <div
          class="settingModal"
          v-bind:class="{ settingOpen: message.setting }"
        >
          <span @click="closeSettingModal">×</span>
          <p @click="deleteMessage(index)">Delete this FIRE</p>
        </div>
      </section>
    </div>
    <div v-else>
      <p class="noFire">NO Message</p>
    </div>
    <button class="new" @click="openFormModal">
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
        xml:space="preserve"
      >
        <g>
          <path
            class="fire"
            d="M332.16,104.596c-34.594-27.688-48.125-58.25-53.328-79.969c-4.172-17.453-1.953-19.328-1.953-19.328
                        c-0.219-2.078-1.5-3.875-3.406-4.75c-1.875-0.875-4.094-0.703-5.797,0.484c0,0-6.703,1.453-17.641,12.063
                        c-24.875,24.156-53.031,64.469-34.469,119.578c19.891,59.125,9.375,71.5-1.047,70.688c-13.516-1.031-15.609-9.359-13.438-35.266
                        c2.516-30.281-24.953-56.141-24.953-56.141s-42.672,67.844-75.953,116.375c-19.672,28.688-29.109,65.141-29.109,98.406H70.41
                        c0,102.313,82.938,185.266,185.25,185.266s185.25-82.953,185.25-185.266C447.941,237.893,399.691,158.611,332.16,104.596z
                        M255.988,459.83c-56.422,0-102.188-45.75-102.188-102.188c0-19.219,5.328-37.188,14.547-52.547
                        c7.938,29.563,34.906,51.328,66.969,51.328c38.281,0,69.344-31.047,69.344-69.344c0-7.297-1.156-14.359-3.25-20.969
                        c33.656,16.719,56.766,51.422,56.766,91.531C358.175,414.08,312.425,459.83,255.988,459.83z"
          ></path>
        </g>
      </svg>
    </button>
    <div class="new-form" v-bind:class="{ modalOpen: formModal }">
      <span @click="closeFormModal">×</span>
      <form @submit.prevent="addMessage">
        <textarea v-model="newMessage"></textarea>
        <button type="submit">
          <svg
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <path
                class="burn"
                d="M332.16,104.596c-34.594-27.688-48.125-58.25-53.328-79.969c-4.172-17.453-1.953-19.328-1.953-19.328
                                    c-0.219-2.078-1.5-3.875-3.406-4.75c-1.875-0.875-4.094-0.703-5.797,0.484c0,0-6.703,1.453-17.641,12.063
                                    c-24.875,24.156-53.031,64.469-34.469,119.578c19.891,59.125,9.375,71.5-1.047,70.688c-13.516-1.031-15.609-9.359-13.438-35.266
                                    c2.516-30.281-24.953-56.141-24.953-56.141s-42.672,67.844-75.953,116.375c-19.672,28.688-29.109,65.141-29.109,98.406H70.41
                                    c0,102.313,82.938,185.266,185.25,185.266s185.25-82.953,185.25-185.266C447.941,237.893,399.691,158.611,332.16,104.596z
                                    M255.988,459.83c-56.422,0-102.188-45.75-102.188-102.188c0-19.219,5.328-37.188,14.547-52.547
                                    c7.938,29.563,34.906,51.328,66.969,51.328c38.281,0,69.344-31.047,69.344-69.344c0-7.297-1.156-14.359-3.25-20.969
                                    c33.656,16.719,56.766,51.422,56.766,91.531C358.175,414.08,312.425,459.83,255.988,459.83z"
              ></path>
            </g>
          </svg>
        </button>
      </form>
    </div> -->


    <div class="two-container" v-bind:class="{threadOpen: thread_open}">
      <div class="chats-layout">
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
                  <p>{{ thread_messages.text }}</p>
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
      console.log(response);
      return { messages: response.result }
  },
  mounted() {
  },
  methods: {
    openFormModal: function() {
      this.formModal = true;
    },
    openSetting: function(index) {
      this.messages[index].setting = true;
    },
    // TODO: 消す
    closeFormModal: function () {
        this.formModal = false;
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

// key をセット
      const key= process.env.KEY;
      const url = "/test2/messages"
      const cookies = new Cookies();
      cookies.set('key', key);

      const response = this.$axios
        .$post(url, item
        )
        .then(response => {
          alert("pass")
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
    // addGood: function(index) {
    //   this.messages[index].good++;
    // },
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
