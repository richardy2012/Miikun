var packager = require('electron-packager');
var packageJson = require('../package.json');

var option = {
    dir: './',
    out: './release',
    platform: process.platform, //'darwin,win32',
    arch: 'x64',

    name: packageJson.name,
    icon: './assets/img/icon',
    // darwin
    'app-bundle-id': 'jp.0218.app.Miikun',
    'app-version': packageJson.version,
    // win32
    'version-string': {
        FileDescription: packageJson.description,
        FileVersion: packageJson.version,
        ProductName: packageJson.name,
        ProductVersion: packageJson.version,
        CompanyName: packageJson.author,
        OriginalFilename: packageJson.name,
        InternalName: packageJson.name,
        LegalCopyright:  packageJson.copyright,
    },

    overwrite: true,
    prune: true,
    // asar: true,

    version: packageJson.dependencies['electron-prebuilt'],

    ignore: [
        // 'assets/[^(font)]',
        'assets/img/iconset/',
        // 'task/',
        'build/',
        "vendor/",
        'renderer/',
        "/(.gitignore|.bowerrc|.editorconfig|.gitattributes|bower.json|README.md)"
    ],
};

console.log('package start.');
packager(option, function done(err, appPath) {
    if (err) {
        throw new Error(err);
    }
    console.log('package done.');
});
