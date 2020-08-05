<template>
  <div id="Chat" class="containier">
    <header>
      <h1>Message</h1>
    </header>

    <div v-if=messages>
      <section class="card" v-for="message in messages">
        <div class="text">
          <p>{{ message.content }}</p>
        </div>
        <div class="option">
          <span class="setting" @click="openSetting(index)">…</span>
          <!-- <div class="reaction" @click="addGood(index)">
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
                  v-bind:class="{ burn: messages[index].good }"
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
            <span v-bind:class="{ turnRed: messages[index].good }">{{
              message.good
            }}</span>
          </div> -->
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
    </div>
  </div>
</template>

<script>
import Cookies from 'universal-cookie';

export default {
  name: "Chat",
  data() {
    return {
      formModal: false,
      newMessage: "",
      // messages: []
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
    closeFormModal: function() {
      this.formModal = false;
    },
    closeSettingModal: function() {
      this.messages[index].setting = false;
    },

    async addMessage() {
      let item = {
        to: "hogesan",
        content: this.newMessage
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

html,
body,
h1,
h2,
p {
  margin: 0;
}
html,
body {
  background-color: #141414;
}
header {
  width: 100vw;
  height: 70px;
  color: #ff3939;
  font-weight: 800;
  font-family: "Kaushan Script", cursive;
  background-color: #2e2e2e;
  border-bottom: solid 2px #707070;
}
header h1 {
  line-height: 70px;
  text-align: center;
}
.container {
  width: 100%;
  height: 100%;
}
.noFire {
  margin-top: 100px;
  text-align: center;
  color: #ff3939;
}
.card {
  width: calc(100% - 40px);
  margin: 30px auto 0;
  padding: 25px 15px 15px;
  box-sizing: border-box;
  background-color: #2e2e2e;
  border: solid 1.5px #707070;
  border-radius: 7px;
}
.text {
  padding-bottom: 15px;
}
.text p {
  color: #fff;
  font-size: 18px;
}
.option {
  height: 30px;
  padding-top: 15px;
  border-top: solid 1px #707070;
  position: relative;
}
.option .setting {
  height: 30px;
  color: #fff;
  position: absolute;
  left: 0;
}
.option .reaction {
  width: 36px;
  position: absolute;
  left: calc(50% - 13px);
  display: flex;
  align-items: baseline;
}
.option .reaction svg {
  width: 22px;
}
.option .reaction span {
  font-size: 14px;
  color: #fff;
}
.turnRed {
  color: #ff3939 !important;
}
.fire {
  fill: #fff;
}
.fire:hover {
  fill: #ff3939;
}
.burn {
  fill: #ff3939;
}

.new {
  width: 70px;
  height: 70px;
  border: solid 3px #fff;
  border-radius: 50px;
  background-color: #2e2e2e;
  box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.8);
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.new:hover {
  border: solid 3px #ff3939;
}
.new-form {
  width: 100vw;
  height: 100vh;
  background-color: #141414;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  display: none;
}
.new-form span {
  color: #fff;
  font-size: 30px;
  position: fixed;
  top: 0px;
  left: 10px;
}
.new-form form {
  width: 100%;
  height: 300px;
  position: fixed;
  top: 40px;
}
.new-form form textarea {
  width: 100%;
  height: 100%;
  padding: 15px;
  color: #fff;
  font-size: 18px;
  background-color: #2e2e2e;
  box-sizing: border-box;
}
.new-form form button {
  width: 70px;
  position: fixed;
  top: 350px;
  left: calc((100% - 70px) / 2);
}
.modalOpen {
  opacity: 1;
  display: block;
  transition-duration: 5s;
}

.settingModal {
  width: 100vw;
  padding: 20px;
  background-color: #2e2e2e;
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  display: none;
}

.settingModal span {
  color: #fff;
  font-size: 30px;
  position: fixed;
  bottom: 60px;
  left: 10px;
}
.settingModal p {
  color: #fff;
}
.settingOpen {
  display: block;
}
</style>
