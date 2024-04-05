//const { Overlay } = require("ol");
//const { Polygon, LineString } = require("ol/geom.js");

var mapView = new ol.View({
center: ol.proj.fromLonLat([-53.46992425154046, -22.080950190351942]),
zoom: 16
});

var map = new ol.Map({
    target: 'map',
    view: mapView,
    controls: []
});

var noneTile = new ol.layer.Tile({
    title: 'Nome',
    type: 'base',
    visible: false
});

//var osmTile = new ol.layer.Tile({
  //  title: 'Open Street Map',
   // visible: true,
    //type: 'base',
    //source: new ol.source.OSM()
//});



//map.addLayer(osmTile);

var maptilerSat = new ol.layer.Tile({
  source: new ol.source.TileJSON({
    attributions:'@MapTiler',
    url:'https://api.maptiler.com/maps/satellite/tiles.json?key=YbFZpyhl26tO62zzOCK0'
  })
})

map.addLayer(maptilerSat);








var baseGroup = new ol.layer.Group({
    title: 'Base Maps',
    fold: true,
    //layers: [osmTile, noneTile]
});

map.addLayer(baseGroup);

//var IFMSareas = new ol.layer.Tile({
    //title: "IFMS Areas",
    //source: new ol.source.TileWMS({
      //  url: 'http://localhost:8080/geoserver/adUcation/wms',
        //params: {'LAYERS':'adUcation:total', 'TILED': true},
        //serverType: 'geoserver',
       // visible: true
    //})
//});

//map.addLayer(IFMSareas);


