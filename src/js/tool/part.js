// h1 
export const h1 = {
    html:`<div class="content-h1">
            <label>标题展示</label>
            <ol class="breadcrumb">
                <li><a href="#">首页</a></li>
                <li><a href="#">第一层</a></li>
                <li class="active">第二层</li>
            </ol>
            <span class="head-tools pull-right">
                <button class="refresh"></button>
            </span>
        </div>`,
    css:`
        .content-h1{
            height: 66px;
            padding: 0 10px 0 38px;
            background: url(../assets/ico-title.png) no-repeat left center;
            line-height: 66px;
            color:#000;
            margin:0 0 20px 0;
            border-bottom:1px solid #979797;
        }
        .content-h1 label{
           font-size: 24px;
           font-weight: normal;
           margin-right: 10px; 
           margin-bottom: 0;    
        }
        .pull-right {
            float: right!important;
        }
        .content-h1 .refresh{
            width: 24px;
            height: 24px;
            margin-top:21px;
            border:0;
            background: url(../assets/refresh.png) no-repeat;
            cursor:pointer;
        }
        .content-h1 .breadcrumb{
            display: inline-block;
            background: none;
            padding: 0;
            margin-top: 0;
        }
        .content-h1 .breadcrumb>li {
            display: inline-block;
        }
        .content-h1 .breadcrumb a{
            color: #000;
        }
        .content-h1 .breadcrumb>li:before,
        .content-h1 .breadcrumb>li+li:before{
            font-family: monospace;
            font-size: 12px;
            content:"\\003E";
            color: #9f9f9f;
            background:none;
            padding: 0 5px;
        }
        .breadcrumb>li+li:before{
            padding: 0 5px;
            color: #ccc;
            content: "/\00a0";
        }`,
    js:``
}
// h2 
export const h2 = {
    html:`
        <div class="content-h2">
            <label>h2标题展示</label>
        </div>`,
    css:`
        .content-h2{
            height: 30px;
            line-height: 30px;
            padding-left: 10px;
            
            border:0;
            position: relative;
            margin: 20px 13px 20px 10px;
        }
        .content-h2 label{
            font-size: 18px;
            font-weight: normal;
        }
        .content-h2:before{
            position: absolute;
            top:50%;
            left:0;
            margin-top: -9px;
            content: " ";
            width: 3px;
            height: 18px;
            filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#06bce1,endcolorstr=#5682fd,gradientType=1);
            background: -linear-gradient(top,#06bce1,#5682fd);
            background: -moz-linear-gradient(top,#06bce1,#5682fd);
            background: -webkit-linear-gradient(top,#06bce1,#5682fd);
        }
        .content-h2 form{
            margin:0;
            height: inherit;
            margin-right: -15px;
        }
        .content-h2 form .form-group{
            display: inline-block;
            margin: 0;
            vertical-align: top;
        }
        .content-h2 form .form-group + .form-group{
            margin-left: 30px;
        }
        .content-h2 .form-group.form-group-right{
            float: right;
        }`,
    js:``
}
// table
export const table = {
    html:{
        example1:``
    },
    js:{
        example1:[
            [ 
                {
                    title: "TOP",
                    key: "top"
                }, {
                    title: "Head",
                    key: "header"
                }, {
                    title: "Name",
                    key: "name"
                }, {
                    title: "Age",
                    key: "age"
                }, {
                    title: "Address",
                    key: "address"
                }, {
                    title: "Ship",
                    key: "ship"
                }, {
                    title: "Captain",
                    key: "captain"
                }, {
                    title: "Ability",
                    key: "ability"
                }, {
                    title: "MoneyReward",
                    key: "moneyReward"
                }
            ],
            [
                {
                    top: 1,
                    header: "夏洛特·卡塔库栗",
                    name: "夏洛特·卡塔库栗",
                    age: "?",
                    address: "蛋糕岛",
                    ship: "四皇 BIG MOM",
                    captain: "BIG MOM",
                    ability: "特殊超人系“糯糯果实”",
                    moneyReward: "10亿5700万贝里"
                }, {
                    top: 2,
                    header: "杰克",
                    name: "杰克",
                    age: "?",
                    address: "百兽海贼团",
                    ship: "百兽海贼团",
                    captain: "凯多",
                    ability: "动物系古代种象象果实猛犸象形态",
                    moneyReward: "10亿"
                }, {
                    top: 3,
                    header: "夏洛特·斯慕吉",
                    name: "夏洛特·斯慕吉",
                    age: "?",
                    address: "蛋糕岛",
                    ship: "四皇 BIG MOM",
                    captain: "BIG MOM",
                    ability: "榨榨果实",
                    moneyReward: "9亿3200万贝里"
                }, {
                    top: 4,
                    header: "夏洛特·克力架",
                    name: "夏洛特·克力架",
                    age: "?",
                    address: "蛋糕岛",
                    ship: "四皇 BIG MOM",
                    captain: "BIG MOM",
                    ability: "超人系·饼干果实",
                    moneyReward: "8亿6000万z贝里"
                }
            ]
        ],
        example2:[
            [
            {
                title: "TOP",
                key: "top",
                width:100,
                fixed:'left',
            }, {
                title: "Head",
                key: "header",
                width:100,
            }, {
                title: "Name",
                key: "name",
                width:100,
            }, {
                title: "Age",
                key: "age",
                width:100,
            }, {
                title: "Address",
                key: "address",
                width:100,
            }, {
                title: "Ship",
                key: "ship",
                width:100,
            }, {
                title: "Captain",
                key: "captain",
                width:100,
            }, {
                title: "Ability",
                key: "ability",
                width:100,
            }, {
                title: "MoneyReward",
                key: "moneyReward",
                width:100,
            }],
            [{
                top: 1,
                header: "路飞",
                name: "路飞",
                age: "？",
                address: "风车岛",
                ship: "万里阳光号",
                captain: "路飞",
                ability: "橡胶果实",
                moneyReward: "15亿贝里"
            },
            {
                top: 2,
                header: "夏洛特·卡塔库栗",
                name: "夏洛特·卡塔库栗",
                age: "?",
                address: "蛋糕岛",
                ship: "四皇 BIG MOM",
                captain: "BIG MOM",
                ability: "特殊超人系“糯糯果实”",
                moneyReward: "10亿5700万贝里"
            }, {
                top: 3,
                header: "杰克",
                name: "杰克",
                age: "?",
                address: "百兽海贼团",
                ship: "百兽海贼团",
                captain: "凯多",
                ability: "动物系古代种象象果实猛犸象形态",
                moneyReward: "10亿贝里"
            }, {
                top: 4,
                header: "夏洛特·斯慕吉",
                name: "夏洛特·斯慕吉",
                age: "?",
                address: "蛋糕岛",
                ship: "四皇 BIG MOM",
                captain: "BIG MOM",
                ability: "榨榨果实",
                moneyReward: "9亿3200万贝里"
            }, {
                top: 5,
                header: "夏洛特·克力架",
                name: "夏洛特·克力架",
                age: "?",
                address: "蛋糕岛",
                ship: "四皇 BIG MOM",
                captain: "BIG MOM",
                ability: "超人系·饼干果实",
                moneyReward: "8亿6000万贝里"
            }, {
                top: 6,
                header: "夏洛特·佩罗斯佩罗",
                name: "夏洛特·佩罗斯佩罗",
                age: "?",
                address: "蛋糕岛",
                ship: "四皇 BIG MOM",
                captain: "BIG MOM",
                ability: "超人系·饼干果实",
                moneyReward: "7亿贝里"
            }, {
                top: 7,
                header: "萨博",
                name: "萨博",
                age: "？",
                address: "革命军",
                ship: "蒙奇.D.龙",
                captain: "？",
                ability: "烧烧果实",
                moneyReward: "6亿200万贝里"
            },]
        ],
        example3:[
            [
            {
                title: "TOP",
                key: "top",
                width:100,
                sortable:true,
            }, {
                title: "Head",
                key: "header",
                width:100,
            }, {
                title: "Name",
                key: "name",
                width:100,
            }, {
                title: "Age",
                key: "age",
                width:100,
            }, {
                title: "Address",
                key: "address",
                width:100,
            }, {
                title: "Ship",
                key: "ship",
                width:100,
            }, {
                title: "Captain",
                key: "captain",
                width:100,
            }, {
                title: "Ability",
                key: "ability",
                width:100,
            }, {
                title: "MoneyReward",
                key: "moneyReward",
                width:150,
                sortable:true,
                sortMethod(a,b,type){
                    
                    function replaceNum (val){
                        var newVal = '';
                        if(val.indexOf('亿贝里')>0){
                            newVal = val.replace(/亿贝里/g,'00000000');
                        }else if(val.indexOf('万贝里')){
                            if (val.indexOf('亿')) {
                                newVal = val.replace(/亿/g,'');
                            }else{
                                newVal = val;
                            }
                            newVal = newVal.replace(/万贝里/g,'0000');
                        } 
                        return parseInt(newVal);
                    }  
                    a = replaceNum(a);
                    b = replaceNum(b);
                    if(type === 'asc'){
                        // 小 → 大
                        return a>b;
                    }else{
                        // 大 → 小 
                        return a<b;
                    }
                }
            }],
            [{
                top: 1,
                header: "路飞",
                name: "路飞",
                age: "？",
                address: "风车岛",
                ship: "万里阳光号",
                captain: "路飞",
                ability: "橡胶果实",
                moneyReward: "15亿贝里"
            },
            {
                top: 2,
                header: "夏洛特·卡塔库栗",
                name: "夏洛特·卡塔库栗",
                age: "?",
                address: "蛋糕岛",
                ship: "四皇 BIG MOM",
                captain: "BIG MOM",
                ability: "特殊超人系“糯糯果实”",
                moneyReward: "10亿5700万贝里"
            }, {
                top: 3,
                header: "杰克",
                name: "杰克",
                age: "?",
                address: "百兽海贼团",
                ship: "百兽海贼团",
                captain: "凯多",
                ability: "动物系古代种象象果实猛犸象形态",
                moneyReward: "10亿贝里"
            }, {
                top: 4,
                header: "夏洛特·斯慕吉",
                name: "夏洛特·斯慕吉",
                age: "?",
                address: "蛋糕岛",
                ship: "四皇 BIG MOM",
                captain: "BIG MOM",
                ability: "榨榨果实",
                moneyReward: "9亿3200万贝里"
            }, {
                top: 5,
                header: "夏洛特·克力架",
                name: "夏洛特·克力架",
                age: "?",
                address: "蛋糕岛",
                ship: "四皇 BIG MOM",
                captain: "BIG MOM",
                ability: "超人系·饼干果实",
                moneyReward: "8亿6000万贝里"
            }, {
                top: 6,
                header: "夏洛特·佩罗斯佩罗",
                name: "夏洛特·佩罗斯佩罗",
                age: "?",
                address: "蛋糕岛",
                ship: "四皇 BIG MOM",
                captain: "BIG MOM",
                ability: "超人系·饼干果实",
                moneyReward: "7亿贝里"
            }, {
                top: 7,
                header: "萨博",
                name: "萨博",
                age: "？",
                address: "革命军",
                ship: "蒙奇.D.龙",
                captain: "？",
                ability: "烧烧果实",
                moneyReward: "6亿200万贝里"
            },]
        ],
        example4:[
            [
                {
                    title: "世界格局",
                    // key: "title1",
                    align:'center',
                    children:[
                        {
                            title: "世界最高政府",
                            // key: "title",
                            align:'center',
                            children:[
                                {
                                    title:'海军',
                                    // key:'title',
                                    align:'center',
                                    children:[
                                        {
                                            title:'海军元帅',
                                            key:'title1',
                                            align:'center',
                                        },
                                        {
                                            title:'海军大将',
                                            key:'title2',
                                            align:'center',
                                        },
                                        {
                                            title:'海军中将',
                                            key:'title3',
                                            align:'center',
                                        }
                                    ]
                                },
                                {
                                    title:'王下七武海',
                                    key:'title4',
                                    align:'center',
                                }
                            ]
                        },
                        {
                            title: "海贼团",
                            align:'center',
                            children:[
                                {
                                    title: "四皇",
                                    key: "title5",
                                    align:'center',
                                },{
                                    title: "其他",
                                    key: "title6",
                                    align:'center',
                                }
                            ]
                        },
                        {
                            title: "反叛军",
                            key: "title7",
                            align:'center',
                            
                        }
                    ]
                }
            ],[
                {
                    title1:'佛之战国、赤犬 — 萨卡斯基',
                    title2:'赤犬 — 萨卡斯基、黄猿 — 波鲁萨利诺、青稚 — 库赞、藤虎 — 一笑、绿牛',
                    title3:'英雄卡普',
                    title4:'鹰眼-乔拉可尔·密佛格、巴索罗米·熊、女帝、唐吉诃德·多弗朗明哥、沙·克洛克达尔、海侠-甚平、月光·莫利亚',
                    title5:'白胡子海贼团、红发海贼团、百兽海贼团、BIG·MOM海贼团、黑胡子海贼团',
                    title6:'草帽海贼团',
                    title7:'革命军'
                }

            ]
        ],
        example5:[
            [
                {
                    title: "世界格局",
                    // key: "title1",
                    align:'center',
                    children:[
                        {
                            title: "世界最高政府",
                            // key: "title",
                            align:'center',
                            children:[
                                {
                                    title:'海军',
                                    // key:'title',
                                    align:'center',
                                    children:[
                                        {
                                            title:'海军元帅',
                                            key:'title1',
                                            align:'center',
                                        },
                                        {
                                            title:'海军大将',
                                            key:'title2',
                                            align:'center',
                                        },
                                        {
                                            title:'海军中将',
                                            key:'title3',
                                            align:'center',
                                        }
                                    ]
                                },
                                {
                                    title:'王下七武海',
                                    key:'title4',
                                    align:'center',
                                }
                            ]
                        },
                        {
                            title: "海贼团",
                            align:'center',
                            children:[
                                {
                                    title: "四皇",
                                    key: "title5",
                                    align:'center',
                                },{
                                    title: "其他",
                                    key: "title6",
                                    align:'center',
                                }
                            ]
                        },
                        {
                            title: "反叛军",
                            key: "title7",
                            align:'center',
                            
                        }
                    ]
                }
            ],[
                {
                    title1:'佛之战国、赤犬 — 萨卡斯基',
                    title2:'赤犬 — 萨卡斯基、黄猿 — 波鲁萨利诺、青稚 — 库赞、藤虎 — 一笑、绿牛',
                    title3:'英雄卡普',
                    title4:'鹰眼-乔拉可尔·密佛格、巴索罗米·熊、女帝、唐吉诃德·多弗朗明哥、沙·克洛克达尔、海侠-甚平、月光·莫利亚',
                    title5:'白胡子海贼团、红发海贼团、百兽海贼团、BIG·MOM海贼团、黑胡子海贼团',
                    title6:'草帽海贼团',
                    title7:'革命军'
                }

            ]
        ]
    }
}
// dropdown 
export const dropdown = {
    html:`<Dropdown trigger="click" style="margin-left: 20px">
        <Button type="primary">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>`,
}
// tab 
export const tab = {
    html:`
        <Tabs value="name1">
            <TabPane label="标签一" name="name1">标签一的内容</TabPane>
            <TabPane label="标签二" name="name2">标签二的内容</TabPane>
            <TabPane label="标签三" name="name3">标签三的内容</TabPane>
        </Tabs>`,
    css:``
}
// alert 
export const alert = {
    html:[
        `<Alert>An info prompt</Alert>
    <Alert type="success">A success prompt</Alert>
    <Alert type="warning">A warning prompt</Alert>
    <Alert type="error">An error prompt</Alert>`,
        `<Alert>
        An info prompt
        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
    </Alert>
    <Alert type="success">
        A success prompt
        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
    </Alert>
    <Alert type="warning">
        A warning prompt
        <template slot="desc">
        Content of prompt. Content of prompt. Content of prompt.
    </template>
    </Alert>
    <Alert type="error">
        An error prompt
        <span slot="desc">
            Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>
        </span>
    </Alert>`,
    `<Alert show-icon>
        An info prompt
        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
    </Alert>
    <Alert show-icon>
        Custom icon
        <Icon type="ios-bulb-outline" slot="icon"></Icon>
        <template slot="desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. </template>
    </Alert>`,
    `<Alert banner closable type="warning">Notice: notification contents...</Alert>
    <Alert show-icon closable>
        Custom icon
        <Icon type="ios-bulb-outline" slot="icon"></Icon>
        <template slot="desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. </template>
    </Alert>`,
    ],
    css:``
}
// page 
export const page = {
    html:[
        `<Page :total="100" /> // 数据总数100条`,
        `<Page :current="2" :total="50" simple />`
    ],
    css:``
}
// radio 
export const radio = {
    html:[
        `<RadioGroup v-model="phone">
        <Radio label="apple">
            <Icon type="logo-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="logo-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="logo-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
    <RadioGroup v-model="animal">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>`
    ],
    css:``
}
// checkbox 
export const checkbox = {
    html:[
        `<CheckboxGroup v-model="social">
        <Checkbox label="twitter">
            <Icon type="logo-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
            <Icon type="logo-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
            <Icon type="logo-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
            <Icon type="logo-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </CheckboxGroup>
    <span> {{social}} </span>`
    ],
    css:``
}



