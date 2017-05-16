# angular-google-maps-mock
Karma Mock for Unit Testing with Angular Google Maps Services
forked from ScottieR/angular-google-maps-mock

Add the following dependencies in your karma config file:
```
    files: [
        'https://maps.googleapis.com/maps/api/js?sensor=false', //<--this one
        'mocks/maps.googleapis.com-maps-api.js', //<--and this one, changing path as necessary for the mock file you just added
        ....{all of your other file dependencies}...
    ]
```
