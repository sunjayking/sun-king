//-- 基础，类似underscore
const _ = {
	op(){
		var op = Object.prototype
		return {
			ostring	: op.toString,
			hasOwn	: op.hasOwnProperty,
		}
	},
	isFunction(it){
		return this.op().ostring.call(it) === '[object Function]'
	},
	isArray(it) {
		return this.op().ostring.call(it) === '[object Array]'
	},
	isObject(it) {
		return this.op().ostring.call(it) === '[object Object]'
	},
	isString(it) {
		return this.op().ostring.call(it) === '[object String]'
	},
	isUndefine(it) {
		return this.op().ostring.call(it) === '[object Undefined]'
	},
	isBool(it) {
		return this.op().ostring.call(it) === '[object Boolean]'
	},
	isNumber(it) {
		return it%1 >= 0
	},
	hasArr(val,array){
		var res = false
		array.map((value) => {
			if(value === val){
				res = true
			}
		})
		return res
	},
	removeArr(val,array){
		array.map((value,i) => {
			value === val && array.splice(i,1)
		})
		return array
	},
	hasProp(obj, prop){
		return this.op().hasOwn.call(obj, prop)
	},
	eachProp(obj, func){
		for(let prop in obj){
			if(this.hasProp(obj, prop)){
				if(func(obj[prop], prop)){
					break;
				}
			}
		}
	},
	mixin(target, source) {  
		if(source){
			this.eachProp(source, function(value, prop) {
				if (!this.hasProp(target, prop)) {
					if (this.isObject(value) && value &&
						!this.isArray(value) && !this.isFunction(value) &&
						!(value instanceof RegExp)){
						if(!target[prop]){
							target[prop] = {};
						}
						_.mixin(target[prop], value);
					}else{
						target[prop] = value;
					}
				}else{
					target[prop] = value;
				}
			}.bind(this))
		}
		return target;
	},
	now(){
		return parseInt( new Date() / 1000 )
	},
	filterSpace(txt){
		return txt.replace(/\s/g,'')
	},
	cut(txt){
		return this.filterSpace(txt).split('|')
	},
	random(min,max){
		var under	= max ? min : 0
		var top		= max || min
		return parseInt(Math.random()*(top-under+1) + under)
	},
	browser(){
		var u	= navigator.userAgent
		var ua	= u.toLowerCase()
		return {
			ios		: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			android	: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
			wechat	: ua.match(/MicroMessenger/i) == "micromessenger"
		}
	},
	width(){
		return window.innerWidth || document.body.clientWidth
	},
	height(){
		return window.innerHeight || document.body.clientHeight
	},
}


module.exports = _