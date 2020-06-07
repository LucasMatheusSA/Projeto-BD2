app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'inicioCtrl'
        })
        .when('/Cliente', {
            templateUrl: 'html/cliente.html',
            controller: 'clienteCtrl'
        })
        .when('/Jogo', {
            templateUrl: 'html/jogo.html',
            controller: 'jogoCtrl'
        })
        .when('/Alugar', {
            templateUrl: 'html/alugar.html',
            controller: 'alugarCtrl'
        })

        .otherwise({
            redirectTo: '/'
        });

        // .when('/Pessoa/:id', {
        //     templateUrl: 'html/pessoa.html',
        //     controller: 'pessoaCtrl'
        // })


});