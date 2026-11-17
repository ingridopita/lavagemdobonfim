ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([551501.303247, 8564011.953872, 560138.405356, 8568760.662043]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_EDIFICAO_1 = new ol.format.GeoJSON();
var features_EDIFICAO_1 = format_EDIFICAO_1.readFeatures(json_EDIFICAO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_EDIFICAO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDIFICAO_1.addFeatures(features_EDIFICAO_1);
var lyr_EDIFICAO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDIFICAO_1, 
                style: style_EDIFICAO_1,
                popuplayertitle: 'EDIFICAÇÃO',
                interactive: true,
                title: '<img src="styles/legend/EDIFICAO_1.png" /> EDIFICAÇÃO'
            });
var format_ARRUAMENTO_2 = new ol.format.GeoJSON();
var features_ARRUAMENTO_2 = format_ARRUAMENTO_2.readFeatures(json_ARRUAMENTO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ARRUAMENTO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARRUAMENTO_2.addFeatures(features_ARRUAMENTO_2);
var lyr_ARRUAMENTO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARRUAMENTO_2, 
                style: style_ARRUAMENTO_2,
                popuplayertitle: 'ARRUAMENTO',
                interactive: false,
                title: '<img src="styles/legend/ARRUAMENTO_2.png" /> ARRUAMENTO'
            });
var format_LOGRADOURO_3 = new ol.format.GeoJSON();
var features_LOGRADOURO_3 = format_LOGRADOURO_3.readFeatures(json_LOGRADOURO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LOGRADOURO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOGRADOURO_3.addFeatures(features_LOGRADOURO_3);
var lyr_LOGRADOURO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOGRADOURO_3, 
                style: style_LOGRADOURO_3,
                popuplayertitle: 'LOGRADOURO',
                interactive: false,
                title: 'LOGRADOURO'
            });
var format_REAVERDE_4 = new ol.format.GeoJSON();
var features_REAVERDE_4 = format_REAVERDE_4.readFeatures(json_REAVERDE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_REAVERDE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REAVERDE_4.addFeatures(features_REAVERDE_4);
var lyr_REAVERDE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REAVERDE_4, 
                style: style_REAVERDE_4,
                popuplayertitle: 'ÁREA VERDE',
                interactive: true,
                title: '<img src="styles/legend/REAVERDE_4.png" /> ÁREA VERDE'
            });
var format_VERDE_5 = new ol.format.GeoJSON();
var features_VERDE_5 = format_VERDE_5.readFeatures(json_VERDE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_VERDE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERDE_5.addFeatures(features_VERDE_5);
var lyr_VERDE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VERDE_5, 
                style: style_VERDE_5,
                popuplayertitle: 'VERDE',
                interactive: false,
                title: '<img src="styles/legend/VERDE_5.png" /> VERDE'
            });
var format_PERCURSOLAVAGEMDOBONFIM_6 = new ol.format.GeoJSON();
var features_PERCURSOLAVAGEMDOBONFIM_6 = format_PERCURSOLAVAGEMDOBONFIM_6.readFeatures(json_PERCURSOLAVAGEMDOBONFIM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_PERCURSOLAVAGEMDOBONFIM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERCURSOLAVAGEMDOBONFIM_6.addFeatures(features_PERCURSOLAVAGEMDOBONFIM_6);
var lyr_PERCURSOLAVAGEMDOBONFIM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERCURSOLAVAGEMDOBONFIM_6, 
                style: style_PERCURSOLAVAGEMDOBONFIM_6,
                popuplayertitle: 'PERCURSO LAVAGEM DO BONFIM',
                interactive: false,
                title: '<img src="styles/legend/PERCURSOLAVAGEMDOBONFIM_6.png" /> PERCURSO LAVAGEM DO BONFIM'
            });
