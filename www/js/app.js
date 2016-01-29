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
        diumenge: {
            url: '/diumenge',
            template: 'views/diumenge.html',
            controller: 'diumenge'
        },
        dilluns: {
            url: '/dilluns',
            template: 'views/dilluns.html',
            controller: 'dilluns'
        },
        dimarts: {
            url: '/dimarts',
            template: 'views/dimarts.html',
            controller: 'dimarts'
        },
        dimecres: {
            url: '/dimecres',
            template: 'views/dimecres.html',
            controller: 'dimecres'
        },
        dijous: {
            url: '/dijous',
            template: 'views/dijous.html',
            controller: 'dijous'
        },
        divendres: {
            url: '/divendres',
            template: 'views/divendres.html',
            controller: 'divendres'
        }
    });
     
    /*Declare modal*/
    $JSView.declareModal({
        modal_info_aeroport: {
            url: '/modal_info_aeroport',
            template: 'views/modal_info_aeroport.html',
            controller: 'modal_info_aeroport'
        }
      $JSView.declareModal({
        modal_info_coliseo: {
            url: '/modal_info_coliseo',
            template: 'views/modal_info_coliseo.html',
            controller: 'modal_info_coliseo'
        }
             $JSView.declareModal({
        modal_info_sanpietro: {
            url: '/modal_info_sanpietro',
            template: 'views/modal_info_sanpietro.html',
            controller: 'modal_info_sanpietro'
        
        }
         $JSView.declareModal({
        modal_info_navona: {
            url: '/modal_info_navona',
            template: 'views/modal_info_navona.html',
            controller: 'modal_info_navona'
        }
    /*Asign view start*/
    $JSView
        .initView('inici');
 
}, false);

