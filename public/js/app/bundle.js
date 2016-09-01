var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("header.component", ['angular2/core', "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'my-header',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <header class=\"row\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-pills\">\n                    <li><a [routerLink]=\"['ShowMessages']\">Show Messages</a></li>\n                    <li><a [routerLink]=\"['Auth']\">Authentication</a></li>\n                </ul>\n            </nav>\n        </header>\n",
                        styles: ["\n        header{\n            margin-bottom: 20px;\n        }\n        ul{\n            text-align: center;\n        }\n        li{\n            float: none;\n            display: inline-block;\n        }\n        .router-link-active{\n            background-color: lightgrey;\n            color: black;\n        }\n"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
System.register("messages/message", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Message;
    return {
        setters:[],
        execute: function() {
            Message = (function () {
                function Message(content, messageId, username, userId) {
                    this.content = content;
                    this.messageId = messageId;
                    this.username = username;
                    this.userId = userId;
                }
                return Message;
            }());
            exports_2("Message", Message);
        }
    }
});
System.register("messages/message.service", ["messages/message"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var message_1;
    var MessageService;
    return {
        setters:[
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService() {
                    this.messages = [];
                }
                MessageService.prototype.addMessage = function (message) {
                    this.messages.push(message);
                    console.log(this.messages);
                };
                MessageService.prototype.getMessages = function () {
                    return this.messages;
                };
                MessageService.prototype.editMessage = function (message) {
                    this.messages[this.messages.indexOf(message)] = new message_1.Message('Edited', null, 'Dummy');
                };
                MessageService.prototype.deleteMessage = function (message) {
                    this.messages.splice(this.messages.indexOf(message), 1);
                };
                return MessageService;
            }());
            exports_3("MessageService", MessageService);
        }
    }
});
System.register("messages/message.component", ["angular2/core", "messages/message", "messages/message.service"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2, message_2, message_service_1;
    var MessageComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent(_messageService) {
                    this._messageService = _messageService;
                    this.editClicked = new core_2.EventEmitter();
                }
                MessageComponent.prototype.onEdit = function () {
                    this._messageService.editMessage(this.message);
                };
                MessageComponent.prototype.onDelete = function () {
                    this._messageService.deleteMessage(this.message);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', message_2.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_2.Component({
                        selector: 'my-message',
                        template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ message.content }}\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    {{ message.username }}\n                </div>\n                <div class=\"config\">\n                    <a (click)=\"onEdit()\">Edit</a>\n                    <a (click)=\"onDelete()\">Delete</a>\n                </div>\n            </footer>\n        </article>\n    ",
                        styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [message_service_1.MessageService])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_4("MessageComponent", MessageComponent);
        }
    }
});
System.register("messages/message-list.component", ['angular2/core', "messages/message.component", "messages/message.service"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, message_component_1, message_service_2;
    var MessageListComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_service_2_1) {
                message_service_2 = message_service_2_1;
            }],
        execute: function() {
            MessageListComponent = (function () {
                function MessageListComponent(_messageService) {
                    this._messageService = _messageService;
                    this.messages = [];
                }
                // messages = this._messageService.getMessages();
                MessageListComponent.prototype.ngOnInit = function () {
                    this.messages = this._messageService.getMessages();
                };
                MessageListComponent = __decorate([
                    core_3.Component({
                        selector: 'my-message-list',
                        directives: [message_component_1.MessageComponent],
                        providers: [],
                        template: "\n                <section class=\"col-md-8 col-md-offset-2\">\n                    <my-message\n                        *ngFor = \"#message of messages\"\n                        [message]=\"message\" \n                        >\n                    </my-message>\n                </section>\n        ",
                    }), 
                    __metadata('design:paramtypes', [message_service_2.MessageService])
                ], MessageListComponent);
                return MessageListComponent;
            }());
            exports_5("MessageListComponent", MessageListComponent);
        }
    }
});
System.register("messages/message-input.component", ["angular2/core", "messages/message", "messages/message.service"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4, message_3, message_service_3;
    var MessageInputComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (message_3_1) {
                message_3 = message_3_1;
            },
            function (message_service_3_1) {
                message_service_3 = message_service_3_1;
            }],
        execute: function() {
            MessageInputComponent = (function () {
                function MessageInputComponent(_messageService) {
                    this._messageService = _messageService;
                }
                MessageInputComponent.prototype.onSubmit = function (form) {
                    var message = new message_3.Message(form.content, null, 'Dummy');
                    this._messageService.addMessage(message);
                };
                MessageInputComponent = __decorate([
                    core_4.Component({
                        selector: "my-message-input",
                        directives: [],
                        providers: [],
                        template: "\n            <section class=\"col-md-8 col-md-offset-2\">\n                <form (ngSubmit)=\"onSubmit(f.value)\" #f = \"ngForm\">\n                    <div class=\"form-group\">\n                        <label for=\"content\">Content</label>\n                        <input type=\"text\" \n                            class=\"form-control\" \n                            id=\"content\"\n                            ngControl=\"content\"\n                            >\n                    </div>\n                    <button type=\"submit\" \n                        class=\"btn btn-primary\"\n                        >\n                        Send Message</button>\n                </form>\n            </section>               \n        \n        "
                    }), 
                    __metadata('design:paramtypes', [message_service_3.MessageService])
                ], MessageInputComponent);
                return MessageInputComponent;
            }());
            exports_6("MessageInputComponent", MessageInputComponent);
        }
    }
});
System.register("messages/body.component", ['angular2/core', "messages/message-list.component", "messages/message-input.component"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, message_list_component_1, message_input_component_1;
    var BodyComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            },
            function (message_input_component_1_1) {
                message_input_component_1 = message_input_component_1_1;
            }],
        execute: function() {
            BodyComponent = (function () {
                function BodyComponent() {
                }
                BodyComponent = __decorate([
                    core_5.Component({
                        selector: 'my-body',
                        directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent],
                        template: "\n        <div class=\"container\">\n            <div class=\"row\">\n                <my-message-input></my-message-input>\n            </div>\n            <br>\n            <div class=\"row\">\n                <my-message-list></my-message-list>\n            </div>\n        </div>\n",
                    }), 
                    __metadata('design:paramtypes', [])
                ], BodyComponent);
                return BodyComponent;
            }());
            exports_7("BodyComponent", BodyComponent);
        }
    }
});
System.register("auth/signup.component", ["angular2/src/core/metadata", "angular2/src/common/forms/form_builder", "angular2/src/common/forms/validators"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var metadata_1, form_builder_1, validators_1;
    var SignupComponent;
    return {
        setters:[
            function (metadata_1_1) {
                metadata_1 = metadata_1_1;
            },
            function (form_builder_1_1) {
                form_builder_1 = form_builder_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_fb) {
                    this._fb = _fb;
                }
                SignupComponent.prototype.onSubmit = function () {
                    console.log(this.myForm.value);
                };
                SignupComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        firstName: ['', validators_1.Validators.required],
                        lastName: ['', validators_1.Validators.required],
                        email: ['', validators_1.Validators.compose([
                                validators_1.Validators.required,
                                this.isEmail
                            ])],
                        password: ['', validators_1.Validators.required],
                    });
                };
                SignupComponent.prototype.isEmail = function (control) {
                    if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
                        return { invalidEmail: true };
                    }
                };
                SignupComponent = __decorate([
                    metadata_1.Component({
                        selector: 'my-signup',
                        template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"firstName\">First Name</label>\n                    <input \n                        [ngFormControl] =\"myForm.find('firstName')\"\n                        type=\"text\" id=\"firstName\" class=\"form-control\"\n                    >\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input \n                        [ngFormControl] =\"myForm.find('lastName')\"\n                        type=\"text\" id=\"lastName\" class=\"form-control\"\n                    >\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input \n                        [ngFormControl] =\"myForm.find('email')\"\n                        type=\"text\" id=\"email\" class=\"form-control\"\n                    >\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input \n                        [ngFormControl] =\"myForm.find('password')\"\n                        type=\"password\" id=\"password\" class=\"form-control\"\n                    >\n                </div>\n                <button \n                    [disabled]=\"!myForm.valid\"\n                    type=\"submit\" \n                    class=\"btn btn-primary\"\n                    >Sign Up\n                </button>\n            </form>\n        </section>\n",
                    }), 
                    __metadata('design:paramtypes', [form_builder_1.FormBuilder])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_8("SignupComponent", SignupComponent);
        }
    }
});
System.register("auth/signin.component", ["angular2/src/core/metadata", "angular2/src/common/forms/form_builder", "angular2/src/common/forms/validators"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var metadata_2, form_builder_2, validators_2;
    var SigninComponent;
    return {
        setters:[
            function (metadata_2_1) {
                metadata_2 = metadata_2_1;
            },
            function (form_builder_2_1) {
                form_builder_2 = form_builder_2_1;
            },
            function (validators_2_1) {
                validators_2 = validators_2_1;
            }],
        execute: function() {
            SigninComponent = (function () {
                function SigninComponent(_fb) {
                    this._fb = _fb;
                }
                SigninComponent.prototype.onSubmit = function () {
                    console.log(this.myForm.value);
                };
                SigninComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        email: ['', validators_2.Validators.compose([
                                validators_2.Validators.required,
                                this.isEmail
                            ])],
                        password: ['', validators_2.Validators.required],
                    });
                };
                SigninComponent.prototype.isEmail = function (control) {
                    if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
                        return { invalidEmail: true };
                    }
                };
                SigninComponent = __decorate([
                    metadata_2.Component({
                        selector: 'my-signin',
                        template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input \n                        [ngFormControl] =\"myForm.find('email')\"\n                        type=\"text\" id=\"email\" class=\"form-control\"\n                    >\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input \n                        [ngFormControl] =\"myForm.find('password')\"\n                        type=\"password\" id=\"password\" class=\"form-control\"\n                    >\n                </div>\n                <button \n                    [disabled]=\"!myForm.valid\"\n                    type=\"submit\" \n                    class=\"btn btn-primary\"\n                    >Sign In\n                </button>\n            </form>\n        </section>\n",
                    }), 
                    __metadata('design:paramtypes', [form_builder_2.FormBuilder])
                ], SigninComponent);
                return SigninComponent;
            }());
            exports_9("SigninComponent", SigninComponent);
        }
    }
});
System.register("auth/logout.component", ["angular2/src/core/metadata"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var metadata_3;
    var LogoutComponent;
    return {
        setters:[
            function (metadata_3_1) {
                metadata_3 = metadata_3_1;
            }],
        execute: function() {
            LogoutComponent = (function () {
                function LogoutComponent() {
                }
                LogoutComponent.prototype.onLogout = function () {
                };
                LogoutComponent = __decorate([
                    metadata_3.Component({
                        selector: 'my-logout',
                        template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <button\n                (click)=\"onLogout()\"\n                class=\"btn btn-danger\"\n                >\n                Logout\n            </button>\n        </section>\n\n",
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogoutComponent);
                return LogoutComponent;
            }());
            exports_10("LogoutComponent", LogoutComponent);
        }
    }
});
System.register("auth/authentication.component", ['angular2/core', "auth/signup.component", "angular2/router", "auth/signin.component", "auth/logout.component"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_6, signup_component_1, router_2, signin_component_1, logout_component_1, router_3;
    var AuthenticationComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
                router_3 = router_2_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            }],
        execute: function() {
            AuthenticationComponent = (function () {
                function AuthenticationComponent() {
                }
                AuthenticationComponent = __decorate([
                    core_6.Component({
                        selector: 'my-auth',
                        directives: [router_3.ROUTER_DIRECTIVES],
                        template: "\n        <header class=\"row spacing\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-tabs\">\n                    <li><a [routerLink]=\"['Signup']\">Signup</a></li>\n                    <li><a [routerLink]=\"['Signin']\">Signin</a></li>\n                    <li><a [routerLink]=\"['Logout']\">Logout</a></li>\n                </ul>\n            </nav>\n        </header>\n        <div class=\"row spacing\">\n            <router-outlet></router-outlet>\n        </div>\n",
                        styles: ["\n        .router-link-active{\n            color: #555;\n            cursor: default;\n            background-color: #fff;\n            border: 1px solid #ddd;\n            border-bottom-color: transparent;\n        }\n\n    "],
                    }),
                    router_2.RouteConfig([
                        { path: '/signup',
                            name: 'Signup',
                            component: signup_component_1.SignupComponent,
                            useAsDefault: true,
                        },
                        { path: '/signin',
                            name: 'Signin',
                            component: signin_component_1.SigninComponent,
                        },
                        { path: '/logout',
                            name: 'Logout',
                            component: logout_component_1.LogoutComponent,
                        },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AuthenticationComponent);
                return AuthenticationComponent;
            }());
            exports_11("AuthenticationComponent", AuthenticationComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "header.component", "messages/body.component", "angular2/router", "auth/authentication.component"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_7, header_component_1, body_component_1, router_4, authentication_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (body_component_1_1) {
                body_component_1 = body_component_1_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_7.Component({
                        selector: 'my-app',
                        template: " \n        <div class=\"container\">\n            <my-header></my-header>\n            <router-outlet></router-outlet>\n        </div>\n\n    ",
                        directives: [header_component_1.HeaderComponent, router_4.ROUTER_DIRECTIVES]
                    }),
                    router_4.RouteConfig([
                        { path: '/',
                            name: 'ShowMessages',
                            component: body_component_1.BodyComponent,
                            useAsDefault: true,
                        },
                        { path: '/auth/...',
                            name: 'Auth',
                            component: authentication_component_1.AuthenticationComponent,
                        },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_12("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "messages/message.service", "angular2/router", "angular2/src/core/di/provider", "angular2/src/router/location/location_strategy", "angular2/src/router/location/hash_location_strategy"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var browser_1, app_component_1, message_service_4, router_5, provider_1, location_strategy_1, hash_location_strategy_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (message_service_4_1) {
                message_service_4 = message_service_4_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
            },
            function (provider_1_1) {
                provider_1 = provider_1_1;
            },
            function (location_strategy_1_1) {
                location_strategy_1 = location_strategy_1_1;
            },
            function (hash_location_strategy_1_1) {
                hash_location_strategy_1 = hash_location_strategy_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                message_service_4.MessageService,
                router_5.ROUTER_PROVIDERS,
                provider_1.provide(location_strategy_1.LocationStrategy, { useClass: hash_location_strategy_1.HashLocationStrategy }),
            ]);
        }
    }
});
System.register("auth/user", [], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(email, password, firstName, lastName) {
                    this.email = email;
                    this.password = password;
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
                return User;
            }());
            exports_14("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLnRzIiwibWVzc2FnZXMvbWVzc2FnZS5zZXJ2aWNlLnRzIiwibWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LnRzIiwibWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9ib2R5LmNvbXBvbmVudC50cyIsImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyIsImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyIsImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyIsImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIiwiYXBwLmNvbXBvbmVudC50cyIsImJvb3QudHMiLCJhdXRoL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQ0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFsQ0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFFBQVEsRUFBRSx5V0FTYjt3QkFDRyxNQUFNLEVBQUUsQ0FBQywrVEFlWixDQUFDO3FCQUVELENBQUM7O21DQUFBO2dCQUlGLHNCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCw2Q0FFQyxDQUFBOzs7Ozs7Ozs7OztZQ3RDRDtnQkFNSSxpQkFBYSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxRQUFpQixFQUFFLE1BQWU7b0JBQ2hGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN6QixDQUFDO2dCQUNMLGNBQUM7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Q0FBQztnQkFDdEgsV0FBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsd0JBRUMsQ0FBQSIsImZpbGUiOiIuLi8uLi8uLi9iZXRhL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWhlYWRlcicsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydTaG93TWVzc2FnZXMnXVwiPlNob3cgTWVzc2FnZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQXV0aCddXCI+QXV0aGVudGljYXRpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdWx7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgbGl7XG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAucm91dGVyLWxpbmstYWN0aXZle1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG5gXSxcblxufSlcblxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudHtcblxufSIsImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBtZXNzYWdlSWQ6IHN0cmluZztcbiAgICB1c2VySWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yIChjb250ZW50OiBzdHJpbmcsIG1lc3NhZ2VJZD86IHN0cmluZywgdXNlcm5hbWU/OiBzdHJpbmcsIHVzZXJJZD86IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLm1lc3NhZ2VJZCA9IG1lc3NhZ2VJZDtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICB9XG59IiwiaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2V7XG4gICAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gICAgYWRkTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBnZXRNZXNzYWdlcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgICB9XG5cbiAgICBlZGl0TWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSldID0gbmV3IE1lc3NhZ2UoJ0VkaXRlZCcsIG51bGwsICdEdW1teScpO1xuICAgIH1cblxuICAgIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSl7XG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKHRoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKSwxKTtcbiAgICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2UuY29udGVudCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBtZXNzYWdlLnVzZXJuYW1lIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25FZGl0KClcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDE5JTtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XG4gICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKXt9XG5cbiAgICBvbkVkaXQoKXtcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZWRpdE1lc3NhZ2UodGhpcy5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICBvbkRlbGV0ZSgpe1xuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5kZWxldGVNZXNzYWdlKHRoaXMubWVzc2FnZSk7XG4gICAgfVxuXG5cbn0iLCJcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWxpc3QnLFxuICAgIGRpcmVjdGl2ZXM6IFtNZXNzYWdlQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG15LW1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0ZvciA9IFwiI21lc3NhZ2Ugb2YgbWVzc2FnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVwibWVzc2FnZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L215LW1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBgLFxuXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7fVxuICAgIC8vIG1lc3NhZ2VzID0gdGhpcy5fbWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMoKTtcblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLl9tZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlcygpO1xuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LW1lc3NhZ2UtaW5wdXRcIixcbiAgICBkaXJlY3RpdmVzOltdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZi52YWx1ZSlcIiAjZiA9IFwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nQ29udHJvbD1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VuZCBNZXNzYWdlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9zZWN0aW9uPiAgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgYFxufSlcblxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUlucHV0Q29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSl7fVxuXG4gICAgb25TdWJtaXQoZm9ybTogYW55KXtcbiAgICAgICAgY29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKGZvcm0uY29udGVudCwgbnVsbCwgJ0R1bW15Jyk7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZUxpc3RDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2UtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZUlucHV0Q29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlLWlucHV0LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonbXktYm9keScsXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VMaXN0Q29tcG9uZW50LCBNZXNzYWdlSW5wdXRDb21wb25lbnRdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8bXktbWVzc2FnZS1pbnB1dD48L215LW1lc3NhZ2UtaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8bXktbWVzc2FnZS1saXN0PjwvbXktbWVzc2FnZS1saXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuYCxcblxufSlcblxuZXhwb3J0IGNsYXNzIEJvZHlDb21wb25lbnR7XG5cbn0iLCJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGFcIjtcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvbW1vbi9mb3Jtcy9tb2RlbFwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvZm9ybV9idWlsZGVyXCI7XG5pbXBvcnQge1ZhbGlkYXRvcnN9IGZyb20gXCJhbmd1bGFyMi9zcmMvY29tbW9uL2Zvcm1zL3ZhbGlkYXRvcnNcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktc2lnbnVwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF0gPVwibXlGb3JtLmZpbmQoJ2ZpcnN0TmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF0gPVwibXlGb3JtLmZpbmQoJ2xhc3ROYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBpZD1cImxhc3ROYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF0gPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF0gPVwibXlGb3JtLmZpbmQoJ3Bhc3N3b3JkJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgID5TaWduIFVwXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbmAsXG59KVxuXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIG15Rm9ybTogQ29udHJvbEdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyKXt9XG5cbiAgICBvblN1Ym1pdCgpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybS52YWx1ZSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW1haWxcbiAgICAgICAgICAgIF0pXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNFbWFpbChjb250cm9sOiBDb250cm9sKToge1tzOiBzdHJpbmddOiBib29sZWFufXtcbiAgICAgICAgaWYoIWNvbnRyb2wudmFsdWUubWF0Y2goXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIikpe1xuICAgICAgICAgICAgcmV0dXJuIHtpbnZhbGlkRW1haWw6IHRydWV9O1xuICAgICAgICB9XG5cbiAgICB9XG5cbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb3JlL21ldGFkYXRhXCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9pbnRlcmZhY2VzXCI7XG5pbXBvcnQge0NvbnRyb2xHcm91cCwgQ29udHJvbH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvbW9kZWxcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvY29tbW9uL2Zvcm1zL2Zvcm1fYnVpbGRlclwiO1xuaW1wb3J0IHtWYWxpZGF0b3JzfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvbW1vbi9mb3Jtcy92YWxpZGF0b3JzXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXNpZ25pbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdID1cIm15Rm9ybS5maW5kKCdlbWFpbCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdID1cIm15Rm9ybS5maW5kKCdwYXNzd29yZCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICA+U2lnbiBJblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG5gLFxufSlcblxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBteUZvcm06IENvbnRyb2xHcm91cDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlcil7fVxuXG4gICAgb25TdWJtaXQoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5teUZvcm0udmFsdWUpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHRoaXMuaXNFbWFpbFxuICAgICAgICAgICAgXSldLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0VtYWlsKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59e1xuICAgICAgICBpZighY29udHJvbC52YWx1ZS5tYXRjaChcIlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1wiKSl7XG4gICAgICAgICAgICByZXR1cm4ge2ludmFsaWRFbWFpbDogdHJ1ZX07XG4gICAgICAgIH1cblxuICAgIH1cblxufSIsIlxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9zcmMvY29yZS9tZXRhZGF0YVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1sb2dvdXQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uTG9nb3V0KClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbmAsXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnR7XG4gICAgb25Mb2dvdXQoKXtcblxuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSBcIi4vc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZ30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gXCIuL3NpZ25pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tIFwiLi9sb2dvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWF1dGgnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1NpZ251cCddXCI+U2lnbnVwPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1NpZ25pbiddXCI+U2lnbmluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0xvZ291dCddXCI+TG9nb3V0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuYCxcbiAgICBzdHlsZXM6W2BcbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZXtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgYF0sXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgICBwYXRoOiAnL3NpZ251cCcsXG4gICAgICAgIG5hbWU6ICdTaWdudXAnLFxuICAgICAgICBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCxcbiAgICAgICAgdXNlQXNEZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgeyAgIHBhdGg6ICcvc2lnbmluJyxcbiAgICAgICAgbmFtZTogJ1NpZ25pbicsXG4gICAgICAgIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50LFxuICAgIH0sXG4gICAgeyAgIHBhdGg6ICcvbG9nb3V0JyxcbiAgICAgICAgbmFtZTogJ0xvZ291dCcsXG4gICAgICAgIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50LFxuICAgIH0sXG5cbl0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudHtcblxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0JvZHlDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2VzL2JvZHkuY29tcG9uZW50XCI7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0hlYWRlckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAgeyAgIHBhdGg6ICcvJyxcbiAgICAgICAgbmFtZTogJ1Nob3dNZXNzYWdlcycsXG4gICAgICAgIGNvbXBvbmVudDogQm9keUNvbXBvbmVudCxcbiAgICAgICAgdXNlQXNEZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgeyAgIHBhdGg6ICcvYXV0aC8uLi4nLFxuICAgICAgICBuYW1lOiAnQXV0aCcsXG4gICAgICAgIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnQsXG4gICAgfSxcbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtwcm92aWRlfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvZGkvcHJvdmlkZXJcIjtcbmltcG9ydCB7TG9jYXRpb25TdHJhdGVneX0gZnJvbSBcImFuZ3VsYXIyL3NyYy9yb3V0ZXIvbG9jYXRpb24vbG9jYXRpb25fc3RyYXRlZ3lcIjtcbmltcG9ydCB7SGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gXCJhbmd1bGFyMi9zcmMvcm91dGVyL2xvY2F0aW9uL2hhc2hfbG9jYXRpb25fc3RyYXRlZ3lcIjtcblxuYm9vdHN0cmFwKFxuICAgIEFwcENvbXBvbmVudCxcbiAgICBbXG4gICAgICAgIE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBST1VURVJfUFJPVklERVJTLFxuICAgICAgICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9KSxcblxuICAgIF0sXG5cbik7IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZywgcHVibGljIGZpcnN0TmFtZT86IHN0cmluZywgcHVibGljIGxhc3ROYW1lPzogc3RyaW5nKSB7fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
