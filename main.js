//const { Overlay } = require("ol");
//const { Polygon, LineString } = require("ol/geom.js");

//import Vector from 'ol/source/Vector.js';
//import GeoJSON from 'ol/format/GeoJSON.js';
//import {bbox} from 'ol/loadingstrategy.js';

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

var osmTile = new ol.layer.Tile({
    title: 'Open Street Map',
    visible: true,
    type: 'base',
    source: new ol.source.OSM()
});



//map.addLayer(osmTile);
// troquei

var maptilerSat = new ol.layer.Tile({
    source: new ol.source.TileJSON({
        attributions: '@MapTiler',
        url: 'https://api.maptiler.com/maps/satellite/tiles.json?key=YbFZpyhl26tO62zzOCK0'
    })
})

map.addLayer(maptilerSat);








/*var baseGroup = new ol.layer.Group({
    title: 'Base Maps',
    fold: true,
    //layers: [osmTile, noneTile]
});


map.addLayer(baseGroup);

*/

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
            'LAYERS': 'adUcation:area_1'
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
            'LAYERS': 'adUcation:area_2'
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
            'LAYERS': 'adUcation:area_3'
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
            'LAYERS': 'adUcation:area_4'
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
            'LAYERS': 'adUcation:area_5'
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
            'LAYERS': 'adUcation:area_6'
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
            'LAYERS': 'adUcation:area_7'
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
            'LAYERS': 'adUcation:area_8'
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
            'LAYERS': 'adUcation:area_9'
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
            'LAYERS': 'adUcation:area_10'
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
            'LAYERS': 'adUcation:area_11'
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
            'LAYERS': 'adUcation:area_12'
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
            'LAYERS': 'adUcation:area_13'
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
            'LAYERS': 'adUcation:area_14'
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
            'LAYERS': 'adUcation:area_15'
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
            'LAYERS': 'adUcation:area_16'
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
            'LAYERS': 'adUcation:area_17'
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
            'LAYERS': 'adUcation:area_18'
        }
        //serverType: 'geoserver',
        //visible: true
    })
})

map.addLayer(IFMS);


var IFMS = new ol.layer.Tile({
    title: "Área Total IFMS",
    source: new ol.source.TileWMS({

        attributions: '@geoserver',
        url: 'http://localhost:8080/geoserver/adUcation/wms?',
        params: {
            'LAYERS': 'adUcation:total_if'
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

var homeButton = document.createElement('button');
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


var fsButton = document.createElement('button');
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
    if (mapEle.requestFullscreen) {
        mapEle.requestFullscreen();
    }
    else if (mapEle.msRequestFullscreen) {
        mapEle.msRequestFullscreen();
    }
    else if (mapEle.mozRequestFullscreen) {
        mapEle.mozRequestFullscreen();
    }
    else if (mapEle.webkitRequestFullscreen) {
        mapEle.webkitRequestFullscreen();
    }

})

map.addControl(fsControl);


//end

var zoomInInteraction = new ol.interaction.DragBox();

zoomInInteraction.on('boxend', function () {
    var zoomInExtent = zoomInInteraction.getGeometry().getExtent();
    map.getView().fit(zoomInExtent);
});

var ziButton = document.createElement('button');
ziButton.innerHTML = '<img src="resources/images/zoomIn.svg" alt="" style= "width:20px; filter:brightness(0) invert(1); vertical-align:middle"></img>';
ziButton.className = 'myButton';
ziButton.id = 'ziButton';


var ziElement = document.createElement('div');
ziElement.className = 'ziButtonDiv';
ziElement.appendChild(ziButton);

var ziControl = new ol.control.Control({
    element: ziElement
})

var zoomInFlag = false;
ziButton.addEventListener("click", () => {
    ziButton.classList.toggle('clicked');
    zoomInFlag = !zoomInFlag;
    if (zoomInFlag) {
        document.getElementById("map").style.cursor = "zoom-in";
        map.addInteraction(zoomInInteraction);
    } else {
        map.removeInteraction(zoomInInteraction);
        document.getElementById("map").style.cursor = "default";
    }
})

map.addControl(ziControl);


var zoomOutInteraction = new ol.interaction.DragBox();

zoomOutInteraction.on('boxend', function () {
    var zoomOutExtent = zoomOutInteraction.getGeometry().getExtent();
    map.getView().setCenter(ol.extent.getCenter(zoomOutExtent));

    mapView.setZoom(mapView.getZoom() - 1)
});

var zoButton = document.createElement('button');
zoButton.innerHTML = '<img src="resources/images/zoomOut.svg" alt="" style= "width:20px; filter:brightness(0) invert(1); vertical-align:middle"></img>';
zoButton.className = 'myButton';
zoButton.id = 'zoButton';


var zoElement = document.createElement('div');
zoElement.className = 'zoButtonDiv';
zoElement.appendChild(zoButton);

var zoControl = new ol.control.Control({
    element: zoElement
})

var zoomOutFlag = false;
zoButton.addEventListener("click", () => {
    zoButton.classList.toggle('clicked');
    zoomOutFlag = !zoomOutFlag;
    if (zoomOutFlag) {
        document.getElementById("map").style.cursor = "zoom-out";
        map.addInteraction(zoomOutInteraction);
    } else {
        map.removeInteraction(zoomOutInteraction);
        document.getElementById("map").style.cursor = "default";
    }
})

map.addControl(zoControl);









// start: feature

var featureInfoButton = document.createElement('button');
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
    featureInfoFlag = !featureInfoFlag;
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
    coordinateFormat: function (coordinate) { return ol.coordinate.format(coordinate, '{y}, {x}', 6); }
});

map.addControl(mousePosition);

function toggleLayer(eve) {
    var lyrname = eve.target.value;
    var checkedStatus = eve.target.checked;
    var lyrList = map.getLayers();

    lyrList.forEach(function (element) {
        if (lyrname == element.get('title')) {
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

closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};

map.on('singleclick', function (evt) {
    if (featureInfoFlag) {
        content.innerHTML = '';
        var resolution = mapView.getResolution();

        var url = IFMS.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
            'INFO_FORMAT': 'application/json',
            'propertyName': 'area'
        });

        if (url) {
            $.getJSON(url, function (data) {
                var feature = data.features[0];
                var props = feature.properties;
                content.innerHTML = "<h3> State: <h3>" + props.state.toUpperCase();
                popup.setPosition(evt.coordinate);
            })
        } else {
            popup.setPosition(undefined);
        }

    }

});

//


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
    if (lengthFlag) {
        map.removeInteraction(draw);
        addInteraction('LineString');
    } else {
        map.removeInteraction(draw);
        source.clear();
        const elements = document.getElementsByClassName("ol-tooltip ol-tooltip-static");
        while (elements.length > 0) elements[0].remove();
    }


})

map.addControl(lengthControl);





var areaButton = document.createElement('button');
areaButton.innerHTML = '<img src="resources/images/measure-area.svg" alt="" style= "width:20px; filter:brightness(0) invert(1); vertical-align:middle"></img>';
areaButton.className = 'myButton';
areaButton.id = 'areaButton';
areaButton.title = 'Area Button';

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
    if (areaFlag) {
        map.removeInteraction(draw);
        addInteraction('Polygon');
    } else {
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

    var pointerMoveHandler = function (evt) {
        if (evt.dragging) {
            return;
        }
        /**@type {string} */
        var helpMsg = 'Click to start drawing';

        if (sketch) {
            var geom = sketch.getGeometry();

        }


    };

    map.on('pointermove', pointerMoveHandler);

    //var listener;

    draw.on('drawstart', function (evt) {

        sketch = evt.feature;

        /**@type {import("../src/ol/coordinate.js").Coordinate|undefined} */
        var tooltipCoord = evt.coordinate;

        sketch.getGeometry().on('change', function (evt) {
            var geom = evt.target;
            var output;
            if (geom instanceof ol.geom.Polygon) {
                output = formatArea(geom);
                tooltipCoord = geom.getInteriorPoint().getCoordinates();
            } else if (geom instanceof ol.geom.LineString) {
                output = formatLength(geom);
                tooltipCoord = geom.getLastCoordinate();
            }
            measureTooltipElement.innerHTML = output;
            measureTooltip.setPosition(tooltipCoord);
        });
    });

    draw.on('drawend', function () {
        measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
        measureTooltip.setOffset([0, -7]);

        sketch = null;

        measureTooltipElement = null;
        createMeasureTooltip();


    });

}

/**
 * help element.
 * @type {HTMLElement}
 */

var helpTooltipElement;

/**
 * overlay help mensages.
 * @type {Overlay}
 */

var helpTooltip;


