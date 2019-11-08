(function(root){

	// Extend objects
	extendObject = (typeof Object.extend === 'undefined') ?
		function(destination, source) {
			for (var property in source) {
				if (source.hasOwnProperty(property)) destination[property] = source[property];
			}
			return destination;
		} : Object.extend;

	// Define a shortcut for checking variable types
	function is(a,b){ return (typeof a == b) ? true : false; }

	
	var icons = {
		'hide':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>hide layer</title><path style="fill:%COLOR%;" d="M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path></svg>',
		'show':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>show layer</title><path style="fill:%COLOR%;" d="M29.561 0.439c-0.586-0.586-1.535-0.586-2.121 0l-6.318 6.318c-1.623-0.492-3.342-0.757-5.122-0.757-6.979 0-13.028 4.064-16 10 1.285 2.566 3.145 4.782 5.407 6.472l-4.968 4.968c-0.586 0.586-0.586 1.535 0 2.121 0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l27-27c0.586-0.586 0.586-1.536 0-2.121zM13 10c1.32 0 2.44 0.853 2.841 2.037l-3.804 3.804c-1.184-0.401-2.037-1.521-2.037-2.841 0-1.657 1.343-3 3-3zM3.441 16c1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 1.715 0.54 3.304 1.459 4.607l-1.904 1.904c-1.639-1.151-3.038-2.621-4.114-4.323z"></path><path style="fill:%COLOR%;" d="M24 13.813c0-0.849-0.133-1.667-0.378-2.434l-10.056 10.056c0.768 0.245 1.586 0.378 2.435 0.378 4.418 0 8-3.582 8-8z"></path><path style="fill:%COLOR%;" d="M25.938 9.062l-2.168 2.168c0.040 0.025 0.079 0.049 0.118 0.074 1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303-1.208 0-2.403-0.149-3.561-0.439l-2.403 2.403c1.866 0.671 3.873 1.036 5.964 1.036 6.978 0 13.027-4.064 16-10-1.407-2.81-3.504-5.2-6.062-6.938z"></path></svg>',
		'remove':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>remove layer</title><path style="fill:%COLOR%;" d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path></svg>',
		'edit':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>edit layer</title><path style="fill:%COLOR%;" d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path></svg>',
		'add':'<svg version="1.1" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="32" height="32" viewBox="0 0 32 32" sodipodi:docname="add.svg"><defs id="defs10" /><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1160" inkscape:window-height="719" id="namedview8" showgrid="false" inkscape:zoom="7.375" inkscape:cx="16" inkscape:cy="16" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="0" inkscape:current-layer="svg2" /><title id="title4">add layer</title><path style="fill:#000000" d="m 20.243,30.989 0,0 0,-10.746 10.746,0 0,0 c 0.148,0 0.288,-0.03 0.414,-0.09 0.346,-0.158 0.586,-0.505 0.586,-0.909 l 0,-6.486 c 0,-0.404 -0.241,-0.751 -0.586,-0.909 -0.126,-0.06 -0.266,-0.09 -0.413,-0.09 l 0,0 -10.747,0 0,-10.78035 0,0 c 0,-0.1478 -0.03,-0.2878 -0.09,-0.4137 -0.158,-0.3458 -0.505,-0.5855 -0.909,-0.5855 l -6.486,0 c -0.404,0 -0.751,0.2411 -0.909,0.5855 -0.06,0.1266 -0.09,0.2659 -0.09,0.4144 l 0,0 0,10.77965 -10.7457,0 0,0 c -0.14785,10e-4 -0.28785,0.03 -0.41445,0.09 -0.3451,0.157 -0.5855,0.505 -0.5855,0.909 l 0,6.486 c 0,0.404 0.2411,0.751 0.5855,0.909 0.1266,0.06 0.2659,0.09 0.41445,0.09 l 0,0 10.7457,0 0,10.746 0,0 c 0,0.148 0.03,0.288 0.09,0.414 0.158,0.346 0.505,0.586 0.909,0.586 l 6.486,0 c 0.404,0 0.752,-0.241 0.909,-0.586 0.06,-0.126 0.09,-0.266 0.09,-0.414 z" id="path6" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccsscccccccsscccccccsscccccccsscc" /></svg>',
		'info':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path style="fill:%COLOR%" d="M 16 0 A 16 16 0 0 0 0 16 A 16 16 0 0 0 16 32 A 16 16 0 0 0 32 16 A 16 16 0 0 0 16 0 z M 17.087891 5.4433594 C 17.405707 5.4433594 17.696853 5.483046 17.955078 5.5625 C 18.223235 5.641954 18.451922 5.7610139 18.640625 5.9199219 C 18.829328 6.0788298 18.970994 6.2715698 19.070312 6.5 C 19.179566 6.7284301 19.236328 6.9911102 19.236328 7.2890625 C 19.236328 7.6068785 19.179565 7.8960715 19.070312 8.1542969 C 18.961062 8.4025907 18.813703 8.6161505 18.625 8.7949219 C 18.436297 8.9637616 18.20761 9.0979486 17.939453 9.1972656 C 17.681227 9.2866511 17.395775 9.3300781 17.087891 9.3300781 C 16.809803 9.3300781 16.549076 9.2866516 16.300781 9.1972656 C 16.052488 9.1078798 15.833234 8.9831268 15.644531 8.8242188 C 15.455828 8.6553791 15.300822 8.4569458 15.181641 8.2285156 C 15.072389 7.9901537 15.019531 7.7217806 15.019531 7.4238281 C 15.019531 7.1060122 15.072387 6.8282057 15.181641 6.5898438 C 15.300822 6.3415501 15.455828 6.1336835 15.644531 5.9648438 C 15.833234 5.7960041 16.052488 5.6655579 16.300781 5.5761719 C 16.549076 5.4867855 16.809803 5.4433594 17.087891 5.4433594 z M 18.609375 9.9902344 L 16.402344 20.076172 C 16.392444 20.135762 16.367855 20.24913 16.328125 20.417969 C 16.298334 20.576877 16.258644 20.765876 16.208984 20.984375 C 16.169259 21.202874 16.123879 21.437253 16.074219 21.685547 C 16.024563 21.933841 15.979183 22.166268 15.939453 22.384766 C 15.899727 22.603265 15.865728 22.797958 15.835938 22.966797 C 15.806148 23.135637 15.791016 23.249004 15.791016 23.308594 C 15.791016 23.447639 15.815574 23.59695 15.865234 23.755859 C 15.914894 23.904834 15.994268 24.039022 16.103516 24.158203 C 16.222697 24.277385 16.377703 24.377581 16.566406 24.457031 C 16.765041 24.536491 17.012595 24.576172 17.310547 24.576172 C 17.399937 24.576172 17.515253 24.564812 17.654297 24.544922 C 17.793342 24.525052 17.940701 24.496761 18.099609 24.457031 C 18.258517 24.417305 18.428651 24.371926 18.607422 24.322266 C 18.786193 24.272606 18.960066 24.212098 19.128906 24.142578 L 19.619141 24.142578 L 19.619141 25.439453 C 19.241735 25.657953 18.844867 25.841259 18.427734 25.990234 C 18.020532 26.129279 17.617973 26.238909 17.220703 26.318359 C 16.833364 26.407753 16.466753 26.466294 16.119141 26.496094 C 15.77153 26.535824 15.469162 26.556641 15.210938 26.556641 C 14.764009 26.556641 14.380315 26.482959 14.0625 26.333984 C 13.744684 26.185009 13.482005 25.999749 13.273438 25.78125 C 13.074803 25.552821 12.925492 25.31096 12.826172 25.052734 C 12.726854 24.784577 12.677734 24.535071 12.677734 24.306641 C 12.677734 24.028553 12.71173 23.705366 12.78125 23.337891 C 12.86071 22.970416 12.945766 22.564115 13.035156 22.117188 L 14.912109 13.580078 C 14.961773 13.37151 14.942906 13.209025 14.853516 13.089844 C 14.764126 12.970663 14.631896 12.870466 14.453125 12.791016 L 12.380859 11.867188 L 12.380859 10.839844 L 18.609375 9.9902344 z " /></svg>',
		'fit':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path style="fill:%COLOR%" d="M 0,12 L0,0 12,0 12,4 6,4 12,10 10,12 4,6 4,12 M20,0 L 32,0 32,12 28,12 28,6 22,12 20,10 26,4 20,4 20,0 M 20,32 L20,28 26,28 20,22 22,20 28,26 28,20 32,20, 32,32 20,32 M 12,32 L 0,32 0,20 4,20 4,26 10,20 12,22 6,28 12,28 12,32" /></svg>',
		'zoomin':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path style="fill:%COLOR%" d="M 11 11 l 0,-5 2,0 0,5 5,0 0,2 -5,0 0,5 -2,0 0,-5 -5,0 0,-2 5,0 M 12,12 m -0.5,-12 a 12, 12, 0, 1, 0, 1, 0 Z m 1 2 a 10, 10, 0, 1, 1, -1, 0 Z M 20.5 20.5 l 1.5,-1.5 8,8 -3,3 -8,-8Z" /></svg>',
		'zoomout':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path style="fill:%COLOR%" d="M 12 12 m 0,-1 l 6,0 0,2 -12,0 0,-2Z M 12,12 m -0.5,-12 a 12, 12, 0, 1, 0, 1, 0 Z m 1 2 a 10, 10, 0, 1, 1, -1, 0 Z M 20.5 20.5 l 1.5,-1.5 8,8 -3,3 -8,-8Z" /></svg>',
		'geo':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path style="fill:%COLOR%" d="M 16,0 L30,30 0,16 12,12 Z" /></svg>',
		'marker':'<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="7.0556mm" height="11.571mm" viewBox="0 0 25 41.001" id="svg2" version="1.1"><g id="layer1" transform="translate(1195.4,216.71)"><path style="fill:%COLOR%;fill-opacity:1;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none" d="M 12.5 0.5 A 12 12 0 0 0 0.5 12.5 A 12 12 0 0 0 1.8047 17.939 L 1.8008 17.939 L 12.5 40.998 L 23.199 17.939 L 23.182 17.939 A 12 12 0 0 0 24.5 12.5 A 12 12 0 0 0 12.5 0.5 z " transform="matrix(1,0,0,1,-1195.4,-216.71)" id="path4147" /><ellipse style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.428;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="path4173" cx="-1182.9" cy="-204.47" rx="5.3848" ry="5.0002" /></g></svg>'
	}

	function getIcon(icon,colour){
		if(icons[icon]) return icons[icon].replace(/%COLOR%/g,(colour||"black"));
		else return icon.replace(/%COLOR%/g,(colour||"black"));
	}

	function OSMEditor(attr){
		this.name = "OSMEditor";
		this.version = "0.2";
		this.debug = true;
		this.events = {"authenticate":""};	// Add some events
		this.user = {};
		this.log = new Logger({'id':this.name,'logging':(location.search.indexOf("logging=true")>=0)});
		var props = {};

		if(console) console.log('%c'+this.name+' v'+this.version+'%c','font-weight:bold;font-size:1.25em;','');
		
		if(this.debug){
			props = {
				oauth_secret: 'dw6XndgkpeDcspAcc4s1i0BsKQYJyb0N8rbnGMfC',
				oauth_consumer_key: 'E5HsR2QdimrAQIwbDIJ7OpY8TidQ0zvzVhXyk09r',
				url: 'https://master.apis.dev.openstreetmap.org'
			};
		}else{
			props = {
				oauth_secret: 'DU2vEKeNzsElPL5hXiVPQ5yhDaYAGyAnWzOy5vyw',
				oauth_consumer_key: '1Eawfzub4uGTKWFX6Py1o93igVJcyBG5G0BQfg3r',
				url: 'https://www.openstreetmap.org'
			};
		}
		
		this.auth = osmAuth(props);
		
		
		this.setNode = function(node){
			this.node = node;
			return this;
		}
		
		this.getNodes = function(callback){
			this.mapper.node = this.node;
			var opts = this.mapper.node.options;
			this.mapper.getNodes(this.mapper.node.type,opts);
			return this;
		}

		this.getUserDetails = function(){
			var _obj = this;
			function done(err, res) {
				if(err) {
					_obj.trigger("login",{"authenticated":false,"error":"error! try clearing your browser cache"});
					return;
				}
				var u = res.getElementsByTagName('user')[0];
				var changesets = res.getElementsByTagName('changesets')[0];
				var img = "";
				try {
					var img = res.getElementsByTagName('img')[0];
				}catch(e){
					var img = "";
				}
				_obj.user = {
					'name': (u.getAttribute('display_name') || "?"),
					'id': (u.getAttribute('id') || "?"),
					'changesets': (changesets.getAttribute('count')||0),
					'img': (img ? img.getAttribute('href') : ''),
					'account_created': (u.getAttribute('account_created') || "")
				}
				_obj.trigger("login",{"authenticated":_obj.auth.authenticated(),"user":_obj.user});
				return;
			}
			this.auth.xhr({
				method: 'GET',
				path: '/api/0.6/user/details'
			}, done);			
		}
		
		this.login = function(){
			var _obj = this;
			this.log.message('Login',_obj,this.auth,this.auth.authenticated())

			this.auth.authenticate(function(){
			
				//_obj.authenticated = auth.authenticated();
				_obj.log.message('Authenticated',_obj.auth.authenticated())
				if(_obj.auth.authenticated()) {
					_obj.getUserDetails();
				}else{
					// Reset user data
					_obj.user = {};
					_obj.trigger("login",{"authenticated":_obj.auth.authenticated()});
				}
			});
			return this;
		}

		this.logout = function(){
			this.auth.logout();
			this.trigger('logout');
			return this;
		}

		function put(_url, _callback, _data){

			var xhr = createCORSRequest('PUT',_url);
			if (!xhr){
				throw new Error('CORS not supported');
			}
			//$('.ajax-loading').show();

			xhr.send(_data);

			/*SUCCESS -- do somenthing with data*/
			xhr.onload = function(){
				// process the response.
				_callback(xhr.responseText);
				//$('.ajax-loading').hide();
			};

			xhr.onerror = function(e){
				console.log(e);
				//$('.ajax-loading').show();
			};
		}
		
		this.put = function(){
			this.log.message('put()',this.auth)
			//put("")
		}
		
		this.startChangeSet = function(opts){
			var content = '<?xml version="1.0" encoding="UTF-8"?><osm><changeset><tag k="created_by" v="ODILeeds Editor '+this.version+'"/><tag k="comment" v="Just adding a test tree"/><tag k="hashtags" v="#ODItrees,#iTreeLeeds"/></changeset></osm>';
			if(this.auth.authenticated()) {
				var oParser = new DOMParser();
				var oDOM = oParser.parseFromString(content, "application/xml");
				this.log.message('startChangeSet (authenticated)',oDOM,new XMLSerializer().serializeToString(oDOM))
				var options = {
					'method':'PUT',
					'path':'/api/0.6/changeset/create',
					'content': new XMLSerializer().serializeToString(oDOM)
				}
				options.options = { 'header': {'Content-Type': 'text/xml'} };
				var _obj = this;
				this.auth.xhr(options,function(err,rtn){
					_obj.changeset = rtn;
					if(err){
						_obj.log.error('startChangeSet xhr error',err);
					}else{
						_obj.log.message('startChangeSet xhr callback',rtn);
						_obj.changeset = {'id':rtn};
					}
				});
			}else{
					this.log.error('User not authenticated so can\'t create a changeset.',content);
			}
			return this;
		}
		
		this.closeChangeSet = function(){
			this.log.message('closeChangeSet (not implemented yet)');
			return this;
		}
		
		this.addNode = function(content){
			if(this.changeset){
				if(this.auth.authenticated()) {
					var oParser = new DOMParser();
					var oDOM = oParser.parseFromString(content, "application/xml");
					this.log.message('add Node (authenticated)',content)
					var options = {
						'method':'PUT',
						'path':'/api/0.6/node/create',
						'content': new XMLSerializer().serializeToString(oDOM)
					}
					options.options = { 'header': {'Content-Type': 'text/xml'} };
					var _obj = this;
					this.auth.xhr(options,function(err,rtn){
						_obj.changeset = rtn;
						if(err){
							_obj.log.error('add Node xhr error',err);
						}else{
							_obj.log.message('add Node xhr callback',rtn);
							_obj.changeset = {'id':rtn};
						}
					});
				}else{
					this.log.error('User not authenticated so can\'t create a changeset.',content);
				}
				return this;
			}else{
				this.log.error('No changeset open');
			}
		}
		
		this.addMap = function(id,options){

			if(!options) options = {};
			options.logging = this.log.logging;
			
			this.mapper = new OSMMap(id,options);

			return this;
		}
		
		return this;

	}

	// Attach a handler to an event for the OSMEditor object in a style similar to that used by jQuery
	//   .on(eventType[,eventData],handler(eventObject));
	//   .on("authenticate",function(e){ console.log(e); });
	//   .on("authenticate",{me:this},function(e){ console.log(e.data.me); });
	OSMEditor.prototype.on = function(ev,e,fn){
		if(typeof ev!="string") return this;
		if(is(fn,"undefined")){
			fn = e;
			e = {};
		}else{
			e = {data:e}
		}
		if(typeof e!="object" || typeof fn!="function") return this;
		if(this.events[ev]) this.events[ev].push({e:e,fn:fn});
		else this.events[ev] = [{e:e,fn:fn}];
		return this;
	}

	// Trigger a defined event with arguments. This is for internal-use to be 
	// sure to include the correct arguments for a particular event
	OSMEditor.prototype.trigger = function(ev,args){
		if(typeof ev != "string") return;
		if(typeof args != "object") args = {};
		var o = [];
		if(typeof this.events[ev]=="object"){
			for(var i = 0 ; i < this.events[ev].length ; i++){
				var e = extendObject(this.events[ev][i].e,args);
				if(typeof this.events[ev][i].fn == "function") o.push(this.events[ev][i].fn.call(this,e))
			}
		}
		if(o.length > 0) return o;
	}

	function OSMMap(id,options){

		if(!options) options = {};
		baseMaps = {};
		if(options.baseMaps) baseMaps = options.baseMaps;
		else{
			// Default maps
			baseMaps['Greyscale'] = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
				attribution: 'Tiles: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
				subdomains: 'abcd',
				maxZoom: 19
			});
			baseMaps['Open Street Map'] = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			});
			baseMaps['CartoDB Voyager'] = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
				attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
				subdomains: 'abcd',
				maxZoom: 19
			});
		}
		this.selectedLayer = "CartoDB Voyager";

		var lat = 53.79659;
		var lon = -1.53385;
		var d = 0.0005;
		var mapel = S(id);
		var bbox = [[lat-d, lon-d],[lat+d, lon+d]];
		this.marker = options.marker;
		this.markers = options.markers;
		this.show = options.show||{};
		
		this.map = L.map(id,{'layers':[baseMaps[this.selectedLayer]],'scrollWheelZoom':true,'editable': true,'zoomControl': false}).fitBounds(bbox);
		this.wood = {};
		this.tooltip = L.DomUtil.get('tooltip');
		this.log = new Logger({'id':'OSMMap','logging':options.logging});
		this.callbacks = {};
		this.nodes = {};
		this.nodegroup = {};
		

