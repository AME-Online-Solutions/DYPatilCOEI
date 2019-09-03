var App = angular.module('dypatilengg', []);

App.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    }]);

App.controller('latestNewsController', ['$scope', '$http', '$location', '$timeout', function ($scope, $http, $location, $timeout) {

        if ($location.host() === 'localhost') {
            var baseUrl = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/dypatilengg/';
        } else {
            var baseUrl = $location.protocol() + '://' + $location.host() + '/';
        }

        $scope.latestnewsData = {};
        $scope.newsData = {};
        $scope.eventData = {};
        $scope.newseventData = {};
       
        $scope.latestNewsFun = function () {
            $http({
                method: "get",
                url: baseUrl + "Home/latestnews_get",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                $timeout(function () {
                    $scope.latestnewsData = data;
                });
            });
        };

        // $scope.selectedEvent = function (i) {
        //     $http({
        //         method: "get",
        //         url: baseUrl + "Home/events_get",
        //         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        //     }).success(function (data) {
        //         $scope.eventData = data;  
        //     });
        // };
        
        $scope.Events = function () {
            $http({
                method: "get",
                url: baseUrl + "Home/events_get",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                $scope.eventData = data;  
            });
        };
        $scope.NewsEvents = function () {
            $http({
                method: "get",
                url: baseUrl + "Home/newsevents_get",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                $scope.newseventData = data;  
            });
        };
        $scope.News = function (i) {
            $http({
                method: "get",
                url: baseUrl + "Home/news_get",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                $scope.newsData = data;  
            });
        };


        $scope.sortDate = function (newsdt) {
            var date = new Date(newsdt.date);
            return date;
        };
        
        $scope.owlOptionsLatestNews = {
            autoplay: 400,
            stopOnHover: true,
            slideSpeed: 300,
            paginationSpeed: 600,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1, nav: false, loop: false
                },
                600: {
                    items: 3, nav: false, loop: false
                },
                1000: {
                    items: 4, nav: false, loop: false
                }
            }
        };

    }]);

App.controller('contactController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        if ($location.host() === 'localhost') {
            var baseUrl = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/dypatilengg/';
        } else {
            var baseUrl = $location.protocol() + '://' + $location.host() + '/';
        }

        $scope.contactData = {};
        $scope.contactFun = {};
        $scope.message = {};
       
        $scope.contactFun = function () {
            if ($scope.sendMail.$valid) {
                //console.log($scope.contactData);
                $('.submit-button:input').val('Please Wait for a while...').css('color', '#E7AB4D');
                $http({
                    method: "post",
                    url: baseUrl + "Contact/contactMail",
                    data: $scope.contactData,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data) {
                    setTimeout(function () {
                        $('.submit-button:input').val('Sent Mail Successfully!').css('color', '#8BD387');
                        setTimeout(function () {
                            $('.submit-button:input').val('Get in touch!').css('color', 'inherit');
                        }, 3000);
                    }, 5000);
                }).error(function (data) {
                    setTimeout(function () {
                        $('.submit-button:input').val('Failed to Sent Mail!').css('color', '#ED4549');                       
                    }, 2000);
                });
            }
        };
    }]);

