<template>
    <div class='layout'>
        <Layout>
            <Card class='logoCard' shadow>
                <p slot="title">用户登录</p>
                <!-- <div class="line">
                    账号：
                    <Input 
                    prefix="ios-contact" 
                    v-model='account'
                    placeholder="Enter account" 
                    style="width: auto" 
                    autocomplete="on"
                    clearable/>
                </div>
                <div class="line">
                    密码：
                    <Input 
                    prefix="ios-eye-off" 
                    v-model="password" 
                    :value="password" 
                    type="password" 
                    placeholder="Enter password" 
                    style="width: auto" 
                    autocomplete="off"
                    clearable/>
                </div> -->
                <div class='btnBox'>
                    <!-- <div class="line">
                        <Checkbox v-model="isaccount">记住账号</Checkbox>
                    </div> -->
                    <Button type="success" class="login">登录</Button>
                    <Button type="primary" class="register">注册</Button>

                </div>
            </Card>
        </Layout>

    </div>
</template>

<script>
// import oidc from 'Oidc';
// console.log(oidc)
var settings = {
    authority: 'http://open.xzxyun.com:80',
    client_id: 'testjsclient',
    popup_redirect_uri: 'http://localhost:8080/layoutView',
    // redirect_uri:'http://localhost:8080/logo',
    response_type: 'id_token',
    scope: 'openid profile orgfile role',

    filterProtocolClaims: true,


};

var manager = new Oidc.UserManager(settings);
var user;
manager.events.addUserLoaded(function (loadedUser) {
    user = loadedUser;
    console.log(user)
    // display('.js-user', user);
});


export default {
    name: 'mylogo',
    data () {
        return {
            account:'',
            isaccount:'',
            password:"",
            msg: 'logo',
            data1:[],
            value1:''
        }
    },
    methods: {
        handleSearch1 (value) {
            this.data1 = !value ? [] : [
                value,
                value + value,
                value + value + value
            ];
        }
    },
    mounted(){
        var login = document.querySelector('.login');
        login.addEventListener('click',function(){
            
            manager.signinPopup().then(resolved => {
                console.log('success = ',resolved);
            }).catch(rejected => {
                console.log('error = ',rejected)
            })

            // manager.signinRedirect().then(resolved => {
            //     console.log('success = ',resolved);
            // }).catch(rejected => {
            //     console.log('error = ',rejected)
            // });
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .layout{
        background: url(../../../../assets/animal1.jpg) no-repeat;
        background-size: cover;
    }
    .logoCard{
        width: 300px;
        position: absolute;
        left:10%;
        top:10%;
        /*transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);*/
    }
    .logoCard p{
        margin: 0;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
    }
    .logoCard .line{
        margin-bottom: 10px;
    }
    .logoCard .btnBox{
        padding-left: 45px;
    }
</style>
