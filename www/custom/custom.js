//All ready!. Page &  Cordova loaded => $(document).ready && cordova "deviceready"
//Todo listo!. Página & Cordova cargados => $(document).ready && cordova "deviceready"
function deviceReady() {

	try {

		//It's a good idea to consider what happens when the device is switched on and off the internet.
		//Es buena idea considerar que pasa cuando el dispositivo se conecta y desconecta a Internet.
		document.addEventListener("online", function() {
			//somthing
		}, false);
		
		//Typically fired when the device changes orientation.
		//Típicamente disparado cuando el dispositivo cambia de orientación.
		$(window).resize(function() {
			//somthing
			mui.viewport.iScrollRefresh();
		});
	
		//Sample when Internet connection is needed but not mandatory
		//Ejemplo de cuando se necesita conexióna a Internet pero no es obligatoria.
		if (!mui.connectionAvailable()){
			if ("plugins" in window && "toast" in window.plugins)
				window.plugins.toast.showLongCenter("We recommend you connect your device to the Internet");
			else
				mui.alert("We recommend you connect your device to the Internet");
		}
		
		installEvents();
		
		//Hide splash.
		//Ocultar el splash.
		if (navigator.splashscreen) {
			setTimeout(function() {	//setTimeout is optional. SetTimeout es opcional.
				navigator.splashscreen.hide();
			}, 2000);
		}

	} catch (e) {
		//your decision
		//tu decisión
	}
}

function installEvents() {
	
	/*******************************************************************************/
	/*Click/Touch events-----------------------------------------------------------*/
	/*******************************************************************************/
	
	$(".mui-backarrow").click(function() {
		mui.history.back();
		return false;
	});
	
	$(".mui-headmenu, #gomodal").click(function() {
		mui.screen.showPanel("menu-panel", "SLIDE_LEFT");	//ATENTION!!! mui.screen instead mui.viewport
		return false;
	});

	$("#gocontent").click(function() {
		mui.viewport.showPage("content-page","DEF");
		return false;
	});
	
	$("#golist").click(function() {
		mui.viewport.showPage("list-page","DEF");
		return false;
	});
	
	$("#golisticon").click(function() {
		return false;
	});

	$("#gotrans").click(function() {
		mui.viewport.showPage("transitions-page","DEF");
		return false;
		
	});
	
	$("#gotest").click(function() {
		mui.viewport.showPage("api-page","DEF");
		return false;
	});
	
	$("#tabbar-button1").click(function() {
		mui.viewport.showPage("home-page", "NONE");
		mui.history.reset();	//Look at this!
		return false;
	});
	
	$("#tabbar-button2").click(function() {
		mui.history.reset();	//Look at this!
		openInAppBrowser("http://www.mobileui.org");
		return false;
	});
	
	$("#tabbar-button3").click(function() {
		mui.history.reset();	//Look at this!
		mui.viewport.showPage("content-page", "DEF");
		return false;
	});
	
	$("#tabbar-button4").click(function() {
		openInAppBrowser("http://www.facebook.com");
		mui.history.reset();	//Look at this!
		return false;
	});
	
	$("#tabbar-button5").click(function() {
		mui.alert("MobileUI version " + mui.version.toString());
		mui.history.reset();	//Look at this!
		return false;
	});
	
	$("#samplelist").click(function() {
		return false;
	});
	
	
	$("#menuoptions").click(function() {
		return false;
	});
	
	/*******************************************************************************/
	/*API Test --------------------------------------------------------------------*/
	/*******************************************************************************/
	
	$("#api-cordova").click(function() {
		if (mui.cordovaAvailable())
			mui.alert("Cordova/Phonegap is available!", "Hurrah");
		else
			mui.alert("Cordova/Phonegap not available.");
		return false;
	});
	
	$("#api-ismobile").click(function() {
		if (mui.isMobileDevice.any())
			mui.alert("True", "Hurrah");
		else
			mui.alert("False");
		return false;
	});
	
	$("#api-beep").click(function() {
		if (mui.cordovaAvailable())
			mui.beep(2);
		else
			mui.alert("Beep unavailable");
		return false;
	});
	
	$("#api-vibrate").click(function() {
		if (mui.cordovaAvailable())
			mui.vibrate();
		else
			mui.alert("Vibrate unavailable");
		return false;
	});
	
	$("#api-busy").click(function() {
		mui.busy(true);
		setTimeout(function() {
			mui.busy(false);
		}, 2000);
	});

	$("#api-alert").click(function() {
		mui.alert("Hello MUI", "Cheers");
		return false;
	});
	
	$("#api-confirm").click(function() {
		mui.confirm("Are you happy?", function(buttonIndex) {
				mui.alert("Yo press button " + buttonIndex, "Result");
			},
			"Happiness",
			["Yes", "No"]
		);
		return false;
	});
	
	$("#api-prompt").click(function() {
		mui.prompt("How old are you?", function(result) {
				mui.alert("You pressed button " + result.buttonIndex + ". Value=" + result.input1, "Result");
			},
			"Age",
			["Ok", "No thanks!"],
			"90"
		);
		return false;
	});
	
	$("#api-connection").click(function() {
		mui.alert(mui.getConnectionType(), "Connection Type");
		return false;
	});
	
	$("#api-toast").click(function() {
		var msg;
		if (mui.cordovaAvailable() && mui.isMobileDevice.any())
			msg = "This is a toast message";
		else
			msg = "Using mui.alert() for compatibility when toast plugin are not available";
		mui.toast(msg, "center", "long");
		return false;
	});

	$("#api-version").click(function() {
		mui.alert(mui.version.toString(), "Version");
		return false;
	});
	
	$("#api-platform").click(function() {
		if (mui.cordovaAvailable() && device && device.platform) {
			alert(device.name + "; " + device.platform + " - " + device.version);
		}
		return false;
	});
	
	/*******************************************************************************/
	/*Swipe Test --------------------------------------------------------------------*/
	/*******************************************************************************/	
	//Swipe touch events. Cool for best App user experience!
	//Evento de desplazamiento tactil. Buenisimo para una óptima experiencia de usuario en App!
	mui.viewport.on("swiperight", function(currentPageId, originalTarget, event, startX, startY, endX, endY) {
		if (!mui.viewport.panelIsOpen()) {
			mui.history.back();
		}
	});
}


/**
 * Courtesy: Open an url using InAppBrowser plugin.
 * Cortesía: Abre una url usando InAppBrowser plugin.
 * @param url
 */
function openInAppBrowser(url) { 
	window.open(encodeURI(url), "_blank", "location=yes,closebuttoncaption=Volver,presentationstyle=pagesheet,transitionstyle='fliphorizontal',EnableViewPortScale=yes");
}

/**
 * Util function to force page link to be open in InAppBrowser.
 * Función Util para forzar que los links se abran en InAppBrowser.
 * @param id
 */
function linksForInAppBrowser(pageId){
	var idd = "#"+pageId ;
	$(idd).find('a').each(function (index, element) {
		var href = $(this).attr('href');
		$(this).attr("href", "#");
		$(this).attr("target", "_self");
		$(this).attr("onclick", "window.open('" + href + "', '_blank');");
		
	});
}