function createHelpTooltip() {
    if (helpTooltipElement) {
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

///teste
function measure() {
    var sketch;
    var helpTooltipElement;
    var helpTooltip;
    var measureTooltipElement;
    var measureTooltip;

    var continueLineMsg = 'Click to continue drawing the line';

    var pointerMoveHandler = function (evt) {
        if (evt.dragging) {
            return;
        }
        var helpMsg = 'Click to start drawing';

        if (sketch) {
            var geom = (sketch.getGeometry());
            helpMsg = continueLineMsg;
        }

        helpTooltipElement.innerHTML = helpMsg;
        helpTooltip.setPosition(evt.coordinate);

        helpTooltipElement.classList.remove('hidden');
    };
    map.on('pointermove', pointerMoveHandler);

    ///fim teste
    map.getViewport().addEventListener('mouseout', function () {
        helpTooltipElement.classList.add('hidden');
    });
}
//fim teste
/**
 * @type {HTMLElement}
 */

var measureTooltipElement;

/**
 * @type {Overlay}
 */

var measureTooltip;


function createMeasureTooltip() {
    if (measureTooltipElement) {
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
    } else {
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

    if (area > 10000) {
        output = Math.round((area / 1000000) * 100) / 100 + ' ' + 'km<sup>2</sup>';
    } else {
        output = Math.round(area * 100) / 100 + ' ' + 'm<sup>2</sup>';
    }

    return output;
};





var geojson;
var featureOverlay;

var qryButton = document.createElement('button');
qryButton.innerHTML = '<img src="resources/images/database.svg" alt="" style="width:17px; heidth:17px;filter:brightness(0) invert(1); vertical-align:middle"></img>';
qryButton.className = 'myButton';
qryButton.id = 'qryButton';
qryButton.title = 'qryButton';

var qryElement = document.createElement('div');
qryElement.className = 'myButtonDiv';
qryElement.appendChild(qryButton);

var qryControl = new ol.control.Control({
    element: qryElement
})

var qryFlag = false;

qryButton.addEventListener("click", () => {
    qryButton.classList.toggle('clicked');
    qryFlag = !qryFlag;
    document.getElementById("map").style.cursor = "default";



    if (qryFlag) {
        if (geojson) {
            geojson.getSource().clear();
            map.removeLayer(geojson);
        }

        if (featureOverlay) {
            featureOverlay.getSource().clear();
            map.removeLayer(featureOverlay);
        }
        //apagar depois
        //document.getElementById("map").style.cursor = "default";
        document.getElementById('attQueryDiv').style.display = "block";

        bolIdentify = false;

        addMapLayerList();

    } else {
        //document.getElementById("map").style.cursor = "default";
        document.getElementById("attQueryDiv").style.display = "none";
        document.getElementById("attListDiv").style.display = "none";

        if (geojson) {
            geojson.getSource().clear();
            map.removeLayer(geojson);
        }

        if (featureOverlay) {
            featureOverlay.getSource().clear();
            map.removeLayer(featureOverlay);
        }

    }

})

map.addControl(qryControl);

/*function addMapLayerList(selectElementName) {
    $('#editingLayer').empty();
    $('#selectLayer').empty();
    $('#buffSelectLayer').empty();
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "http://" + 8080 + "/geoserver/wfs?request=getCapabilites",
            dataType: "xml",
            sucess: function (xml) {
                var select = $('#' + selectElementName);
                select.append("<option class='ddindent' value=''></option>");
                $(xml).find('FeatureType').each(function () {
                    $(this).find('Name').each(function () {
                        var value = $(this).text();
                        if (layerList.includes(value)) {
                            select.append("<option class='ddindent'" + value + "'>" + value + "</option>");
                        }

                    });
                });
            }
        });
    });
};*/


/*function addMapLayerList(selectElementName) {
    // Limpa os elementos de seleção antes de preenchê-los
    $('#editingLayer').empty();
    $('#selectLayer').empty();
    $('#buffSelectLayer').empty();

    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/geoserver/wfs?request=GetCapabilities",
            dataType: "xml",
            success: function (xml) {
                // Adiciona um opção vazia
                $('#' + selectElementName).append("<option class='ddindent' value=''></option>");

                // Itera sobre cada FeatureType e preenche as listas de seleção
                $(xml).find('FeatureType').each(function () {
                    var value = $(this).find('Name').text();
                    if (layerList.includes(value)) {
                        $('#' + selectElementName).append("<option class='ddindent' value='" + value + "'>" + value + "</option>");
                        $('#editingLayer').append("<option class='ddindent' value='" + value + "'>" + value + "</option>");
                        $('#selectLayer').append("<option class='ddindent' value='" + value + "'>" + value + "</option>");
                        $('#buffSelectLayer').append("<option class='ddindent' value='" + value + "'>" + value + "</option>");
                    }
                });
            },
            error: function (xhr, status, error) {
                console.error("Error fetching WFS capabilities:", status, error);
            }
        });
    });
}*/


function addMapLayerList(selectElementName) {
    // Limpa os elementos de seleção antes de preenchê-los
    $('#editingLayer').empty();
    $('#selectLayer').empty();
    $('#buffSelectLayer').empty();

    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/geoserver/wfs?request=GetCapabilities",
            dataType: "xml",
            success: function (xml) {
                // Adiciona uma opção vazia
                $('#' + selectElementName).append("<option class='ddindent' value=''></option>");

                // Itera sobre cada FeatureType e preenche as listas de seleção
                $(xml).find('FeatureType').each(function () {
                    var value = $(this).find('Name').text();
                    if (layerList.includes(value)) {
                        $('#' + selectElementName).append("<option class='ddindent' value='" + value + "'>" + value + "</option>");
                        $('#editingLayer').append("<option class='ddindent' value='" + value + "'>" + value + "</option>");
                        $('#selectLayer').append("<option class='ddindent' value='" + value + "'>" + value + "</option>");
                        $('#buffSelectLayer').append("<option class='ddindent' value='" + value + "'>" + value + "</option>");
                    }
                });
            },
            error: function (xhr, status, error) {
                console.error("Error fetching WFS capabilities:", status, error);
            }
        });
    });
}



function addMapLayerList_spQry() {
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "http://" + serverPort + "/geoserver/wfs?request=getCapabilites",
            dataType: "xml",
            sucess: function (xml) {
                var select = $('#buffSelectLayer');
                select.append("<option class='ddindent' value=''></option>");
                $(xml).find('FeatureType').each(function () {
                    $(this).find('Name').each(function () {
                        var value = $(this).text();
                        if (layerList.includes(value)) {
                            select.append("<option class='ddindent'" + value + "'>" + value + "</option>");
                        }

                    });
                });
            }
        });
    });
};



function addMapLayerList() {
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/geoserver/wfs?request=getCapabilites",
            dataType: "xml",
            sucess: function (xml) {
                var select = $('#selectLayer');
                select.append("<option class='ddindent' value=''></option>");
                $(xml).find('FeatureType').each(function () {
                    $(this).find('Name').each(function () {
                        var value = $(this).text();
                        select.append("<option class='ddindent'" + value + "'>" + value + "</option>");
                    });
                });
            }
        });
    });
};

function addMapLayerList_spQry() {
    var select = $('#buffSelectLayer');
    select.empty();
    select.append("<option class='ddindent' value= ''></option>");
    for (i = 0; i < layerList.length; i++) {
        var value = layerList[i];
        select.append("<option class='ddindent' value='" + value + "'>" + value + "</option>");
    }
};



/*$(function (){
    //ol.control.LayerSwitcher.prototype.renderPanel

    var toc = document.getElementById('layerSwitcherContent');
    layerSwitcherControl = new ol.control.LayerSwitcher.renderPanel(map, toc, { reverse: true});

    document.getElementById("selectLayer").onchange = function (){
        var select = document.getElementById("selectAttribute");
        while (select.options.length > 0){
            select.remove(0);
        }
        var value_layer = $(this).val();
        $(document).ready(function (){
            $.ajax({
                type: "GET",
                url: "http://" + 8080 + "geoserver/wfs?service=WFS&request=DescribeFeatureType&version=1.1.0&typeName="  + value_layer,
                dataType: "xml",
                sucess: function (xml) {

                    var select = $('#selectAttribute');
                    select.append("<option class='ddindent' value=''></option>");
                    $(xml).find('xsd\\:sequence').each(function (){

                        $(this).find('xsd\\:element').each(function (){
                            var value = $(this).attr('name');

                            var type = $(this).attr('type');

                            if (value != 'geom' && value != 'the_geom'){
                                select.append("<option class= 'ddindent' value=' " + type + "'>" + value + "</option>");
                            }



                        });
                    });
                }
            });
        });
    }*/

