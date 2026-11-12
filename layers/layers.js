var wms_layers = [];


        var lyr_Argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_hitos_22185_1 = new ol.format.GeoJSON();
var features_hitos_22185_1 = format_hitos_22185_1.readFeatures(json_hitos_22185_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hitos_22185_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hitos_22185_1.addFeatures(features_hitos_22185_1);
var lyr_hitos_22185_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hitos_22185_1, 
                style: style_hitos_22185_1,
                popuplayertitle: 'hitos_22185',
                interactive: true,
                title: '<img src="styles/legend/hitos_22185_1.png" /> hitos_22185'
            });

lyr_Argenmap_0.setVisible(true);lyr_hitos_22185_1.setVisible(true);
var layersList = [lyr_Argenmap_0,lyr_hitos_22185_1];
lyr_hitos_22185_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'test': 'test', });
lyr_hitos_22185_1.set('fieldImages', {'NOMBRE': '', 'test': '', });
lyr_hitos_22185_1.set('fieldLabels', {'NOMBRE': 'no label', 'test': 'no label', });
lyr_hitos_22185_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});