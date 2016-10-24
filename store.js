//-- 缓存
const Store = {	
	set(key,value,type){
		var type = type === void 0 ? true : type 
		if(value === void 0){
			return this.remove(key)
		}
		this.has(key) && this.remove(key)
		var name = !!type ? 'localStorage' : 'sessionStorage'
		try{
			value = JSON.stringify(value)
		}catch(e){
			console.warn('数据不为JSON格式')
		}
		window[name].setItem(key,value)
		return value
	},
	get(key){
		var value = window.localStorage.getItem(key) || window.sessionStorage.getItem(key)
		try{
			value = JSON.parse(value)
		}catch(e){
		}
		return value || false
	},
	has(key){
		return !!this.get(key)
	},
	remove(key){
		window.localStorage.removeItem(key)
		window.sessionStorage.removeItem(key)
	},
	clear(){
		window.localStorage.clear()
		window.sessionStorage.clear()
	}
}
module.exports = Store