$(function () {
    // Remove a linha que está causando o erro
    // var toc = document.getElementById('layerSwitcherContent');
    // layerSwitcherControl = new ol.control.LayerSwitcher.renderPanel(map, toc, { reverse: true});

    document.getElementById("selectLayer").onchange = function () {
        var select = document.getElementById("selectAttribute");
        while (select.options.length > 0) {
            select.remove(0);
        }
        var value_layer = $(this).val();
        // Não é necessário envolver o código em $(document).ready(), pois você já está dentro de uma função que é executada quando o documento está pronto (o handler do evento onchange)
        // $(document).ready(function () {
        $.ajax({
            type: "GET",
            // Corrija a URL para incluir o número da porta 8080 corretamente
            url: "http://localhost:8080/geoserver/wfs?service=WFS&request=DescribeFeatureType&version=1.1.0&typeName=" + value_layer,
            dataType: "xml",
            success: function (xml) {
                var select = $('#selectAttribute');
                select.append("<option class='ddindent' value=''></option>");
                $(xml).find('xsd\\:sequence').each(function () {
                    $(this).find('xsd\\:element').each(function () {
                        var value = $(this).attr('name');
                        var type = $(this).attr('type');
                        if (value != 'geom' && value != 'the_geom') {
                            select.append("<option class='ddindent' value='" + type + "'>" + value + "</option>");
                        }
                    });
                });
            },
            // Corrija o nome da propriedade para 'success' (não 'sucess')
        });
        // });
    }
    //});

    document.getElementById("selectAttribute").onchange = function () {
        var operator = document.getElementById("selectoperator");
        while (operator.options.length > 0) {
            operator.remove(0);
        }

        var value_type = $(this).val();

        var value_attribute = $('#selectAttribute option:selected').text();
        operator.options[0] = new Option('Select operator', "");

        if (value_type == 'xsd:short' || value_type == 'xsd:int' || value_type == 'xsd:double') {
            var operator1 = document.getElementById("selectOperator");
            operator1.options[1] = new Option('Greater than', '>');
            operator1.options[2] = new Option('Less than', '<');
            operator1.options[3] = new Option('Equal to', '=');

        }

        else if (value_type == 'xsd:string') {
            var operator1 = document.getElementById("selectOperator");
            operator1.options[1] = new Option('Like', 'Like');
            operator1.options[2] = new Option('Equal to', '-');


        }


    }

    document.getElementById('attQryRun').onClick = function () {
        map.set("isLoading", 'YES');

        if (featureOverlay) {
            featureOverlay.getSource().clear();
            map.removeLayer(featureOverlay);
        }

        var layer = document.getElementById("selectLayer");
        var attribute = document.getElementById("selectAttribute");
        var operator = document.getElementById("selectOperator");
        var txt = document.getElementById("enterValue");

        if (layer.options.selectedIndex == 0) {
            alert("Select Layer");
        }

        else if (attribute.options.selectedIndex == -1) {
            alert("Select Attribute");
        }

        else if (operator.options.selectedIndex <= 0) {
            alert("Select Operator");
        }


        else if (txt.value.length <= 0) {
            alert("Enter Value");
        } else {
            var value_layer = layer.options[layer.selectedIndex].value;
            var value_attribute = attribute.options[attribute.selectedIndex].text;
            var value_operator = operator.options[operator.selectedIndex].value;
            var value_txt = txt.value;
            if (value_operator == 'Like') {
                value_txt = "%25" + value_txt + "%25";
            }
            else {
                value_txt = value_txt;
            }

            var url = 'http://localhost:8080/geoserver/adUcation/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=adUcation:your_layer_name&outputFormat=application/json&srsname=EPSG:4326&bbox=-5953044.940576255,-2522255.0631582807,-5951444.540296534,-2520239.0365372594,EPSG:3857';

            /*var url = "http://" + 8080 + "/geoserver/" + adUcation + "/ows?service=WFS&version=1.0.0&request=1.0.0&request=GetFeature&type" + value_layer + "&CQL_FILTER=" + value_attribute + "+" + value_operator + "+'" + value_txt + "'&outputFormat=application/json"*/

            newaddGeoJsonToMap(url);
            newpopulateQueryTable(url);
            setTimeout(function () { newaddRowHandlers(url); }, 1000);
            map.addLayer(clickSelectedFeatureOverlay);
            map.set("isLoading", "NO");
        }


    }

    document.addEventListener('DOMContentLoaded', function () {
        // Garante que o código será executado após o carregamento completo do DOM
        var clearButton = document.getElementById('attQryClear');
        if (clearButton) {
            clearButton.onclick = function () {
                if (queryGeoJSON) {
                    queryGeoJSON.getSource().clear();
                    map.removeLayer(queryGeoJSON);
                }

                if (clickSelectedFeatureOverlay) {
                    clickSelectedFeatureOverlay.getSource().clear();
                    map.removeLayer(clickSelectedFeatureOverlay);
                }

                coordList = '';
                markerFeature = undefined;
                document.getElementById("attListDiv").style.display = "none";
            };
        } else {
            console.error("Elemento com ID 'attQryClear' não encontrado.");
        }
    });






    /*document.getElementById('attQryClear').onclick = function (){
       if (queryGeoJSON) {
        queryGeoJSON.getSource().clear();
        map.removeLayer(queryGeoJSON);
       }

       if (clickSelectedFeatureOverlay) {
        clickSelectedFeatureOverlay.getSource().clear();
        map.removeLayer(clickSelectedFeatureOverlay);
       }
       coordList = '';
       markerFeature = undefined;
       document.getElementById("attListDiv").style.display = "none";
    }*/

    var mapInteractions = map.getInteractions();
    for (var x = 0; x < mapInteractions.getLength(); x++) {
        var mapInteraction = mapInteractions.item(x);
        if (mapInteraction instanceof ol.interaction.DoubleClickZoom) {
            map.removeInteraction(mapInteraction);
            break;
        }

    }

    for (var x = 0; x < mapInteractions.getLength(); x++) {
        var mapInteraction = mapInteractions.item(x);
        if (mapInteraction instanceof ol.interaction.DragPan) {
            map.removeInteraction(mapInteraction);
            break;
        }

    }

});

function newaddGeoJsonToMap(url) {
    if (geojson) {
        geojson.getSource().clear();
        map.removeLayer(geojson);
    }

    var style = new ol.style.Style({

        stroke: new ol.style.Stroke({
            color: '#FFFF00',
            width: 3
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: 'FFFF00'
            })
        })

    });

    geojson = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: url,
            format: new ol.format.GeoJSON()
        }),
        style: style,
    });

    geojson.getSource().on('addfeature', function () {
        map.getView().fit(
            geoJson.getSource().getExtent(),
            { duration: 1590, size: map.getSize(), maxZoom: 21 }
        );

    });

    map.addLayer(geojson);

};

function newpopulateQueryTable(url) {
    if (typeof attributePanel !== 'undefined') {
        if (attributePanel.parentElement !== null) {
            attributePanel.close();
        }
    }
    $.getJSON(url, function (data) {
        var col = [];
        col.push('id');
        for (var i = 0; i < data.features.length; i++) {

            for (var key in data.features[i].properties) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        var table = document.createElement("table");

        table.setAttribute("class", "table table-bordered table-hover table-condensed");
        table.setAttribute("id", "attQryTable");

        var tr = table.insertRow(-1);

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = col[i];
            tr.appendChild(th);

        }

        for (var i = 0; i < data.features; i++) {
            tr = table.insertRow(-1);
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                if (j == 0) { tabCell.innerHTML = data.features[i]['id']; }
                else {
                    tabCell.innerHTML = data.features[i].properties[col[j]];
                }
            }
        }

        var tabDiv = document.getElementById('attListDiv');

        var delTab = document.getElementById('attQryTable');
        if (delTab) {
            tabDiv.removeChild(delTab);
        }

        tabDiv.appendChild(table);

        document.getElementById("attListDiv").style.display = "block";

    });

    var highlightStyle = new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 255, 0.3)',
        }),
        stroke: new ol.style.Stroke({
            color: '#FF00FF',
            width: 3,
        }),
        image: new ol.style.Circle({
            radius: 10,
            fill: new ol.style.Fill({
                color: 'FF00FF'
            })
        })
    });

    var featureOverlay = new ol.layer.Vector({
        source: new ol.source.Vector(),
        map: map,
        style: highlightStyle
    });


};

var markerFeature;
function addInteractionForSpatialQuery(intType) {
    draw = new ol.interaction.Draw({
        source: clickSelectedFeatureOverlay.getSource(),
        type: intType,
        style: interactionStyle
    });

    map.addInteraction(draw);

    draw.on('drawend', function (e) {
        markerFeature = e.feature;
        markerFeature.set('geometry', markerFeature.getGeometry());
        map.removeInteraction(draw);
        document.getElementById('spUserInput').classList.toggle('clicked');
        map.addLayer(clickSelectedFeatureOverlay);
    })
}

