//-- DOM操作
const DOM = {
	//-- 获取标签
	getTag(name) {
		return window.document.getElementsByTagName(name)[0]
	},
	//-- 获取id
	get(id) {
		return window.document.getElementById(id)
	},
	//-- 更换标题
	title(name){
		this.getTag('title').innerHTML = name
	},
	//-- 创建DOM
	create(name){
		return document.createElement(name || 'div')
	},
	//-- 设置属性
	setAttr(node,name,value){
		node && node.setAttribute(name.replace(/\s/g,''),value)
	},
	//-- 添加DOM
	addBody(child){
		this.getTag('body').appendChild(child)
	},
	//-- 移除body中的dom
	removeBody(child){
		this.getTab('body').removeChild(child);	
	},
	//-- 通过name来获取dom
	getName(name){
		return document.getElementsByName(name)[0]
	},
	//-- 移除body中的dom
	focus(name){
		this.getName(name).focus()
	},
	//-- 移除body中的dom
	focus(name){
		this.getName(name).focus()
	},
	//-- 插入script,并执行回调
	script(url,callback){
		var script = this.create('script')
		this.setAttr(script,'src',url+'?callback=callback')
		script.onload = script.onreadystatechange = function(){  
			if(script.readyState && script.readyState != 'loaded' && script.readyState != 'complete') return
			script.onreadystatechange = script.onload = null  
			callback && callback() 
		}  
		this.addBody(script)
	}
}
module.exports = DOM