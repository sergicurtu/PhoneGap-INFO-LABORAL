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
        },
        viewD: {
            url: '/viewD',
            template: 'views/viewD.html',
            controller: 'viewD'
        },
        viewE: {
            url: '/viewE',
            template: 'views/viewE.html',
            controller: 'viewE'
        },
        viewF: {
            url: '/viewF',
            template: 'views/viewF.html',
            controller: 'viewF'
        },
        viewG: {
            url: '/viewG',
            template: 'views/viewG.html',
            controller: 'viewG'
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
