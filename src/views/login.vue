<template>
	 <div>
		    <group>
		      	<x-input 
			      title="手机号码" v-model="mobile" placeholder="请输入手机号码" ref="input01" keyboard="number" is-type="china-mobile">
		      	</x-input>

		      	<x-input title="验证码"  v-model="vcode" placeholder="请输入验证码">
		       		<x-button slot="right" mini type="primary" :disabled= "mobile_valid" @click.native="getCode" style="">发送验证码</x-button>
		      	</x-input>
		    
		      	<x-button type="default" @click.native="login"> 登录 </x-button>
		    </group>
	</div>
</template>

<script>
import { XInput, Group, XButton, Cell, ButtonTab, ButtonTabItem} from 'vux'

export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    ButtonTab,
    ButtonTabItem
  },
  data () {
   return {
   	mobile: '',
	vcode: '',
	mobile_valid: false
   }
  },
  methods:{
  	getCode () {
  		console.log('sd:' + this.$refs.input01.valid)
				// 发送手机号
				axios.post('c/auth_pin.do', { mpcode: this.mobile })
					.then((res) => {

						console.log(res)
						// 验证码发送成功
						if (res.data.ret === 'OK') {
							// 获取验证码
							// Toast('验证码已发送');
							this.sendStatus = res.data.ret;
						} else {
							$.alert(res.data.err)
						}
					})
					.catch((error) => {
						console.log(error);
					})
			},
  	login () {
				// 验证码成功发送
				if (this.sendStatus === 'OK') {
					// 手机号, 验证码 发送验证
					axios.post('c/auth_mplogin.do', { mpcode: this.mobile, pin: this.vcode })
						.then((res) => {

							// 跳转我的页面
							if (res.data.ret === 'OK') {
								this.$router.push('/')
							} else {
								console.log(res);
							} 
						})
						.catch((error) => {
							console.log(error);
						})
				}
			}
  },
  computed:{
	
  }
}
</script>
<style>
.logo {
  width: 100%;
  /*height: 100px*/
}
</style>