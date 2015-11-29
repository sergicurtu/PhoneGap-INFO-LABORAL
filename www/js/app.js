window.addEventListener('load', function() {
    /*	
			Declare views
	
			Aquí podem afegir diferents pàgines html , indicar on estan i el nom del controller ( mirar controller.js )
	
	*/
    $JSView.declareView({ 
        viewA: {
            url: '/viewA',
            template: 'views/viewA.html',
            controller: 'viewA'
        },
        viewB: {
            url: '/viewB',
            template: 'views/viewB.html',
            controller: 'viewB'
        },
        viewC: {
            url: '/viewC',
            template: 'views/viewC.html',
            controller: 'viewC'
        }
    });
     
    /*Declare modal*/
    $JSView.declareModal({
        modalA: {
            url: '/modalA',
            template: 'views/modalA.html',
            controller: 'modalA'
        }
    });
     
    /*Asign view start*/
    $JSView
        .initView('viewA');
 
}, false);