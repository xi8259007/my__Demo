var app = angular.module("myApp",['ui.bootstrap.tpls', 'ui.select','ngSanitize']);

app.controller('btnitem', function($scope,$rootScope){
    //激活contorller
    var self = $scope;
    self.btnitems = [
    {name:"默认长度100%"},
    {name:"普通长度200px,ui-select-sm"},
    {name:"较长长度500px,ui-select-lg"}
    ]
    console.log(self.btnitems)
});

app.directive('myDirective',function(){
  return{
    // name: '',
    // priority: 1,  //优先级
    // terminal: true, //停止运行当前元素上比本指令优先级低的指令。
    // scope: {}, // {} = isolate, true = child, false/undefined = no change 
    // //为true时会从父作用域继承并创建一个新的作用域对象 @ & =
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A',  
    // E(元素)：<directiveName></directiveName>
    // A(属性)：<div directiveName='expression'></div>  
    // C(类)： <div class='directiveName'></div>  
    // M(注释)：<--directive:directiveName expression-->  
    
    // template: '',  //html模板 行末尾 + '\' 反斜线
    // templateUrl: '',  //引用外部模板
    // replace: true,  //替换指令
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    //link: function($scope, iElm, iAttrs, controller) {
    //}         //在这里操作DOM 

    restrict: 'A',
    transclude: true,
    scope:{
      myUrl:' =someAttr',
      myLinkText: '@'
    },
    template: '\
    <form class="form-inline">\
    <div class="form-group">\
      <label class="control-label">My Url Field：</label>\
      <div class="control-item">\
        <input type="text" ng-model="myUrl" class="form-control">\
        <a href="{{myUrl}}">{{myLinkText}}</a>\
      </div>\
    <div>\
    </form>'
  };
});

app.run(function($rootScope,$timeout){
  // 使用.run访问$rootScope
  $rootScope.rootProperty = 'root scope';
  $rootScope.isDisabled = true;
  $rootScope.globalVar = "全局作用域";
  $rootScope.changeScope = function(){
    $rootScope.globalVar = "修改全局作用域";
  }
  $timeout(function(){
    $rootScope.isDisabled = false;
  },5000);
  $timeout(function(){
    $rootScope.myHref = 'http://www.baidu.com';
    $rootScope.imgSrc = 'https://www.baidu.com/img/baidu_jgylogo3.gif';
  },2000);

});

app.controller('ParentController',function($scope){
  // 使用.controller访问 ng-controller 内部的属性
  // 在DOM忽略的$scope中，根据当前控制器进行推断
  $scope.parentProperty= 'parent scope';
})
app.controller('ChildController',function($scope){
  $scope.childProperty = 'child scope';
  // 同在DOM中一样，可以通过$scope直接访问原型中的任意属性
  $scope.fullSentenceFromChild = 
  'Same $scope: We can access：' + 
  $scope.rootProperty + ' and ' + 
  $scope.parentProperty + ' and ' + 
  $scope.childProperty
})

app.controller('myInclude',function(){

})
app.controller('myInclude', [function(){
}])
app.controller('myRepeat', ['$scope', function(scope){
  scope.item = [
    {name:"lvxi",city:"武汉"},
    {name:"Aaron",city:"上海"}
  ];
}]);
app.controller('myNgchange', ['$scope', function(scope){
  scope.equation={};
  scope.change = function () {
    scope.equation.output = parseInt($scope.equation.x) + 2;
  }
}])
app.controller('ngForm', ['$scope', function(scope){
  scope.fields = [
    {placeholder:'Username',isRequired:true},
    {placeholder:'Password',isRequired:true},
    {placeholder:'Email(optional)',isRequired:false}
  ];
  scope.submitNgForm =function () {
     alert('it works');
  }
}])
app.controller('myNgSelect', ['$scope', function(scope){
  scope.cities=[
    {name:'Seattle'},
    {name:'San Francisco'},
    {name:'Chicago'},
    {name:'New York'},
    {name:'Boston'}
  ]
}])
app.controller('mySubmitForm', ['$scope', function(scope){
  scope.person={
    name:null
  };
  scope.people= [];
  scope.submit = function(){
    if($scope.people.name){
      $scope.people.push({name: $scope.person.name});
      $scope.person.name = '';
    }
  }
}])
app.controller('myNgClass', ['$scope', function(scope){
  scope.generateNumber = function(){
    return Math.floor((Math.random()*10)+1);
  }
}])

app.controller('myGeli', [function(){
  
}])
.directive('myGeli', [function(){
  // Runs during compile
  return {
    restrict: 'A',
    scope: {},
    priority: 100,
    template: '<div>IIIIInside myGeli {{myProperty}}</div>'
  };
}])

.directive('sidebox', [function(){
  // Runs during compile
  return {
    restrict: 'EA',
    scope: {
      title: '@',
      transclude:true,
      template:'<div class="sidebox">\
        <div class="content">\
        <h2 class="header">{{title}}</h2>\
        <span class="content" ng-transclude>\
        </span>\
        </div>\
        </div>'
    } // {} = isolate, true = child, false/undefined = no change
  };
}]);

app.controller('name', ['', function(){
  
}])