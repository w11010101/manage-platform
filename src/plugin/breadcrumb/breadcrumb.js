(function(root,factory){
    if(typeof define === 'function'){
        define(function(){
            return factory;
        });
    }else if(typeof exports === 'object'){
        module.exports = factory;
    }else{
        root.breadcrumb = factory;
    }
})(this,function(option){
    /**
     * 根据树形结构，来获取子节点的面包屑路径
     * @param  {tree Array} arr     原始树形结构的arr数据
     * @param  {Number} selectedID  你所要查找到的id
     * @param  {Object} option      相关配置项
     * @return {Array}  arr         返回一个正序数组，如果没有则返回一个空数组
     */

    function getBreadcrumb(option){
        'use strict';
        var breadcrumbs = [],   // 节点数据集合
            topID = [],         // 顶层id集合
            data = '',          // 原始数据
            nodeArr = [],       // 节点集合
            idsArr = [],        // 节点id集合
            currentNode = '',   // 当前节点
            currentNodesChilds = ''; // 当前节点的子节点集合
        // 默认配置项
        
        var _default = {
           nodesName:"nodes",   // 默认子节点的集合为nodes
           paramName:'id'   // 默认根据id属性来查找
        };
        // 修改默认配置项
        if(option){
            for(var item in option){
                if(option[item]){
                   _default[item] = option[item]; 
                }
            } 
        }
        this.author = '大馒头小咸菜';

        // run
        this.init = function(arr,selectedID){
            breadcrumbs = [];
            idsArr = [];
            nodeArr = [];
            selectedID = typeof selectedID === "string"?selectedID:selectedID?selectedID.toString():null;
            data = arr;    // 原始数据
            
            for(var j = 0;j<arr.length;j++){
                topID.push(arr[j][_default.paramName]);
            }
            var _get = getNodeParent(arr,selectedID);
            return {
                breadcrumbsArr:_get.bs,
                nodesArr:_get.ns,
                idsArr:_get.ids,
                currentNode:_get.cn,
                currentNodesChilds:_get.cnc
            };
        };
        // walk on water
        // the call of the mountains
        // 获取节点父级
        function getNodeParent (arr,selectedID){
            var i = 0;
            var l = arr.length;
            while (i<l){
                var thisNode = arr[i][_default.paramName];
                var _parame = thisNode?typeof thisNode === "string"?thisNode:thisNode.toString():arr[i].id;
                
                if(_parame === selectedID){
                    // 如果相同 ，就插入arr，并终止；
                    if(breadcrumbs.indexOf(arr[i].text)<0){
                        breadcrumbs.unshift(arr[i].text);
                        nodeArr.unshift(arr[i]);
                        idsArr.unshift(_parame);
                        currentNode = arr[i];
                        currentNodesChilds = arr[i][_default.nodesName]&&arr[i][_default.nodesName].length?arr[i][_default.nodesName]:'';
                    }
                    break;
                }else{
                    // 如果不相同 ，就判断子集
                    if(arr[i][_default.nodesName] && arr[i][_default.nodesName].length){
                        // 如果有子集
                        var state = isParent(arr[i][_default.nodesName],selectedID);
                        if(state){
                            // 获取当前的父节点，如果在数组里已经存在就不添加
                            if(breadcrumbs.indexOf(arr[i].text)<0){
                                breadcrumbs.unshift(arr[i].text);
                                nodeArr.unshift(arr[i]);
                                idsArr.unshift(_parame);
                            }
                            // 如果当前不是顶层，则继续调用
                            if(topID.indexOf(_parame)<0){
                                getNodeParent(data,_parame)
                            }
                            break;
                        }else{
                            // 如果没有继续调用
                            getNodeParent(arr[i][_default.nodesName],selectedID);
                        }
                    }
                }

                i++;
            }
            // return breadcrumbs;
            return {
                bs:breadcrumbs,
                ns:nodeArr,
                ids:idsArr,
                cn:currentNode,
                cnc:currentNodesChilds
            };
        }

        // 判断是否是父级节点，返回 boolean
        function isParent(arr,selectedID){
            var i = 0;
            var state;
            while(i<arr.length){
                var thisNode = arr[i][_default.paramName];
                var _parame = thisNode?typeof thisNode === "string"?thisNode:thisNode.toString():arr[i].id;
                if(_parame === selectedID){
                    if(breadcrumbs.indexOf(arr[i].text)<0){
                        breadcrumbs.unshift(arr[i].text);
                        nodeArr.unshift(arr[i]);
                        idsArr.unshift(_parame);
                        currentNode = arr[i];
                        currentNodesChilds = arr[i][_default.nodesName]&&arr[i][_default.nodesName].length?arr[i][_default.nodesName]:'';
                    }
                    state = true;
                    break;
                }
                i++;
            }
            return state;
        }

        // 公有方法
        return {
            init:this.init,
            author:this.author,
        };
    }
    var breadcrumb = new getBreadcrumb(option);
    return breadcrumb;

})