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
    css:`.content-h1{
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
    html:`<div class="content-h2">
        <label>h2标题展示</label>
    </div>`,
    css:`.content-h2{
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
    html:`<Tabs value="name1">
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
// input 
export const input = {
    html:[
        `<Input v-model="value" placeholder="Enter something..."/>`,
        `<Input v-model="value" placeholder="Enter something..." style="width: 300px" />`,
        `<Input v-model="value" placeholder="Enter something..." style="width: 150px" size="large"/>
    <Input v-model="value" placeholder="Enter something..." style="width: 150px"/>
    <Input v-model="value" placeholder="Enter something..." style="width: 150px" size="small"/>`,
        `<Input v-model="value" placeholder="Enter something..." clearable style="width: 200px" />`,
        `<Input v-model="value" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px" />
    <Input v-model="value" icon="ios-add-circle" placeholder="Enter something..." style="width: 200px" />`,
        `Props：
    <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
    <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
    Slots： 
    <Input placeholder="Enter name" style="width: auto">
        <Icon type="ios-contact" slot="prefix" />
    </Input>
    <Input placeholder="Enter text" style="width: auto">
        <Icon type="ios-search" slot="suffix" />
    </Input>`,
        `<Input v-model="value" type="textarea" placeholder="Enter something..." style="width: 200px"/>
    <Input v-model="value" type="textarea" :rows="4" placeholder="Enter something..." style="width: 200px"/>`,
        `<Input v-model="value" type="textarea" :autosize="true" placeholder="Enter something..." style="width: 200px"/>
    <Input v-model="value" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." style="width: 200px"/>`,
    ``
    ],
    css:``,
    js:''
}
// button 
export const button = {
    html:[
        `<Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>`
    ],
    css:``,
    js:''
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
        <Checkbox label="disabled" disabled></Checkbox>
    </CheckboxGroup>
    <span> {{social}} </span>`
    ],
    css:``
}
// iSwitch 
export const iSwitch = {
    html:[
        `<i-switch v-model="switch1" @on-change="change" />
    <i-switch size="large" />
    <i-switch />
    <i-switch size="small" />
    <i-switch>
        <Icon type="md-checkmark" slot="open"></Icon>
        <Icon type="md-close" slot="close"></Icon>
    </i-switch>
    <i-switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </i-switch>
    <i-switch disabled="disabled" size="large">
        <span slot="close">禁止</span>
    </i-switch>`
    ],
    css:``
}
// select 
export const select = {
    html:[
        `<Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>`,
        `<Select v-model="model2" multiple style="width:260px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>`,
        `<Select v-model="model3" clearable style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>`
    ],
    css:``,
    js:[
        `cityList: [
        {
            value: '北京',
            label: '北京'
        },
        {
            value: '上海',
            label: '上海'
        },
        {
            value: '哈尔滨',
            label: '哈尔滨'
        },
        {
            value: '成都',
            label: '成都'
        },
        {
            value: '广东',
            label: '广东'
        },
        {
            value: '香港',
            label: '香港'
        }
    ],
    model1: ''`,
    `// cityList 用上一个
    model2: []`,
    `// cityList 用上一个
    model3: []`
    ]
}
// datePicker 
export const datePicker = {
    html:[
        `<DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
    <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>`,
        `<DatePicker type="year" placeholder="Select year" style="width: 200px"></DatePicker>
    <DatePicker type="month" placeholder="Select month" style="width: 200px"></DatePicker>`,
        `<DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
    <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>`
    ],
    css:``,
    js:[
        `value1: '2016-01-01',
    value2: ['2016-01-01', '2016-02-15']`
    ]
}
// cascader 
export const cascader = {
    html:[
        `<Cascader :data="data1" v-model="value1" style='width: 200px;'></Cascader>`,
        `<Cascader :data="data1" v-model="value2" style='width: 200px;'></Cascader>`, 
        `<Cascader :data="data3" v-model="value3" :load-data=loadData style='width: 200px;'></Cascader>`
    ],
    css:``,
    js:{
        example1:[
            {
            value: 'beijing',
            label: '北京',
            children: [
                {
                    value: 'gugong',
                    label: '故宫'
                },
                {
                    value: 'tiantan',
                    label: '天坛'
                },
                {
                    value: 'wangfujing',
                    label: '王府井'
                }
            ]
            }, {
                value: 'heilongjiang',
                label: '黑龙江',
                children: [
                    {
                        value: 'haerbin',
                        label: '哈尔滨',
                        children: [
                            {
                                value: 'zhongyangdajie',
                                label: '中央大街',
                            }
                        ]
                    },
                    {
                        value: 'daxinganling',
                        label: '大兴安岭',
                        children: [
                            {
                                value: 'yuying',
                                label: '育英',
                            },
                            {
                                value: 'mohe',
                                label: '漠河',
                            }
                        ]
                    }
                ],
            },
            {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }
        ],
        example2:[
            `    // methode
        loadData(item,callback) {
            console.log(item);
            item.loading = true;
            setTimeout(function(){
                item.loading = false;
                switch (item.value){
                    case 'beijing':
                        item.children = [
                            {
                                value: 'gugong',
                                label: '故宫'
                            },
                            {
                                value: 'tiantan',
                                label: '天坛'
                            },
                            {
                                value: 'wangfujing',
                                label: '王府井'
                            }
                        ];
                    break;
                    case 'heilongjiang':
                        item.children = [
                            {
                                value: 'haerbin',
                                label: '哈尔滨',
                                children: [
                                    {
                                        value: 'zhongyangdajie',
                                        label: '中央大街',
                                    }
                                ]
                            },
                            {
                                value: 'daxinganling',
                                label: '大兴安岭',
                                children: [
                                    {
                                        value: 'yuying',
                                        label: '育英',
                                    },
                                    {
                                        value: 'mohe',
                                        label: '漠河',
                                    }
                                ]
                            }
                        ];
                    break;
                    case 'jiangsu':
                        item.children = [
                            {
                                value: 'nanjing',
                                label: '南京',
                                children: [
                                    {
                                        value: 'fuzimiao',
                                        label: '夫子庙',
                                    }
                                ]
                            },
                            {
                                value: 'suzhou',
                                label: '苏州',
                                children: [
                                    {
                                        value: 'zhuozhengyuan',
                                        label: '拙政园',
                                    },
                                    {
                                        value: 'shizilin',
                                        label: '狮子林',
                                    }
                                ]
                            }
                        ];
                    break;
                }
                callback();
            },2000)
        }`
        ]
    }
}
// transfer 
export const transfer = {
    html:[
        `<Transfer
            :data="data1"
            :target-keys="targetKeys1"
            :render-format="render1"
            @on-change="handleChange1"
            :list-style="listStyle">
    </Transfer>`,
        `<Transfer
            :data="data1"
            :target-keys="targetKeys1"
            filterable
            :filter-method="filterMethod"
            @on-change="handleChange1"
            :list-style="listStyle">
     </Transfer>`,
    ],
    css:``,
    js:[
        `// data 
    listStyle:{
        width: '300px',
        height: '300px'
    },
    data1:this.getData(),
    targetKeys1:this.getTargetKeys()
    // methods
    getData(){
        let data = [];
        for(let i = 0;i<10;i++){
            data.push({
                key: i.toString(),
                label: 'Content ' + i,
                description: 'The desc of content  ' + i,
                disabled: Math.random() * 3 < 1
            });
        }
        return data;
    },
    getTargetKeys(){
        return this.getData().filter(()=>Math.random()*2>1).map(item=>item.key)
    },
    render1 (item) {
        return item.label;
    },
    handleChange1 (newTargetKeys, direction, moveKeys) {
        console.log(newTargetKeys);
        console.log(direction);
        console.log(moveKeys);
        this.targetKeys1 = newTargetKeys;
    }`,
    `// data、methods 可以同上
    filterMethod (data, query) {
        return data.label.indexOf(query) > -1;
    }`,
    ]
}
// upload 
export const upload = {
    html:[
        `<Upload action="//jsonplaceholder.ty.com/posts/picode">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>`,
       `<Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>`
    ],
    css:``,
    js:[]
}
// form 
export const form = {
    html:[
        ` <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
            <Button @click="handleReset('formInline')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>`,

    ],
    css:``,
    js:[
        `// data
    formInline: {
        user: '',
        password: ''
    },
    ruleInline: {
        user: [
            { required: true, message: '请填写用户名.', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请填写密码.', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码不能少于6位.', trigger: 'blur' }
        ]
    }
    // methods
    handleSubmit(name){
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.$Message.success('Success!');
            } else {
                this.$Message.error('Fail!');
            }
        });
    },
    handleReset (name) {
        this.$refs[name].resetFields();
    },`,

    ]
}
// message 
export const message = {
    html:[
        `<Button type="primary" @click="info">默认提示信息</Button>`,
        `<Button @click="success">success提示信息</Button>
    <Button @click="warning">warning提示信息</Button>
    <Button @click="error">error提示信息</Button>`,
        `<Button @click="time">延迟{{second}}秒关闭</Button>`
    ],
    css:``,
    js:[
        `info () {
        this.$Message.info('默认提示信息');
    },`,
        `success () {
        this.$Message.success('success提示信息');
    },
    warning () {
        this.$Message.warning('warning提示信息');
    },
    error () {
        this.$Message.error('error提示信息');
    },`,
        `// data
        second:5,
        // methods
        time () {
            let second = this.second;
            this.$Message.info({
                content: '延迟'+second+'秒关闭',
                duration: second,
                closable: true
            });
        },`

    ]
}
// notice 
export const notice = {
    html:[
        `<Button type="primary" @click="open(false)">打开通知</Button>
    <Button @click="open(true)">打开通知(只有标题)</Button>`,
        `<p>带描述信息</p>
    <Button @click="info(false)">消息</Button>
    <Button @click="success(false)">成功</Button>
    <Button @click="warning(false)">警告</Button>
    <Button @click="error(false)">错误</Button>
    <p>只有标题</p>
    <Button @click="info(true)">消息</Button>
    <Button @click="success(true)">成功</Button>
    <Button @click="warning(true)">警告</Button>
    <Button @click="error(true)">错误</Button>`,
        `<Button type="primary" @click="time">打开通知</Button>`,

    ],
    css:``,
    js:[
        `// methods
    open (nodesc) {
        this.$Notice.open({
            title: '通知标题',
            desc: nodesc ? '' : '这里是通知的描述'
        });
    }`,
        `// methods
    info (nodesc) {
        this.$Notice.info({
            title: '通知标题',
            desc: nodesc ? '' : '这里是通知的描述'
        });
    },
    success (nodesc) {
        this.$Notice.success({
            title: '通知标题',
            desc: nodesc ? '' : '这里是通知的描述'
        });
    },
    warning (nodesc) {
        this.$Notice.warning({
            title: '通知标题',
            desc: nodesc ? '' : '这里是通知的描述'
        });
    },
    error (nodesc) {
        this.$Notice.error({
            title: '通知标题',
            desc: nodesc ? '' : '这里是通知的描述'
        });
    },`,
        `// methods
    time () {
        this.$Notice.open({
            title: '通知标题',
            desc: '这条通知不会自动关闭, 需要你点击关闭按钮去关闭.',
            duration: 0
        });
    }`,

    ]
}
// modal 
export const modal = {
    html:[
        `<Button type="primary" @click="modal1 = true">显示对话框</Button>
    <Modal
        v-model="modal1"
        title="普通的Modal的对话框标题"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>对话内容</p>
        <p>对话内容</p>
        <p>对话内容</p>
    </Modal>`,
        `<Button @click="modal2 = true">Set the width</Button>
    <Modal
        v-model="modal2"
        title="Custom width"
        width="300">
        <p>Customize width, unit px, default 520px.</p>
        <p>The width of the dialog box is responsive, and the width becomes <code>auto</code> when the screen size is less than 768px.</p>
    </Modal>`,
        `<Button type="primary" @click="modal3 = true">Display dialog box</Button>
    <Modal
        v-model="modal3"
        title="Title"
        :loading="loading"
        @on-ok="asyncOK">
        <p>After you click ok, the dialog box will close in 2 seconds.</p>
    </Modal>`,
    `<Divider orientation="left">可拖拽</Divider>
    <Button @click="modal4 = true">Open the first modal</Button>
    <Button @click="modal5 = true">Open the second modal</Button>
    <Modal v-model="modal4" draggable scrollable title="Modal 1">
        <div>This is the first modal</div>
    </Modal>
    <Modal v-model="modal5" draggable scrollable title="Modal 2">
        <div>This is the second modal</div>
    </Modal>`,
    `<Button @click="instance('confirm')">confirm</Button>
    <Button @click="instance('info')">Info</Button>
    <Button @click="instance('success')">Success</Button>
    <Button @click="instance('warning')">Warning</Button>
    <Button @click="instance('error')">Error</Button>`


    ],
    css:``,
    js:[
    `// data
    modal1:false,
    // methods
    ok () {
            this.$Message.info('Clicked ok');
    },
    cancel () {
        this.$Message.info('Clicked cancel');
    }`,
    `// data
    modal2:false,
    `,
    `// data
    modal3:false,
    loading:true
    // methods
    asyncOK(){
        setTimeout(()=>{
            this.modal3 = false;
        },2000)
    }`,
    `// data 
    modal4:false,
    modal5:false,`,
    `// methods 
    instance(type){
        console.log(type)
        let title = 'this is title';
        let content = '<p>content of dialog</p><p>content of dialog</p>';
        switch (type){
            case 'confirm':
                this.$Modal.confirm({
                    title,
                    content,
                })
            break;
            case 'info':
                this.$Modal.info({
                    title,
                    content,
                })
            break;
            case 'success':
                this.$Modal.success({
                    title,
                    content,
                })
            break;
            case 'warning':
                this.$Modal.warning({
                    title,
                    content,
                })
            break;
            case 'error':
                this.$Modal.error({
                    title,
                    content,
                })
            break;
        }
    }`


    ]
}
// tooltip 
export const tooltip = {
    html:[
        `<Tooltip content="Here is the prompt text（这里是提示信息）">
        A balloon appears when the mouse passes over this text（当鼠标经过这段文字时，会出现气泡）
    </Tooltip>`,
        `<div class="top">
        <Tooltip content="Top Left text" placement="top-start">
            <Button>上左</Button>
        </Tooltip>
        <Tooltip content="Top Center text" placement="top">
            <Button>上中</Button>
        </Tooltip>
        <Tooltip content="Top Right text" placement="top-end">
            <Button>上右</Button>
        </Tooltip>
    </div>
    <div class="center">
        <div class="center-left">
            <Tooltip content="Left Top text" placement="left-start">
                <Button>左上</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Center text" placement="left">
                <Button>左中</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Bottom text" placement="left-end">
                <Button>左下</Button>
            </Tooltip>
        </div>
        <div class="center-right">
            <Tooltip content="Right Top text" placement="right-start">
                <Button>右上</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Center text" placement="right">
                <Button>右中</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Bottom text" placement="right-end">
                <Button>右下</Button>
            </Tooltip>
        </div>
    </div>
    <div class="bottom">
        <Tooltip content="Bottom Left text" placement="bottom-start">
            <Button>下左</Button>
        </Tooltip>
        <Tooltip content="Bottom Center text" placement="bottom">
            <Button>下中</Button>
        </Tooltip>
        <Tooltip content="Bottom Right text" placement="bottom-end">
            <Button>下右</Button>
        </Tooltip>
    </div>`,


    ],
    css:[
        `.top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }`,
    ],
    js:[
    


    ]
}
// badge 
export const badge = {
    html:[
        `<Badge :count="3">
        <a href="#" class="demo-badge"></a>
    </Badge>`,
        `<Badge dot>
        <a href="#" class="demo-badge"></a>
    </Badge>`


    ],
    css:[
        `.demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }`,

    ],
    js:[
    


    ]
}



