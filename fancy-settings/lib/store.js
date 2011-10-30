//
// Copyright (c) 2011 Frank Kohlhepp
// https://github.com/frankkohlhepp/store-js
// License: MIT-license
//
(function () {
    var Store = this.Store = function (name, defaults) {
        var key;
        this.name = name;
		this.watchers = {};
        
        if (defaults !== undefined) {
            for (key in defaults) {
                if (defaults.hasOwnProperty(key) && this.get(key) === undefined) {
                    this.set(key, defaults[key]);
                }
            }
        }
		
		if(chrome && chrome.extension)
		{
			var storeStuff = this;
			chrome.extension.onRequest.addListener(
				function(request,sender,sendResponse)
				{
					if(request.type && request.type == 'store.' + storeStuff.name + '.callwatch')
					{
						// Callback for Watchers
						var name = request.name;
						if(storeStuff.watchers[name])
						{
							var val = storeStuff.get(name);
							for(i = 0;i < storeStuff.watchers[name].length;++i)
								storeStuff.watchers[name][i](val);
						}
					}
				}
			);
		}
    };
    
    Store.prototype.get = function (name) {
        name = "store." + this.name + "." + name;
        if (localStorage.getItem(name) === null) { return undefined; }
        try {
            return JSON.parse(localStorage.getItem(name));
        } catch (e) {
            return null;
        }
    };
	
	Store.prototype.watch = function(name,callback) {
		if(!this.watchers[name]) this.watchers[name] = [];
		this.watchers[name][this.watchers[name].length] = callback;
	};
    
    Store.prototype.set = function (name, value) {
        if (value === undefined) {
            this.remove(name);
        } else {
            if (typeof value === "function") {
                value = null;
            } else {
                try {
                    value = JSON.stringify(value);
                } catch (e) {
                    value = null;
                }
            }
            
            localStorage.setItem("store." + this.name + "." + name, value);
			
			if(chrome && chrome.extension)
			{
				var storeName = this.name;
				chrome.extension.sendRequest({type: "store." + storeName + ".callwatch", 'name': name});
			}
        }
        
        return this;
    };
    
    Store.prototype.remove = function (name) {
        localStorage.removeItem("store." + this.name + "." + name);
        return this;
    };
    
    Store.prototype.removeAll = function () {
        var name,
            i;
        
        name = "store." + this.name + ".";
        for (i = (localStorage.length - 1); i >= 0; i--) {
            if (localStorage.key(i).substring(0, name.length) === name) {
                localStorage.removeItem(localStorage.key(i));
            }
        }
        
        return this;
    };
    
    Store.prototype.toObject = function () {
        var values,
            name,
            i,
            key,
            value;
        
        values = {};
        name = "store." + this.name + ".";
        for (i = (localStorage.length - 1); i >= 0; i--) {
            if (localStorage.key(i).substring(0, name.length) === name) {
                key = localStorage.key(i).substring(name.length);
                value = this.get(key);
                if (value !== undefined) { values[key] = value; }
            }
        }
        
        return values;
    };
    
    Store.prototype.fromObject = function (values, merge) {
        if (merge !== true) { this.removeAll(); }
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                this.set(key, values[key]);
            }
        }
        
        return this;
    };
}());
