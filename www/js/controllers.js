/*
		CAL AFEGIR EL NOM DE LES VISTES DECLARADES A app.js
*/

$JSView.controller = {
	
	/* view  menus */
	viewMenuA: function(e){
		$JSView.dataView({'title': 'Welcome'},e)
	},
	viewMenuB: function(e){
        	$JSView.dataView({'title': 'Templates'},e)
    	},
    	viewMenuC: function(e){
    		$JSView.dataView({'title': 'Examples initLoadMore'},e)
    	},
    	viewMenuD: function(e){
    		$JSView.dataView({'title': 'Examples initReload'},e)
    	},	
	
	/* view pàgines */
    	inici: function(e){
		$JSView.dataView({},e)
	},
    	dimenge: function(e){
		$JSView.dataView({},e)	
	},
    	dilluns: function(e){
		$JSView.dataView({},e)
	},
    	dimarts: function(e){
		$JSView.dataView({},e)
	},
    	dimecres: function(e){
		$JSView.dataView({},e)
	},
    	dijous: function(e){
		$JSView.dataView({},e)
	},
    	divendres: function(e){
		$JSView.dataView({},e)
	},
	
	
    
    	modal_info_aeroport: function(e){
		$JSView.dataView({},e)	
	}
	
    	modal_info_coliseo: function(e){
		$JSView.dataView({},e)	
	}
	
    	modal_info_sanpietro: function(e){
		$JSView.dataView({},e)	
	}
	
    	modal_info_navona: function(e){
		$JSView.dataView({},e)	
	}
	
	}
	
	
}