function newaddRowHandlers() {
    var table = document.getElementById("attQryTable");
    var rows = document.getElementById("attQryTable").rows;
    var heads = table.getElementsByTagName('th');
    var col_no;

    for (var i = 0; i < heads.length; i++) {
        var head = heads[i];
        if (head.innerHTML == 'id') {
            col_no = i + 1;
        }
    }

    for (i = 0; i < rows.length; i++) {
        rows[i].onClick = function () {
            return function () {
                featureOverlay.getSource().clear();

                $(function () {
                    $("attQryTable td").each(function () {
                        $(this).parent("tr").css("background-color", "white");
                    });
                });

                var cell = this.cells[col_no - 1];
                var id = cell.innerHTML;
                $(document).ready(function () {
                    $("attQryTable td:nth-child(" + col_no + ")").each(function () {
                        if ($(this).text() == id) {
                            $(this).parent("tr").css("background-color", "#d1d8e2");

                        }
                    });
                });


                var features = geojson.getSource().getFeatures();

                for (i = 0; i < features.length; i++) {
                    if (features[i].getId() == id) {
                        featureOverlay.getSource().addFeature(features[i]);
                        featureOverlay.getSource().on('addfeature', function () {
                            map.getView().fit(
                                featureOverlay.getSource().getExtent(),
                                { duraction: 1500, size: map.getSize(), maxZoom: 24 }
                            );
                        });

                    }
                }
            };
        }(rows[i]);
    }


}

var geojson;
var featureOverlay;

var bufferButton = document.createElement('button');
bufferButton.innerHTML = '<img src="resources/images/mapSearch.svg" alt="" style="width:17px; heidth:17px;filter:brightness(0) invert(1); vertical-align:middle"></img>';
bufferButton.className = 'myButton';
bufferButton.id = 'bufferButton';
bufferButton.title = 'Spatial Query';

var bufferElement = document.createElement('div');
bufferElement.className = 'myButtonDiv';
bufferElement.appendChild(bufferButton);
//toolbarDivElement.appendChild(bufferElement);

var bufferControl = new ol.control.Control({
    element: bufferElement
})

var bufferFlag = false;


bufferButton.addEventListener("click", () => {
    bufferButton.classList.toggle('clicked');
    bufferFlag = !bufferFlag;
    document.getElementById("map").style.cursor = "default";

    if (bufferFlag) {
        if (geojson) {
            geojson.getSource().clear();
            map.removeLayer(geojson);
        }

        if (featureOverlay) {
            featureOverlay.getSource().clear();
            map.removeLayer(featureOverlay);
        }
        document.getElementById("map").style.cursor = "default";
        document.getElementById("spQueryDiv").style.display = "block";


        //addMapLayerList();
        addMapLayerList_spQry();

    } else {
        document.getElementById("map").style.cursor = "default";
        document.getElementById("spQueryDiv").style.display = "none";
        document.getElementById("attListDiv").style.display = "none";

        if (geojson) {
            geojson.getSource().clear();
            map.removeLayer(geojson);
        }
        if (featureOverlay) {
            featureOverlay.getSource().clear();
            map.removeLayer(featureOverlay);
        }
        map.removeInteraction(draw);
        if (document.getElementById('spUserInput').classList.contains('clicked')) { document.getElementById('spUserInput').classList.toggle('clicked'); }
    }


})

map.addControl(bufferControl);




//var allControl = new ol.control.Control({
//  element: toolbarDivElement
//})

//map.addControl(allControl);


document.getElementById("qryType").onchange = function () {
    var value_attribute = $('#qryType option:selected').text();
    var buffDivElement = document.getElementById("bufferDiv");

    if (value_attribute == 'Within Distance of') {
        buffDivElement.style.display = "block";
    } else {
        buffDivElement.style.display = "none";
    }
}