var format_POLIGONAL_7 = new ol.format.GeoJSON();
var features_POLIGONAL_7 = format_POLIGONAL_7.readFeatures(json_POLIGONAL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_POLIGONAL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONAL_7.addFeatures(features_POLIGONAL_7);
var lyr_POLIGONAL_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLIGONAL_7, 
                style: style_POLIGONAL_7,
                popuplayertitle: 'POLIGONAL',
                interactive: true,
                title: '<img src="styles/legend/POLIGONAL_7.png" /> POLIGONAL'
            });
var format_BARRACAS_SEMOP_8 = new ol.format.GeoJSON();
var features_BARRACAS_SEMOP_8 = format_BARRACAS_SEMOP_8.readFeatures(json_BARRACAS_SEMOP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_BARRACAS_SEMOP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRACAS_SEMOP_8.addFeatures(features_BARRACAS_SEMOP_8);
var lyr_BARRACAS_SEMOP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARRACAS_SEMOP_8, 
                style: style_BARRACAS_SEMOP_8,
                popuplayertitle: 'BARRACAS_SEMOP',
                interactive: true,
                title: '<img src="styles/legend/BARRACAS_SEMOP_8.png" /> BARRACAS_SEMOP'
            });
var format_BANHEIROSQUMICOS_LIMPURB_9 = new ol.format.GeoJSON();
var features_BANHEIROSQUMICOS_LIMPURB_9 = format_BANHEIROSQUMICOS_LIMPURB_9.readFeatures(json_BANHEIROSQUMICOS_LIMPURB_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_BANHEIROSQUMICOS_LIMPURB_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANHEIROSQUMICOS_LIMPURB_9.addFeatures(features_BANHEIROSQUMICOS_LIMPURB_9);
var lyr_BANHEIROSQUMICOS_LIMPURB_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANHEIROSQUMICOS_LIMPURB_9, 
                style: style_BANHEIROSQUMICOS_LIMPURB_9,
                popuplayertitle: 'BANHEIROS QUÍMICOS_LIMPURB',
                interactive: true,
                title: '<img src="styles/legend/BANHEIROSQUMICOS_LIMPURB_9.png" /> BANHEIROS QUÍMICOS_LIMPURB'
            });
var format_POSTOSAUDE_10 = new ol.format.GeoJSON();
var features_POSTOSAUDE_10 = format_POSTOSAUDE_10.readFeatures(json_POSTOSAUDE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_POSTOSAUDE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTOSAUDE_10.addFeatures(features_POSTOSAUDE_10);
var lyr_POSTOSAUDE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTOSAUDE_10, 
                style: style_POSTOSAUDE_10,
                popuplayertitle: 'POSTO SAUDE',
                interactive: true,
                title: '<img src="styles/legend/POSTOSAUDE_10.png" /> POSTO SAUDE'
            });
var format_ESTRUTURAS_SALTUR_11 = new ol.format.GeoJSON();
var features_ESTRUTURAS_SALTUR_11 = format_ESTRUTURAS_SALTUR_11.readFeatures(json_ESTRUTURAS_SALTUR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ESTRUTURAS_SALTUR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTRUTURAS_SALTUR_11.addFeatures(features_ESTRUTURAS_SALTUR_11);
var lyr_ESTRUTURAS_SALTUR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTRUTURAS_SALTUR_11, 
                style: style_ESTRUTURAS_SALTUR_11,
                popuplayertitle: 'ESTRUTURAS_SALTUR',
                interactive: true,
                title: '<img src="styles/legend/ESTRUTURAS_SALTUR_11.png" /> ESTRUTURAS_SALTUR'
            });
var format_IGREJAS_12 = new ol.format.GeoJSON();
var features_IGREJAS_12 = format_IGREJAS_12.readFeatures(json_IGREJAS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_IGREJAS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IGREJAS_12.addFeatures(features_IGREJAS_12);
var lyr_IGREJAS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IGREJAS_12, 
                style: style_IGREJAS_12,
                popuplayertitle: 'IGREJAS',
                interactive: true,
                title: '<img src="styles/legend/IGREJAS_12.png" /> IGREJAS'
            });