App.controller('admissionController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        if ($location.host() === 'localhost') {
            var baseUrl = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/dypatilengg/';
        } else {
            var baseUrl = $location.protocol() + '://' + $location.host() + '/';
        }
        $scope.admSend = {};
        $scope.admData = {};
        $scope.admissionFun = {};
        var msg = $('.submit-msg');
        
        $scope.admissionFun = function () {

            if ($scope.admSend.$valid) {
                //console.log($scope.admData);
                msg.text("Please Wait for a while...").css('color', '#E7AB4D');
                $scope.admData.admBirthday = $("#admBirthday").val().toString();
                $http({
                    method: "post",
                    url: baseUrl + "Admission/admissionMail",
                    data: $scope.admData,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data) {
                    setTimeout(function () {
                        msg.text('');
                        msg.text('Sent Mail Successfully!').css('color', '#8BD387');                        
                    }, 5000);
                    setTimeout(function () {
                        $scope.admData = {};
                        msg.text('');
                    }, 3000);
                }).error(function (data) {
                    setTimeout(function () {
                        msg.text('Failed to Sent Mail!').css('color', '#ED4549');
                    }, 3000);
                });
            }

        };
        
        
        $('#admBirthday').change(function () {
            var mdate = $("#admBirthday").val().toString();
            if (mdate) {
                $scope.getAge(mdate);
            } else {
                $scope.admData.admAge = '';
            }
        });
        
        
        $scope.getAge = function (mdate) {
            //var mdate = $("#admBirthday").val().toString();
            var yearThen = parseInt(mdate.substring(0, 4), 10);
            var monthThen = parseInt(mdate.substring(5, 7), 10);
            var dayThen = parseInt(mdate.substring(8, 10), 10);
            var today = new Date();
            var birthday = new Date(yearThen, monthThen - 1, dayThen);
            var differenceInMilisecond = today.valueOf() - birthday.valueOf();
            var year_age = Math.floor(differenceInMilisecond / 31536000000);
            var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
            var month_age = Math.floor(day_age / 30);
            day_age = day_age % 30;
            if (day_age !== 'NaN' || month_age !== 'NaN' || year_age !== 'NaN') {
                $scope.admData.admAge = 'Days ' + day_age + ', Months ' + month_age + ', Years ' + year_age;
            } else {
                $scope.admData.admAge = '';
            }

        };
    }]);

App.controller('galleryController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        if ($location.host() === 'localhost') {
            var baseUrl = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/dypatilengg/';
        } else {
            var baseUrl = $location.protocol() + '://' + $location.host() + '/';
        }

        $scope.galleryData = {};
        
        $scope.galleryFun = function () {
            $http({
                method: "get",
                url: baseUrl + "Gallery/gallery_get",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                $scope.galleryData = data;
            });
        };
    }]);

App.controller('lifedypimedController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        if ($location.host() === 'localhost') {
            var baseUrl = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/dypatilengg/';
        } else {
            var baseUrl = $location.protocol() + '://' + $location.host() + '/';
        }

        $scope.industrialListData = {};
        
        $scope.industriallistFun = function () {
            $http({
                method: "get",
                url: baseUrl + "assets/js/industriallistIcon.json",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                $scope.industrialListData = data;
            });
        };

    }]);

App.controller('facultyController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        if ($location.host() === 'localhost') {
            var baseUrl = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/dypatilengg/';
        } else {
            var baseUrl = $location.protocol() + '://' + $location.host() + '/';
        }

        $scope.facultyData = {};
       
        $scope.facultyFun = function () {
            $http({
                method: "get",
                url: baseUrl + "assets/js/faculty.json",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                $scope.facultyData = data;
            });
        };
    }]);


App.directive("owlCarousel", function () {
    return {
        restrict: 'E',
        transclude: false,
        link: function (scope) {
            scope.initCarousel = function (element) {
                console.log('initCarousel');
                // provide any default options you want
                var defaultOptions = {};
                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for (var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }
                // init carousel
                var curOwl = $(element).data('owlCarousel');
                if (!angular.isDefined(curOwl)) {
                    $(element).owlCarousel(defaultOptions);
                }
                scope.cnt++;
            };
        }
    };
}).directive('owlCarouselItem', [
    function () {
        return {
            restrict: 'A',
            transclude: false,
            link: function (scope, element) {
                // wait for the last item in the ng-repeat then call init
                if (scope.$last) {
                    console.log('lst element');
                    scope.initCarousel(element.parent());
                }
            }
        };
    }
]);

App.filter('trustAs', ['$sce',
    function($sce) {
        return function(input, type) {
            if (typeof input === "string") {
                return $sce.trustAs(type || 'html', input);
            }
            console.log("trustAs filter. Error. input isn't a string");
            return "";
        };
    }
]);