document.getElementById("srcCriteria").onchange = function () {
    if (queryGeoJSON) {
        queryGeoJSON.getSource().clear();
        map.removeLayer(queryGeoJSON);
    }

    if (clickSelectedFeatureOverlay) {
        clickSelectedFeatureOverlay.getSource().clear();
        map.removeLayer(clickSelectedFeatureOverlay);
    }

    document.getElementById('spUserInput').onClick = function () {
        document.getElementById('spUserInput').classList.toggle('clicked');
        if (document.getElementById('spUserInput').classList.contains('clicked')) {
            if (queryGeoJSON) {
                queryGeoJSON.getSource().clear();
                map.removeLayer(queryGeoJSON);
            }

            if (clickSelectedFeatureOverlay) {
                clickSelectedFeatureOverlay.getSource().clear();
                map.removeLayer(clickSelectedFeatureOverlay);
            }

            var srcCriteriaValue = document.getElementById('srcCriteria').value;
            if (srcCriteriaValue == 'pointMarker') {
                addInteractionForSpatialQuery('Point');
            }

            if (srcCriteriaValue == 'lineMarker') {
                addInteractionForSpatialQuery('lineString');
            }

            if (srcCriteriaValue == 'polygonMarker') {
                addInteractionForSpatialQuery('Polygon');
            }
        } else {
            coordList = '';
            markerFeature = undefined;
            map.removeInteraction(draw);
        }


    }

    document.getElementById('spQryRun').onclick = function () {
        var layer = document.getElementById("buffSelectLayer");
        var value_layer = layer.options[layer.selectedIndex].value;
    
        var srcCriteria = document.getElementById("srcCriteria");
        var value_src = srcCriteria.options[srcCriteria.selectedIndex].value;
        var coordList = '';
        var url;
        var markerType = '';
    
        if (markerFeature) {
            if (value_src == 'pointMarker') {
                coordList = markerFeature.getGeometry().getCoordinates()[0] + " " + markerFeature.getGeometry().getCoordinates()[1];
                markerType = 'Point';
            } else if (value_src == 'lineMarker') {
                var coordArray = markerFeature.getGeometry().getCoordinates();
                for (i = 0; i < coordArray.length; i++) {
                    if (i == 0) {
                        coordList = coordArray[i][0] + " " + coordArray[i][1];
                    } else {
                        coordList = coordList + ", " + coordArray[i][0] + " " + coordArray[i][1];
                    }
                }
                markerType = 'LineString';
            } else if (value_src == 'polygonMarker') {
                var coordArray = markerFeature.getGeometry().getCoordinates()[0];
                for (i = 0; i < coordArray.length; i++) {
                    if (i == 0) {
                        coordList = coordArray[i][0] + " " + coordArray[i][1];
                    } else {
                        coordList = coordList + ", " + coordArray[i][0] + " " + coordArray[i][1];
                    }
                }
                coordList = "(" + coordList + ")";
                markerType = 'Polygon';
            }
    
            var value_attribute = $('#qryType option:selected').text();
    
            if (value_attribute == 'Within Distance of') {
                var dist = document.getElementById("bufferDistance");
                var value_dist = Number(dist.value);
    
                var distanceUnit = document.getElementById("distanceUnits");
                var value_distanceUnit = distanceUnit.options[distanceUnit.selectedIndex].value;
    
                url = "http://" + 8080 + "/geoserver/" + adUcation + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + encodeURIComponent(value_layer) + "&CQL_FILTER=DWITHIN(geom," + markerType + "(" + encodeURIComponent(coordList) + ")," + value_dist + "," + encodeURIComponent(value_distanceUnit) + ")";
            } else if (value_attribute == 'Intersecting') {
                url = "http://" + 8080 + "/geoserver/" + adUcation + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + encodeURIComponent(value_layer) + "&CQL_FILTER=INTERSECTS(geom," + markerType + "(" + encodeURIComponent(coordList) + "))";
            } else if (value_attribute == 'Completely Within') {
                url = "http://" + 8080 + "/geoserver/" + adUcation + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + encodeURIComponent(value_layer) + "&CQL_FILTER=WITHIN(geom," + markerType + "(" + encodeURIComponent(coordList) + "))";
            }
    
            console.log("Generated URL: ", url);
    
            fetch(url)
                .then(response => response.text())  // Lê a resposta como texto
                .then(responseText => {
                    console.log("Response Text: ", responseText);
                    try {
                        const parser = new DOMParser();
                        const xmlDoc = parser.parseFromString(responseText, "application/xml");
    
                        if (xmlDoc.getElementsByTagName("parsererror").length) {
                            console.error("Error parsing XML: ", xmlDoc.getElementsByTagName("parsererror")[0].textContent);
                        } else {
                            console.log("Parsed XML: ", xmlDoc);
                        }
                    } catch (error) {
                        console.error("Error parsing XML: ", error);
                        console.error("Response was not valid XML: ", responseText);
                    }
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
    
            coordList = '';
            markerFeature = undefined;
        }
    };
    


    /*document.getElementById('spQryRun').onclick = function () {
        var layer = document.getElementById("buffSelectLayer");
        var value_layer = encodeURIComponent(layer.options[layer.selectedIndex].value);
    
        var srcCriteria = document.getElementById("srcCriteria");
        var value_src = srcCriteria.options[srcCriteria.selectedIndex].value;
        var coordList = '';
        var url;
        var markerType = '';
    
        if (markerFeature) {
            if (value_src == 'pointMarker') {
                coordList = encodeURIComponent(markerFeature.getGeometry().getCoordinates()[0] + " " + markerFeature.getGeometry().getCoordinates()[1]);
                markerType = 'Point';
            }
            if (value_src == 'lineMarker') {
                var coordArray = markerFeature.getGeometry().getCoordinates();
                for (i = 0; i < coordArray.length; i++) {
                    if (i == 0) {
                        coordList = coordArray[i][0] + " " + coordArray[i][1];
                    } else {
                        coordList = coordList + ", " + coordArray[i][0] + " " + coordArray[i][1];
                    }
                }
                coordList = encodeURIComponent(coordList);
                markerType = 'LineString';
            }
            if (value_src == 'polygonMarker') {
                var coordArray = markerFeature.getGeometry().getCoordinates()[0];
                for (i = 0; i < coordArray.length; i++) {
                    if (i == 0) {
                        coordList = coordArray[i][0] + " " + coordArray[i][1];
                    } else {
                        coordList = coordList + ", " + coordArray[i][0] + " " + coordArray[i][1];
                    }
                }
                coordList = encodeURIComponent("(" + coordList + ")");
                markerType = 'Polygon';
            }
    
            var value_attribute = $('#qryType option:selected').text();
            var encodedCoordList = encodeURIComponent(coordList);
    
            if (value_attribute == 'Within Distance of') {
                var dist = document.getElementById("bufferDistance");
                var value_dist = encodeURIComponent(Number(dist.value));
    
                var distanceUnit = document.getElementById("distanceUnits");
                var value_distanceUnit = encodeURIComponent(distanceUnit.options[distanceUnit.selectedIndex].value);
    
                url = "http://" + serverPort + "/geoserver/" + geoserverWorkspace + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=DWITHIN(geom," + markerType + "(" + encodedCoordList + ")," + value_dist + "," + value_distanceUnit + ")";
            } else if (value_attribute == 'Intersecting') {
                url = "http://" + serverPort + "/geoserver/" + geoserverWorkspace + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=INTERSECTS(geom," + markerType + "(" + encodedCoordList + "))";
            } else if (value_attribute == 'Completely Within') {
                url = "http://" + serverPort + "/geoserver/" + geoserverWorkspace + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=WITHIN(geom," + markerType + "(" + encodedCoordList + "))";
            }
    
            console.log("Generated URL: ", url);
    
            fetch(url)
                .then(response => response.text())  // Lê a resposta como texto
                .then(responseText => {
                    console.log("Response Text: ", responseText);
                    try {
                        // Tenta converter o texto para JSON
                        const data = JSON.parse(responseText);
                        console.log("Parsed JSON: ", data);
                        // Chama a função para adicionar GeoJSON ao mapa
                        newaddGeoJsonToMap(data);
                    } catch (error) {
                        console.error("Error parsing JSON: ", error);
                        console.error("Response was not valid JSON: ", responseText);
                    }
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
    
            coordList = '';
            markerFeature = undefined;
        }
    }*/
    






}

    /*document.getElementById('spQryRun').onclick = function () {
        var layer = document.getElementById("buffSelectLayer");
        var value_layer = layer.options[layer.selectedIndex].value;

        var srcCriteria = document.getElementById("srcCriteria");
        var value_src = srcCriteria.options[srcCriteria.selectedIndex].value;
        var coordList = '';
        var url;
        var markerType = '';
        if (markerFeature) {
            if (value_src == 'pointMarker') {
                coordList = markerFeature.getGeometry().getCoordinates()[0] + " " + markerFeature.getGeometry().getCoordinates()[1];
                markerType = 'Point';
            }
            if (value_src == 'lineMarker') {
                var coordList = markerFeature.getGeometry().getCoordinates();

                for (i = 0; i < coordArray.length; i++) {
                    if (i == 0) {
                        coordList = coordArray[i][0] + "" + coordArray[i][1];
                    } else {
                        coordList = coordList + ", " + coordArray[i][0] + " " + coordArray[i][1];
                    }
                }
                markerType = 'Line String';
            }

            if (value_src == 'polygonMarker') {
                var coordArray = markerFeature.getGeometry().getCoordinates()[0];

                for (i = 0; i < coordArray.length; i++) {
                    if (i == 0) {
                        coordList = coordArray[i][0] + "" + coordArray[i][1];
                    } else {
                        coordList = coordList + ", " + coordArray[i][0] + " " + coordArray[i][1];
                    }
                }
                coordList = "(" + coordList + ")";
                markerType = 'Polygon';
            }

            /*var value_attribute = $('#qryType option:selected').text();
            if (value_attribute == 'Within Distance of'){
                var dist = document.getElementById("bufferDistance");
                var value_dist = Number(dist.value);

                var distanceUnit = document.getElementById("distanceUnits");
                var value_distanceUnit = distanceUnit.options[distanceUnit.selectedIndex].value;
                url = "http://" + serverPort + "/geoserver/" + geoserverWorkspace + "/ows?service= WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=DWITHIN(geom," + markerType + "(" + coordList + "), + "

            } else if (value_attribute == 'Intersecting'){
                url = "http://" + serverPort + "/geoserver/" + geoserverWorkspace + "/ows?service= WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=INTERSECTS(geom," + markerType + "(" + coordList + ")",
            }

            else if (value_attribute == 'Completely Within'){
                url = "http://" + serverPort + "/geoserver/" + geoserverWorkspace + "/ows?service= WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=WITHIN(geom," + markerType + "(" + coordList + ")",
            }*/



            /*var value_attribute = $('#qryType option:selected').text();

            if (value_attribute == 'Within Distance of') {
                var dist = document.getElementById("bufferDistance");
                var value_dist = Number(dist.value);

                var distanceUnit = document.getElementById("distanceUnits");
                var value_distanceUnit = distanceUnit.options[distanceUnit.selectedIndex].value;

                url = "http://" + 8080 + "/geoserver/" + adUcation + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=DWITHIN(geom," + markerType + "(" + coordList + ")," + value_dist + "," + value_distanceUnit + ")";

            } else if (value_attribute == 'Intersecting') {
                url = "http://" + 8080 + "/geoserver/" + adUcation + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=INTERSECTS(geom," + markerType + "(" + coordList + "))";

            } else if (value_attribute == 'Completely Within') {
                url = "http://" + 8080 + "/geoserver/" + adUcation + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=WITHIN(geom," + markerType + "(" + coordList + "))";
            }*/

   /*         var value_attribute = $('#qryType option:selected').text();

if (value_attribute == 'Within Distance of') {
    var dist = document.getElementById("bufferDistance");
    var value_dist = Number(dist.value);

    var distanceUnit = document.getElementById("distanceUnits");
    var value_distanceUnit = distanceUnit.options[distanceUnit.selectedIndex].value;

    url = "http://" + serverPort + "/geoserver/" + geoserverWorkspace + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=DWITHIN(geom," + markerType + "(" + coordList + ")," + value_dist + "," + value_distanceUnit + ")";
    
} else if (value_attribute == 'Intersecting') {
    url = "http://" + serverPort + "/geoserver/" + geoserverWorkspace + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=INTERSECTS(geom," + markerType + "(" + coordList + "))";
    
} else if (value_attribute == 'Completely Within') {
    url = "http://" + serverPort + "/geoserver/" + geoserverWorkspace + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=WITHIN(geom," + markerType + "(" + coordList + "))";
}

console.log("Generated URL: ", url);

// Fazer a requisição e tratar a resposta
fetch(url)
    .then(response => response.text())  // Lê a resposta como texto
    .then(responseText => {
        console.log("Response Text: ", responseText);
        try {
            // Tenta converter o texto para JSON
            const data = JSON.parse(responseText);
            console.log("Parsed JSON: ", data);
        } catch (error) {
            console.error("Error parsing JSON: ", error);
            console.error("Response was not valid JSON: ", responseText);
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

            newaddGeoJsonToMap(url);
            coordList = '';
            markerFeature = undefined;
        }

    }





}*/


function highlight(feature) {
    // Define o estilo de destaque aqui
    return new ol.style.Style({
        // Defina o estilo de destaque, por exemplo, mudando a cor da borda ou preenchimento
        stroke: new ol.style.Stroke({
            color: 'red',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 0, 0.1)'
        })
    });
}


var editgeojson;
var editLayer;
var modifiedFeatureList = [];
var editTask;
var editTaskName;
var modifiedFeature = false;
var modifyInteraction;
var featureAdd;
var snap_edit;
var selectedFeatureOverlay = new ol.layer.Vector({
    title: 'Selected Feature',
    source: new ol.source.Vector(),
    map: map,
    style: highlight

});

var startEditingButton = document.createElement('button');
startEditingButton.innerHTML = '<img src = "resources/images/edit.svg" alt="" style="width:23px; heidth:24px;filter:brightness(0) invert(1); vertical-align:middle; display: block "  ></img>';
startEditingButton.className = 'myButton';
startEditingButton.id = 'startEditingButton';
startEditingButton.title = 'Start Editing';

var startEditingElement = document.createElement('div');
startEditingElement.className = 'myButtonDiv';
startEditingElement.appendChild(startEditingButton);
//toolbarDivElement.appendChild(startEditingButton);

var startEditingControl = new ol.control.Control({
    element: startEditingElement
})




var startEditingFlag = false;
let value_layer = '';
startEditingButton.addEventListener("click", () => {
    startEditingButton.classList.toggle('clicked');
    startEditingFlag = !startEditingFlag;
    document.getElementById("map").style.cursor = "default";

    if (startEditingFlag) {
        document.getElementById("editingControlsDiv").style.display = "block";
        editLayer = document.getElementById('editingLayer').value;
        var style = new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0 ,0, 0, 0)'
            }),
            stroke: new ol.style.Stroke({
                color: '#00FFFF',
                width: 1
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#00FFFF'
                })
            })

        });
        map.addControl(startEditingControl);



        if (editgeojson) {
            editgeojson.getSource().clear();
            map.removeLayer(editgeojson);
        }

        editgeojson = new ol.layer.Vector({
            title: "Edit Layer",
            source: new ol.source.Vector({
                format: new ol.format.GeoJSON(),


                url: function (extent) {
                    return 'http://localhost:8080/geoserver/adUcation/ows?service=WFS&' +
                        'version=1.0.0&request=GetFeature&typeName=' + value_layer + '&' +
                        'outputFormat=application/json&srsname=EPSG:4326&' +
                        'bbox=' + extent.join(',') + ',EPSG:3857';
                },

                /* url: function (extent) {
                     return 'http://localhost:8080/geoserver/adUcation/ows?service=WFS&' +
                             'version=1.0.0&request=GetFeature&typeName=total_if + &' +
                             'outputFormat=application/json&srsname=EPSG:4326&' +
                             'bbox=' + extent.join(',') + ',EPSG:3857';
                 },*/




                /* url: function (extent) {
                    return 'http://' + 8080 + '/geoserver/' + adUcation + '/ows?service=WFS&' +
                            'version=1.0.0&request=GetFeature&typeName=' + total_if +  '&' +
                            'outputFormat=application/json&srsname=EPSG:4326&' +
                            'bbox=' + extent.join(',') + ',EPSG:3857';
                },
                
                
                url: function(extent) {
                    return 'http://localhost:8080/geoserver/adUcation/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=adUcation:total_if&maxFeatures=50&outputFormat=application/json&srsname=EPSG:4326&bbox=' +
                      transformExtent(extent,"EPSG:3857","EPSG:4326").join(",") +
                      ',EPSG:4326'
                    
                  },*/
                strategy: ol.loadingstrategy.bbox
            }),
            style: style,
        });
        map.addLayer(editgeojson);

    } else {
        document.getElementById("editingControlsDiv").style.display = "none";
        editgeojson.getSource().clear();
        map.removeLayer(editgeojson);
    }
})




