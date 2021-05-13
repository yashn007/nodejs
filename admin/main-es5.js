(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\admin\Desktop\Yoptimize\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3zNB":
    /*!***************************************************************!*\
      !*** ./src/app/@core/backend/common/common-backend.module.ts ***!
      \***************************************************************/

    /*! exports provided: CommonBackendModule */

    /***/
    function zNB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonBackendModule", function () {
        return CommonBackendModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/users.service */
      "4FL0");
      /* harmony import */


      var _api_users_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./api/users.api */
      "W7rx");

      var API = [_api_users_api__WEBPACK_IMPORTED_MODULE_4__["UsersApi"]];
      var SERVICES = [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]];

      var CommonBackendModule = function CommonBackendModule() {
        _classCallCheck(this, CommonBackendModule);
      };

      CommonBackendModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], CommonBackendModule);
      /***/
    },

    /***/
    "4FL0":
    /*!****************************************************************!*\
      !*** ./src/app/@core/backend/common/services/users.service.ts ***!
      \****************************************************************/

    /*! exports provided: UsersService */

    /***/
    function FL0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return UsersService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _api_users_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api/users.api */
      "W7rx");

      var UsersService = /*#__PURE__*/function () {
        function UsersService(api, http) {
          _classCallCheck(this, UsersService);

          this.api = api;
          this.http = http;
        }

        _createClass(UsersService, [{
          key: "Login",
          value: function Login(data) {
            return this.api.Login(data);
          }
        }, {
          key: "ResetPasword",
          value: function ResetPasword(data) {
            return this.api.ResetPasword(data);
          }
        }, {
          key: "ForgotPassword",
          value: function ForgotPassword(data) {
            return this.api.ForgotPassword(data);
          }
        }, {
          key: "CreateAccount",
          value: function CreateAccount(data) {
            return this.api.CreateAccount(data);
          }
        }]);

        return UsersService;
      }();

      UsersService.ctorParameters = function () {
        return [{
          type: _api_users_api__WEBPACK_IMPORTED_MODULE_3__["UsersApi"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_users_api__WEBPACK_IMPORTED_MODULE_3__["UsersApi"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UsersService);
      /***/
    },

    /***/
    "4XPS":
    /*!******************************************************!*\
      !*** ./src/app/views/register/register.component.ts ***!
      \******************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function XPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "bVw4");
      /* harmony import */


      var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.scss */
      "ag3Z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@core/backend/common/services/users.service */
      "4FL0");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(router, userService) {
          _classCallCheck(this, RegisterComponent);

          this.router = router;
          this.userService = userService;
          this.user = {
            name: "",
            email: "",
            password: "",
            role: "user",
            c_password: '',
            terms_condition: false
          };
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "routerToPage",
          value: function routerToPage(link) {
            this.router.navigate([link]);
          }
        }, {
          key: "CreateAccount",
          value: function CreateAccount() {
            var _this = this;

            this.userService.CreateAccount(this.user).subscribe(function (result) {
              console.log(result);

              if (result['success']) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Register!', result['message'], 'success');

                _this.routerToPage('/login');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Register!', result['message'], 'error');
                _this.user = {
                  email: '',
                  password: ''
                };
              }
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _core_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]])], RegisterComponent);
      /***/
    },

    /***/
    "4maX":
    /*!*************************************************************!*\
      !*** ./src/app/views/forgot-password/forgot.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function maX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "body {\n  font-family: \"Lato\", sans-serif;\n  transition: 3s;\n}\n\na {\n  color: #2196F3 !important;\n}\n\n.login-container {\n  margin-top: 5%;\n  margin-bottom: 5%;\n  border: 1px solid #CCD1D1;\n  max-width: 60%;\n}\n\n.ads {\n  background-image: linear-gradient(#541388, #8F3985);\n  color: #fff;\n  padding: 15px;\n  text-align: center;\n}\n\n.logo-img {\n  text-align: center;\n}\n\n.logo-img1 {\n  text-align: center;\n}\n\n.login-form {\n  padding: 35px;\n}\n\n.login-form h3 {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.login-form h5.plz-enter-tool {\n  padding-top: 0px;\n  font-size: 17px;\n}\n\n.login-form h5 {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.sign-up-form label {\n  font-size: 14px;\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.forget-password a {\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 0;\n}\n\n.form-check-label {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.form-check-label input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border: 1px solid #541388;\n  border-radius: 4px;\n}\n\n.form-check-label:hover input ~ .checkmark {\n  border: 1px solid #541388;\n}\n\n.form-check-label input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.form-check-label input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.form-check-label .checkmark:after {\n  left: 6px;\n  top: 3px;\n  width: 5px;\n  height: 10px;\n  border: 1px solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.create-btn {\n  background-color: #FC440F;\n  font-size: 18px;\n  border-color: #FC440F;\n  color: #fff;\n}\n\n.create-btn:hover,\n.create-btn:focus {\n  background-color: #ef4413;\n  font-size: 18px;\n  border-color: #ef4413;\n  color: #fff;\n}\n\n.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {\n  background-color: #ef4413;\n  font-size: 18px;\n  border-color: #ef4413;\n  color: #fff;\n}\n\n.btn.focus,\n.btn:focus {\n  box-shadow: none !important;\n}\n\n.log-sig {\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.log-sig a {\n  font-weight: bold;\n}\n\na.back-btn {\n  color: #fff !important;\n  background-color: #FFB400 !important;\n  border-color: #FFB400 !important;\n  margin-bottom: 20px;\n  font-size: 18px;\n}\n\n@media only screen and (max-width: 991px) and (min-width: 320px) {\n  .login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    border: 1px solid #CCD1D1;\n    max-width: 98%;\n  }\n}\n\n@media only screen and (max-width: 600px) and (min-width: 320px) {\n  .login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    border: 1px solid #CCD1D1;\n    max-width: 96%;\n  }\n\n  .ads {\n    display: none;\n  }\n\n  a.back-btn {\n    font-size: 16px;\n  }\n\n  .login-form {\n    padding: 15px;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  a.back-btn {\n    font-size: 10px;\n  }\n\n  .login-form {\n    padding: 10px;\n  }\n\n  .login-form h3 {\n    font-size: 1.5rem;\n  }\n\n  .create-btn {\n    font-size: 15px;\n  }\n\n  .login-form h5.plz-enter-tool {\n    padding-top: 0px;\n    font-size: 15px;\n  }\n\n  .logo-img1 img {\n    width: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3Jnb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLG1EQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0FBTUY7O0FBSkE7RUFDSSxhQUFBO0FBT0o7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFRRjs7QUFOQTtFQUNHLGdCQUFBO0VBQ0EsZUFBQTtBQVNIOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBVUY7O0FBUkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBV0Y7O0FBVEE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVlGOztBQVZBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWFGOztBQVhBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFFQSxxQkFBQTtFQUNBLGlCQUFBO0FBY0Y7O0FBWkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFlRjs7QUFiQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFnQkY7O0FBZEE7RUFDRSx5QkFBQTtBQWlCRjs7QUFmQTtFQUNFLHlCQUFBO0FBa0JGOztBQWhCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFtQkY7O0FBakJBO0VBQ0UsY0FBQTtBQW9CRjs7QUFsQkE7RUFDRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUdBLHdCQUFBO0FBcUJGOztBQW5CQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQXNCRjs7QUFwQkE7O0VBRUUseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQyxXQUFBO0FBdUJIOztBQXJCQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0MsV0FBQTtBQXdCSDs7QUF0QkE7O0VBRUUsMkJBQUE7QUF5QkY7O0FBdkJBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBMEJGOztBQXhCQTtFQUNFLGlCQUFBO0FBMkJGOztBQXpCQTtFQUNFLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQTRCRjs7QUExQkE7RUFDRTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0EsY0FBQTtFQTZCRjtBQUNGOztBQTNCQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0VBNkJGOztFQTNCQTtJQUNFLGFBQUE7RUE4QkY7O0VBNUJBO0lBQ0ksZUFBQTtFQStCSjs7RUE3QkE7SUFDRSxhQUFBO0VBZ0NGO0FBQ0Y7O0FBOUJBO0VBQ0U7SUFDSSxlQUFBO0VBZ0NKOztFQTlCQTtJQUNFLGFBQUE7RUFpQ0Y7O0VBL0JBO0lBQ0UsaUJBQUE7RUFrQ0Y7O0VBaENBO0lBQ0UsZUFBQTtFQW1DRjs7RUFqQ0E7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUFvQ0Y7O0VBbENBO0lBQ0UsV0FBQTtFQXFDRjtBQUNGIiwiZmlsZSI6ImZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiAzcztcbn1cbmF7XG4gIGNvbG9yOiAjMjE5NkYzICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NEMUQxO1xuICBtYXgtd2lkdGg6IDYwJTtcbn1cbi5hZHMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzU0MTM4OCwgIzhGMzk4NSk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9nby1pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9nby1pbWcxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLWZvcm0ge1xuICAgIHBhZGRpbmc6IDM1cHg7XG59XG4ubG9naW4tZm9ybSBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBjb2xvcjogIzRDNjA3MjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubG9naW4tZm9ybSBoNS5wbHotZW50ZXItdG9vbHtcbiAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICBmb250LXNpemU6IDE3cHg7XG59XG4ubG9naW4tZm9ybSBoNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBjb2xvcjogIzRDNjA3MjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2lnbi11cC1mb3JtIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRDNjA3MjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZm9yZ2V0LXBhc3N3b3JkIGEge1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb3JtLWNoZWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmZvcm0tY2hlY2stbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmZvcm0tY2hlY2stbGFiZWwgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU0MTM4ODtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmZvcm0tY2hlY2stbGFiZWw6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU0MTM4ODtcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cbi5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZm9ybS1jaGVjay1sYWJlbCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZvcm0tY2hlY2stbGFiZWwgLmNoZWNrbWFyazphZnRlciB7XG4gIGxlZnQ6IDZweDtcbiAgdG9wOiAzcHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uY3JlYXRlLWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDNDQwRiA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLWNvbG9yOiAjRkM0NDBGO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jcmVhdGUtYnRuOmhvdmVyLFxuLmNyZWF0ZS1idG46Zm9jdXN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0MTM7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLWNvbG9yOiAjZWY0NDEzO1xuICAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuc2hvdz4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDEzO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1jb2xvcjogI2VmNDQxMztcbiAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi5mb2N1cyxcbi5idG46Zm9jdXN7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5sb2ctc2lne1xuICBjb2xvcjogIzRDNjA3MjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubG9nLXNpZyBhe1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmEuYmFjay1idG57XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkI0MDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjRkZCNDAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAubG9naW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NEMUQxO1xuICAgIG1heC13aWR0aDogOTglO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDRDFEMTtcbiAgICBtYXgtd2lkdGg6IDk2JTtcbiAgfVxuICAuYWRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGEuYmFjay1idG4ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5sb2dpbi1mb3JtIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICBhLmJhY2stYnRuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAubG9naW4tZm9ybSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAubG9naW4tZm9ybSBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmNyZWF0ZS1idG4ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAubG9naW4tZm9ybSBoNS5wbHotZW50ZXItdG9vbCB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmxvZ28taW1nMSBpbWd7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "8+He":
    /*!***********************************************!*\
      !*** ./src/app/views/must-match.validator.ts ***!
      \***********************************************/

    /*! exports provided: MustMatch */

    /***/
    function He(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
        return MustMatch;
      }); // custom validator to check that two fields match


      function MustMatch(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "8gg5":
    /*!**********************************************!*\
      !*** ./src/app/views/error/404.component.ts ***!
      \**********************************************/

    /*! exports provided: P404Component */

    /***/
    function gg5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P404Component", function () {
        return P404Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./404.component.html */
      "nAJl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P404Component = function P404Component() {
        _classCallCheck(this, P404Component);
      };

      P404Component.ctorParameters = function () {
        return [];
      };

      P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P404Component);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "DodC":
    /*!****************************************************!*\
      !*** ./src/app/containers/default-layout/index.ts ***!
      \****************************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function DodC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout.component */
      "JPqG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "G/4p":
    /*!*************************************!*\
      !*** ./src/app/containers/index.ts ***!
      \*************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function G4p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout */
      "DodC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "Gd5/":
    /*!********************************************************************!*\
      !*** ./src/app/views/reset-password/reset-password.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function Gd5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "body {\n  font-family: \"Lato\", sans-serif;\n  transition: 3s;\n}\n\na {\n  color: #2196F3 !important;\n}\n\n.login-container {\n  margin-top: 5%;\n  margin-bottom: 5%;\n  border: 1px solid #CCD1D1;\n  max-width: 60%;\n}\n\n.ads {\n  background-image: linear-gradient(#541388, #8F3985);\n  color: #fff;\n  padding: 15px;\n  text-align: center;\n}\n\n.logo-img {\n  text-align: center;\n}\n\n.logo-img1 {\n  text-align: center;\n}\n\n.login-form {\n  padding: 35px;\n}\n\n.login-form h3 {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.login-form h5.plz-enter-tool {\n  padding-top: 0px;\n  font-size: 17px;\n}\n\n.login-form h5 {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.sign-up-form label {\n  font-size: 14px;\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.forget-password a {\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 0;\n}\n\n.form-check-label {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.form-check-label input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border: 1px solid #541388;\n  border-radius: 4px;\n}\n\n.form-check-label:hover input ~ .checkmark {\n  border: 1px solid #541388;\n}\n\n.form-check-label input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.form-check-label input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.form-check-label .checkmark:after {\n  left: 6px;\n  top: 3px;\n  width: 5px;\n  height: 10px;\n  border: 1px solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.create-btn {\n  background-color: #FC440F;\n  font-size: 18px;\n  border-color: #FC440F;\n  color: #fff;\n}\n\n.create-btn:hover,\n.create-btn:focus {\n  background-color: #ef4413;\n  font-size: 18px;\n  border-color: #ef4413;\n  color: #fff;\n}\n\n.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {\n  background-color: #ef4413;\n  font-size: 18px;\n  border-color: #ef4413;\n  color: #fff;\n}\n\n.btn.focus,\n.btn:focus {\n  box-shadow: none !important;\n}\n\n.log-sig {\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.log-sig a {\n  font-weight: bold;\n}\n\na.back-btn {\n  color: #fff !important;\n  background-color: #FFB400 !important;\n  border-color: #FFB400 !important;\n  margin-bottom: 20px;\n  font-size: 18px;\n}\n\n@media only screen and (max-width: 991px) and (min-width: 320px) {\n  .login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    border: 1px solid #CCD1D1;\n    max-width: 98%;\n  }\n}\n\n@media only screen and (max-width: 600px) and (min-width: 320px) {\n  .login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    border: 1px solid #CCD1D1;\n    max-width: 96%;\n  }\n\n  .ads {\n    display: none;\n  }\n\n  a.back-btn {\n    font-size: 16px;\n  }\n\n  .login-form {\n    padding: 15px;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  a.back-btn {\n    font-size: 10px;\n  }\n\n  .login-form {\n    padding: 10px;\n  }\n\n  .login-form h3 {\n    font-size: 1.5rem;\n  }\n\n  .create-btn {\n    font-size: 15px;\n  }\n\n  .login-form h5.plz-enter-tool {\n    padding-top: 0px;\n    font-size: 15px;\n  }\n\n  .logo-img1 img {\n    width: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsbURBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7QUFNRjs7QUFKQTtFQUNJLGFBQUE7QUFPSjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVFGOztBQU5BO0VBQ0csZ0JBQUE7RUFDQSxlQUFBO0FBU0g7O0FBUEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFXRjs7QUFUQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBYUY7O0FBWEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUVBLHFCQUFBO0VBQ0EsaUJBQUE7QUFjRjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQWVGOztBQWJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWdCRjs7QUFkQTtFQUNFLHlCQUFBO0FBaUJGOztBQWZBO0VBQ0UseUJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQW1CRjs7QUFqQkE7RUFDRSxjQUFBO0FBb0JGOztBQWxCQTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBR0Esd0JBQUE7QUFxQkY7O0FBbkJBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBc0JGOztBQXBCQTs7RUFFRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNDLFdBQUE7QUF1Qkg7O0FBckJBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQyxXQUFBO0FBd0JIOztBQXRCQTs7RUFFRSwyQkFBQTtBQXlCRjs7QUF2QkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsaUJBQUE7QUEyQkY7O0FBekJBO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBNEJGOztBQTFCQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0VBNkJGO0FBQ0Y7O0FBM0JBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7RUE2QkY7O0VBM0JBO0lBQ0UsYUFBQTtFQThCRjs7RUE1QkE7SUFDSSxlQUFBO0VBK0JKOztFQTdCQTtJQUNFLGFBQUE7RUFnQ0Y7QUFDRjs7QUE5QkE7RUFDRTtJQUNJLGVBQUE7RUFnQ0o7O0VBOUJBO0lBQ0UsYUFBQTtFQWlDRjs7RUEvQkE7SUFDRSxpQkFBQTtFQWtDRjs7RUFoQ0E7SUFDRSxlQUFBO0VBbUNGOztFQWpDQTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFQW9DRjs7RUFsQ0E7SUFDRSxXQUFBO0VBcUNGO0FBQ0YiLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogM3M7XG59XG5he1xuICBjb2xvcjogIzIxOTZGMyAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDRDFEMTtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG4uYWRzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1NDEzODgsICM4RjM5ODUpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ28taW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ28taW1nMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1mb3JtIHtcbiAgICBwYWRkaW5nOiAzNXB4O1xufVxuLmxvZ2luLWZvcm0gaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICM0QzYwNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvZ2luLWZvcm0gaDUucGx6LWVudGVyLXRvb2x7XG4gICBwYWRkaW5nLXRvcDogMHB4O1xuICAgZm9udC1zaXplOiAxN3B4O1xufVxuLmxvZ2luLWZvcm0gaDUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICM0QzYwNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNpZ24tdXAtZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0QzYwNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvcmdldC1wYXNzd29yZCBhIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybS1jaGVjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NDEzODg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5mb3JtLWNoZWNrLWxhYmVsOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NDEzODg7XG59XG4uZm9ybS1jaGVjay1sYWJlbCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZvcm0tY2hlY2stbGFiZWwgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIC5jaGVja21hcms6YWZ0ZXIge1xuICBsZWZ0OiA2cHg7XG4gIHRvcDogM3B4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmNyZWF0ZS1idG57XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQzQ0MEYgO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1jb2xvcjogI0ZDNDQwRjtcbiAgY29sb3I6ICNmZmY7XG59XG4uY3JlYXRlLWJ0bjpob3Zlcixcbi5jcmVhdGUtYnRuOmZvY3Vze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDEzO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1jb2xvcjogI2VmNDQxMztcbiAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQxMztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItY29sb3I6ICNlZjQ0MTM7XG4gICBjb2xvcjogI2ZmZjtcbn1cbi5idG4uZm9jdXMsXG4uYnRuOmZvY3Vze1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubG9nLXNpZ3tcbiAgY29sb3I6ICM0QzYwNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvZy1zaWcgYXtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5hLmJhY2stYnRue1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCNDAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI0ZGQjQwMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDRDFEMTtcbiAgICBtYXgtd2lkdGg6IDk4JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5sb2dpbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0QxRDE7XG4gICAgbWF4LXdpZHRoOiA5NiU7XG4gIH1cbiAgLmFkcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBhLmJhY2stYnRuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAubG9naW4tZm9ybSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgYS5iYWNrLWJ0biB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmxvZ2luLWZvcm0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmxvZ2luLWZvcm0gaDMge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5jcmVhdGUtYnRuIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmxvZ2luLWZvcm0gaDUucGx6LWVudGVyLXRvb2wge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5sb2dvLWltZzEgaW1ne1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "JOc8":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forgot-password/forgot-password.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JOc8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container login-container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 login-form\">\n      <div class=\"logo-img\">\n        <img src=\"../../../assets/images/logo.svg\" alt=\"Logo\" class=\"img-fluid\" width=\"140px;\">\n      </div>\n      <h3>Forgot your password?</h3>\n\n      <form class=\"sign-up-form\" [formGroup]=\"forgotForm\" (ngSubmit)=\"ForgotPassword()\">\n        <div class=\"form-group\">\n          <label>Email Adress*</label>\n          <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Email is required</div>\n              <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <ngx-recaptcha2 formControlName=\"recaptcha\" #captchaElem siteKey=\"{{sitekey}}\" (success)=\"handleSuccess($event)\" [size]=\"size\"\n          [hl]=\"lang\" [theme]=\"theme\" [type]=\"type\" >\n          </ngx-recaptcha2>\n        </div>\n\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-lg btn-block create-btn\">Send me reset password instructions</button>\n        </div>\n      </form>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-6\"><a class=\"btn btn-primary btn-lg btn-block back-btn\" href=\"javascript:void(0)\" (click)=\"routerToPage('/login')\">Back to Sign In</a></div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-6\"> <a class=\"btn btn-primary btn-lg btn-block back-btn\" href=\"javascript:void(0)\" (click)=\"routerToPage('/register')\">Back to Sign Up</a></div>\n      </div>\n\n    </div>\n    <!--  -->\n    <div class=\"col-md-6 ads\">\n\n    </div>\n\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "JPqG":
    /*!***********************************************************************!*\
      !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
      \***********************************************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function JPqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return DefaultLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./default-layout.component.html */
      "lm8q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_nav */
      "c2Qq");

      var DefaultLayoutComponent = /*#__PURE__*/function () {
        function DefaultLayoutComponent() {
          _classCallCheck(this, DefaultLayoutComponent);

          this.sidebarMinimized = false;
          this.navItems = _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"];
        }

        _createClass(DefaultLayoutComponent, [{
          key: "toggleMinimize",
          value: function toggleMinimize(e) {
            this.sidebarMinimized = e;
          }
        }]);

        return DefaultLayoutComponent;
      }();

      DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DefaultLayoutComponent);
      /***/
    },

    /***/
    "L21N":
    /*!**********************************************!*\
      !*** ./src/app/@core/module-import-guard.ts ***!
      \**********************************************/

    /*! exports provided: throwIfAlreadyLoaded */

    /***/
    function L21N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function () {
        return throwIfAlreadyLoaded;
      });

      function throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
          throw new Error("".concat(moduleName, " has already been loaded. Import Core modules in the AppModule only."));
        }
      }
      /***/

    },

    /***/
    "Lrxh":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lrxh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "OXAH":
    /*!********************************************************************!*\
      !*** ./src/app/views/forgot-password/forgot-password.component.ts ***!
      \********************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function OXAH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "JOc8");
      /* harmony import */


      var _forgot_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot.component.scss */
      "4maX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@core/backend/common/services/users.service */
      "4FL0");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var ngx_captcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-captcha */
      "sjCC");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(activatedRoute, UsersService, router, formBuilder) {
          var _this2 = this;

          _classCallCheck(this, ForgotPasswordComponent);

          this.activatedRoute = activatedRoute;
          this.UsersService = UsersService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.submitted = false;
          this.captchaIsLoaded = false;
          this.captchaSuccess = false;
          this.captchaIsExpired = false;
          this.theme = 'light';
          this.size = 'normal';
          this.lang = 'en';
          this.forgotForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
          });
          this.sitekey = "6Ldk_7kaAAAAAA6Zdcyi8qX9kb7wZsolXGXjIJHi";
          this.user = {
            email: ''
          };
          this.activatedRoute.queryParams.subscribe(function (params) {
            _this2.token = params.token;
          });
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "routerToPage",
          value: function routerToPage(link) {
            this.router.navigate([link]);
          }
        }, {
          key: "f",
          get: function get() {
            return this.forgotForm.controls;
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.submitted = false;
            this.forgotForm.reset();
          }
        }, {
          key: "ForgotPassword",
          value: function ForgotPassword() {
            var _this3 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.forgotForm.invalid) {
              return;
            }

            var condition = {
              email: this.forgotForm.value.email
            };
            this.UsersService.ForgotPassword(condition).subscribe(function (result) {
              if (result['success']) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Forgot Password', result['message'], 'success');

                _this3.router.navigate(['/login']);
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Forgot Password', result['message'], 'error');
              }
            });
          }
        }, {
          key: "handleSuccess",
          value: function handleSuccess(data) {
            console.log(data, ' -  - - - data');
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _core_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }];
      };

      ForgotPasswordComponent.propDecorators = {
        captchaElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['captchaElem']
        }],
        langInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['langInput']
        }]
      };
      ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _core_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])], ForgotPasswordComponent);
      /***/
    },

    /***/
    "QB/w":
    /*!************************************************!*\
      !*** ./src/app/views/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "nSew");
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.scss */
      "wTWu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@core/backend/common/services/users.service */
      "4FL0");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, userService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.userService = userService;
          this.user = {
            email: '',
            password: ''
          };
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "routerToPage",
          value: function routerToPage(link) {
            this.router.navigate([link]);
          }
        }, {
          key: "Login",
          value: function Login() {
            var _this4 = this;

            this.userService.Login(this.user).subscribe(function (result) {
              if (result['success']) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Login', 'You are logged in successfully', 'success');
                var data = result['data'];
                localStorage.setItem('role', data.role);
                localStorage.setItem('token', data.token);
                localStorage.setItem('is_approved', data.is_approved);
                localStorage.setItem('is_delete', data.is_delete);

                _this4.routerToPage('/dashboard');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Login!', result['message'], 'error');
                _this4.user = {
                  email: '',
                  password: ''
                };
              }
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _core_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]])], LoginComponent);
      /***/
    },

    /***/
    "QcaX":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reset-password/reset-password.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QcaX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container login-container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 login-form\">\n      <div class=\"logo-img\">\n        <img src=\"../../../assets/images/logo.svg\" alt=\"Logo\" class=\"img-fluid\" width=\"140px;\">\n      </div>\n      <h3>Reset Your Password</h3>\n      <!--  -->\n      <form class=\"sign-up-form\" [formGroup]=\"ResetForm\" (ngSubmit)=\"ResetPassword()\">\n        <div class=\"form-group\">\n          <label>New Password*</label>\n            <input type=\"Password\" formControlName=\"password\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Confirm Password*</label>\n          <input type=\"Password\" formControlName=\"c_password\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.c_password.errors }\" >\n          <div *ngIf=\"submitted && f.c_password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.c_password.errors.required\">Confirm Password is required</div>\n            <div *ngIf=\"f.c_password.errors.mustMatch\">Passwords must match</div>\n        </div>\n        </div>\n\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-lg btn-block create-btn\">Reset Password</button>\n        </div>\n      </form>\n      <!--  -->\n\n    </div>\n    <!--  -->\n    <div class=\"col-md-6 ads\">\n\n    </div>\n\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/icons */
      "t17N");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, iconSet) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.iconSet = iconSet; // iconSet singleton

          iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["freeSet"]);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>',
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]])], AppComponent);
      /***/
    },

    /***/
    "V5UK":
    /*!**************************************!*\
      !*** ./src/app/@core/core.module.ts ***!
      \**************************************/

    /*! exports provided: CoreModule */

    /***/
    function V5UK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./module-import-guard */
      "L21N");
      /* harmony import */


      var _backend_common_common_backend_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./backend/common/common-backend.module */
      "3zNB");
      /* harmony import */


      var _backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./backend/common/services/users.service */
      "4FL0");
      /* harmony import */


      var _backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./backend/common/api/http.service */
      "sZbP");
      /* harmony import */


      var _backend_common_api_users_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./backend/common/api/users.api */
      "W7rx");
      /* harmony import */


      var _backend_common_api_auth_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./backend/common/api/auth.api */
      "w7S6");

      var CoreModule = function CoreModule(parentModule) {
        _classCallCheck(this, CoreModule);

        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_4__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
      };

      CoreModule.ctorParameters = function () {
        return [{
          type: CoreModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }];
      };

      CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _backend_common_common_backend_module__WEBPACK_IMPORTED_MODULE_5__["CommonBackendModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
        exports: [],
        declarations: [],
        providers: [_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"], _backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"], _backend_common_api_users_api__WEBPACK_IMPORTED_MODULE_8__["UsersApi"], _backend_common_api_auth_api__WEBPACK_IMPORTED_MODULE_9__["AuthApi"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CoreModule])], CoreModule);
      /***/
    },

    /***/
    "W7rx":
    /*!*******************************************************!*\
      !*** ./src/app/@core/backend/common/api/users.api.ts ***!
      \*******************************************************/

    /*! exports provided: UsersApi */

    /***/
    function W7rx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersApi", function () {
        return UsersApi;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./http.service */
      "sZbP");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var UsersApi = /*#__PURE__*/function () {
        function UsersApi(api, http) {
          _classCallCheck(this, UsersApi);

          this.api = api;
          this.http = http;
          this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZGM2YWE3NmEwMWNkMWUwMjNiMDY2NSIsInVzZXJuYW1lIjoidW5kZWZpbmVkIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjA4OTYyNzEyfQ.B_DSG9J4wBNcw3EgyXIis7-V8KJGXolNYcfQDbGsOeo";
          this.apiController = 'users';
          this.url = 'users/';
        }

        _createClass(UsersApi, [{
          key: "Login",
          value: function Login(data) {
            var url = this.url + 'login';
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
              return result;
            }));
          }
        }, {
          key: "CreateAccount",
          value: function CreateAccount(data) {
            var url = this.url + 'create/account';
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
              return result;
            }));
          }
        }, {
          key: "ResetPasword",
          value: function ResetPasword(data) {
            var url = this.url + 'reset/password';
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
              return result;
            }));
          }
        }, {
          key: "ForgotPassword",
          value: function ForgotPassword(data) {
            var url = 'email/forgot/password';
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
              return result;
            }));
          }
        }]);

        return UsersApi;
      }();

      UsersApi.ctorParameters = function () {
        return [{
          type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      UsersApi = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UsersApi);
      /***/
    },

    /***/
    "WN3a":
    /*!***********************************************************************!*\
      !*** ./src/app/@core/backend/common/services/isAuth.guard.service.ts ***!
      \***********************************************************************/

    /*! exports provided: IsAuthGuard */

    /***/
    function WN3a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsAuthGuard", function () {
        return IsAuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "mEYZ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var IsAuthGuard = /*#__PURE__*/function () {
        function IsAuthGuard(authService, router) {
          _classCallCheck(this, IsAuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(IsAuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this5 = this;

            return this.authService.Session().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              if (data['success']) {
                _this5.router.navigate(['/dashboard']);

                return false;
              } else {
                localStorage.clear();
                return true;
              }
            }));
          }
        }]);

        return IsAuthGuard;
      }();

      IsAuthGuard.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      IsAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], IsAuthGuard);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _views_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/reset-password/reset-password.component */
      "tadm");
      /* harmony import */


      var _views_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/forgot-password/forgot-password.component */
      "OXAH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _core_backend_common_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./@core/backend/common/services/auth.service */
      "mEYZ");
      /* harmony import */


      var _core_backend_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./@core/backend/common/services/auth.guard.service */
      "pb11");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./views/register/register.component */
      "4XPS");
      /* harmony import */


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @coreui/angular */
      "Iluq");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./@core/core.module */
      "V5UK");
      /* harmony import */


      var ngx_captcha__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ngx-captcha */
      "sjCC");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      }; // Import containers

      var APP_CONTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutComponent"]]; // Import 3rd party components

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_18__["AppAsideModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_18__["AppBreadcrumbModule"].forRoot(), _coreui_angular__WEBPACK_IMPORTED_MODULE_18__["AppFooterModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_18__["AppHeaderModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_18__["AppSidebarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_20__["BsDropdownModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_21__["TabsModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_23__["CoreModule"], ngx_captcha__WEBPACK_IMPORTED_MODULE_24__["NgxCaptchaModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_11__["IconSetModule"].forRoot()],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]].concat(APP_CONTAINERS, [_views_error_404_component__WEBPACK_IMPORTED_MODULE_14__["P404Component"], _views_error_500_component__WEBPACK_IMPORTED_MODULE_15__["P500Component"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _views_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _views_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"], _views_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"]]),
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
        }, ngx_captcha__WEBPACK_IMPORTED_MODULE_24__["NgxCaptchaModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_11__["IconSetService"], _core_backend_common_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _core_backend_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ag3Z":
    /*!********************************************************!*\
      !*** ./src/app/views/register/register.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function ag3Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "body {\n  font-family: \"Lato\", sans-serif;\n  transition: 3s;\n}\n\na {\n  color: #2196F3 !important;\n}\n\n.login-container {\n  margin-top: 5%;\n  margin-bottom: 5%;\n  border: 1px solid #CCD1D1;\n  max-width: 60%;\n}\n\n.ads {\n  background-image: linear-gradient(#541388, #8F3985);\n  color: #fff;\n  padding: 15px;\n  text-align: center;\n}\n\n.logo-img {\n  text-align: center;\n}\n\n.logo-img1 {\n  text-align: center;\n}\n\n.login-form {\n  padding: 35px;\n}\n\n.login-form h3 {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.login-form h5.plz-enter-tool {\n  padding-top: 0px;\n  font-size: 17px;\n}\n\n.login-form h5 {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.sign-up-form label {\n  font-size: 14px;\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.forget-password a {\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 0;\n}\n\n.form-check-label {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.form-check-label input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border: 1px solid #541388;\n  border-radius: 4px;\n}\n\n.form-check-label:hover input ~ .checkmark {\n  border: 1px solid #541388;\n}\n\n.form-check-label input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.form-check-label input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.form-check-label .checkmark:after {\n  left: 6px;\n  top: 3px;\n  width: 5px;\n  height: 10px;\n  border: 1px solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.create-btn {\n  background-color: #FC440F;\n  font-size: 18px;\n  border-color: #FC440F;\n  color: #fff;\n}\n\n.create-btn:hover,\n.create-btn:focus {\n  background-color: #ef4413;\n  font-size: 18px;\n  border-color: #ef4413;\n  color: #fff;\n}\n\n.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {\n  background-color: #ef4413;\n  font-size: 18px;\n  border-color: #ef4413;\n  color: #fff;\n}\n\n.btn.focus,\n.btn:focus {\n  box-shadow: none !important;\n}\n\n.log-sig {\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.log-sig a {\n  font-weight: bold;\n}\n\na.back-btn {\n  color: #fff !important;\n  background-color: #FFB400 !important;\n  border-color: #FFB400 !important;\n  margin-bottom: 20px;\n  font-size: 18px;\n}\n\n@media only screen and (max-width: 991px) and (min-width: 320px) {\n  .login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    border: 1px solid #CCD1D1;\n    max-width: 98%;\n  }\n}\n\n@media only screen and (max-width: 600px) and (min-width: 320px) {\n  .login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    border: 1px solid #CCD1D1;\n    max-width: 96%;\n  }\n\n  .ads {\n    display: none;\n  }\n\n  a.back-btn {\n    font-size: 16px;\n  }\n\n  .login-form {\n    padding: 15px;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  a.back-btn {\n    font-size: 10px;\n  }\n\n  .login-form {\n    padding: 10px;\n  }\n\n  .login-form h3 {\n    font-size: 1.5rem;\n  }\n\n  .create-btn {\n    font-size: 15px;\n  }\n\n  .login-form h5.plz-enter-tool {\n    padding-top: 0px;\n    font-size: 15px;\n  }\n\n  .logo-img1 img {\n    width: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsbURBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7QUFNRjs7QUFKQTtFQUNJLGFBQUE7QUFPSjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVFGOztBQU5BO0VBQ0csZ0JBQUE7RUFDQSxlQUFBO0FBU0g7O0FBUEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFXRjs7QUFUQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBYUY7O0FBWEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUVBLHFCQUFBO0VBQ0EsaUJBQUE7QUFjRjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQWVGOztBQWJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWdCRjs7QUFkQTtFQUNFLHlCQUFBO0FBaUJGOztBQWZBO0VBQ0UseUJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQW1CRjs7QUFqQkE7RUFDRSxjQUFBO0FBb0JGOztBQWxCQTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBR0Esd0JBQUE7QUFxQkY7O0FBbkJBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBc0JGOztBQXBCQTs7RUFFRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNDLFdBQUE7QUF1Qkg7O0FBckJBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQyxXQUFBO0FBd0JIOztBQXRCQTs7RUFFRSwyQkFBQTtBQXlCRjs7QUF2QkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsaUJBQUE7QUEyQkY7O0FBekJBO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBNEJGOztBQTFCQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0VBNkJGO0FBQ0Y7O0FBM0JBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7RUE2QkY7O0VBM0JBO0lBQ0UsYUFBQTtFQThCRjs7RUE1QkE7SUFDSSxlQUFBO0VBK0JKOztFQTdCQTtJQUNFLGFBQUE7RUFnQ0Y7QUFDRjs7QUE5QkE7RUFDRTtJQUNJLGVBQUE7RUFnQ0o7O0VBOUJBO0lBQ0UsYUFBQTtFQWlDRjs7RUEvQkE7SUFDRSxpQkFBQTtFQWtDRjs7RUFoQ0E7SUFDRSxlQUFBO0VBbUNGOztFQWpDQTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFQW9DRjs7RUFsQ0E7SUFDRSxXQUFBO0VBcUNGO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogM3M7XG59XG5he1xuICBjb2xvcjogIzIxOTZGMyAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDRDFEMTtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG4uYWRzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1NDEzODgsICM4RjM5ODUpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ28taW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ28taW1nMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1mb3JtIHtcbiAgICBwYWRkaW5nOiAzNXB4O1xufVxuLmxvZ2luLWZvcm0gaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICM0QzYwNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvZ2luLWZvcm0gaDUucGx6LWVudGVyLXRvb2x7XG4gICBwYWRkaW5nLXRvcDogMHB4O1xuICAgZm9udC1zaXplOiAxN3B4O1xufVxuLmxvZ2luLWZvcm0gaDUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICM0QzYwNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNpZ24tdXAtZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0QzYwNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvcmdldC1wYXNzd29yZCBhIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybS1jaGVjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NDEzODg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5mb3JtLWNoZWNrLWxhYmVsOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NDEzODg7XG59XG4uZm9ybS1jaGVjay1sYWJlbCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZvcm0tY2hlY2stbGFiZWwgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIC5jaGVja21hcms6YWZ0ZXIge1xuICBsZWZ0OiA2cHg7XG4gIHRvcDogM3B4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmNyZWF0ZS1idG57XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQzQ0MEYgO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1jb2xvcjogI0ZDNDQwRjtcbiAgY29sb3I6ICNmZmY7XG59XG4uY3JlYXRlLWJ0bjpob3Zlcixcbi5jcmVhdGUtYnRuOmZvY3Vze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDEzO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1jb2xvcjogI2VmNDQxMztcbiAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQxMztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItY29sb3I6ICNlZjQ0MTM7XG4gICBjb2xvcjogI2ZmZjtcbn1cbi5idG4uZm9jdXMsXG4uYnRuOmZvY3Vze1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubG9nLXNpZ3tcbiAgY29sb3I6ICM0QzYwNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvZy1zaWcgYXtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5hLmJhY2stYnRue1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCNDAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI0ZGQjQwMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDRDFEMTtcbiAgICBtYXgtd2lkdGg6IDk4JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5sb2dpbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0QxRDE7XG4gICAgbWF4LXdpZHRoOiA5NiU7XG4gIH1cbiAgLmFkcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBhLmJhY2stYnRuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAubG9naW4tZm9ybSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgYS5iYWNrLWJ0biB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmxvZ2luLWZvcm0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmxvZ2luLWZvcm0gaDMge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5jcmVhdGUtYnRuIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmxvZ2luLWZvcm0gaDUucGx6LWVudGVyLXRvb2wge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5sb2dvLWltZzEgaW1ne1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "bVw4":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function bVw4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container login-container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 login-form\">\n      <div class=\"logo-img\">\n        <img src=\"assets/images/logo.svg\" alt=\"Logo\" class=\"img-fluid\" width=\"140px;\">\n      </div>\n      <h3>Get started for Free</h3>\n      <div class=\"logo-img1\">\n        <img src=\"assets/images/Facebook_Signup.svg\" alt=\"Facebook Signup\" class=\"img-fluid\">\n        <img src=\"assets/images/Google_Signup.svg\" alt=\"Google Signup\" class=\"img-fluid\">\n      </div>\n      <h5>OR</h5>\n      <form class=\"sign-up-form\">\n        <div class=\"form-group\">\n          <label>Email Adress*</label>\n          <input type=\"email\" class=\"form-control\" required=\"\" name=\"email\" [(ngModel)]=\"user.email\">\n        </div>\n        <div class=\"form-group\">\n          <label>Username*</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" required=\"\" [(ngModel)]=\"user.name\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password*</label>\n          <input type=\"Password\" name=\"password\" class=\"form-control\" required=\"\" [(ngModel)]=\"user.password\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password Confirmation*</label>\n          <input type=\"Password\" name=\"confirm\" class=\"form-control\" required=\"\" [(ngModel)]=\"user.c_password\">\n        </div>\n        <div class=\"form-check\">\n          <label class=\"form-check-label\">I accept these <a href=\"javascript:void\"> Terms of Service</a> and\n            <br/> <a href=\"#\"> Privacy Policy</a>\n            <input type=\"checkbox\" name=\"terms_condition\" [(ngModel)]=\"user.terms_condition\"> <span class=\"checkmark\"></span>\n          </label>\n        </div>\n        <div class=\"form-group\">\n          <button  type=\"submit\" class=\"btn btn-lg btn-block create-btn\" (click)=\"CreateAccount()\">Create Account</button>\n        </div>\n      </form>\n      <div class=\"form-group forget-password text-center log-sig\">\n        Already have an account?\n              <a href=\"javascript:void(0)\" (click)=\"routerToPage('/login')\">Login</a>\n          </div>\n    </div>\n    <div class=\"col-md-6 ads\"></div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _core_backend_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./@core/backend/common/services/auth.guard.service */
      "pb11");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/register/register.component */
      "4XPS");
      /* harmony import */


      var _views_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/reset-password/reset-password.component */
      "tadm");
      /* harmony import */


      var _views_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/forgot-password/forgot-password.component */
      "OXAH");
      /* harmony import */


      var _core_backend_common_services_isAuth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./@core/backend/common/services/isAuth.guard.service */
      "WN3a"); // Import Containers


      var routes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_5__["P404Component"],
        canActivate: [_core_backend_common_services_isAuth_guard_service__WEBPACK_IMPORTED_MODULE_11__["IsAuthGuard"]],
        data: {
          title: 'Page 404'
        }
      }, {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_6__["P500Component"],
        canActivate: [_core_backend_common_services_isAuth_guard_service__WEBPACK_IMPORTED_MODULE_11__["IsAuthGuard"]],
        data: {
          title: 'Page 500'
        }
      }, {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        canActivate: [_core_backend_common_services_isAuth_guard_service__WEBPACK_IMPORTED_MODULE_11__["IsAuthGuard"]],
        data: {
          title: 'Login Page'
        }
      }, {
        path: 'register',
        component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        canActivate: [_core_backend_common_services_isAuth_guard_service__WEBPACK_IMPORTED_MODULE_11__["IsAuthGuard"]],
        data: {
          title: 'Register Page'
        }
      }, {
        path: 'reset-password',
        component: _views_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"],
        canActivate: [_core_backend_common_services_isAuth_guard_service__WEBPACK_IMPORTED_MODULE_11__["IsAuthGuard"]]
      }, {
        path: 'forgot/password',
        component: _views_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"],
        canActivate: [_core_backend_common_services_isAuth_guard_service__WEBPACK_IMPORTED_MODULE_11__["IsAuthGuard"]]
      }, {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
          title: 'Home'
        },
        canActivate: [_core_backend_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{
          path: 'base',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-base-base-module */
            "views-base-base-module").then(__webpack_require__.bind(null,
            /*! ./views/base/base.module */
            "Cvcy")).then(function (m) {
              return m.BaseModule;
            });
          }
        }, {
          path: 'buttons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-buttons-buttons-module */
            "views-buttons-buttons-module").then(__webpack_require__.bind(null,
            /*! ./views/buttons/buttons.module */
            "Reju")).then(function (m) {
              return m.ButtonsModule;
            });
          }
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-chartjs-chartjs-module */
            "views-chartjs-chartjs-module").then(__webpack_require__.bind(null,
            /*! ./views/chartjs/chartjs.module */
            "Y+KY")).then(function (m) {
              return m.ChartJSModule;
            });
          }
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-dashboard-dashboard-module */
            [__webpack_require__.e("default~views-dashboard-dashboard-module~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("common"), __webpack_require__.e("views-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./views/dashboard/dashboard.module */
            "6dU7")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'icons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-icons-icons-module */
            "views-icons-icons-module").then(__webpack_require__.bind(null,
            /*! ./views/icons/icons.module */
            "aPNi")).then(function (m) {
              return m.IconsModule;
            });
          }
        }, {
          path: 'notifications',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-notifications-notifications-module */
            "views-notifications-notifications-module").then(__webpack_require__.bind(null,
            /*! ./views/notifications/notifications.module */
            "KpDv")).then(function (m) {
              return m.NotificationsModule;
            });
          }
        }, {
          path: 'theme',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-theme-theme-module */
            [__webpack_require__.e("default~views-dashboard-dashboard-module~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("views-theme-theme-module")]).then(__webpack_require__.bind(null,
            /*! ./views/theme/theme.module */
            "AgMk")).then(function (m) {
              return m.ThemeModule;
            });
          }
        }, {
          path: 'widgets',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-widgets-widgets-module */
            [__webpack_require__.e("default~views-dashboard-dashboard-module~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("common"), __webpack_require__.e("views-widgets-widgets-module")]).then(__webpack_require__.bind(null,
            /*! ./views/widgets/widgets.module */
            "XVX6")).then(function (m) {
              return m.WidgetsModule;
            });
          }
        }]
      }, {
        path: '**',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_5__["P404Component"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "c2Qq":
    /*!*************************!*\
      !*** ./src/app/_nav.ts ***!
      \*************************/

    /*! exports provided: navItems */

    /***/
    function c2Qq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navItems", function () {
        return navItems;
      });

      var navItems = [{
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      }, {
        title: true,
        name: 'Theme'
      }, {
        name: 'Colors',
        url: '/theme/colors',
        icon: 'icon-drop'
      }, {
        name: 'Typography',
        url: '/theme/typography',
        icon: 'icon-pencil'
      }, {
        title: true,
        name: 'Components'
      }, {
        name: 'Base',
        url: '/base',
        icon: 'icon-puzzle',
        children: [{
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle'
        }, {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        }, {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle'
        }, {
          name: 'Forms',
          url: '/base/forms',
          icon: 'icon-puzzle'
        }, {
          name: 'Navbars',
          url: '/base/navbars',
          icon: 'icon-puzzle'
        }, {
          name: 'Pagination',
          url: '/base/paginations',
          icon: 'icon-puzzle'
        }, {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle'
        }, {
          name: 'Progress',
          url: '/base/progress',
          icon: 'icon-puzzle'
        }, {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle'
        }, {
          name: 'Tables',
          url: '/base/tables',
          icon: 'icon-puzzle'
        }, {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'icon-puzzle'
        }, {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle'
        }]
      }, {
        name: 'Buttons',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [{
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor'
        }, {
          name: 'Dropdowns',
          url: '/buttons/dropdowns',
          icon: 'icon-cursor'
        }, {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor'
        }]
      }, {
        name: 'Charts',
        url: '/charts',
        icon: 'icon-pie-chart'
      }, {
        name: 'Icons',
        url: '/icons',
        icon: 'icon-star',
        children: [{
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'success',
            text: 'NEW'
          }
        }, {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star'
        }, {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        }, {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }]
      }, {
        name: 'Notifications',
        url: '/notifications',
        icon: 'icon-bell',
        children: [{
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell'
        }, {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell'
        }, {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell'
        }]
      }, {
        name: 'Widgets',
        url: '/widgets',
        icon: 'icon-calculator',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      }, {
        divider: true
      }, {
        title: true,
        name: 'Extras'
      }, {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [{
          name: 'Login',
          url: '/login',
          icon: 'icon-star'
        }, {
          name: 'Register',
          url: '/register',
          icon: 'icon-star'
        }, {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star'
        }, {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star'
        }]
      }, {
        name: 'Disabled',
        url: '/dashboard',
        icon: 'icon-ban',
        badge: {
          variant: 'secondary',
          text: 'NEW'
        },
        attributes: {
          disabled: true
        }
      }, {
        name: 'Download CoreUI',
        url: 'http://coreui.io/angular/',
        icon: 'icon-cloud-download',
        "class": 'mt-auto',
        variant: 'success',
        attributes: {
          target: '_blank',
          rel: 'noopener'
        }
      }, {
        name: 'Try CoreUI PRO',
        url: 'http://coreui.io/pro/angular/',
        icon: 'icon-layers',
        variant: 'danger',
        attributes: {
          target: '_blank',
          rel: 'noopener'
        }
      }];
      /***/
    },

    /***/
    "dxhq":
    /*!**********************************************!*\
      !*** ./src/app/views/error/500.component.ts ***!
      \**********************************************/

    /*! exports provided: P500Component */

    /***/
    function dxhq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P500Component", function () {
        return P500Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./500.component.html */
      "Lrxh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P500Component = function P500Component() {
        _classCallCheck(this, P500Component);
      };

      P500Component.ctorParameters = function () {
        return [];
      };

      P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P500Component);
      /***/
    },

    /***/
    "lm8q":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lm8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header\n  [navbarBrandRouterLink]=\"['/dashboard']\"\n  [fixed]=\"true\"\n  [navbarBrandFull]=\"{src: 'assets/img/brand/logo.svg', width: 89, height: 25, alt: 'CoreUI Logo'}\"\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/sygnet.svg', width: 30, height: 30, alt: 'CoreUI Logo'}\"\n  [sidebarToggler]=\"'lg'\"\n  [asideMenuToggler]=\"'lg'\">\n  <ul class=\"nav navbar-nav d-md-down-none\">\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\n    </li>\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Users</a>\n    </li>\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </li>\n  </ul>\n  <ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span></a>\n    </li>\n    <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>\n    </li>\n    <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\n    </li>\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\"/>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-dark\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\n      </div>\n    </li>\n  </ul>\n</app-header>\n<div class=\"app-body\">\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\" (minimizedChange)=\"toggleMinimize($event)\">\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\n    <app-sidebar-minimizer></app-sidebar-minimizer>\n  </app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n    <!-- Breadcrumb -->\n    <!-- breaking change 'cui-breadcrumb' -->\n    <cui-breadcrumb>\n      <!-- Breadcrumb Menu-->\n      <li class=\"breadcrumb-menu d-md-down-none\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n          <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\n          <a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n        </div>\n      </li>\n    </cui-breadcrumb>\n    <!-- deprecation warning for 'app-breadcrumb' -->\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<app-breadcrumb></app-breadcrumb>-->\n      <!--&lt;!&ndash; Breadcrumb Menu&ndash;&gt;-->\n      <!--<li class=\"breadcrumb-menu d-md-down-none\">-->\n        <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">-->\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>-->\n          <!--<a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>-->\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n        <!--</div>-->\n      <!--</li>-->\n    <!--</ol>-->\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div><!-- /.container-fluid -->\n  </main>\n  <app-aside [fixed]=\"true\" [display]=\"false\" [ngClass]=\"'test'\">\n    <tabset>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\n        <div class=\"list-group list-group-accent\">\n          <div class=\"list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small\">Today</div>\n          <div class=\"list-group-item list-group-item-accent-warning list-group-item-divider\">\n            <div class=\"avatar float-right\">\n              <img class=\"img-avatar\" src=\"assets/img/avatars/7.jpg\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div>Meeting with\n              <strong>Lucas</strong>\n            </div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  1 - 3pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-location-pin\"></i>  Palo Alto, CA</small>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-info\">\n            <div class=\"avatar float-right\">\n              <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div>Skype with\n              <strong>Megan</strong>\n            </div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  4 - 5pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-social-skype\"></i>  On-line</small>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small\">Tomorrow</div>\n          <div class=\"list-group-item list-group-item-accent-danger list-group-item-divider\">\n            <div>New UI Project -\n              <strong>deadline</strong>\n            </div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  10 - 11pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-home\"></i>  creativeLabs HQ</small>\n            <div class=\"avatars-stack mt-2\">\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/2.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/3.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/5.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n            </div>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-success list-group-item-divider\">\n            <div>\n              <strong>#10 Startups.Garden</strong> Meetup</div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  1 - 3pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-location-pin\"></i>  Palo Alto, CA</small>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-primary list-group-item-divider\">\n            <div>\n              <strong>Team meeting</strong>\n            </div>\n            <small class=\"text-muted mr-3\">\n              <i class=\"icon-calendar\"></i>  4 - 6pm</small>\n            <small class=\"text-muted\">\n              <i class=\"icon-home\"></i>  creativeLabs HQ</small>\n            <div class=\"avatars-stack mt-2\">\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/2.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/3.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/5.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/7.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div class=\"avatar avatar-xs\">\n                <img class=\"img-avatar\" src=\"assets/img/avatars/8.jpg\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </tab>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-speech\"></i></ng-template>\n        <div class=\"p-3\">\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n        </div>\n      </tab>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-settings\"></i></ng-template>\n        <div class=\"p-3\">\n          <h6>Settings</h6>\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-4\">\n              <small><b>Option 1</b></small>\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\" checked>\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n              </label>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n            </div>\n          </div>\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 2</b></small>\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\">\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n              </label>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n            </div>\n          </div>\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 3</b></small>\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\">\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n            </div>\n          </div>\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 4</b></small>\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\" checked>\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n              </label>\n            </div>\n          </div>\n          <hr>\n          <h6>System Utilization</h6>\n          <div class=\"text-uppercase mb-1 mt-4\"><small><b>CPU Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>Memory Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">11444GB/16384MB</small>\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 1 Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">243GB/256GB</small>\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 2 Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">25GB/256GB</small>\n        </div>\n      </tab>\n    </tabset>\n  </app-aside>\n</div>\n<app-footer>\n  <span><a href=\"https://coreui.io\">CoreUI</a> &copy; 2021 creativeLabs.</span>\n  <span class=\"ml-auto\">Powered by <a href=\"https://coreui.io/angular\">CoreUI for Angular</a></span>\n</app-footer>\n";
      /***/
    },

    /***/
    "mEYZ":
    /*!***************************************************************!*\
      !*** ./src/app/@core/backend/common/services/auth.service.ts ***!
      \***************************************************************/

    /*! exports provided: AuthService */

    /***/
    function mEYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.token = localStorage.token;
        }

        _createClass(AuthService, [{
          key: "Session",
          value: function Session() {
            this.token = localStorage.token;

            if (!this.token) {
              this.token = '';
            }

            var url = 'users/session';
            return this.http.post(url, {}, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'token': this.token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              return res;
            }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              res;
            }, function (error) {
              var res = {
                success: false
              };
              res;
            })));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthService);
      /***/
    },

    /***/
    "nAJl":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function nAJl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "nSew":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function nSew(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container login-container\">\n      <div class=\"row\">\n      \t<div class=\"col-md-6 login-form\">\n          <div class=\"logo-img\">\n            <img src=\"../../../assets/images/Logo.svg\" alt=\"Logo\" class=\"img-fluid\" width=\"140px;\">\n          </div>\n          <h3>Sign In</h3>\n          <h5 class=\"plz-enter-tool\">Please enter your credentials to proceed.</h5>\n           <div class=\"logo-img1\">\n            \t<img src=\"../../../assets/images/Facebook_Signup.svg\" alt=\"Facebook Signup\" class=\"img-fluid\">\n         \t\t<img src=\"../../../assets/images/Google_Signup.svg\" alt=\"Google Signup\" class=\"img-fluid\">\n          </div>\n          <h5>OR</h5>\n          <form class=\"sign-up-form\" >\n            <div class=\"form-group\">\n            \t<label>Email Adress*</label>\n              \t<input type=\"email\" class=\"form-control\" required=\"\" name=\"email\" [(ngModel)]=\"user.email\">\n            </div>\n\n            <div class=\"form-group mb-0\">\n            \t<label>Password*</label>\n              <input type=\"Password\" class=\"form-control\" required=\"\" name=\"password\" [(ngModel)]=\"user.password\">\n            </div>\n             <div class=\"form-group forget-password text-right\">\n                <a href=\"javascript:void(0)\" (click)=\"routerToPage('/forgot/password')\">Forgot Password</a>\n            </div>\n            <div class=\"form-group\">\n            \t<button type=\"submit\" class=\"btn btn-lg btn-block create-btn\" (click)=\"Login()\">Login</button>\n            </div>\n          </form>\n          <div class=\"form-group forget-password text-center log-sig\">\n         Don't have an account?\n                <a href=\"javascript:void(0)\" (click)=\"routerToPage('/register')\">Sign up</a>\n\n            </div>\n        </div>\n        <!--  -->\n        <div class=\"col-md-6 ads\">\n\n        </div>\n\n      </div>\n    </div>\n  </main>\n</div>\n";
      /***/
    },

    /***/
    "pb11":
    /*!*********************************************************************!*\
      !*** ./src/app/@core/backend/common/services/auth.guard.service.ts ***!
      \*********************************************************************/

    /*! exports provided: AuthGuard */

    /***/
    function pb11(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "mEYZ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this6 = this;

            return this.authService.Session().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              if (data['success']) {
                return true;
              } else {
                localStorage.clear();

                _this6.router.navigate(['/login']);

                return false;
              }
            }));
          }
        }, {
          key: "canActivateChild",
          value: function canActivateChild(route, state) {
            var _this7 = this;

            return this.authService.Session().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              if (data['success']) {
                console.log;

                _this7.router.navigate(['/dashboard']);

                return false;
              } else {
                localStorage.clear();
                return true;
              }
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
      /***/
    },

    /***/
    "sZbP":
    /*!**********************************************************!*\
      !*** ./src/app/@core/backend/common/api/http.service.ts ***!
      \**********************************************************/

    /*! exports provided: HttpService */

    /***/
    function sZbP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /*
       * Copyright (c) Akveo 2019. All Rights Reserved.
       * Licensed under the Single Application / Multi Application License.
       * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
       */


      var HttpService = function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
      };

      HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], HttpService);
      /***/
    },

    /***/
    "tadm":
    /*!******************************************************************!*\
      !*** ./src/app/views/reset-password/reset-password.component.ts ***!
      \******************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function tadm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reset_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "QcaX");
      /* harmony import */


      var _reset_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reset-password.component.scss */
      "Gd5/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@core/backend/common/services/users.service */
      "4FL0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _must_match_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../must-match.validator */
      "8+He");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);

      var ResetPasswordComponent = /*#__PURE__*/function () {
        function ResetPasswordComponent(activatedRoute, UsersService, router, formBuilder) {
          var _this8 = this;

          _classCallCheck(this, ResetPasswordComponent);

          this.activatedRoute = activatedRoute;
          this.UsersService = UsersService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.submitted = false;
          this.ResetForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            c_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          }, {
            validator: Object(_must_match_validator__WEBPACK_IMPORTED_MODULE_7__["MustMatch"])('password', 'c_password')
          });
          this.user = {
            password: '',
            c_password: ''
          };
          this.activatedRoute.queryParams.subscribe(function (params) {
            _this8.token = params.token;
          });
        }

        _createClass(ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "f",
          get: function get() {
            return this.ResetForm.controls;
          }
        }, {
          key: "ResetPassword",
          value: function ResetPassword() {
            var _this9 = this;

            this.submitted = true;

            if (this.ResetForm.invalid) {
              return;
            }

            var data = this.ResetForm.value;
            data.token = this.token;
            this.UsersService.ResetPasword(data).subscribe(function (result) {
              if (result['success']) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Reset Password', result['message'], 'success');

                _this9.router.navigate(['/login']);
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Reset Password!', result['message'], 'error');
              }
            });
          }
        }]);

        return ResetPasswordComponent;
      }();

      ResetPasswordComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _core_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      ResetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _core_backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], ResetPasswordComponent);
      /***/
    },

    /***/
    "w7S6":
    /*!******************************************************!*\
      !*** ./src/app/@core/backend/common/api/auth.api.ts ***!
      \******************************************************/

    /*! exports provided: AuthApi */

    /***/
    function w7S6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthApi", function () {
        return AuthApi;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./http.service */
      "sZbP");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AuthApi = /*#__PURE__*/function () {
        function AuthApi(api, http) {
          _classCallCheck(this, AuthApi);

          this.api = api;
          this.http = http;
          this.apiController = 'users';
          this.url = 'users/';
        }

        _createClass(AuthApi, [{
          key: "session",
          value: function session() {
            var url = this.url + 'session';
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
              return result;
            }));
          }
        }]);

        return AuthApi;
      }();

      AuthApi.ctorParameters = function () {
        return [{
          type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthApi = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthApi);
      /***/
    },

    /***/
    "wTWu":
    /*!**************************************************!*\
      !*** ./src/app/views/login/login.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function wTWu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "body {\n  font-family: \"Lato\", sans-serif;\n  transition: 3s;\n}\n\na {\n  color: #2196F3 !important;\n}\n\n.login-container {\n  margin-top: 5%;\n  margin-bottom: 5%;\n  border: 1px solid #CCD1D1;\n  max-width: 60%;\n}\n\n.ads {\n  background-image: linear-gradient(#541388, #8F3985);\n  color: #fff;\n  padding: 15px;\n  text-align: center;\n}\n\n.logo-img {\n  text-align: center;\n}\n\n.logo-img1 {\n  text-align: center;\n}\n\n.login-form {\n  padding: 35px;\n}\n\n.login-form h3 {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.login-form h5.plz-enter-tool {\n  padding-top: 0px;\n  font-size: 17px;\n}\n\n.login-form h5 {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.sign-up-form label {\n  font-size: 14px;\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.forget-password a {\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 0;\n}\n\n.form-check-label {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.form-check-label input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border: 1px solid #541388;\n  border-radius: 4px;\n}\n\n.form-check-label:hover input ~ .checkmark {\n  border: 1px solid #541388;\n}\n\n.form-check-label input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.form-check-label input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.form-check-label .checkmark:after {\n  left: 6px;\n  top: 3px;\n  width: 5px;\n  height: 10px;\n  border: 1px solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.create-btn {\n  background-color: #FC440F;\n  font-size: 18px;\n  border-color: #FC440F;\n  color: #fff;\n}\n\n.create-btn:hover,\n.create-btn:focus {\n  background-color: #ef4413;\n  font-size: 18px;\n  border-color: #ef4413;\n  color: #fff;\n}\n\n.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {\n  background-color: #ef4413;\n  font-size: 18px;\n  border-color: #ef4413;\n  color: #fff;\n}\n\n.btn.focus,\n.btn:focus {\n  box-shadow: none !important;\n}\n\n.log-sig {\n  color: #4C6072;\n  font-weight: bold;\n}\n\n.log-sig a {\n  font-weight: bold;\n}\n\na.back-btn {\n  color: #fff !important;\n  background-color: #FFB400 !important;\n  border-color: #FFB400 !important;\n  margin-bottom: 20px;\n  font-size: 18px;\n}\n\n@media only screen and (max-width: 991px) and (min-width: 320px) {\n  .login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    border: 1px solid #CCD1D1;\n    max-width: 98%;\n  }\n}\n\n@media only screen and (max-width: 600px) and (min-width: 320px) {\n  .login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    border: 1px solid #CCD1D1;\n    max-width: 96%;\n  }\n\n  .ads {\n    display: none;\n  }\n\n  a.back-btn {\n    font-size: 16px;\n  }\n\n  .login-form {\n    padding: 15px;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  a.back-btn {\n    font-size: 10px;\n  }\n\n  .login-form {\n    padding: 10px;\n  }\n\n  .login-form h3 {\n    font-size: 1.5rem;\n  }\n\n  .create-btn {\n    font-size: 15px;\n  }\n\n  .login-form h5.plz-enter-tool {\n    padding-top: 0px;\n    font-size: 15px;\n  }\n\n  .logo-img1 img {\n    width: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsbURBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7QUFNRjs7QUFKQTtFQUNJLGFBQUE7QUFPSjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVFGOztBQU5BO0VBQ0csZ0JBQUE7RUFDQSxlQUFBO0FBU0g7O0FBUEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFXRjs7QUFUQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBYUY7O0FBWEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUVBLHFCQUFBO0VBQ0EsaUJBQUE7QUFjRjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQWVGOztBQWJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWdCRjs7QUFkQTtFQUNFLHlCQUFBO0FBaUJGOztBQWZBO0VBQ0UseUJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQW1CRjs7QUFqQkE7RUFDRSxjQUFBO0FBb0JGOztBQWxCQTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBR0Esd0JBQUE7QUFxQkY7O0FBbkJBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBc0JGOztBQXBCQTs7RUFFRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNDLFdBQUE7QUF1Qkg7O0FBckJBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQyxXQUFBO0FBd0JIOztBQXRCQTs7RUFFRSwyQkFBQTtBQXlCRjs7QUF2QkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsaUJBQUE7QUEyQkY7O0FBekJBO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBNEJGOztBQTFCQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0VBNkJGO0FBQ0Y7O0FBM0JBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7RUE2QkY7O0VBM0JBO0lBQ0UsYUFBQTtFQThCRjs7RUE1QkE7SUFDSSxlQUFBO0VBK0JKOztFQTdCQTtJQUNFLGFBQUE7RUFnQ0Y7QUFDRjs7QUE5QkE7RUFDRTtJQUNJLGVBQUE7RUFnQ0o7O0VBOUJBO0lBQ0UsYUFBQTtFQWlDRjs7RUEvQkE7SUFDRSxpQkFBQTtFQWtDRjs7RUFoQ0E7SUFDRSxlQUFBO0VBbUNGOztFQWpDQTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFQW9DRjs7RUFsQ0E7SUFDRSxXQUFBO0VBcUNGO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogM3M7XG59XG5he1xuICBjb2xvcjogIzIxOTZGMyAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDRDFEMTtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG4uYWRzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1NDEzODgsICM4RjM5ODUpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ28taW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ28taW1nMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1mb3JtIHtcbiAgICBwYWRkaW5nOiAzNXB4O1xufVxuLmxvZ2luLWZvcm0gaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICM0QzYwNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvZ2luLWZvcm0gaDUucGx6LWVudGVyLXRvb2x7XG4gICBwYWRkaW5nLXRvcDogMHB4O1xuICAgZm9udC1zaXplOiAxN3B4O1xufVxuLmxvZ2luLWZvcm0gaDUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICM0QzYwNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNpZ24tdXAtZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0QzYwNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvcmdldC1wYXNzd29yZCBhIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybS1jaGVjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NDEzODg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5mb3JtLWNoZWNrLWxhYmVsOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NDEzODg7XG59XG4uZm9ybS1jaGVjay1sYWJlbCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZvcm0tY2hlY2stbGFiZWwgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIC5jaGVja21hcms6YWZ0ZXIge1xuICBsZWZ0OiA2cHg7XG4gIHRvcDogM3B4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmNyZWF0ZS1idG57XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQzQ0MEYgO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1jb2xvcjogI0ZDNDQwRjtcbiAgY29sb3I6ICNmZmY7XG59XG4uY3JlYXRlLWJ0bjpob3Zlcixcbi5jcmVhdGUtYnRuOmZvY3Vze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDEzO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1jb2xvcjogI2VmNDQxMztcbiAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQxMztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItY29sb3I6ICNlZjQ0MTM7XG4gICBjb2xvcjogI2ZmZjtcbn1cbi5idG4uZm9jdXMsXG4uYnRuOmZvY3Vze1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubG9nLXNpZ3tcbiAgY29sb3I6ICM0QzYwNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvZy1zaWcgYXtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5hLmJhY2stYnRue1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCNDAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI0ZGQjQwMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDRDFEMTtcbiAgICBtYXgtd2lkdGg6IDk4JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5sb2dpbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0QxRDE7XG4gICAgbWF4LXdpZHRoOiA5NiU7XG4gIH1cbiAgLmFkcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBhLmJhY2stYnRuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAubG9naW4tZm9ybSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgYS5iYWNrLWJ0biB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmxvZ2luLWZvcm0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmxvZ2luLWZvcm0gaDMge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5jcmVhdGUtYnRuIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmxvZ2luLWZvcm0gaDUucGx6LWVudGVyLXRvb2wge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5sb2dvLWltZzEgaW1ne1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        useJit: true,
        preserveWhitespaces: true
      })["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map