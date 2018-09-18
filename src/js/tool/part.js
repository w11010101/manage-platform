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