map.addControl(startEditingControl);

var editingControlsDivElement = document.getElementById('editingControlsDiv');

var addFeatureButton = document.createElement('button');
addFeatureButton.innerHTML = '<img src = "resources/images/add.svg" alt="" style="width:23px; heidth:24px;filter:brightness(0) invert(1); vertical-align:middle; display: block " ></img>';
addFeatureButton.className = 'myButton';
addFeatureButton.id = 'addFeatureButton';
addFeatureButton.title = 'Add Feature';

var addFeatureElement = document.createElement('div');
addFeatureElement.className = 'myButtonDiv';
addFeatureElement.id = 'addFeatureButtonDiv';
addFeatureElement.appendChild(addFeatureButton);
editingControlsDivElement.appendChild(addFeatureElement);

var addFeatureFlag = false;
addFeatureButton.addEventListener("click", () => {
    addFeatureButton.classList.toggle('clicked');
    addFeatureFlag = !addFeatureFlag;
    document.getElementById("map").style.cursor = "default";
    if (addFeatureFlag) {
        if (modifiedFeatureList) {
            if (modifiedFeatureList.length > 0) {
                var answer = confirm('Save edits?');
                if (answer) {
                    saveEdits(editTask);
                    modifiedFeatureList = [];
                }
                else {
                    modifiedFeatureList = [];
                }
            }
        }
        editTask = 'insert';
        addFeature();
    } else {
        if (modifiedFeatureList.length > 0) {
            var answer = confirm('You have unsaved edits. Do you want to save edits?');
            if (answer) {
                saveEdits(editTask);
                modifiedFeatureList = [];
            } else {
                modifiedFeatureList = [];
            }

        }

        map.un('click', modifyFeature);
        selectedFeatureOverlay.getSource().clear();
        map.removeLayer(selectedFeatureOverlay);
        modifiedFeature = false;
        map.removeInteraction(modifyInteraction);
        map.removeInteraction(snap_edit);
        editTask = '';

        if (modifyInteraction) {
            map.removeInteraction(modifyInteraction);
        }
        if (snap_edit) {
            map.removeInteraction(snap_edit);
        }
        if (drawInteraction) {
            map.removeInteraction(drawInteraction);
        }
    }
})





function addFeature(evt) {
    if (clickSelectedFeatureOverlay) {
        clickSelectedFeatureOverlay.getSource().clear();
        map.removeLayer(clickSelectedFeatureOverlay);
    }

    if (modifyInteraction) {
        map.removeInteraction(modifyInteraction);
    }

    if (snap_edit) {
        map.removeInteraction(snap_edit);
    }

    var interactionType;
    source_mod = editgeojson.getSource();
    drawInteraction = new ol.interaction.Draw({
        source: editgeojson.getSource(),
        type: editgeojson.getSource().getFeatures()[0].getGeometry().getType(),
        style: interactionStyle
    });
    map.addInteraction(drawInteraction);
    snap_edit = new ol.interaction.Snap({
        source: editgeojson.getSource()
    });
    map.addInteraction(snap_edit);

    drawInteraction.on('drawend', function (e) {
        var feature = e.feature;
        feature.set('geometry', feature.getGeometry());
        modifiedFeatureList.push(feature);
    })
}




var modifyFeatureButton = document.createElement('button');
modifyFeatureButton.innerHTML = '<img src = "resources/images/modify.svg" alt="" style="width:23px; heidth:24px;filter:brightness(0) invert(1); vertical-align:middle; display: block " ></img>';
modifyFeatureButton.className = 'myButton';
modifyFeatureButton.id = 'modifyFeatureButton';
modifyFeatureButton.title = 'Modify Feature';

var modifyFeatureElement = document.createElement('div');
modifyFeatureElement.className = 'myButtonDiv';
modifyFeatureElement.id = 'modifyFeatureButtonDiv';
modifyFeatureElement.appendChild(modifyFeatureButton);
editingControlsDivElement.appendChild(modifyFeatureElement);
//toolbarDivElement.appendChild(modifyFeatureElement);

var modifyFeatureControl = new ol.control.Control({
    element: modifyFeatureElement
})


var modifyFeatureFlag = false;
modifyFeatureButton.addEventListener("click", () => {
    modifyFeatureButton.classList.toggle('clicked');
    modifyFeatureFlag = !modifyFeatureFlag;
    document.getElementById("map").style.cursor = "default";
    if (modifyFeatureFlag) {
        modifiedFeatureList = [];
        selectedFeatureOverlay.getSource().clear();
        map.removeLayer(selectedFeatureOverlay);
        map.on('click', modifyFeature);
        editTask = 'update';

    } else {
        if (modifiedFeatureList.length > 0) {
            var answer = confirm('Save edits?');
            if (answer) {
                saveEdits(editTask);
                modifiedFeatureList = [];
            } else {
                modifiedFeatureList = [];
            }

        }

        map.un('click', modifyFeature);
        selectedFeatureOverlay.getSource().clear();
        map.removeLayer(selectedFeatureOverlay);
        modifiedFeature = false;
        map.removeInteraction(modifyInteraction);
        map.removeInteraction(snap_edit);
        editTask = '';

        /*if (modifyInteraction){
            map.removeInteraction(modifyInteraction);
        }
        if(snap_edit){
            map.removeInteraction(snap_edit);
        }
        if(drawInteraction){
            map.removeInteraction(drawInteraction);
        }*/
    }
})



map.addControl(modifyFeatureControl);


