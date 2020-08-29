(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_TermsOfService_TermsOfServiceForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/TermsOfService/TermsOfServiceForm */ \"./resources/js/components/ui/TermsOfService/TermsOfServiceForm.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"TermsOfServiceEdit\",\n  components: {\n    TermsOfServiceForm: _ui_TermsOfService_TermsOfServiceForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      data: null\n    };\n  },\n  methods: {\n    loadData: function loadData(id) {\n      var _this = this;\n\n      this.data = null;\n      axios.get(\"/api/terms-of-service/\".concat(id)).then(function (response) {\n        return response.data;\n      }).then(function (responseData) {\n        var data = responseData.data;\n\n        if (data && data.id) {\n          _this.data = data;\n        } else {\n          alert(\"Error loading Terms of Service\");\n        }\n      })[\"catch\"](function (error) {\n        alert(\"Error loading Terms of Service\");\n      });\n    },\n    onSubmit: function onSubmit(formData) {\n      var _this2 = this;\n\n      formData.append(\"_method\", \"patch\");\n      axios.post(\"/api/terms-of-service/\".concat(this.data.id), formData).then(function (response) {\n        return response.data;\n      }).then(function (responseData) {\n        var data = responseData.data;\n\n        if (data && data.id) {\n          _this2.$router.push({\n            name: \"tos.index\"\n          });\n        } else {\n          alert(\"Error saving Terms of Service\");\n        }\n      })[\"catch\"](function (error) {\n        var _error$response, _error$response$data;\n\n        var message = error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message;\n\n        if (message) {\n          alert(message);\n        } else {\n          alert(\"Error saving Terms of Service\");\n        }\n      });\n    }\n  },\n  mounted: function mounted() {\n    var id = this.$route.params.id;\n\n    if (id) {\n      this.loadData(id);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvVGVybXNPZlNlcnZpY2UvVGVybXNPZlNlcnZpY2VFZGl0LnZ1ZT9iYmFjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFBQTtBQUFBLEdBRkE7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FSQTtBQVVBO0FBQ0EsWUFEQSxvQkFDQSxFQURBLEVBQ0E7QUFBQTs7QUFDQTtBQUNBLFlBQ0EsR0FEQSxpQ0FDQSxFQURBLEdBRUEsSUFGQSxDQUVBO0FBQUE7QUFBQSxPQUZBLEVBR0EsSUFIQSxDQUdBO0FBQUEsWUFDQSxJQURBLEdBQ0EsWUFEQSxDQUNBLElBREE7O0FBRUE7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxPQVZBLFdBV0E7QUFDQTtBQUNBLE9BYkE7QUFjQSxLQWpCQTtBQW1CQSxZQW5CQSxvQkFtQkEsUUFuQkEsRUFtQkE7QUFBQTs7QUFDQTtBQUNBLFlBQ0EsSUFEQSxpQ0FDQSxZQURBLEdBQ0EsUUFEQSxFQUVBLElBRkEsQ0FFQTtBQUFBO0FBQUEsT0FGQSxFQUdBLElBSEEsQ0FHQTtBQUFBLFlBQ0EsSUFEQSxHQUNBLFlBREEsQ0FDQSxJQURBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLE9BVkEsV0FXQTtBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsT0FsQkE7QUFtQkE7QUF4Q0EsR0FWQTtBQXFEQSxTQXJEQSxxQkFxREE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFEQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9UZXJtc09mU2VydmljZS9UZXJtc09mU2VydmljZUVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5FZGl0IGV4aXN0aW5nIFRlcm1zIG9mIFNlcnZpY2U8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgOnRvPVwieyBuYW1lOiAndG9zLmluZGV4JyB9XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFRlcm1zIG9mIFNlcnZpY2UgTGlzdFxuICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFRlcm1zT2ZTZXJ2aWNlRm9ybSB2LWJpbmQ6ZGF0YT1cImRhdGFcIiBAc3VibWl0PVwib25TdWJtaXRcIiAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBUZXJtc09mU2VydmljZUZvcm0gZnJvbSBcIi4uLy4uL3VpL1Rlcm1zT2ZTZXJ2aWNlL1Rlcm1zT2ZTZXJ2aWNlRm9ybVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiVGVybXNPZlNlcnZpY2VFZGl0XCIsXG4gICAgY29tcG9uZW50czogeyBUZXJtc09mU2VydmljZUZvcm0gfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBudWxsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZERhdGEoaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQoYC9hcGkvdGVybXMtb2Ytc2VydmljZS8ke2lkfWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZURhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgbG9hZGluZyBUZXJtcyBvZiBTZXJ2aWNlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycm9yIGxvYWRpbmcgVGVybXMgb2YgU2VydmljZVwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBvblN1Ym1pdChmb3JtRGF0YSkge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiX21ldGhvZFwiLCBcInBhdGNoXCIpO1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAucG9zdChgL2FwaS90ZXJtcy1vZi1zZXJ2aWNlLyR7dGhpcy5kYXRhLmlkfWAsIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2VEYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZURhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogXCJ0b3MuaW5kZXhcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3Igc2F2aW5nIFRlcm1zIG9mIFNlcnZpY2VcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvcj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3Igc2F2aW5nIFRlcm1zIG9mIFNlcnZpY2VcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKGlkKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG48L3NjcmlwdD5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=template&id=49e331dd&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=template&id=49e331dd& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"container\" },\n    [\n      _c(\"div\", { staticClass: \"row mb-4\" }, [\n        _vm._m(0),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"col-6 text-right\" },\n          [\n            _c(\n              \"router-link\",\n              {\n                staticClass: \"btn btn-primary btn-sm\",\n                attrs: { to: { name: \"tos.index\" } }\n              },\n              [_vm._v(\"\\n                Terms of Service List\\n            \")]\n            )\n          ],\n          1\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"TermsOfServiceForm\", {\n        attrs: { data: _vm.data },\n        on: { submit: _vm.onSubmit }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-6\" }, [\n      _c(\"strong\", [_vm._v(\"Edit existing Terms of Service\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9UZXJtc09mU2VydmljZS9UZXJtc09mU2VydmljZUVkaXQudnVlP2ZmY2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywyQkFBMkI7QUFDaEM7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQ0FBa0M7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixNQUFNLG9CQUFvQjtBQUNsRCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakMsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvVGVybXNPZlNlcnZpY2UvVGVybXNPZlNlcnZpY2VFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OWUzMzFkZCYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG1iLTRcIiB9LCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC02IHRleHQtcmlnaHRcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJ0b3MuaW5kZXhcIiB9IH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBUZXJtcyBvZiBTZXJ2aWNlIExpc3RcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiVGVybXNPZlNlcnZpY2VGb3JtXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLmRhdGEgfSxcbiAgICAgICAgb246IHsgc3VibWl0OiBfdm0ub25TdWJtaXQgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJFZGl0IGV4aXN0aW5nIFRlcm1zIG9mIFNlcnZpY2VcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=template&id=49e331dd&\n");

