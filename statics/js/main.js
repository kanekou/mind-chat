Vue.config.devtools = true;
(function () {
  "use strict";

  let vm = new Vue({
    el: "#app",
    data: {
    //   formModal: false,
      newMessage: "",
      messages: [],
    },
    // mounted() {
    //   axios
    //     .get(
    //       "http://db.denchu.cloud:5111/uiuxchat3287bivsgfbivf/test2/messages"
    //     )
    //     .then(
    //       (response) => {
    //         for (let i = 0; i < response.data.messages.length; i++) {
    //           this.messages.push(response.data.messages[i].content);
    //         }
    //         console.log(messages[0]);
    //         // this.messages.push(response.data.messages)
    //       },
    //       (error) => {
    //         console.log(error);
    //       }
    //     );
    // },
    methods: {
      //   fetchTasks: function () {
      //     axios
      //       .get(
      //         "http://db.denchu.cloud:5111/uiuxchat3287bivsgfbivf/test2/messages"
      //       )
      //       .then(
      //         (response) => {
      //           for (let i = 0; i < response.data.messages.length; i++) {
      //             this.messages.push(response.data.messages[i]);
      //           }
      //           console(messages[0]);
      //           // this.messages.push(response.data.messages)
      //         },
      //         (error) => {
      //           console.log(error);
      //         }
      //       );
      //   },
      openFormModal: function () {
        this.formModal = true;
      },
      openSetting: function (index) {
        this.messages[index].setting = true;
      },
    //   closeFormModal: function () {
    //     this.formModal = false;
    //   },
      closeSettingModal: function () {
        this.messages[index].setting = false;
      },
      addMessage: function () {
        let item = {
          text: this.newMessage,
          good: 0,
          setting: false,
        };
        this.messages.push(item);
        this.newMessage = "";
        // this.formModal = false;
      },
      addGood: function (index) {
        this.messages[index].good++;
      },
      deleteMessage: function (index) {
        this.messages.splice(index, 1);
      },
    },
  });
})();