function modifyFeature(evt) {
    selectedFeatureOverlay.getSource().clear();
    map.removeLayer(selectedFeatureOverlay);
    var selectedFeature = map.forEachFeatureAtPixel(evt.pixel,
        function (feature, layer) {
            return feature;
        });

    if (selectedFeature) {
        selectedFeatureOverlay.getSource().addFeature(selectedFeature);
    }

    var modifySource = selectedFeatureOverlay.getSource();
    var modifyInteraction = new ol.interaction.Modify({
        source: modifySource
    });

    map.addInteraction(modifyInteraction);

    modifyInteraction.on('modifyend', function (e) {
        modifyFeature = true;
        featureAdd = true;
        if (modifiedFeatureList.length > 0) {

            for (var j = 0; j < modifiedFeatureList.length; j++) {
                if (e.features.item(0)['id_'] == modifiedFeatureList[j]['id_']) {
                    featureAdd = false;
                }
            }
        }

        if (featureAdd) { modifiedFeatureList.push(e.features.item(0)); }

    });

    var sourceEditGeoJson = editgeojson.getSource();
    snap_edit = new ol.interaction.Snap({
        source: sourceEditGeoJson
    });

    map.addInteraction(snap_edit);





    /* var sourceEditGeoJson = editgeojson.getSource('area_1');
     snap_edit = new ol.interaction.Snap({
        source: sourceEditGeoJson
     });*/

    /* map.addInteraction(snap_edit);
     modifyInteraction.on('modifyend', function (e){
        modifiedFeature = true;
        featureAdd = true;
        if (modifiedFeatureList.length > 0){
            for(var j = 0; j < modifiedFeatureList.length; j++) {
                if (e.features.item(0)['id_']==modifiedFeatureList[j]['id_']) {
                    featureAdd = false;
                }   
            }
        }
        if (featureAdd) {modifiedFeatureList.push(e.features.item(0));}
     })*/



}


var clones = [];

function saveEdits(editTaskName) {
    clones = [];
    for (var i = 0; i < modifiedFeatureList.length; i++) {
        var feature = modifiedFeatureList[i];
        var featureProperties = feature.getProperties();

        delete featureProperties.boundedBy;
        var clone = feature.clone();
        clone.setId(feature.getId());

        clones.push(clone)
    }

    if (editTaskName == 'update') { transactWFS('update_batch', clones); }
    if (editTaskName == 'insert') { transactWFS('insert_batch', clones); }
}

var formatWFS = new ol.format.WFS();

var transactWFS = function (mode, f) {

    var node;
    var formatGML = new ol.format.GML({
        featureNS: geoserverWorkspace,
        featureType: editLayer,
        service: 'WFS',
        version: '1.1.0',
        request: 'GetFeature',
        srsName: 'EPSG:3857'
    });

    switch (mode) {
        case 'insert':
            node = formatWFS.writeTransaction([f], null, null, formatGML);
            break;

        case 'insert_batch':
            node = formatWFS.writeTransaction(f, null, null, formatGML);
            break;

        case 'update':
            node = formatWFS.writeTransaction(null, [f], null, formatGML);
            break;

        case 'update_batch':
            node = formatWFS.writeTransaction(null, f, null, formatGML);
            break;

        case 'delete':
            node = formatWFS.writeTransaction(null, null, [f], formatGML);
            break;

        case 'delete_batch':
            node = formatWFS.writeTransaction(null, null, [f], formatGML);
            break;
    }
    var xs = new XMLSerializer();
    var payload = xs.serializeToString(node);

    payload = payload.split('feature:' + editLayer).join(editLayer);
    if (editTask == 'insert') { payload = payload.split(geoserverWorkspace + ':geometry').join(geoserverWorkspace + ':geom'); }
    if (editTask == 'update') { payload = payload.split('<Name>geometry</Name>').join('<Name>geom</Name>'); }

    $.ajax('http://localhost:8080/geoserver/wfs', {
        type: 'POST',
        dataType: 'xml',
        processData: false,
        contentType: 'text/xml',
        data: payload.trim(),
        success: function (data) {

        },
        error: function (e) {
            var errorMsg = e ? (e.status + ' ' + e.statusText) : "";
            alert('Error saving this feature to GeoServer.<br><br>'
                + errorMsg);
        }


    }).done(function () {
        editgeojson.getSource().refresh();
    });


};


var deleteFeatureButton = document.createElement('button');
deleteFeatureButton.innerHTML = '<img src = "resources/images/delete.svg" alt="" style="width:23px; heidth:24px;filter:brightness(0) invert(1); vertical-align:middle; display: block " ></img>';
deleteFeatureButton.className = 'myButton';
deleteFeatureButton.id = 'deleteFeatureButton';
deleteFeatureButton.title = 'Delete Feature';

var deleteFeatureElement = document.createElement('div');
deleteFeatureElement.className = 'myButtonDiv';
deleteFeatureElement.id = 'deleteFeatureButtonDiv';
deleteFeatureElement.appendChild(deleteFeatureButton);
editingControlsDivElement.appendChild(deleteFeatureElement);


var deleteFeatureFlag = false;
deleteFeatureButton.addEventListener("click", () => {
    deleteFeatureButton.classList.toggle('clicked');
    deleteFeatureFlag = !deleteFeatureFlag;
    document.getElementById("map").style.cursor = "default";
    if (deleteFeatureFlag) {
        modifiedFeatureList = [];
        selectedFeatureOverlay.getSource().clear();
        map.removeLayer(selectedFeatureOverlay);
        editTask = 'delete';
        map.on('click', selectFeatureToDelete);

    } else {
        if (modifiedFeatureList.length > 0) {
            var answer = confirm('Save edits?');
            if (answer) {
                saveEdits(editTask);
                modifiedFeatureList = [];
            } else {
                modifiedFeatureList = [];
            }

        }

        map.un('click', selectFeatureToDelete);
        selectedFeatureOverlay.getSource().clear();
        map.removeLayer(selectedFeatureOverlay);
        modifiedFeature = false;
        map.removeInteraction(modifyInteraction);
        map.removeInteraction(snap_edit);
        editTask = '';

        if (modifyInteraction) {
            map.removeInteraction(modifyInteraction);
        }
        if (snap_edit) {
            map.removeInteraction(snap_edit);
        }
        if (drawInteraction) {
            map.removeInteraction(drawInteraction);
        }
    }
})

// Criar uma fonte de dados GeoJSON
var source = new ol.source.Vector({
    format: new ol.format.GeoJSON()
});


var modifySource = selectedFeatureOverlay.getSource();
var modifyInteraction = new ol.interaction.Modify({
    source: modifySource
});
map.addInteraction(modifyInteraction);

modifyInteraction.on('modifyend', function (e) {
    modifyFeature = true;
    featureAdd = true;
    if (modifiedFeatureList.length > 0) {
        for (var j = 0; j < modifiedFeatureList.length; j++) {
            if (e.features.item(0)['id_'] == modifiedFeatureList[j]['id_']) {
                featureAdd = false;
            }
        }
    }
    if (featureAdd) { modifiedFeatureList.push(e.features.item(0)); }
});






// Criar uma camada vetorial usando a fonte de dados GeoJSON
var editgeojson = new ol.layer.Vector({
    source: source
});

// Obter a fonte de dados da camada editgeojson
var sourceEditGeoJson = editgeojson.getSource();



var sourceEditGeoJson = editgeojson.getSource();
snap_edit = new ol.interaction.Snap({
    source: sourceEditGeoJson
});

/*map.addInteraction(snap_edit);
modifyInteraction.on('modifyend', function (e){
   modifyFeature = true;
   featureAdd = true;
   if(modifiedFeatureList.length > 0){

       for (var j = 0; j < modifiedFeatureList.length; j++) {
           if (e.features.item(0)['id_'] == modifiedFeatureList[j]['id_']) {
               featureAdd = false;                    
           }
       }
   }

   if(featureAdd) { modifiedFeatureList.push(e.features.item(0)); }

});*/


function selectFeatureToDelete(evt) {
    clickSelectedFeatureOverlay.getSource().clear();
    map.removeLayer(clickSelectedFeatureOverlay);
    var selectFeature = map.forEachFeatureAtPixel(evt.pixel,
        function (feature, layer) {
            return feature;
        });

    if (selectFeature) {
        clones = [];
        var answer = confirm('Deseja deletar?');

        if (answer) {
            var feature = selectFeature;
            var featureProperties = feature.getProperties();

            delete featureProperties.boundedBy;
            var clone = feature.clone();
            clone.setId(feature.getId());

            clones.push(clone)
            if (editTask == 'update') { transactWFS('update_batch', clones); }
            if (editTask == 'insert') { transactWFS('insert_batch', clones); }
            if (editTask == 'delete') { transactWFS('delete', clone); }

        }

    }
}



var settingsButton = document.createElement('button');
settingsButton.innerHTML = '<img src="resources/images/settings.svg" alt="" style="width:23px; heidth:24px;filter:brightness(0) invert(1); vertical-align:middle; display: block "  ></img>';
settingsButton.className = 'myButton';
settingsButton.id = 'settingButton';
settingsButton.title = 'Settings';

var settingElement = document.createElement('div');
settingElement.className = 'myButtonDiv';
settingElement.appendChild(settingsButton);
//toolbarDivElement.appendChild(settingElement);



var settingControl = new ol.control.Control({
    element: settingElement
})


var settingFlag = false;

