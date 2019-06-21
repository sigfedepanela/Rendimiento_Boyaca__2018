var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Boyaca_1 = new ol.format.GeoJSON();
var features_Boyaca_1 = format_Boyaca_1.readFeatures(json_Boyaca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boyaca_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Boyaca_1.addFeatures(features_Boyaca_1);var lyr_Boyaca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boyaca_1, 
                style: style_Boyaca_1,
                title: '<img src="styles/legend/Boyaca_1.png" /> Boyaca'
            });var format_RendimientodePanelaTonHa_2 = new ol.format.GeoJSON();
var features_RendimientodePanelaTonHa_2 = format_RendimientodePanelaTonHa_2.readFeatures(json_RendimientodePanelaTonHa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RendimientodePanelaTonHa_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RendimientodePanelaTonHa_2.addFeatures(features_RendimientodePanelaTonHa_2);var lyr_RendimientodePanelaTonHa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RendimientodePanelaTonHa_2, 
                style: style_RendimientodePanelaTonHa_2,
    title: 'Rendimiento de Panela (Ton/Ha)<br />\
    <img src="styles/legend/RendimientodePanelaTonHa_2_0.png" />  2,49 - 2,98 <br />\
    <img src="styles/legend/RendimientodePanelaTonHa_2_1.png" />  2,98 - 4,48 <br />\
    <img src="styles/legend/RendimientodePanelaTonHa_2_2.png" />  4,48 - 5,47 <br />\
    <img src="styles/legend/RendimientodePanelaTonHa_2_3.png" />  5,47 - 7,46 <br />\
    <img src="styles/legend/RendimientodePanelaTonHa_2_4.png" />  7,46 - 11,44 <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Boyaca_1.setVisible(true);lyr_RendimientodePanelaTonHa_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Boyaca_1,lyr_RendimientodePanelaTonHa_2];
lyr_Boyaca_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/': 'REND.(Ton/', 'AÑO': 'AÑO', 'No': 'No', });
lyr_RendimientodePanelaTonHa_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/Ha)': 'REND.(Ton/Ha)', });
lyr_Boyaca_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/': 'TextEdit', 'AÑO': 'Range', 'No': 'Range', });
lyr_RendimientodePanelaTonHa_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/Ha)': 'TextEdit', });
lyr_Boyaca_1.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/': 'inline label', 'AÑO': 'inline label', 'No': 'inline label', });
lyr_RendimientodePanelaTonHa_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/Ha)': 'inline label', });
lyr_RendimientodePanelaTonHa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});