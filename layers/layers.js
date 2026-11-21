var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_2 = format_ADMINISTRASIKECAMATAN_AR_50K_2.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_2);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_2,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_0.png" /> ALANG-ALANGLEBAR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_1.png" /> BANYUASIN SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_2.png" /> BUKITKECIL<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_3.png" /> GANDUS<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_4.png" /> ILIRBARAT DUA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_5.png" /> ILIRBARAT SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_6.png" /> ILIRTIMUR DUA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_7.png" /> ILIRTIMUR SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_8.png" /> INDRALAYA UTARA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_9.png" /> KALIDONI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_10.png" /> KEMUNING<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_11.png" /> KERTAPATI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_12.png" /> PEMULUTAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_13.png" /> PLAJU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_14.png" /> RAMBUTAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_15.png" /> RANTAUBAYUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_16.png" /> SAKO<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_17.png" /> SEBERANGULU DUA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_18.png" /> SEBERANGULU SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_19.png" /> SEMATANGBORANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_20.png" /> SEMBAWA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_21.png" /> SUKARAMI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_22.png" /> TALANGKELAPA<br />' });
var format_RUMAHSAKIT_PT_50K_3 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_3 = format_RUMAHSAKIT_PT_50K_3.readFeatures(json_RUMAHSAKIT_PT_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_3.addFeatures(features_RUMAHSAKIT_PT_50K_3);
var lyr_RUMAHSAKIT_PT_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_3, 
                style: style_RUMAHSAKIT_PT_50K_3,
                popuplayertitle: 'RUMAHSAKIT_PT_50K',
                interactive: true,
    title: 'RUMAHSAKIT_PT_50K<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_3_0.png" /> Rumah Sakit Khusus<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_3_1.png" /> Rumah Sakit Umum<br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_2.setVisible(true);lyr_RUMAHSAKIT_PT_50K_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_ADMINISTRASIKECAMATAN_AR_50K_2,lyr_RUMAHSAKIT_PT_50K_3];
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RUMAHSAKIT_PT_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'Gambar': 'Gambar', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RUMAHSAKIT_PT_50K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RUMAHSAKIT_PT_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'Gambar': 'inline label - visible with data', });
lyr_RUMAHSAKIT_PT_50K_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});