settingsButton.addEventListener("click", () => {
    settingsButton.classList.toggle('clicked');
    settingFlag = !settingFlag;
    document.getElementById("map").style.cursor = "default";
    if (settingFlag) {
        //document.getElementById("map").style.cursor = "default";
        document.getElementById("settingsDiv").style.display = "block";
        addMapLayerList('editingLayer');
    } else {
        //document.getElementById("map").style.cursor = "default";
        document.getElementById("settingsDiv").style.display = "none";
    }

})

//map.addControl(bufferControl);
map.addControl(settingControl);

//var allControl = new ol.control.Control({
//  element: toolbarDivElement
//})

//map.addControl(allControl);



document.addEventListener('DOMContentLoaded', function () {
    const spQryRun = document.getElementById('spQryRun');
    if (spQryRun) {
        spQryRun.onclick = function () {
            const url = generateURL();
            fetchData(url, 'json') // Ou 'xml' dependendo do esperado
                .then(data => {
                    console.log("Parsed Data: ", data);
                    // Processa os dados aqui
                })
                .catch(error => {
                    console.error('Error processing fetch operation:', error);
                });
        };
    } else {
        console.error("Elemento com ID 'spQryRun' não encontrado.");
    }
});


const serverPort = '8080'; // Porto correto do servidor
const geoserverHost = 'your.geoserver.host'; // Endereço correto do servidor
const geoserverWorkspace = 'adUcation'; // Nome correto do workspace

function generateURL() {
    // Certifique-se de que todas as variáveis necessárias estão definidas corretamente
    if (!geoserverHost || !serverPort || !geoserverWorkspace || !value_layer || !coordList || !markerType) {
        throw new Error("Uma ou mais variáveis necessárias não estão definidas");
    }

    // Construção da URL para consulta ao GeoServer
    let url = `http://${geoserverHost}:${serverPort}/geoserver/${geoserverWorkspace}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=${value_layer}&CQL_FILTER=DWITHIN(geom,${markerType}(${coordList}),distance,unit)`;
    
    console.log("Generated URL: ", url);
    return url;
}

document.addEventListener('DOMContentLoaded', function () {
    const serverPort = '8080'; // Porto correto do servidor
    const geoserverHost = 'your.geoserver.host'; // Endereço correto do servidor
    const geoserverWorkspace = 'adUcation'; // Nome correto do workspace

    let value_layer = 'yourLayerName'; // Defina o nome da camada corretamente
    let coordList = 'yourCoordinates'; // Defina as coordenadas corretamente
    let markerType = 'Point'; // Defina o tipo de geometria (Point, LineString, Polygon)

    function generateURL() {
        // Certifique-se de que todas as variáveis necessárias estão definidas corretamente
        if (!geoserverHost || !serverPort || !geoserverWorkspace || !value_layer || !coordList || !markerType) {
            throw new Error("Uma ou mais variáveis necessárias não estão definidas");
        }

        // Construção da URL para consulta ao GeoServer
        let url = `http://${geoserverHost}:${serverPort}/geoserver/${geoserverWorkspace}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=${value_layer}&CQL_FILTER=DWITHIN(geom,${markerType}(${coordList}),distance,unit)`;
        
        console.log("Generated URL: ", url);
        return url;
    }

    function fetchData(url, dataType) {
        return fetch(url)
            .then(response => {
                console.log("HTTP Response Status: ", response.status);
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then(responseText => {
                console.log("Response Text: ", responseText);
                if (responseText.startsWith('<?xml')) {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(responseText, "application/xml");
                    const serviceException = xmlDoc.getElementsByTagName("ServiceException")[0];
                    if (serviceException) {
                        throw new Error('GeoServer Error: ' + serviceException.textContent);
                    }
                    throw new Error('Unexpected XML response: ' + responseText);
                }

                if (dataType === 'json') {
                    try {
                        const json = JSON.parse(responseText);
                        return json;
                    } catch (error) {
                        throw new Error('Invalid JSON: ' + responseText);
                    }
                } else if (dataType === 'xml') {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(responseText, "application/xml");
                    if (xmlDoc.getElementsByTagName("parsererror").length) {
                        throw new Error('Invalid XML: ' + responseText);
                    }
                    return xmlDoc;
                } else {
                    throw new Error('Unsupported data type');
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
                throw error;
            });
    }

    const spQryRun = document.getElementById('spQryRun');
    if (spQryRun) {
        spQryRun.onclick = function () {
            const url = generateURL();
            fetchData(url, 'json') // Ou 'xml' dependendo do esperado
                .then(data => {
                    console.log("Parsed Data: ", data);
                    // Processa os dados aqui
                })
                .catch(error => {
                    console.error('Error processing fetch operation:', error);
                });
        };
    } else {
        console.error("Elemento com ID 'spQryRun' não encontrado.");
    }
});




function generateURL() {
    let serverPort = '8080';  // Certifique-se de que esta variável está definida corretamente
    let geoserverWorkspace = 'adUcation';  // Defina seu workspace
    let value_layer = 'value_layer';  // Certifique-se de que esta variável está definida corretamente
    let coordList = '4326';  // Certifique-se de que as coordenadas estão corretas
    let markerType = 'Polygon';  // Certifique-se de que o tipo de marcador está correto
    
    let url = `http://${serverPort}/geoserver/${geoserverWorkspace}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=${value_layer}&CQL_FILTER=DWITHIN(geom,${markerType}(${4326}),distance,unit)`;
    
    console.log("Generated URL: ", url);
    return url;
}


function fetchData(url, dataType) {
    return fetch(url)
        /*.then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })*/
        .then(responseText => {
            console.log("Início da resposta: ", responseText.trim().slice(0, 20)); // Exibir os primeiros 20 caracteres da resposta
            if (responseText.trim().startsWith('<?xml')) {
                console.log("Resposta identificada como XML.");
                // Restante do seu código para processar o XML
            } else {
                console.log("Resposta não identificada como XML.");
                // Restante do seu código para processar JSON ou lidar com outros tipos de resposta
            }
        })


        /*.then(responseText => {
            if (responseText.startsWith('<?xml')) {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(responseText, "application/xml");
                const serviceException = xmlDoc.querySelector('ServiceException');
                if (serviceException) {
                    throw new Error('GeoServer Error: ' + serviceException.textContent);
                }
                return xmlDoc; // Retornar XML processado, se necessário
            } else {
                if (dataType === 'json') {
                    try {
                        const json = JSON.parse(responseText);
                        return json; // Retornar JSON processado
                    } catch (error) {
                        throw new Error('Invalid JSON: ' + responseText);
                    }
                } else {
                    throw new Error('Unsupported data type');
                }
            }
        })
        */

        .then(responseText => {
            if (responseText.trim().startsWith('<?xml')) { // Adicione o trim() para remover espaços em branco
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(responseText, "application/xml");
                const serviceException = xmlDoc.querySelector('ServiceException');
                if (serviceException) {
                    throw new Error('GeoServer Error: ' + serviceException.textContent);
                }
                return xmlDoc; // Retorne XML processado, se necessário
            } else {
                if (dataType === 'json') {
                    try {
                        const json = JSON.parse(responseText);
                        return json; // Retorne JSON processado
                    } catch (error) {
                        throw new Error('Invalid JSON: ' + responseText);
                    }
                } else {
                    throw new Error('Unsupported data type');
                }
            }
        })

        .catch(error => {
            console.error('Fetch error:', error);
            throw error;
        });

        
}



/*function fetchData(url, dataType) {
    return fetch(url)
        .then(response => {
            console.log("HTTP Response Status: ", response.status);
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(responseText => {
            console.log("Response Text: ", responseText);
            if (responseText.startsWith('<?xml')) {
                // Trata a resposta XML de erro
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(responseText, "application/xml");
                const serviceException = xmlDoc.getElementsByTagName("ServiceException")[0];
                if (serviceException) {
                    throw new Error('GeoServer Error: ' + serviceException.textContent);
                }
                throw new Error('Unexpected XML response: ' + responseText);
            }

            if (dataType === 'json') {
                try {
                    const json = JSON.parse(responseText);
                    return json;
                } catch (error) {
                    throw new Error('Invalid JSON: ' + responseText);
                }
            } else if (dataType === 'xml') {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(responseText, "application/xml");
                if (xmlDoc.getElementsByTagName("parsererror").length) {
                    throw new Error('Invalid XML: ' + responseText);
                }
                return xmlDoc;
            } else {
                throw new Error('Unsupported data type');
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            throw error;
        });
}*/

// Exemplo de uso
/*const url = generateURL();
fetchData(url, 'json') // Ou 'xml' dependendo do esperado
    .then(data => {
        console.log("Parsed Data: ", data);
        // Processa os dados aqui
    })
    .catch(error => {
        console.error('Error processing fetch operation:', error);
    });

    document.getElementById('spQryRun').onclick = function () {
        const url = generateURL();
        fetchData(url, 'json') // Ou 'xml' dependendo do esperado
            .then(data => {
                console.log("Parsed Data: ", data);
                // Processa os dados aqui
            })
            .catch(error => {
                console.error('Error processing fetch operation:', error);
            });
    };
*/

    









