function asset_path(filepath) {
	return '/assets/' + filepath;
}

module.exports = {
	asset_path: asset_path,
	css_path: function(filepath) {
		return asset_path('css/' + filepath);
	},
	js_path: function(filepath) {
		return asset_path('js/' + filepath);
	},
	image_path: function(filepath) {
		return asset_path('images/' + filepath);
	},
	font_path: function(filepath) {
		return asset_path('fonts/' + filepath);
	},
	icon_path: function(filepath) {
		return asset_path('icons/' + filepath);
	},
};