var IFMS = new ol.layer.Tile({
    title: "Área 1",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_1'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 2",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_2'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 3",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_3'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 4",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_4'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 5",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_5'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 6",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_6'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 7",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_7'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);


var IFMS = new ol.layer.Tile({
    title: "Área 8",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_8'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);


var IFMS = new ol.layer.Tile({
    title: "Área 9",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_9'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 10",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_10'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 11",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_11'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);


var IFMS = new ol.layer.Tile({
    title: "Área 12",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_12'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);


var IFMS = new ol.layer.Tile({
    title: "Área 13",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_13'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 14",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_14'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 15",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_15'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 16",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:are_16'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 17",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_17'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);

var IFMS = new ol.layer.Tile({
    title: "Área 18",
    source: new ol.source.TileWMS({
        
        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS':'adUcation:area_18'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);










//var overlayGroup = new ol.layer.Group({
    //title: 'Overlays',
    //fold: true,
    //layers: [IFMSareas, IFMS]

//});

//map.addLayer(overlayGroup);



//start : home button

var homeButton =document.createElement('button');
homeButton.innerHTML = '<img src="resources/images/home.svg" alt="" style= "width:20px; filter:brightness(0) invert(1); vertical-align:middle"></img>';
homeButton.className = 'myButton';

var homeElement = document.createElement('div');
homeElement.className = 'homeButtonDiv';
homeElement.appendChild(homeButton);

var homeControl = new ol.control.Control({
    element: homeElement
})

homeButton.addEventListener("click", () => {
    location.href = "index.html";
})

map.addControl(homeControl);


//end: home Control

//start: full screen control


var fsButton =document.createElement('button');
fsButton.innerHTML = '<img src="resources/images/fullscreen.svg" alt="" style= "width:20px; filter:brightness(0) invert(1); vertical-align:middle"></img>';
fsButton.className = 'myButton';

var fsElement = document.createElement('div');
fsElement.className = 'fsButtonDiv';
fsElement.appendChild(fsButton);

var fsControl = new ol.control.Control({
    element: fsElement
})

fsButton.addEventListener("click", () => {
    
    var mapEle = document.getElementById("map");
    if(mapEle.requestFullscreen){
        mapEle.requestFullscreen();
    }

    else if(mapEle.msRequestFullscreen){
        mapEle.msrequestFullscreen();
    }

    else if(mapEle.mozRequestFullscreen){
        mapEle.mozrequestFullscreen();
    }

    else if(mapEle.webKitRequestFullscreen){
        mapEle.requestFullscreen();
    }

})

map.addControl(fsControl);


//end


// start: feature

var featureInfoButton =document.createElement('button');
featureInfoButton.innerHTML = '<img src="resources/images/identify.svg" alt="" style= "width:20px; filter:brightness(0) invert(1); vertical-align:middle"></img>';
featureInfoButton.className = 'myButton';
featureInfoButton.id = 'featureInfoButton';

var featureInfoElement = document.createElement('div');
featureInfoElement.className = 'featureInfoDiv';
featureInfoElement.appendChild(featureInfoButton);

var featureInfoControl = new ol.control.Control({
    element: featureInfoElement
})

var featureInfoFlag = false;
featureInfoButton.addEventListener("click", () => {
    featureInfoButton.classList.toggle('clicked');
    featureInfoFlag = featureInfoFlag;
})

map.addControl(featureInfoControl);






var layerSwitcher = new ol.control.LayerSwitcher({
   activationMode: 'click',
    startActive: false,
    groupSelectStyle: 'children'
});

map.addControl(layerSwitcher);

var mousePosition = new ol.control.MousePosition({
    className: "mousePosition",
    projection: 'EPSG:4326',
    coordinateFormat: function(coordinate){return ol.coordinate.format(coordinate, '{y}, {x}', 6);}
});

map.addControl(mousePosition);

function toggleLayer(eve){
    var lyrname = eve.target.value;
    var checkedStatus = eve.target.checked;
    var lyrList = map.getLayers();

    lyrList.forEach(function(element){
        if (lyrname == element.get('title')){
            element.setVisible(checkedStatus);
        }
    });
}





var scaleControl = new ol.control.ScaleLine({
  bar: true,
  text: true

});

map.addControl(scaleControl);

var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250,
    },
});

map.addOverlay(popup);

closer.onclick = function(){
    popup.setPosition(undefined);
    closer.blur();
    return false;
};

map.on('singleclick', function (evt){
    if(featureInfoFlag){
        content.innerHTML = '';
    var resolution = mapView.getResolution();

    var url = IFMS.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
        'INFO_FORMAT': 'application/json',
        'propertyName': 'area'
    });

    if(url){
        $.getJSON(url, function (data){
            var feature = data.features[0];
            var props = feature.properties;
            content.innerHTML = "<h3> State: <h3>" + props.state.toUpperCase();
            popup.setPosition(evt.coordinate);                        
        })        
    }else{
        popup.setPosition(undefined);
    }

    }

});


var lengthButton = document.createElement('button');
lengthButton.innerHTML = '<img src="resources/images/measure-length.svg" alt="" style= "width:20px; filter:brightness(0) invert(1); vertical-align:middle"></img>';
lengthButton.className = 'myButton';
lengthButton.id = 'lengthButton';

var lengthElement = document.createElement('div');
lengthElement.className = 'lengthButtonDiv';
lengthElement.appendChild(lengthButton);

var lengthControl = new ol.control.Control({
    element: lengthElement
})

var lengthFlag = false;
lengthButton.addEventListener("click", () => {
    lengthButton.classList.toggle('clicked');
    lengthFlag = !lengthFlag;
    document.getElementById("map").style.cursor = "default";
    if(lengthFlag){
        map.removeInteraction(draw);
        addInteraction('LineString');
    } else{
        map.removeInteraction(draw);
        source.clear();
        const elements = document.getElementsByClassName("ol-tooltip ol-tooltip-static");
        while (elements.length > 0) elements[0].remove();
    }    
        
    
})

map.addControl(lengthControl);





var areaButton =document.createElement('button');
areaButton.innerHTML = '<img src="resources/images/measure-area.svg" alt="" style= "width:20px; filter:brightness(0) invert(1); vertical-align:middle"></img>';
areaButton.className = 'myButton';
areaButton.id = 'areaButton';

var areaElement = document.createElement('div');
areaElement.className = 'areaButtonDiv';
areaElement.appendChild(areaButton);

var areaControl = new ol.control.Control({
    element: areaElement
})

var areaFlag = false;
areaButton.addEventListener("click", () => {
    areaButton.classList.toggle('clicked');
    areaFlag = !areaFlag;
    document.getElementById("map").style.cursor = "default";
    if(areaFlag){
        map.removeInteraction(draw);
        addInteraction('Polygon');
    }else{
        map.removeInteraction(draw);
        source.clear();
        const elements = document.getElementsByClassName("ol-tooltip ol-tooltip-static");
        while (elements.length > 0) elements[0].remove();
    }        
        
    
})

map.addControl(areaControl);


/** 
 * Message to show when the user is drawing a polygon
 * @type {string} 
*/

var continuePolygonMsg = 'Click to continue';
/** 
 * Message to show when the user is drawing a polygon
 * @type {string} 
*/


var continueLineMsg = 'Click to continue';

var draw;

var source = new ol.source.Vector();
var vector = new ol.layer.Vector({
    source: source,
    style: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba( 255, 255, 255, 0.2)',
        }),

        stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2,
        }),

        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: '#ffcc33',
            }),    
        }),
    }),
});