/***/ }),

/***/ "./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TermsOfServiceEdit_vue_vue_type_template_id_49e331dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TermsOfServiceEdit.vue?vue&type=template&id=49e331dd& */ \"./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=template&id=49e331dd&\");\n/* harmony import */ var _TermsOfServiceEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TermsOfServiceEdit.vue?vue&type=script&lang=js& */ \"./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _TermsOfServiceEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _TermsOfServiceEdit_vue_vue_type_template_id_49e331dd___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _TermsOfServiceEdit_vue_vue_type_template_id_49e331dd___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9UZXJtc09mU2VydmljZS9UZXJtc09mU2VydmljZUVkaXQudnVlP2JlN2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUc7QUFDM0I7QUFDTDs7O0FBR2pFO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0YiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9UZXJtc09mU2VydmljZS9UZXJtc09mU2VydmljZUVkaXQudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UZXJtc09mU2VydmljZUVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5ZTMzMWRkJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Rlcm1zT2ZTZXJ2aWNlRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Rlcm1zT2ZTZXJ2aWNlRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXHdvcmtzcGFjZVxcXFxodGRvY3NcXFxcbGFyYXZlbDFcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDllMzMxZGQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDllMzMxZGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDllMzMxZGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Rlcm1zT2ZTZXJ2aWNlRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDllMzMxZGQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDllMzMxZGQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3ZpZXdzL1Rlcm1zT2ZTZXJ2aWNlL1Rlcm1zT2ZTZXJ2aWNlRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue\n");

/***/ }),

/***/ "./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TermsOfServiceEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TermsOfServiceEdit.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TermsOfServiceEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9UZXJtc09mU2VydmljZS9UZXJtc09mU2VydmljZUVkaXQudnVlP2IxYTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLHdDQUE4TSxDQUFnQiw4UEFBRyxFQUFDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvVGVybXNPZlNlcnZpY2UvVGVybXNPZlNlcnZpY2VFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rlcm1zT2ZTZXJ2aWNlRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVybXNPZlNlcnZpY2VFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=template&id=49e331dd&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=template&id=49e331dd& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TermsOfServiceEdit_vue_vue_type_template_id_49e331dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TermsOfServiceEdit.vue?vue&type=template&id=49e331dd& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=template&id=49e331dd&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TermsOfServiceEdit_vue_vue_type_template_id_49e331dd___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TermsOfServiceEdit_vue_vue_type_template_id_49e331dd___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9UZXJtc09mU2VydmljZS9UZXJtc09mU2VydmljZUVkaXQudnVlP2U3NGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvVGVybXNPZlNlcnZpY2UvVGVybXNPZlNlcnZpY2VFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OWUzMzFkZCYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVybXNPZlNlcnZpY2VFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OWUzMzFkZCZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/components/views/TermsOfService/TermsOfServiceEdit.vue?vue&type=template&id=49e331dd&\n");

/***/ })

}]);