//		if(Object.keys(baseMaps).length > 1){ var control = L.control.layers(baseMaps,null,{position: 'topleft'}); control.addTo(this.map); S('.leaflet-control-layers').addClass('leaflet-bar'); }
//		else baseMaps['Default'].addTo(this.map);
		
		
		this.setMarker = function(m){
			this.marker = m;
			return this;
		}

		this.setMarkers = function(m){
			this.markers = m;
			return this;
		}
		
		this.changeLayer = function(id){
			this.log.message('changeLayer',id,baseMaps);
			if(baseMaps[id]){
				this.map.removeLayer(baseMaps[this.selectedLayer]);
				this.map.addLayer(baseMaps[id]);
				this.selectedLayer = id;
			}
		};
		this.getLayers = function(){
			var l = [];
			for(var id in baseMaps){
				l.push({'id':id,'url':baseMaps[id]._url});
			}
			return l;
		}
		this.getLayer = function(){
			return {'id':this.selectedLayer,'url':baseMaps[this.selectedLayer]._url};
		}

		this.map.attributionControl.setPrefix('Map').setPosition('bottomleft');

		if(this.show.zoom){
			// Add zoom control with options
			L.control.zoom({
				 position:'topleft',
				 'zoomInText': getIcon('zoomin','black'),
				 'zoomOutText': getIcon('zoomout','black')
			}).addTo(this.map);
		}

		var icon = L.Icon.extend({
			options: {
				shadowUrl: '/resources/images/marker-shadow.png',
				iconSize:     [3, 41], // size of the icon
				shadowSize:   [41, 41], // size of the shadow
				iconAnchor:   [12.5, 41], // point of the icon which will correspond to marker's location
				shadowAnchor: [12.5, 41],  // the same for the shadow
				popupAnchor:  [0, -41] // point from which the popup should open relative to the iconAnchor
			}
		});

		function makeMarker(icon,colour){
			return L.divIcon({
				'className': '',
				'html':	getIcon(icon,colour),
				'iconSize':	 [32, 42],
				'popupAnchor': [0, -41]
			});
		}

		this.getNodesFromOverpass = function(a,options,callback){

			if(!a) return this;
			if(!options) options = {};
			if(!options['this']) options['this'] = this;
			if(!options.title) options.title = "Node";

			var b = this.map.getBounds().pad(2 * Math.sqrt(2) / 2);

//			S(document).ajax('https://overpass-api.de/api/interpreter?data=node%0A%20%20%5B'+encodeURIComponent(a)+'%5D%0A%20%20%28'+b._southWest.lat+'%2C'+b._southWest.lng+'%2C'+b._northEast.lat+'%2C'+b._northEast.lng+'%29%3B%0Aout%3B',{
			S(document).ajax('overpass.xml',{
				'dataType':'kml',
				'this': this,
				'method': 'POST',
				'callback': callback,
				'success':function(d,attr){
					var oParser = new DOMParser();
					var oDOM = oParser.parseFromString(d, "application/xml");
					//console.log(d,oDOM,S(oDOM).find('node').length);
					var color = (this.markers[this.marker].color||'white');
					var customicon = makeMarker(this.markers[this.marker].svg||'marker',color);
					nodes = L.markerClusterGroup({
						chunkedLoading: true,
						maxClusterRadius: 40,
						iconCreateFunction: function (cluster) {
							var markers = cluster.getAllChildMarkers();
							return L.divIcon({ html: '<div class="marker-group" style="background-color:'+color+';color:black">'+markers.length+'</div>', className: '',iconSize: L.point(40, 40) });
						},
						// Disable all of the defaults:
						spiderfyOnMaxZoom: false,
						showCoverageOnHover: false,
						zoomToBoundsOnClick: true
					});
					// Build marker list
					var markerList = [];
					features = S(oDOM).find('node');
					this.log.message('Got results from overpass',oDOM,features.length);
					var _obj = this;

					for(var i = 0; i < features.length; i++){
						el = S(features[i]);
						lat = parseFloat(el.attr('lat'));
						lon = parseFloat(el.attr('lon'));
						id = el.attr('id');
						pop = "";
						if(!this.nodes[id]){
							this.nodes[id] = {'id':id,'lat':lat,'lon':lon,'props':{},'popup':''};
							if(typeof lon==="number" && typeof lat==="number"){
								tags = el.find('tag');
								this.nodes[id].props = {'OSMID':id};
								taglist = options.tags;
								for(var t = 0; t < tags.length; t++){
									tag = S(tags[t]);
									name = tag.attr('k');
									this.nodes[id].props[name] = tag.attr('v');
								}
								if(!options.tags){
									for(var t = 0; t < tags.length; t++){
										tag = S(tags[t]);
										name = tag.attr('k');
										taglist[name] = name;
									}
								}
								pop = '<h3>'+options.title+'</h3>';
								tagstring = '';
								for(var t in taglist){
									if(taglist[t] && typeof this.nodes[id].props[t]!=="undefined") tagstring += (tagstring.length > 0 ? '<br />':'')+'<strong>'+taglist[t]+'</strong>: '+this.nodes[id].props[t];
								}
								if(tagstring) pop += '<p>'+tagstring+'</p>';
								this.nodes[id].popup = pop;
							}
						}else{
							pop = this.nodes[id].popup;
						}
		
						if(typeof lon==="number" && typeof lat==="number"){
							marker = L.marker([lat,lon],{icon: customicon}).on('popupopen', function(e){
								if(typeof _obj.callbacks.popupopen==="function") _obj.callbacks.popupopen.call(_obj,e);
							}).on('popupclose',function(e){
								if(typeof _obj.callbacks.popupclose==="function") _obj.callbacks.popupclose.call(_obj,e);
							});
							marker.osmid = id;
							marker.bindPopup(pop);
							markerList.push(marker);
						}
					}
					nodes.addLayers(markerList);
					nodes.addTo(this.map);
					this.nodegroup = nodes;
					if(typeof attr.callback==="function") attr.callback.call(attr['this']);
				}
			})
		}
		
		this.getNodes = function(a,options){
			if(!a) return this;
			if(!options) options = {};
			options['this'] = this;
			this.getNodesFromOverpass(a,options,function(a,b){
				this.log.message('got overpass',this,a);
				if(typeof this.callbacks.updatenodes==="function") this.callbacks.updatenodes.call(this,a,b);
			});
			return this;
		}

		var user = new User({mapper:this});

		this.m2px = function(m,lat,zoom){
			if(!lat) lat = this.map.getCenter().lat;
			if(!zoom) zoom = this.map.getZoom();
			var mperpx = 40075016.686 * Math.abs(Math.cos(lat * 180/Math.PI)) / Math.pow(2, zoom+8);
			return m/mperpx;
		}

		
		var _obj = this;

		this.map.on("movestart", function(){
			if(typeof _obj.callbacks.movestart==="function") _obj.callbacks.movestart.call(_obj);
		});
		this.map.on("move", function(){
			if(typeof _obj.callbacks.move==="function") _obj.callbacks.move.call(_obj);
		});
		this.map.on("moveend", function(){
			if(typeof _obj.callbacks.moveend==="function") _obj.callbacks.moveend.call(_obj);
		});


		function addTooltip (e) {
			L.DomEvent.on(document, 'mousemove', moveTooltip);
			var h = "Click on the map to start a "+_obj.drawingtype+".";
			if(_obj.drawingtype == "marker") h = "Click on the map to add a marker";
			_obj.log.message('addTooltip',_obj,_obj.tooltip)
			_obj.tooltip.innerHTML = h;
			_obj.tooltip.style.display = 'block';
		}
		function removeTooltip (e) {
			_obj.tooltip.innerHTML = '';
			_obj.tooltip.style.display = 'none';
			L.DomEvent.off(document, 'mousemove', moveTooltip);
		}
		function moveTooltip (e) {
			_obj.tooltip.style.left = e.clientX + 20 + 'px';
			_obj.tooltip.style.top = e.clientY - 10 + 'px';
		}
		function updateTooltip (e) {
			_obj.tooltip.innerHTML = (_obj.drawingtype=="marker" ? "" : (e.layer.editor._drawnLatLngs.length < e.layer.editor.MIN_VERTEX ? 'Click on the map to continue '+_obj.drawingtype+'.': 'Click on last point to finish '+_obj.drawingtype+'.'));
		}

		this.stopDrawing = function(e){
			this.drawing = false;
			S('.leaflet-draw-toolbar .active').removeClass('active');
			this.map.editTools.stopDrawing();
			this.log.message('stopDrawing',e);
			removeTooltip(e);
			return;
		}

		this.drawItem = function(el,typ){
			this.drawingtype = typ;
			this.log.message('drawItem',el,typ);
			if(this.drawing){
				this.stopDrawing();
			}else{
				this.drawing = true;
				S(el).addClass('active');
				this.map.editTools.featuresLayer = this.wood.leaflet;
				if(typ=="polyline") window.LAYER = this.map.editTools.startPolyline.call(this.map.editTools);
				if(typ=="polygon") window.LAYER = this.map.editTools.startPolygon.call(this.map.editTools);
				if(typ=="marker") window.LAYER = this.map.editTools.startMarker.call(this.map.editTools,this.map.editTools,{'icon': makeMarker('marker','#67E767') });
			}
			return;
		}

		this.startEditLayer = function(id){
			if(this.editing) this.stopEditLayer();
			if(this.wood){
				this.editing = id;
				S('#layers li.edit').removeClass('edit');
				S('.editor').remove();
				S('#'+id).addClass('edit').removeClass('open');
				// If the Leaflet layer doesn't exist, create a layerGroup
				if(!this.wood.leaflet) this.wood.leaflet = new L.layerGroup();
				// Add the layer to the map
				this.wood.leaflet.addTo(this.map);
				// If we have any features we need to make them editable
				this.wood.leaflet.eachLayer(function(layer) { layer.enableEdit(); });
				var _obj = this;
				this.map.on('editable:drawing:start', function(e){
					if(e.layer.setStyle) e.layer.setStyle({color: _obj.layer.colour});
					addTooltip(e);
				}).on('editable:drawing:end', function(e){
					_obj.log.message('drawing:end');
					_obj.stopDrawing(e);
				}).on('editable:drawing:click', function(e){
					updateTooltip(e);
				}).on('editable:created', function(e){
					_obj.log.message('editable:created');
				});

/*
				this.controledit = L.Control.extend({
					options: {
						position: 'topleft'
					},
					onAdd: function (map){
						_obj.log.message('onAdd',map)
						var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-edit');
						container.innerHTML = '<a href="#">'+getIcon('marker','')+'</a>';
						container.onclick = function(e){
							e.preventDefault();
							console.log('click')
							_obj.drawItem(this,'marker',id);
							if(_obj.callbacks && _obj.callbacks.addmarker) _obj.callbacks.addmarker.call(this);
						}
						return container;
					}
				});
				this.map.addControl(new this.controledit());
*/

				// Add the Editor HTML
//				S('#'+id).append('<div class="editor"><div><div class="left padded"><form><div class="row"><label for="edit-name">Title:</label><input type="text" id="edit-name" name="edit-name" value="'+layers[id].name+'" /></div><div class="row"><label for="edit-desc">Description:</label><textarea id="edit-desc">'+(layers[id].desc ? layers[id].desc:'')+'</textarea></div><div class="row"><label for="edit-url">Website:</label><input type="url" id="edit-url" name="edit-url" value="'+layers[id].url+'" /></div><div class="row"><label for="edit-color">Colour:</label><input type="color" id="edit-color" name="edit-color" value="'+layers[id].colour+'" /></div></form></div><div class="right"><div class="leaflet-draw-toolbar leaflet-bar leaflet-draw-toolbar-top"><a class="leaflet-draw-draw-polyline" href="#" title="Draw a polyline"><span class="sr-only">Draw a polyline</span></a><a class="leaflet-draw-draw-polygon" href="#" title="Draw a polygon"><span class="sr-only">Draw a polygon</span></a><a class="leaflet-draw-draw-marker" href="#" title="Draw a marker"><span class="sr-only">Draw a marker</span></a></div><input id="editor-save" type="submit" value="Save" /></div></div></div>');


				// Add events to elements we've just added
				S('#editor-save').on('click',{me:this},function(e){
					S('#'+id+' form').trigger('submit');
				});
				S('#edit-color').on('change',{me:this},function(e){
					e.data.me.wood.colour = S('#edit-color')[0].value;
					e.data.me.setLayerColours(id);
				});
				S('#'+id+' form').on('submit',function(e){
					e.preventDefault();
					e.stopPropagation();
					_obj.stopEditLayer();
				});
				if(S('.message').length > 0 && showmessage){
					//S('.message').html("<button class='close'>"+getIcon('remove')+"</button>We've temporarily hidden some layers because of copyright. They'll reappear once you stop editing.");
					S('#message .close').on('click',function(e){ S('#message').remove(); });
					S('body').addClass('hasmessage');
				}
			}
			return this;
		}

		this.stopEditLayer = function(){
			if(this.editing) id = this.editing;
			this.log.message('stopEditLayer',id,this.editing)
			if(this.wood){
				// Need to save
				this.wood.name = S('#edit-name')[0].value;
				this.wood.desc = S('#edit-desc')[0].value || "";
				this.wood.url = S('#edit-url')[0].value;
				this.wood.colour = S('#edit-color')[0].value;
				// Disable edit on feature
				this.wood.leaflet.eachLayer(function(layer) { layer.disableEdit(); });
				// Store the layer as data
				this.wood.data = layers[id].leaflet.toGeoJSON();
				this.log.message('GeoJSON',this.wood.data);
				/*
				_obj.setLayerColours(id);
				_obj.updateLayers();
				this.saveUserLayer();
				S('#layers li.edit').removeClass('edit');
				S('.editor').remove();
				S('.message').html("");
				S('#saver').html("").css({'display':'none'});
				S('body').removeClass('hasmessage');
				for(var i = 0; i < this.temporaryhide.length; i++){
					this.showLayer(this.temporaryhide[i]);
				}
				this.temporaryhide = [];
				*/
			}
			this.editing = "";
			return this;
		}

		//this.startEditLayer();

		return this;
	}

	function User(options){
		if(!options) options = {};
		if(!options.mapper) return {};
		this.locating = false;
		this.mapper = options.mapper;
		this.log = new Logger({'id':'User','logging':this.mapper.log.logging});

		var _obj = this;

		this.check = setInterval(function(){
			if(_obj.p){
				var now = new Date();
				var ago = (now-_obj.p.timestamp)/1000;
				var el = S('.leaflet-control-geolocate');
				if(ago > 10) el.removeClass('live-location');
			}
		},5000);

		this.setUserLocation = function(p){

			var btn = S('.leaflet-control-geolocate');
			this.log.message('setUserLocation',p,btn,btn.hasClass('live-location'));

			if(!this.locating){
				this.p = null;
				navigator.geolocation.clearWatch(this.watchID);
				btn.removeClass('live-location');
				this.marker.remove();
				this.marker = null;
				return;
			}

			lat = p.coords.latitude;
			lon = p.coords.longitude;
			this.p = p;
			var a = Math.round(2*this.mapper.m2px(p.coords.accuracy,lat));

			btn.addClass('live-location');
			if(!this.marker){
				var s = 10;
				var ico = L.divIcon({ html: '<div class="my-location-accuracy" style="width:'+a+'px;height:'+a+'px"></div>', 'className':'my-location', 'iconSize': L.point(s, s) });
				this.marker = L.marker([lat, lon],{icon:ico})
				this.marker.addTo(this.mapper.map);
				var _obj = this;
				this.mapper.map.on('zoomend', function() {
					_obj.setUserLocation(_obj.p,false);
				});
			}else{
				this.marker.setLatLng([lat, lon]).update();
				S('.my-location-accuracy').css({'width':a+'px','height':a+'px'});
			}
			if(!this.centred){
				// We want to centre the view and update the nodes
				this.mapper.map.panTo(new L.LatLng(lat, lon))
				this.mapper.getNodes(this.mapper.node.type,this.mapper.node.options);
				this.centred = true;
			}
			if(_obj.mapper.callbacks && _obj.mapper.callbacks.geoend) _obj.mapper.callbacks.geoend.call(this);

		}
		if("geolocation" in navigator){
			var geo_options = {
				enableHighAccuracy: true, 
				maximumAge        : 30000, 
				timeout           : 27000
			};

			var _obj = this;

			function geo_error(){
				_obj.log.error("Sorry, no position available.");
			}

			this.control = L.Control.extend({
				options: {
					position: 'topleft'
				},
				onAdd: function (map){
					_obj.log.message('control onAdd',map)
					var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-geolocate');
					container.innerHTML = '<a href="#">'+getIcon('geo','black')+'</a>';
					container.onclick = function(e){
						e.preventDefault();
						_obj.centred = false;
						_obj.locating = !_obj.locating;
						if(_obj.locating){
							if(_obj.mapper.callbacks && _obj.mapper.callbacks.geostart) _obj.mapper.callbacks.geostart.call(this);
							// Start watching the user location
							_obj.watchID = navigator.geolocation.watchPosition(function(position) {
								_obj.setUserLocation(position);
							},geo_error,geo_options);
						}else{
							_obj.setUserLocation()
						}
					}
					return container;
				}
			});
			this.mapper.map.addControl(new _obj.control());
		}else{
			this.log.message('No location services available');
		}

		return this;
	}


	function Logger(inp){
		if(!inp) inp = {};
		this.logging = (inp.logging||false);
		this.logtime = (inp.logtime||false);
		this.id = (inp.id||"JS");
		this.metrics = {};
		return this;
	}
	Logger.prototype.error = function(){ this.log('ERROR',arguments); };
	Logger.prototype.warning = function(){ this.log('WARNING',arguments); };
	Logger.prototype.info = function(){ this.log('INFO',arguments); };
	Logger.prototype.message = function(){ this.log('MESSAGE',arguments); }
	Logger.prototype.log = function(){
		if(this.logging || arguments[0]=="ERROR" || arguments[0]=="WARNING" || arguments[0]=="INFO"){
			var args,bold;
			args = Array.prototype.slice.call(arguments[1], 0);
			bold = 'font-weight:bold;';
			if(console && typeof console.log==="function"){
				if(arguments[0] == "ERROR") console.error('%c'+this.id+'%c:',bold,'',args);
				else if(arguments[0] == "WARNING") console.warn('%c'+this.id+'%c:',bold,'',args);
				else if(arguments[0] == "INFO") console.info('%c'+this.id+'%c:',bold,'',args);
				else console.log('%c'+this.id+'%c:',bold,'',args);
			}
		}
		return this;
	}
	Logger.prototype.time = function(key){
		if(!this.metrics[key]) this.metrics[key] = {'times':[],'start':''};
		if(!this.metrics[key].start) this.metrics[key].start = new Date();
		else{
			var t,w,v,tot,l,i,ts;
			t = ((new Date())-this.metrics[key].start);
			ts = this.metrics[key].times;
			// Define the weights for each time in the array
			w = [1,0.75,0.55,0.4,0.28,0.18,0.1,0.05,0.002];
			// Add this time to the start of the array
			ts.unshift(t);
			// Remove old times from the end
			if(ts.length > w.length-1) ts = ts.slice(0,w.length);
			// Work out the weighted average
			l = ts.length;
			this.metrics[key].av = 0;
			if(l > 0){
				for(i = 0, v = 0, tot = 0 ; i < l ; i++){
					v += ts[i]*w[i];
					tot += w[i];
				}
				this.metrics[key].av = v/tot;
			}
			this.metrics[key].times = ts.splice(0);
			if(this.logtime) this.info(key+' '+t+'ms ('+this.metrics[key].av.toFixed(1)+'ms av)');
			delete this.metrics[key].start;
		}
		return this;
	};


	root.OSMEditor = OSMEditor;
	root.Logger = Logger;

})(window || this);
