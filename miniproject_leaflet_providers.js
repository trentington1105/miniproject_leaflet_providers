let map = L.map('map', {
    zoomControl: false
});

map.setView([40, -96], 5);

const streets = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri'
}).addTo(map);

const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri'
});

const topo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri'
});

const NASAGIBS_lights = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/{variant}/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
        variant: 'VIIRS_CityLights_2012',
        minZoom: 1,
        maxZoom: 8,
        format: 'jpg',
        time: '',
        tilematrixset: 'GoogleMapsCompatible_Level',
        attribution:'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System ' + '(<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
    }
);

const NASAGIBS_terra = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/{variant}/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
        variant: 'MODIS_Terra_CorrectedReflectance_TrueColor',
        minZoom: 1,
        maxZoom: 9,
        format: 'jpg',
        time: '',
        tilematrixset: 'GoogleMapsCompatible_Level',
        attribution:'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System ' + '(<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
    }
);

const NASAGIBS_chlorophyll = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/{variant}/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
        variant: 'MODIS_Terra_L2_Chlorophyll_A',
        minZoom: 1,
        maxZoom: 7,
        format: 'png',
        time: '',
        tilematrixset: 'GoogleMapsCompatible_Level',
        attribution:'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System ' + '(<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
    }
);

const JusticeMap_income = L.tileLayer('https://maptile3.org/2020/{size}/{variant}/{z}/{x}/{y}.png', {
			attribution: '<a href="http://www.justicemap.org/terms.php">Justice Map</a>',
			size: 'county',
			bounds: [[14, -180], [72, -56]],    
            variant: 'income'
});

const JusticeMap_white = L.tileLayer('https://maptile3.org/2020/{size}/{variant}/{z}/{x}/{y}.png', {
			attribution: '<a href="http://www.justicemap.org/terms.php">Justice Map</a>',
			size: 'county',
			bounds: [[14, -180], [72, -56]],    
            variant: 'white'
});

const USGS = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16,
    attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});

const USGS_hiking_trail = L.tileLayer('https://tile.waymarkedtrails.org/{variant}/{z}/{x}/{y}.png', {
			maxZoom: 18,
            variant: 'hiking',
			attribution: 'Map data: {attribution.OpenStreetMap} | Map style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});


const MapTiler = L.tileLayer('https://api.maptiler.com/maps/{variant}/{z}/{x}/{y}{r}.{ext}?key={key}', {
			attribution:
				'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
			variant: 'aquarelle-v4',
			ext: 'png',
			key: '2MDP7lCZzTBFsN87yU8U',
			tileSize: 512,
			zoomOffset: -1,
			minZoom: 0,
			maxZoom: 21
});

const MapTiler2 = L.tileLayer('https://api.maptiler.com/maps/{variant}/{z}/{x}/{y}{r}.{ext}?key={key}', {
			attribution:
				'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
			variant: 'bright-v2',
			ext: 'png',
			key: '2MDP7lCZzTBFsN87yU8U',
			tileSize: 512,
			zoomOffset: -1,
			minZoom: 0,
			maxZoom: 21
});

const MtbMap = L.tileLayer('http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png', {
			attribution: '{attribution.OpenStreetMap} &amp; USGS',
});


let layer_control = L.control.layers({
    "Streets": streets,
    "Satellite": satellite,
    "Topo": topo,
    "NASA GIBS Lights": NASAGIBS_lights,
    "NASA GIBS Terra": NASAGIBS_terra,
    "NASA GIBS Chlorophyll": NASAGIBS_chlorophyll,
    "Justice Map Income": JusticeMap_income,
    "Justice Map White": JusticeMap_white,
    "USGS": USGS,
    "USGS Hiking Trail": USGS_hiking_trail,
    "Water Color": MapTiler,
    "Ocean": MapTiler2,
    "MtbMap": MtbMap
}).addTo(map);

const tile_info = {
    "Streets": "This tile shows the streets of the world and can zoom in for more detailed street view. The provider is ESRI https://www.esri.com/en-us/home",
    "Satellite": "This tile shows satellite imagery of the world. The provider is ESRI https://www.esri.com/en-us/home",
    "Topo": "This tile shows topographic maps of the world. The provider is ESRI https://www.esri.com/en-us/home",
    "NASA GIBS Lights": "This tile shows NASA GIBS Lights imagery and how the world illuminates at night. The provider is NASA GIBS https://earthdata.nasa.gov/gibs",
    "NASA GIBS Terra": "This tile shows NASA GIBS Terra imagery and a very detailed look at the terrain. The provider is NASA GIBS https://earthdata.nasa.gov/gibs",
    "NASA GIBS Chlorophyll": "This tile shows NASA GIBS Chlorophyll imagery and the concentration of chlorophyll in the world's oceans. The provider is NASA GIBS https://earthdata.nasa.gov/gibs",
    "Justice Map Income": "This tile shows income distribution data in the US. The provider is Justice Map https://www.justicemap.org",
    "Justice Map White": "This tile shows the racial distribution of caucasion people in the US. The provider is Justice Map https://www.justicemap.org",
    "USGS": "This tile shows USGS maps of the United States. The provider is USGS https://www.usgs.gov",
    "USGS Hiking Trail": "This tile shows USGS hiking trail maps of the United States. The provider is USGS https://www.usgs.gov",
    "Water Color": "This tile shows the world map in the artistic form of water color. The provider is MapTiler https://www.maptiler.com",
    "Ocean": "This tile shows the world map of oceans. The provider is MapTiler https://www.maptiler.com",
    "MtbMap": "This tile shows mountain biking trails in Europe. The provider is MTBMap http://tile.mtbmap.cz"
}

let info_box = L.control({position: 'topleft'});


info_box.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    return this._div;
};
info_box.addTo(map);

info_box.update = function (name) {
    this._div.innerHTML = `<h4>Tile Information</h4>
        <h5>${name}</h5>
        <h6>${tile_info[name]}</h6>`;
};

info_box.update("Streets");

map.on('baselayerchange', function(e) {
    info_box.update(e.name);
});
