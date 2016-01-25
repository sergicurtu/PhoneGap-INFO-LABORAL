window.addEventListener('load', function() {
    /*	
			Declare views
	
			Aquí podem afegir diferents pàgines html , indicar on estan i el nom del controller ( mirar controller.js )
	
	*/
    $JSView.declareView({ 
        inici: {
            url: '/inici',
            template: 'views/inici.html',
            controller: 'inici'
        },
        sol: {
            url: '/sol',
            template: 'views/sol.html',
            controller: 'sol'
        },
        mercuri: {
            url: '/mercuri',
            template: 'views/mercuri.html',
            controller: 'mercuri'
        },
        venus: {
            url: '/venus',
            template: 'views/venus.html',
            controller: 'venus'
        },
        terra: {
            url: '/terra',
            template: 'views/terra.html',
            controller: 'terra'
        },
        mart: {
            url: '/mart',
            template: 'views/mart.html',
            controller: 'mart'
        },
        jupiter: {
            url: '/jupiter',
            template: 'views/jupiter.html',
            controller: 'jupiter'
        },
        ura: {
            url: '/ura',
            template: 'views/ura.html',
            controller: 'ura'
        },
        neptu: {
            url: '/neptu',
            template: 'views/neptu.html',
            controller: 'neptu'
        },
        saturn: {
            url: '/saturn',
            template: 'views/saturn.html',
            controller: 'saturn'
        },
        taula: {
            url: '/taula',
            template: 'views/taula.html',
            controller: 'taula'
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
     
    /*designar la pàgina inicial */
    $JSView
        .initView('inici');
 
}, false);
