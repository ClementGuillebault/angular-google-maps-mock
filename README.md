# angular-google-maps-mock
Karma Mock for Unit Testing with Angular Google Maps Services
forked from ScottieR/angular-google-maps-mock

Add the following dependencies in your karma config file within the "files" or "vendor" array:
```
    files: [
        'https://maps.googleapis.com/maps/api/js?sensor=false', //<--this one
        'mocks/maps.googleapis.com-maps-api.js', //<--and this one, changing path as necessary for the mock file you just added
        ....{all of your other file dependencies}...
    ]
```

That's it!  If you run into other errors where methods are undefined, add them as methods in the correct spot in the mock google object's tree.
