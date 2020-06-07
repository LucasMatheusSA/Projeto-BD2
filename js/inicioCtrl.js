app.controller('inicioCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.setActive("mInicio");

    // $http.get("DAO/Connection.php").then(function(response){
    //     console.log(response);
    // })

    // $http.get('http://10.36.11.17:8080/pessoabd').then(function(data) {
    //     $scope.teste = data;
    //     console.log('sdsd', data);
    // }).catch(function(error) {
    //     console.log('sfggs', error)
    // })

    $scope.jogos = [
        {
            name:"Farcry3",
            categoria:"ação",
            data:"10/12/11",
            desc:"bla bla bla e coisa coisa coias e então bla bla bla e não sei oq e n sei oq la bla bla bla",
        },
        {
            name:"Cup head",
            categoria:"ação",
            data:"10/12/11",
            desc:"bla bla bla e coisa coisa coias e então bla bla bla e não sei oq e n sei oq la bla bla bla",
        },
        {
            name:"GTA",
            categoria:"ação",
            data:"10/12/11",
            desc:"bla bla bla e coisa coisa coias e então bla bla bla e não sei oq e n sei oq la bla bla bla",
        },
        {
            name:"The sims",
            categoria:"ação",
            data:"10/12/11",
            desc:"bla bla bla e coisa coisa coias e então bla bla bla e não sei oq e n sei oq la bla bla bla",
        },
        {
            name:"Zelda",
            categoria:"ação",
            data:"10/12/11",
            desc:"bla bla bla e coisa coisa coias e então bla bla bla e não sei oq e n sei oq la bla bla bla",
        },
        {
            name:"Get out",
            categoria:"ação",
            data:"10/12/11",
            desc:"bla bla bla e coisa coisa coias e então bla bla bla e não sei oq e n sei oq la bla bla bla",
        },
        {
            name:"Farcry3",
            categoria:"ação",
            data:"10/12/11",
            desc:"bla bla bla e coisa coisa coias e então bla bla bla e não sei oq e n sei oq la bla bla bla",
        },
        {
            name:"Farcry3",
            categoria:"ação",
            data:"10/12/11",
            desc:"bla bla bla e coisa coisa coias e então bla bla bla e não sei oq e n sei oq la bla bla bla",
        },
        {
            name:"Farcry3",
            categoria:"ação",
            data:"10/12/11",
            desc:"bla bla bla e coisa coisa coias e então bla bla bla e não sei oq e n sei oq la bla bla bla",
        },
        {
            name:"Farcry3",
            categoria:"ação",
            data:"10/12/11",
            desc:"bla bla bla e coisa coisa coias e então bla bla bla e não sei oq e n sei oq la bla bla bla",
        }
    ]


}]);