var format_ESTRUTURAS_PM_13 = new ol.format.GeoJSON();
var features_ESTRUTURAS_PM_13 = format_ESTRUTURAS_PM_13.readFeatures(json_ESTRUTURAS_PM_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ESTRUTURAS_PM_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTRUTURAS_PM_13.addFeatures(features_ESTRUTURAS_PM_13);
var lyr_ESTRUTURAS_PM_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTRUTURAS_PM_13, 
                style: style_ESTRUTURAS_PM_13,
                popuplayertitle: 'ESTRUTURAS_PM',
                interactive: true,
    title: 'ESTRUTURAS_PM<br />\
    <img src="styles/legend/ESTRUTURAS_PM_13_0.png" /> PEO<br />\
    <img src="styles/legend/ESTRUTURAS_PM_13_1.png" /> PPM<br />' });
var group_EstruturasLavagemdoBonfim = new ol.layer.Group({
                                layers: [lyr_BARRACAS_SEMOP_8,lyr_BANHEIROSQUMICOS_LIMPURB_9,lyr_POSTOSAUDE_10,lyr_ESTRUTURAS_SALTUR_11,lyr_IGREJAS_12,lyr_ESTRUTURAS_PM_13,],
                                fold: 'close',
                                title: 'Estruturas - Lavagem do Bonfim'});
var group_Consulta = new ol.layer.Group({
                                layers: [lyr_EDIFICAO_1,lyr_ARRUAMENTO_2,lyr_LOGRADOURO_3,lyr_REAVERDE_4,lyr_VERDE_5,lyr_PERCURSOLAVAGEMDOBONFIM_6,lyr_POLIGONAL_7,],
                                fold: 'close',
                                title: 'Consulta'});
var group_BaseMapa = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'open',
                                title: 'Base Mapa'});

