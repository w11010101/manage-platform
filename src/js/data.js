// data
var data = [
    {
        level: 1,
        text: 'h1',
        id: 1,
        href:"/h1",
        icon: "md-baseball",
        // nodes: null
        // nodes:[
        //     {
        //         level: 2,
        //         text: 'h1',
        //         id: 11,
        //         href:"/h1",
        //         icon: "ios-baseball",
        //         nodes:null,
        //         // nodes:[                    
        //         //     {
        //         //         level: 2,
        //         //         text: 'h1/children',
        //         //         id: 111,
        //         //         href:"/h1/children",
        //         //         icon: "ios-baseball-outline",
        //         //     }
        //         // ]
        //     },
        //     {
        //         level: 2,
        //         text: 'h2',
        //         id: 12,
        //         href:"/h2",
        //         icon: "ios-baseball-outline",
        //         props:{
        //             from:'h2.vue',
        //             id:12,
        //             name:'h2'
        //         },
        //     }
        // ]
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
                href:"/form-input",
                icon: "ios-football-outline",
            },
            {
                level: 2,
                text: 'form-button',
                id: 22,
                href:"/form-button",
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
                href:"/table",
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
                href:"/nav",
                icon: "ios-basketball",
            }
        ]
    }
];
module.exports = data;