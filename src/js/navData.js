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
                nodes:[

                ]
            }, 
        ]
    },
    {
        level: 1,
        text: 'h1、h2',
        id: 1,
        href:"/h1h2",
        icon: "md-baseball",
        nodes:[
            {
                level: 2,
                text: 'h1',
                id: 11,
                href:"/layoutView/h1",
                icon: "ios-baseball",
                props:null,
                nodes:null,
            },
            {
                level: 2,
                text: 'h2',
                id: 12,
                href:"/layoutView/h2",
                icon: "ios-baseball-outline",
                props:null,
                nodes:null,
            }
        ]
    },
    {
        level: 1,
        text: 'Form',
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
                text: 'form-btns',
                id: 22,
                href:"/layoutView/form-btns",
                icon: "md-football",
            }
        ]
    },
    {
        level: 1,
        text: 'Table',
        id: 3,
        href:"/Table",
        icon: "md-basketball",
        nodes:[
            {
                level: 2,
                text: 'table',
                id: 31,
                href:"/layoutView/table",
                icon: "ios-basketball",
            }
        ]
    },
    {
        level: 1,
        text: 'nav',
        id: 4,
        href:"/nav",
        icon: "md-basketball",
        nodes:[
            {
                level: 2,
                text: 'nav',
                id: 41,
                href:"/layoutView/nav",
                icon: "ios-basketball",
            }
        ]
    }
];
module.exports = data;