map.addLayer(vector);

function addInteraction(intType) {

     draw = new ol.interaction.Draw({
        source: source,
        type: intType,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba( 200, 200, 200, 0.6)',
            }),
    
            stroke: new ol.style.Stroke({
                color: 'rgba( 0, 0, 0, 0.5)',
                lineDash: [10, 10],
                width: 2,
            }),
    
            image: new ol.style.Circle({
                radius: 5,
                stroke: new ol.style.Stroke({
                    color: 'rgba( 0, 0, 0, 0.7)',
            }),
                fill: new ol.style.Fill({
                    color: 'rgba( 255, 255, 255, 0.2)',
                }),    
                    
            }),
    
        }),

    });


    map.addInteraction(draw);

    createMeasureTooltip();
    createHelpTooltip();

    /**
     * Currently drawn feature.
     * @type {import("../src/ol/Feature.js").default}
     */
    var sketch;

    /**
     * Handle pointer move.
     * @param {import("../src/ol/MapBrowserEvent").default} evt The event.
     */

    var pointerMoveHandler = function (evt){
        if (evt.dragging){
            return;
        }
        /**@type {string} */
        var helpMsg = 'Click to start drawing';

        if (sketch){
            var geom = sketch.getGeometry();
           
        }

        
    };

    map.on('pointermove', pointerMoveHandler);

    //var listener;

    draw.on('drawstart', function (evt){

        sketch = evt.feature;

        /**@type {import("../src/ol/coordinate.js").Coordinate|undefined} */
        var tooltipCoord = evt.coordinate;

        sketch.getGeometry().on('change', function(evt) {
            var geom = evt.target;
            var output;
            if(geom instanceof ol.geom.Polygon) {
                output = formatArea(geom);
                tooltipCoord = geom.getInteriorPoint().getCoordinates();
            }else if(geom instanceof ol.geom.LineString) {
                output = formatLength(geom);
                tooltipCoord = geom.getLastCoordinate();
            }
            measureTooltipElement.innerHTML = output;
            measureTooltip.setPosition(tooltipCoord);
        });
    });

draw.on('drawend', function() {
    measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
    measureTooltip.setOffset([0, -7]);

    sketch = null;

    measureTooltipElement = null;
    createMeasureTooltip();


});    

}

/**
 * @type{HTMLElement}
 */

var helpTooltipElement;

/**
 * @type {Overlay}
 */

var helpTooltip;


function createHelpTooltip() {
    if(helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement);        
    }
    helpTooltipElement = document.createElement('div');
    helpTooltipElement.className = 'ol-tooltip hidden';
    helpTooltip = new ol.Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left',
    });
    map.addOverlay(helpTooltip);
}

map.getViewport().addEventListener('mouseout', function () {
    helpTooltipElement.classList.add('hidden');
});

/**
 * @type {HTMLElement}
 */

var measureTooltipElement;

/**
 * @type {Overlay}
 */

var measureTooltip;


function createMeasureTooltip(){
    if(measureTooltipElement){
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);        
    }
    measureTooltipElement = document.createElement('div');
    measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
    measureTooltip = new ol.Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center',
    });
    map.addOverlay(measureTooltip);
}

/**
 * @param {LineString} line the line
 * @return {string} Formatted legth
 */

var formatLength = function (line) {
    var length = ol.sphere.getLength(line);
    var output;

    if (length > 100) {
        output = Math.round((length / 1000) * 100) / 100 + ' ' + 'km';
    } else{
        output = Math.round(length * 100) / 100 + ' ' + 'm';        
    }
   
    return output;
};



/**
 * @param {Polygon} polygon the polygon
 * @return {string} Formatted area
 */

var formatArea = function (polygon) {
    var area = ol.sphere.getArea(polygon);
    var output;

    if (area > 10000){
        output = Math.round((area / 1000000) * 100) / 100 + ' ' + 'km<sup>2</sup>';
    } else{
        output = Math.round(area * 100) / 100 + ' ' + 'm<sup>2</sup>';        
    }
   
    return output;
};