lyr_GoogleSatellite_0.setVisible(true);lyr_EDIFICAO_1.setVisible(true);lyr_ARRUAMENTO_2.setVisible(true);lyr_LOGRADOURO_3.setVisible(true);lyr_REAVERDE_4.setVisible(true);lyr_VERDE_5.setVisible(true);lyr_PERCURSOLAVAGEMDOBONFIM_6.setVisible(true);lyr_POLIGONAL_7.setVisible(true);lyr_BARRACAS_SEMOP_8.setVisible(true);lyr_BANHEIROSQUMICOS_LIMPURB_9.setVisible(true);lyr_POSTOSAUDE_10.setVisible(true);lyr_ESTRUTURAS_SALTUR_11.setVisible(true);lyr_IGREJAS_12.setVisible(true);lyr_ESTRUTURAS_PM_13.setVisible(true);
var layersList = [group_BaseMapa,group_Consulta,group_EstruturasLavagemdoBonfim];
lyr_EDIFICAO_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'geometriaa': 'geometriaa', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'matconstr': 'matconstr', 'alturaapro': 'alturaapro', 'turistica': 'turistica', 'cultura': 'cultura', 'numeropavi': 'numeropavi', });
lyr_ARRUAMENTO_2.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'id': 'id', 'geometriaa': 'geometriaa', 'tipovia': 'tipovia', 'jurisdicao': 'jurisdicao', 'administra': 'administra', 'concession': 'concession', 'revestimen': 'revestimen', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'canteirodi': 'canteirodi', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'tipopavime': 'tipopavime', 'meiofio': 'meiofio', 'sarjeta': 'sarjeta', 'nome': 'nome', });
lyr_LOGRADOURO_3.set('fieldAliases', {'HIERARQ': 'HIERARQ', 'CODLOG': 'CODLOG', 'TOPONIM': 'TOPONIM', 'ULTIMA_ALT': 'ULTIMA_ALT', 'DESCRICAO_': 'DESCRICAO_', 'ORIG_NUM': 'ORIG_NUM', 'ID': 'ID', });
lyr_REAVERDE_4.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'geometriaa': 'geometriaa', 'classifica': 'classifica', });
lyr_VERDE_5.set('fieldAliases', {'id': 'id', 'geometriaa': 'geometriaa', });
lyr_PERCURSOLAVAGEMDOBONFIM_6.set('fieldAliases', {'HIERARQ': 'HIERARQ', 'CODLOG': 'CODLOG', 'TOPONIM': 'TOPONIM', 'ULTIMA_ALT': 'ULTIMA_ALT', 'DESCRICAO_': 'DESCRICAO_', 'ORIG_NUM': 'ORIG_NUM', 'ID': 'ID', });
lyr_POLIGONAL_7.set('fieldAliases', {'ID': 'ID', 'NOME_BAIRR': 'NOME_BAIRR', 'AREA': 'AREA', 'UNIDADE_AR': 'UNIDADE_AR', 'INSTITUIDO': 'INSTITUIDO', 'ALTERADO_P': 'ALTERADO_P', });
lyr_BARRACAS_SEMOP_8.set('fieldAliases', {'Área': 'Área', 'Tipo': 'Tipo', });
lyr_BANHEIROSQUMICOS_LIMPURB_9.set('fieldAliases', {'Tipo': 'Tipo', });
lyr_POSTOSAUDE_10.set('fieldAliases', {'Tipo': 'Tipo', });
lyr_ESTRUTURAS_SALTUR_11.set('fieldAliases', {'Tipo': 'Tipo', });
lyr_IGREJAS_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'geometriaaproximada': 'geometriaaproximada', 'operacional': 'operacional', 'situacaofisica': 'situacaofisica', 'matconstr': 'matconstr', 'alturaaproximada': 'alturaaproximada', 'turistica': 'turistica', 'cultura': 'cultura', 'numeropavimentos': 'numeropavimentos', });
lyr_ESTRUTURAS_PM_13.set('fieldAliases', {'ID': 'ID', 'Tipo': 'Tipo', });
lyr_EDIFICAO_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nome': 'TextEdit', 'geometriaa': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'matconstr': 'TextEdit', 'alturaapro': 'TextEdit', 'turistica': 'TextEdit', 'cultura': 'TextEdit', 'numeropavi': 'TextEdit', });
lyr_ARRUAMENTO_2.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'id': 'TextEdit', 'geometriaa': 'TextEdit', 'tipovia': 'TextEdit', 'jurisdicao': 'TextEdit', 'administra': 'TextEdit', 'concession': 'TextEdit', 'revestimen': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'canteirodi': 'TextEdit', 'nrpistas': 'TextEdit', 'nrfaixas': 'TextEdit', 'trafego': 'TextEdit', 'tipopavime': 'TextEdit', 'meiofio': 'TextEdit', 'sarjeta': 'TextEdit', 'nome': 'TextEdit', });
lyr_LOGRADOURO_3.set('fieldImages', {'HIERARQ': 'TextEdit', 'CODLOG': 'TextEdit', 'TOPONIM': 'TextEdit', 'ULTIMA_ALT': 'TextEdit', 'DESCRICAO_': 'TextEdit', 'ORIG_NUM': 'TextEdit', 'ID': 'TextEdit', });
lyr_REAVERDE_4.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'geometriaa': 'TextEdit', 'classifica': 'TextEdit', });
lyr_VERDE_5.set('fieldImages', {'id': 'TextEdit', 'geometriaa': 'TextEdit', });
lyr_PERCURSOLAVAGEMDOBONFIM_6.set('fieldImages', {'HIERARQ': 'TextEdit', 'CODLOG': 'TextEdit', 'TOPONIM': 'TextEdit', 'ULTIMA_ALT': 'TextEdit', 'DESCRICAO_': 'TextEdit', 'ORIG_NUM': 'TextEdit', 'ID': 'TextEdit', });
lyr_POLIGONAL_7.set('fieldImages', {'ID': 'TextEdit', 'NOME_BAIRR': 'TextEdit', 'AREA': 'TextEdit', 'UNIDADE_AR': 'TextEdit', 'INSTITUIDO': 'TextEdit', 'ALTERADO_P': 'TextEdit', });
lyr_BARRACAS_SEMOP_8.set('fieldImages', {'Área': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_BANHEIROSQUMICOS_LIMPURB_9.set('fieldImages', {'Tipo': 'TextEdit', });
lyr_POSTOSAUDE_10.set('fieldImages', {'Tipo': 'TextEdit', });
lyr_ESTRUTURAS_SALTUR_11.set('fieldImages', {'Tipo': 'TextEdit', });
lyr_IGREJAS_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nome': 'TextEdit', 'geometriaaproximada': 'TextEdit', 'operacional': 'TextEdit', 'situacaofisica': 'TextEdit', 'matconstr': 'TextEdit', 'alturaaproximada': 'TextEdit', 'turistica': 'TextEdit', 'cultura': 'TextEdit', 'numeropavimentos': 'TextEdit', });
lyr_ESTRUTURAS_PM_13.set('fieldImages', {'ID': 'TextEdit', 'Tipo': 'ValueMap', });
lyr_EDIFICAO_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nome': 'no label', 'geometriaa': 'no label', 'operaciona': 'no label', 'situacaofi': 'no label', 'matconstr': 'no label', 'alturaapro': 'no label', 'turistica': 'no label', 'cultura': 'no label', 'numeropavi': 'no label', });
lyr_ARRUAMENTO_2.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'id': 'no label', 'geometriaa': 'no label', 'tipovia': 'no label', 'jurisdicao': 'no label', 'administra': 'no label', 'concession': 'no label', 'revestimen': 'no label', 'operaciona': 'no label', 'situacaofi': 'no label', 'canteirodi': 'no label', 'nrpistas': 'no label', 'nrfaixas': 'no label', 'trafego': 'no label', 'tipopavime': 'no label', 'meiofio': 'no label', 'sarjeta': 'no label', 'nome': 'no label', });
lyr_LOGRADOURO_3.set('fieldLabels', {'HIERARQ': 'no label', 'CODLOG': 'no label', 'TOPONIM': 'no label', 'ULTIMA_ALT': 'no label', 'DESCRICAO_': 'no label', 'ORIG_NUM': 'no label', 'ID': 'no label', });
lyr_REAVERDE_4.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'geometriaa': 'no label', 'classifica': 'no label', });
lyr_VERDE_5.set('fieldLabels', {'id': 'no label', 'geometriaa': 'no label', });
lyr_PERCURSOLAVAGEMDOBONFIM_6.set('fieldLabels', {'HIERARQ': 'no label', 'CODLOG': 'no label', 'TOPONIM': 'no label', 'ULTIMA_ALT': 'no label', 'DESCRICAO_': 'no label', 'ORIG_NUM': 'no label', 'ID': 'no label', });
lyr_POLIGONAL_7.set('fieldLabels', {'ID': 'no label', 'NOME_BAIRR': 'no label', 'AREA': 'no label', 'UNIDADE_AR': 'no label', 'INSTITUIDO': 'no label', 'ALTERADO_P': 'no label', });
lyr_BARRACAS_SEMOP_8.set('fieldLabels', {'Área': 'no label', 'Tipo': 'no label', });
lyr_BANHEIROSQUMICOS_LIMPURB_9.set('fieldLabels', {'Tipo': 'no label', });
lyr_POSTOSAUDE_10.set('fieldLabels', {'Tipo': 'no label', });
lyr_ESTRUTURAS_SALTUR_11.set('fieldLabels', {'Tipo': 'no label', });
lyr_IGREJAS_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nome': 'inline label - visible with data', 'geometriaaproximada': 'no label', 'operacional': 'no label', 'situacaofisica': 'no label', 'matconstr': 'no label', 'alturaaproximada': 'no label', 'turistica': 'no label', 'cultura': 'no label', 'numeropavimentos': 'no label', });
lyr_ESTRUTURAS_PM_13.set('fieldLabels', {'ID': 'inline label - visible with data', 'Tipo': 'header label - visible with data', });
lyr_ESTRUTURAS_PM_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});