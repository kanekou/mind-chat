(function(){
	'use strict';

	let vm = new Vue({
		el: '#app',
		data: {
			formModal: false,
			newMessage: '',
			messages:[
			]
		},
		created: function(){
			// GET request
			var self = this
			  this.$http.get('http://db.denchu.cloud:5111/uiuxchat3287bivsgfbivf/test2/messages', function (data, status, request) {
					for(var i = 0; i < data.length; i++){
						this.messages.push(data[i]);
					}
				}).error(function (data, status, request) {
					// handle error
				})
		},
		methods:{
			openFormModal: function(){
				this.formModal = true
			},
			openSetting: function(index){
				this.messages[index].setting = true
			},
			closeFormModal: function () {
				this.formModal = false
			},
			closeSettingModal: function () {
				this.messages[index].setting = false
			},
			addMessage: function(){
				let item = {
					text: this.newMessage,
					good: 0,
					setting: false
				}
				this.messages.push(item);
				this.newMessage='';
				this.formModal=false;
			},
			addGood: function(index){
				this.messages[index].good++
			},
			deleteMessage: function(index){
				this.messages.splice(index, 1);
			}
		}
	});
})();