// data
var data = [
    {
        level: 1,
        text: '多层级测试1',
        id: 99,
        href:"levelText14",
        icon: "md-baseball",
        nodes:[
            {
                level: 2,
                text: '2层-1',
                id: 991,
                href:"levelText13",
                icon: "md-baseball",
                nodes:[
                    {
                        level: 3,
                        text: '3层-1',
                        id: 9911,
                        href:"levelText11",
                        icon: "md-baseball",
                        disabled:true,
                        nodes:[

                        ]
                    },
                    {
                        level: 3,
                        text: '3层-2',
                        id: 9921,
                        href:"levelText12",
                        icon: "md-baseball",
                        disabled:true,
                        nodes:null
                    },
                ]
            },
            {
                level: 2,
                text: '2层-2',
                id: 992,
                href:"levelText15",
                icon: "md-baseball",
                disabled:true,
                nodes:[

                ]
            },
        ]
    },
    {
        level: 1,
        text: '多层级测试2',
        id: 98,
        href:"levelText2",
        icon: "md-baseball",
        nodes:[
            {
                level: 2,
                text: '2层-1',
                id: 981,
                href:"levelText16",
                icon: "md-baseball",
                disabled:true,
                nodes:[

                ]
            }, 
            {
                level: 2,
                text: '2层-2',
                id: 982,
                href:"levelText17",
                icon: "md-baseball",
                disabled:true,
                nodes:null
            }, 
        ]
    },
    {
        level: 1,
        text: 'Dropdown 下拉菜单',
        id: 1,
        href:"/layoutView/dropdown",
        icon: "md-basketball",
    },
    {
        level: 1,
        text: 'Form 表单',
        id: 2,
        href:"/Form",
        icon: "ios-football",
        nodes:[
            {
                level: 2,
                text: 'form-input',
                id: 21,
                href:"/layoutView/form-input",
                icon: "ios-football-outline",
            },
            {
                level: 2,
                text: 'form-button',
                id: 22,
                href:"/layoutView/form-button",
                icon: "md-football",
                // props1:{
                //     componentName:'button！'
                // }
            },{
                level: 2,
                text: 'form-radio',
                id: 23,
                href:"/layoutView/form-radio",
                icon: "ios-football-outline",
            },{
                level: 2,
                text: 'form-checkbox',
                id: 24,
                href:"/layoutView/form-checkbox",
                icon: "ios-football-outline",
            },{
                level: 2,
                text: 'form-switch',
                id: 25,
                href:"/layoutView/form-switch",
                icon: "ios-football-outline",
            },{
                level: 2,
                text: 'form-select',
                id: 26,
                href:"/layoutView/form-select",
                icon: "ios-football-outline",
            },{
                level: 2,
                text: 'form-datePicker',
                id: 27,
                href:"/layoutView/form-datePicker",
                icon: "ios-football-outline",
            },
        ]
    },
    {
        level: 1,
        text: 'H1、H2 标题',
        id: 3,
        href:"/h1h2",
        icon: "md-baseball",
        nodes:[
            {
                level: 2,
                text: 'h1',
                id: 31,
                href:"/layoutView/h1",
                icon: "ios-baseball",
                props:null,
                nodes:null,
            },
            {
                level: 2,
                text: 'h2',
                id: 32,
                href:"/layoutView/h2",
                icon: "ios-baseball-outline",
                props:null,
                nodes:null,
            }
        ]
    },
    {
        level: 1,
        text: 'Tab 标签页-选项卡',
        id: 4,
        href:"/layoutView/tab",
        icon: "md-basketball",
    },    
    {
        level: 1,
        text: 'Table 表格',
        id: 5,
        href:"/layoutView/table",
        icon: "md-basketball",
    },    
    {
        level: 1,
        text: 'alert 警告提示',
        id: 6,
        href:"/layoutView/alert",
        icon: "md-basketball",
    },
    {
        level: 1,
        text: 'page 分页',
        id: 7,
        href:"/layoutView/page",
        icon: "md-basketball",
    },

];
module.exports = data;