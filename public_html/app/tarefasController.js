angular.module('app', [])
        .controller('TarefasController', function ($scope, $http) {

            var url = 'http://localhost:58750/api/todo/';

            atualizarLista();


            function atualizarLista() {
                $http.get(url).then(function (response) {
                    $scope.tarefas = response.data;
                    console.log($scope.tarefas);
                    
                });
            }



            var Tarefa = function () {
                var Descricao = null;
                var Concluido = false;
            };
            
            
            var search = {'Concluido': ''} ;           
            $scope.search = search;
            
            $scope.tarefa = null;
            $scope.tarefaPopulada = null;
            
            $scope.popularTarefa = function (tarefa){                
                $scope.tarefaPopulada = tarefa;                
                
                
            };
            
            
            $scope.atualizarLista = function (){
                atualizarLista();
            };
            
            $scope.limparTarefa = function (){
                
                $scope.tarefa = new Tarefa();
            };
            
           
            $scope.excluir = function (tarefa) {
                
                $http.delete(url + tarefa.Id).then(
                        function (response) {
                            atualizarLista();
                        },
                        function (response) {
                        }
                );

            };

            $scope.atualizar = function (tarefa) {
                
                $http.put(url, tarefa).then(function (response) {
                    atualizarLista();
                }, function (response) {

                });
            };
            

            $scope.criarTarefa = function (tarefa) {
                

                $http.post(url, tarefa).then(function (response) {
                    atualizarLista();
                }, function (response) {

                });

            };

        });

